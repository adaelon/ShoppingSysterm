import{_ as y,u as O,a as T,o as l,c as i,b as a,w as c,d,T as L,P as N,m as _,n as m,t as f,K as B,q as I,ab as R,L as S}from"./index-cb6107a9.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{s as w}from"./SimpleHeader-d7cd66ad.js";import{g as U}from"./order-d106d410.js";const q={class:"order-box"},D={class:"content"},$=["onClick"],E={class:"order-item-header"},F={__name:"Order",setup(H){const p=O(),e=T({status:"",loading:!1,finished:!1,refreshing:!1,list:[],page:1,totalPage:0}),h=async()=>{const{data:o,data:{list:s}}=await U({pageNumber:e.page,status:e.status});e.list=e.list.concat(s),e.totalPage=o.totalPage,e.loading=!1,e.page>=o.totalPage&&(e.finished=!0)},b=({name:o})=>{e.status=o,g()},v=o=>{p.push({path:"/order-detail",query:{id:o}})},u=()=>{!e.refreshing&&e.page<e.totalPage&&(console.log(e.page),console.log(e.totalPage),e.page=e.page+1),e.refreshing&&(e.list=[],e.refreshing=!1),h()},g=()=>{e.refreshing=!0,e.finished=!1,e.loading=!0,e.page=1,u()};return(o,s)=>{const n=I,k=L,P=R,V=S,x=N;return l(),i("div",q,[a(w,{name:"我的订单",back:"/user"}),a(k,{onClickTab:b,color:"#1baeae","title-active-color":"#1baeae",class:"order-tab",modelValue:e.status,"onUpdate:modelValue":s[0]||(s[0]=t=>e.status=t)},{default:c(()=>[a(n,{title:"全部",name:""}),a(n,{title:"待付款",name:"0"}),a(n,{title:"待确认",name:"1"}),a(n,{title:"待发货",name:"2"}),a(n,{title:"已发货",name:"3"}),a(n,{title:"交易完成",name:"4"})]),_:1},8,["modelValue"]),d("div",D,[a(x,{modelValue:e.refreshing,"onUpdate:modelValue":s[2]||(s[2]=t=>e.refreshing=t),onRefresh:g,class:"order-list-refresh"},{default:c(()=>[a(V,{loading:e.loading,"onUpdate:loading":s[1]||(s[1]=t=>e.loading=t),finished:e.finished,"finished-text":"没有更多了",onLoad:u,onOffset:t=>10},{default:c(()=>[(l(!0),i(_,null,m(e.list,(t,C)=>(l(),i("div",{key:C,class:"order-item-box",onClick:r=>v(t.orderNo)},[d("div",E,[d("span",null,"订单时间："+f(t.createTime),1),d("span",null,f(t.orderStatusString),1)]),(l(!0),i(_,null,m(t.mallOrderItemVOS,r=>(l(),B(P,{key:r.orderId,num:r.goodsCount,price:r.sellingPrice,desc:"全场包邮",title:r.goodsName,thumb:r.goodsCoverImg},null,8,["num","price","title","thumb"]))),128))],8,$))),128))]),_:1},8,["loading","finished"])]),_:1},8,["modelValue"])])])}}},Q=y(F,[["__scopeId","data-v-cc829d1f"]]);export{Q as default};