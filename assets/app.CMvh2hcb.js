function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as o,ey as p,ez as u,eA as l,eB as c,eC as f,eD as d,eE as m,eF as h,eG as A,eH as g,Y as P,d as _,u as v,l as y,z as C,eI as E,eJ as w,eK as R,eL as b}from"./chunks/framework.C8gDNRqg.js";import{t as D}from"./chunks/theme.C0-eTYmu.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(D),S=_({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=v();return y(()=>{C(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&E(),w(),R(),s.setup&&s.setup(),()=>b(s.Layout)}});async function T(){globalThis.__VITEPRESS__=!0;const e=j(),t=L();t.provide(u,e);const a=l(e.route);return t.provide(c,a),t.component("Content",f),t.component("ClientOnly",d),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:m}),{app:t,router:e,data:a}}function L(){return h(S)}function j(){let e=o,t;return A(a=>{let n=g(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),__vite__mapDeps([]))),o&&(e=!1),r},s.NotFound)}o&&T().then(({app:e,router:t,data:a})=>{t.go().then(()=>{p(t.route,a.site),e.mount("#app")})});export{T as createApp};
