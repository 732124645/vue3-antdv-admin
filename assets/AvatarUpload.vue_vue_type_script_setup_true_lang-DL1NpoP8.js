import{f as m}from"./dateUtil-NBcmMhwL.js";import{T as P,A as k}from"./index-DWJF4vuV.js";import{A as M,U as i,a0 as N,e as v,M as V,ap as B,aI as O}from"./antdv-CAXihDg_.js";import{k as s,a as T,d as j,as as q,f as r,c as D,w as E,W as h,a5 as f,Y as w,u as _,ad as F,a6 as I,F as G}from"./vue-Dbi1xauY.js";function J(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!T(t)}const g=t=>/^https?:\/\//.test(t)?t:P+t,Q=[{title:"头像",width:80,dataIndex:"avatar",hideInSearch:!0,customRender:({record:t})=>s(M,{src:g(t.avatar)},null)},{title:"用户名",width:120,dataIndex:"username"},{title:"呢称",width:120,hideInSearch:!0,dataIndex:"nickname"},{title:"所在部门",dataIndex:"dept",hideInSearch:!0,width:180,customRender:({record:t})=>s(i,null,{default:()=>{var a;return[(a=t.dept)==null?void 0:a.name]}})},{title:"所属角色",dataIndex:"roleNames",hideInSearch:!0,width:220,customRender:({record:t})=>{let a;return s(N,null,J(a=t.roles.map(n=>s(i,{color:"success",key:n.id},{default:()=>[n.name]})))?a:{default:()=>[a]})}},{title:"邮箱",width:120,dataIndex:"email"},{title:"手机",width:120,dataIndex:"phone"},{title:"备注",width:120,dataIndex:"remark"},{title:"状态",dataIndex:"status",width:100,hideInSearch:!0,formItemProps:{component:"Select",componentProps:{options:[{label:"启用",value:1},{label:"禁用",value:0}]}},customRender:({record:t})=>{const a=~~t.status===1;return s(i,{color:a?"success":"red"},{default:()=>[a?"启用":"禁用"]})}},{title:"创建时间",dataIndex:"createdAt",width:120,hideInSearch:!0,customRender:({record:t})=>m(t.createdAt)},{title:"修改时间",dataIndex:"updatedAt",width:120,hideInSearch:!0,customRender:({record:t})=>m(t.createdAt)}],L={key:0},Y=I("div",{style:{"margin-top":"8px"}},"Upload",-1),z=["src"],X=j({name:"AvatarUpload",inheritAttrs:!1,__name:"AvatarUpload",props:{value:{},valueModifiers:{}},emits:["update:value"],setup(t){const a=q(t,"value"),n=r([]),u=r(!1),c=r(""),d=r(""),p=D(()=>g(a.value)),x=E(a,e=>{e&&!n.value.length&&(n.value=[{uid:`vc-upload-${Date.now()}-1`,name:e.split("/").at(-1),status:"done",url:p.value}],x())}),A=e=>{const o=e.type==="image/jpeg"||e.type==="image/png";o||v.error("You can only upload JPG/PNG file!");const l=e.size/1024/1024<2;return l||v.error("Image must smaller than 2MB!"),o&&l},y=async e=>{const{filename:o}=await k.toolsUpload.uploadUpload({file:e});a.value=o},b=async e=>{await y(e.file)},S=({file:e})=>{e.status="done",n.value=[e]},U=e=>{a.value="",n.value=[]},R=()=>{u.value=!1,d.value=""},C=async e=>{!e.url&&!e.preview&&(e.preview=p.value),c.value=e.url||e.preview,u.value=!0,d.value=e.name||e.url.substring(e.url.lastIndexOf("/")+1)};return(e,o)=>{const l=V;return h(),f(G,null,[s(_(O),{"file-list":n.value,name:"avatar","list-type":"picture-card",class:"min-h-[110px]","custom-request":b,onBeforeUpload:A,onChange:S,onRemove:U,onPreview:C},{default:w(()=>[n.value.length<1?(h(),f("div",L,[s(_(B)),Y])):F("",!0)]),_:1},8,["file-list"]),s(l,{open:u.value,title:d.value,footer:null,onCancel:R},{default:w(()=>[I("img",{alt:"example",style:{width:"100%"},src:c.value},null,8,z)]),_:1},8,["open","title"])],64)}}});export{X as _,Q as b};
