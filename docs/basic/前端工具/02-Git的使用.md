---
title: 02-Git的使用
---

<ArticleTopAd></ArticleTopAd>

# Git

## 1. 常见操作

### 全局配置用户信息

```bash
git config --global user.name "smyhvae"

git config --global user.email "smyhvae@163.com"
```

## 2. 分支的合并

### 2.1 场景：基于 master 分支的代码，开发一个新的特性

如果直接在 master 分支上开发新特性，是不够安全的，万一在开发`特性1`的时候，领导突然又要叫你去开发`特性2`，就不好处理了。难道开发的两个特性都提交到 master？一会儿提交特性 1 的 commit，一会儿提交特性 2 的 commit？这会导致 commit 记录很混乱。

所以建议的做法是：给每个特性都单独建一个新的分支。

比如说，我专门给`特性1`建一个分支`feature_item_recommend`。具体做法如下：

（1）基于 master 分支，创建一个新的分支，起名为`feature_item_recommend`：

```bash
$ git checkout -b feature_item_recommend

Switched to a new branch 'feature_item_recommend'
```

上面这行命令，相当于：

```bash
$ git branch feature_item_recommend    // 创建新的分支

$ git checkout feature_item_recommend  //切换到新的分支
```

（2）在新的分支`feature_item_recommend`上，完成开发工作，并 commit 、push。

（3）将分支`feature_item_recommend`上的开发进度**合并**到 master 分支：

```bash
$ git checkout master  //切换到master分支

$ git merge feature_item_recommend    //将分支 feature_item_recommend 的开发进度合并到 master 分支

```

合并之后，`master`分支和`feature_item_recommend`分支会指向同一个位置。

（3）删除分支`feature_item_recommend`：

> 既然 特性 1 开发完了，也放心地提交到 master 了，那我们就可以将这个分支删除了。

```bash
git branch -d feature_item_recommend
```

注意，我们当前是处于`master`分支的位置，来删除`feature_item_recommend`分支。如果当前是处于`feature_item_recommend`分支，是没办法删除它自己的。

同理，当我转身去开发`特性2`的时候，也是采用同样的步骤。

### 2.2 解决合并时发生的冲突

如果 feature1 和 feature2 修改的是同一个文件中**代码的同一个位置**，那么，把 feature1 合并到 feature2 时，就会产生冲突。这个冲突需要人工解决。叫上相关开发人员，共同协调需要保留哪部分新代码。

## 3. 日常操作积累

### 3.1 修改密码（曲线救国）

```bash
# 设置当前仓库的用户名为空
git config  user.name ""
```

然后，当我们再输入`git pull`等命令行时，就会被要求重新输入*新的*账号密码。此时，密码就可以修改成功了。最后，我们还要输入如下命令，还原当前仓库的用户名：

```bash
git config user.name "smyhvae"
```

### 3.2 将 `branch1`的某个`commit1`合并到`branch2`当中

切换到 branch2 中，然后执行如下命令：

```bash
git cherry-pick commit1
```

### 3.3 提交代码时，绕过 eslint 检查

```bash
git commit -m 'xxx' --no-verify
```

这样的操作属于合法但不建议。

## 4. 工具

### `Oh My Zsh`

封装了 git 常用的快捷键，见[官方文档](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git)
