import{u as w}from"./useModal-BsEyE0vB.js";import"./ApiSelect.vue_vue_type_script_setup_true_lang-IWTYr-Fy.js";import{o as h}from"./antdv-CAXihDg_.js";import"./index-DWJF4vuV.js";import{_ as y}from"./schema-form.vue_vue_type_script_setup_true_lang-C0d9vjpU.js";import{f as F,k as M,_,y as b,u as k}from"./vue-Dbi1xauY.js";function A(){const[i]=w();return[async({modalProps:t,formProps:f})=>{const c=F(),r=n=>{var e;(e=t==null?void 0:t.onCancel)==null||e.call(t,n)},s=async()=>{var n,e;try{const u=await((n=c.value)==null?void 0:n.submit());await a(u)}catch(u){return(e=t==null?void 0:t.onFail)==null||e.call(t,{}),Promise.reject(u)}},a=async n=>{var e;await((e=t==null?void 0:t.onFinish)==null?void 0:e.call(t,n)),i.hide()};return await i.show({destroyOnClose:!0,...h(t,["onFinish","onFail"]),onCancel:r,onOk:s,content:()=>{const n=Object.assign({},{showActionButtonGroup:!1},f);return M(y,_({ref:c},n),null)}}),await b(),[k(c)]},i]}export{A as u};
