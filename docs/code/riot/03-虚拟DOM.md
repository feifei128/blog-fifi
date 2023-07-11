# 虚拟 DOM

## 组件更新原理

在 Riot.js 中，想要更新组件我们必须手动调用 tag.update() 方法才可以或者通过绑定 dom 事件触发，_通过模板绑定的事件，会在回调执行完毕后自动触发 tag.update()_。

在 Riot 框架中，虚拟 DOM 的更新是延迟式的，即每次更新时只会更新已经发生变化的节点。在一个事件循环周期内，如果有多个变化，Riot 会将这些变化缓存起来，直到事件循环结束时再进行更新。

具体来说，当组件的状态发生变化时，Riot 会标记该组件的虚拟 DOM 树为“脏”，表示需要进行更新。如果在同一个事件循环周期内，该组件的状态再次发生变化，Riot 会将这些变化缓存起来，并等待事件循环结束时再进行更新。这样做可以避免不必要的计算和更新，从而提高视图更新的效率。

```js
/**
 * @param {Node[]} a The list of current/live children
 * @param {Node[]} b The list of future children
 * @param {(entry: Node, action: number) => Node} get
 * The callback invoked per each entry related DOM operation.
 * @param {Node} [before] The optional node used as anchor to insert before.
 * @returns {Node[]} The same list of future children.
 */
const udomdiff = (a, b, get, before) => {
  const bLength = b.length
  let aEnd = a.length
  let bEnd = bLength
  let aStart = 0
  let bStart = 0
  let map = null
  while (aStart < aEnd || bStart < bEnd) {
    // append head, tail, or nodes in between: fast path
    if (aEnd === aStart) {
      // we could be in a situation where the rest of nodes that
      // need to be added are not at the end, and in such case
      // the node to `insertBefore`, if the index is more than 0
      // must be retrieved, otherwise it's gonna be the first item.
      const node =
        bEnd < bLength
          ? bStart
            ? get(b[bStart - 1], -0).nextSibling
            : get(b[bEnd - bStart], 0)
          : before
      while (bStart < bEnd) insertBefore(get(b[bStart++], 1), node)
    }
    // remove head or tail: fast path
    else if (bEnd === bStart) {
      while (aStart < aEnd) {
        // remove the node only if it's unknown or not live
        if (!map || !map.has(a[aStart])) removeChild(get(a[aStart], -1))
        aStart++
      }
    }
    // same node: fast path
    else if (a[aStart] === b[bStart]) {
      aStart++
      bStart++
    }
    // same tail: fast path
    else if (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--
      bEnd--
    }
    // The once here single last swap "fast path" has been removed in v1.1.0
    // https://github.com/WebReflection/udomdiff/blob/single-final-swap/esm/index.js#L69-L85
    // reverse swap: also fast path
    else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      // this is a "shrink" operation that could happen in these cases:
      // [1, 2, 3, 4, 5]
      // [1, 4, 3, 2, 5]
      // or asymmetric too
      // [1, 2, 3, 4, 5]
      // [1, 2, 3, 5, 6, 4]
      const node = get(a[--aEnd], -1).nextSibling
      insertBefore(get(b[bStart++], 1), get(a[aStart++], -1).nextSibling)
      insertBefore(get(b[--bEnd], 1), node)
      // mark the future index as identical (yeah, it's dirty, but cheap 👍)
      // The main reason to do this, is that when a[aEnd] will be reached,
      // the loop will likely be on the fast path, as identical to b[bEnd].
      // In the best case scenario, the next loop will skip the tail,
      // but in the worst one, this node will be considered as already
      // processed, bailing out pretty quickly from the map index check
      a[aEnd] = b[bEnd]
    }
    // map based fallback, "slow" path
    else {
      // the map requires an O(bEnd - bStart) operation once
      // to store all future nodes indexes for later purposes.
      // In the worst case scenario, this is a full O(N) cost,
      // and such scenario happens at least when all nodes are different,
      // but also if both first and last items of the lists are different
      if (!map) {
        map = new Map()
        let i = bStart
        while (i < bEnd) map.set(b[i], i++)
      }
      // if it's a future node, hence it needs some handling
      if (map.has(a[aStart])) {
        // grab the index of such node, 'cause it might have been processed
        const index = map.get(a[aStart])
        // if it's not already processed, look on demand for the next LCS
        if (bStart < index && index < bEnd) {
          let i = aStart
          // counts the amount of nodes that are the same in the future
          let sequence = 1
          while (++i < aEnd && i < bEnd && map.get(a[i]) === index + sequence)
            sequence++
          // effort decision here: if the sequence is longer than replaces
          // needed to reach such sequence, which would brings again this loop
          // to the fast path, prepend the difference before a sequence,
          // and move only the future list index forward, so that aStart
          // and bStart will be aligned again, hence on the fast path.
          // An example considering aStart and bStart are both 0:
          // a: [1, 2, 3, 4]
          // b: [7, 1, 2, 3, 6]
          // this would place 7 before 1 and, from that time on, 1, 2, and 3
          // will be processed at zero cost
          if (sequence > index - bStart) {
            const node = get(a[aStart], 0)
            while (bStart < index) insertBefore(get(b[bStart++], 1), node)
          }
          // if the effort wasn't good enough, fallback to a replace,
          // moving both source and target indexes forward, hoping that some
          // similar node will be found later on, to go back to the fast path
          else {
            replaceChild(get(b[bStart++], 1), get(a[aStart++], -1))
          }
        }
        // otherwise move the source forward, 'cause there's nothing to do
        else aStart++
      }
      // this node has no meaning in the future list, so it's more than safe
      // to remove it, and check the next live node out instead, meaning
      // that only the live list index should be forwarded
      else removeChild(get(a[aStart++], -1))
    }
  }
  return b
}
```

该函数接受四个参数：

- a：一个当前子节点列表的数组。
- b：一个期望的子节点列表的数组。
- get：用于获取有关 DOM 操作的回调函数。它采用两个参数：当前 DOM 节点和操作类型，其中操作类型为 -1, 0 或 1，分别表示删除、保留或插入。
- before：可选参数，表示要插入节点的锚点。

算法思想如下：

1. 如果 a 列表为空，则将 b 列表中的所有节点插入到 DOM 中。
2. 如果 b 列表为空，则将 a 列表中的所有节点从 DOM 中删除。
3. 如果 a 和 b 列表中的第一个节点相同，则将它们同时从列表中删除。
4. 如果 a 和 b 列表中的最后一个节点相同，则将它们同时从列表中删除。
5. 如果 a 和 b 列表的第一个节点和最后一个节点互换，则执行一个特殊操作，将它们插入到 DOM 中。
6. 如果上述情况均不符合，则使用哈希表来比较节点列表中的节点，并执行相应的操作。如果在哈希表中找到了当前节点，则将它从列表中删除；否则，删除该节点并将 a 列表的指针向前移动。

## 优化

在 Riot 中，虚拟 DOM 树是不可变的数据结构，即每次更新都会创建一个新的虚拟 DOM 树。因此，在更新虚拟 DOM 树时，Riot 可以通过一些优化技巧来最小化更新的数量，例如：

- 使用 key 属性来标识列表中的子节点，可以在更新列表时尽可能地复用已有的元素，减少 DOM 操作的数量。
- 对于一些静态的节点，可以使用 shouldUpdate 钩子函数来告诉 Riot 不需要更新这些节点，从而避免不必要的 DOM 操作。

  通过这些优化技巧，Riot 可以最小化虚拟 DOM 树的更新数量，从而提高视图更新的效率。
