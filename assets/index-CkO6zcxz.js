import{ad as g,U as S,Q as m,K as x,b4 as y,bu as V,bv as q,a4 as N}from"./antdv-CAXihDg_.js";import{k as l,d as R,W as f,a5 as D,Y as t,G as i,u as n,ak as r,X as b,a6 as O,ad as B,ac as z}from"./vue-Dbi1xauY.js";import{u as A}from"./dynamic-table-DhiAq_hs.js";import{A as d}from"./index-DWJF4vuV.js";import"./ApiSelect.vue_vue_type_script_setup_true_lang-IWTYr-Fy.js";import"./index.vue_vue_type_style_index_0_lang-Dww9ZzaR.js";import{u as F}from"./useFormModal-DGpV1vZs.js";import"./schema-form.vue_vue_type_script_setup_true_lang-C0d9vjpU.js";import"./is-C0dFuREE.js";import"./index-CCwlABZW.js";import"./dateUtil-NBcmMhwL.js";import"./useModal-BsEyE0vB.js";const G=s=>{switch(s){case 0:return"#d9d9d9";case 1:return"#52c41a"}},M=s=>{switch(s){case 0:return"停止";case 1:return"运行"}},E=[{title:"任务名称",dataIndex:"name",width:180},{title:"状态",width:100,dataIndex:"status",customRender:({record:s})=>l(g,{status:s.status===1?"processing":"default",color:G(s.status),text:M(s.status)},null)},{title:"类型",width:80,dataIndex:"type",customRender:({record:s})=>l(S,{color:"processing"},{default:()=>[s.type===1?"Interval":"Cron"]})},{title:"调用服务",dataIndex:"service",hideInSearch:!0,width:220},{title:"执行参数",dataIndex:"data",hideInSearch:!0,width:220},{title:"备注",dataIndex:"remark"}],U=[{field:"type",component:"RadioGroup",label:"名称",defaultValue:0,rules:[{required:!0,type:"number"}],componentProps:{options:[{label:"Cron",value:0},{label:"时间间隔",value:1}]}},{field:"name",component:"Input",label:"任务名称",rules:[{required:!0,type:"string"}]},{field:"service",component:"Input",label:"服务路径",rules:[{required:!0,type:"string"}],componentProps:{placeholder:"请输入调用服务的路径"}},{field:"data",component:"Input",label:"任务参数",componentProps:{placeholder:"请输入任务参数（可不填）"}},{field:"limit",component:"InputNumber",label:"执行次数",defaultValue:-1,componentProps:{min:-1,style:{width:"100%"}}},{field:"cron",component:"Input",label:"Cron",rules:[{required:!0,type:"string"}],vIf:({formModel:s})=>s.type===0,componentProps:{placeholder:"请输入Cron表达式"}},{field:"every",component:"InputNumber",label:"执行间隔",defaultValue:6e4,vIf:({formModel:s})=>s.type===1,rules:[{required:!0,type:"number"}],componentProps:{min:100,style:{width:"100%"}}},{field:"startTime",component:"DatePicker",label:"开始时间",vIf:({formModel:s})=>s.type===0,componentProps:{showTime:!0,style:{width:"100%"}}},{field:"endTime",component:"DatePicker",label:"结束时间",vIf:({formModel:s})=>s.type===0,componentProps:{showTime:!0,style:{width:"100%"}}},{field:"remark",component:"InputTextArea",label:"备注"},{field:"status",component:"RadioGroup",defaultValue:1,label:"状态",componentProps:{options:[{label:"运行",value:1},{label:"停止",value:0}]}}],ae=R({name:"SystemScheduleTask",__name:"index",setup(s){const[T,c]=A({search:!1,size:"small"}),[w]=F(),p=()=>c==null?void 0:c.reload(),k=async e=>{const[u]=await w({modalProps:{title:`${e.id?"编辑":"新增"}任务`,width:640,onFinish:async o=>{const a={...o,id:e.id};e.id?await d.systemTask.taskUpdate({id:e.id},a):await d.systemTask.taskCreate(a),p()}},formProps:{labelWidth:100,schemas:U}});if(e.id){const o=await d.systemTask.taskInfo({id:e.id});u==null||u.setFieldsValue({...e,...o})}},I=async e=>{await d.systemTask.taskDelete({id:e}),p()},C=async e=>{await d.systemTask.taskOnce({id:e.id}),p()},_=async e=>{await d.systemTask.taskStart({id:e.id}),p()},v=async e=>{await d.systemTask.taskStop({id:e.id}),p()},$=e=>!e.startTime&&!e.endTime?"无时段限制":!e.startTime&&e.endTime?`无开始时间限制 - ${e.endTime}`:e.startTime&&!e.endTime?`${e.startTime} - 长期有效`:`${e.startTime} - ${e.endTime}`,P=[...E,{title:"操作",width:220,dataIndex:"ACTION",fixed:"right",actions:({record:e})=>[{label:"编辑",auth:{perm:"system:task:update",effect:"disable"},onClick:()=>k(e)},{label:"删除",auth:"system:task:delete",popConfirm:{title:"你确定要删除吗？",onConfirm:()=>I(e.id)}}]}];return(e,u)=>{const o=z("a-button");return f(),D("div",null,[l(n(T),{"row-key":"id","header-title":"定时任务","data-request":n(d).systemTask.taskList,columns:P,scroll:{x:2e3},bordered:""},{toolbar:t(()=>[l(o,{type:"primary",disabled:!e.$auth("system:task:create"),onClick:u[0]||(u[0]=a=>k({}))},{default:t(()=>[i(" 新增 ")]),_:1},8,["disabled"])]),expandedRowRender:t(({record:a})=>[l(n(m),{column:1},{default:t(()=>[l(n(m).Item,{label:"任务编号"},{default:t(()=>[i("# "+r(a.id),1)]),_:2},1024),l(n(m).Item,{label:"执行次数"},{default:t(()=>[i(r(a.limit>0?`仅 ${a.limit} 次`:"无次数限制"),1)]),_:2},1024),a.type===1?(f(),b(n(m).Item,{key:0,label:"执行间隔"},{default:t(()=>[i(" 每"+r(a.every)+"毫秒执行一次 ",1)]),_:2},1024)):(f(),b(n(m).Item,{key:1,label:"Cron表达式"},{default:t(()=>[l(n(x),null,{title:t(()=>[i("秒 分 小时 日期 月份 星期 年(可选)")]),default:t(()=>[i(" "+r(a.cron),1)]),_:2},1024)]),_:2},1024)),a.type===0?(f(),b(n(m).Item,{key:2,label:"执行时间段"},{default:t(()=>[O("span",null,r($(a)),1)]),_:2},1024)):B("",!0),l(n(m).Item,{label:"执行操作"},{default:t(()=>[l(n(y),{title:"确认手动执行一次该任务吗?",disabled:!e.$auth("system:task:once"),onConfirm:h=>C(a)},{default:t(()=>[l(o,{type:"link",size:"small",disabled:!e.$auth("system:task:once")},{icon:t(()=>[l(n(V))]),default:t(()=>[i("仅一次 ")]),_:1},8,["disabled"])]),_:2},1032,["disabled","onConfirm"]),l(n(y),{title:"确认运行该任务吗?",disabled:!e.$auth("system:task:start")||a.status!==0,onConfirm:h=>_(a)},{default:t(()=>[l(o,{type:"link",size:"small",disabled:!e.$auth("system:task:start")||a.status!==0},{icon:t(()=>[l(n(q))]),default:t(()=>[i("运行 ")]),_:2},1032,["disabled"])]),_:2},1032,["disabled","onConfirm"]),l(n(y),{title:"确认停止该任务吗?",disabled:!e.$auth("system:task:stop")||a.status!==1,onConfirm:h=>v(a)},{default:t(()=>[l(o,{type:"link",size:"small",disabled:!e.$auth("system:task:stop")||a.status!==1},{icon:t(()=>[l(n(N))]),default:t(()=>[i("停止 ")]),_:2},1032,["disabled"])]),_:2},1032,["disabled","onConfirm"])]),_:2},1024)]),_:2},1024)]),_:1},8,["data-request"])])}}});export{ae as default};
