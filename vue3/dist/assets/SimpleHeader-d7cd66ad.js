import{_ as d,r as p,u as k,i as u,o as c,c as i,d as s,t as m,b,w as f,m as h,p as v,j as g}from"./index-cb6107a9.js";const y={props:{name:{type:String,default:""},back:{type:String,default:""},noback:{type:Boolean,default:!1}},emits:["callback"],setup(e,o){const n=p(e.noback),a=k();return{goBack:()=>{e.back?a.push({path:e.back}):a.go(-1),o.emit("callback")},isback:n}}},t=e=>(v("data-v-6f642592"),e=e(),g(),e),B={class:"simple-header van-hairline--bottom"},S={key:1},x={class:"simple-header-name"},I=t(()=>s("i",{class:"nbicon nblvsefenkaicankaoxianban-1"},null,-1)),w=t(()=>s("span",null,null,-1)),C=t(()=>s("i",{class:"nbicon nbmore"},null,-1)),H=t(()=>s("div",{class:"block"},null,-1));function N(e,o,n,a,l,V){const _=u("router-link");return c(),i(h,null,[s("header",B,[a.isback?(c(),i("i",S,"      ")):(c(),i("i",{key:0,class:"nbicon nbfanhui",onClick:o[0]||(o[0]=(...r)=>a.goBack&&a.goBack(...r))})),s("div",x,m(n.name),1),b(_,{class:"nav-list-item active",to:"home"},{default:f(()=>[I,w]),_:1}),C]),H],64)}const D=d(y,[["render",N],["__scopeId","data-v-6f642592"]]);export{D as s};