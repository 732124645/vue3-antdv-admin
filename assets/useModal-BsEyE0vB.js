import{d as w,f as v,c as M,u as r,w as x,k as C,a as P,g as b,_ as O,y as g,x as _}from"./vue-Dbi1xauY.js";import{_ as j}from"./index.vue_vue_type_style_index_0_lang-Dww9ZzaR.js";import{o as k,ax as V}from"./antdv-CAXihDg_.js";function F(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!P(n)}const h=w({props:{content:{type:[String,Function]},closeModal:Function,open:Boolean},setup(n,{attrs:c,expose:y}){const l=v(!1),u=v({...c,...n}),s=M(()=>({...c,...n,...r(u)})),d=M(()=>{const e=r(s);return{...k(e,["onCancel","onOk","closeModal","content"]),open:e.open,confirmLoading:l.value,onCancel:a,onOk:f}}),p=e=>{u.value.open=e},i=e=>{u.value={...r(s),...e}};x(()=>u.value.open,e=>{var o;Object.is(e,!1)&&((o=n.closeModal)==null||o.call(n))});const f=async e=>{var o,t;l.value=!0;try{await((t=(o=r(s))==null?void 0:o.onOk)==null?void 0:t.call(o,e)),p(!1)}catch(m){return Promise.reject(m)}finally{l.value=!1}},a=async e=>{var o,t;await((t=(o=r(s))==null?void 0:o.onCancel)==null?void 0:t.call(o,e)),p(!1)};return y({setProps:i}),()=>{const e=r(s),{content:o}=e,t=V(o)?o():o;return C(j,r(d),F(t)?t:{default:()=>[t]})}}}),L=()=>{var f;let n;const c=v(),y=(f=b())==null?void 0:f.appContext,l=v(!1),u=async()=>{if(await g(),l.value&&c.value)return c.value;if(n)return n;const a=document.createElement("div"),e=C(h);return e.appContext=y,_(e,a),n=e.component,n.props.closeModal=d,n},s=async a=>{var o,t,m;const e=await u();Object.is(e,c.value)?(o=e==null?void 0:e.setProps)==null||o.call(e,a):(m=(t=e==null?void 0:e.exposed)==null?void 0:t.setProps)==null||m.call(t,a)},d=()=>{s({open:!1})},p=async a=>{s({...a,closeModal:d,open:!0}),await g()},i=(a,{attrs:e,slots:o})=>(l.value=!0,C(h,O({ref:c},{...e,...a}),o));return i.show=p,i.hide=d,i.setProps=s,[i,c]};export{L as u};
