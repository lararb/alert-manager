(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),i=(a(16),a(9)),s=a(1),d=a(2),o=a(5),u=a(3),m=a(6),f=a(4),h=(a(17),a(18),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.fieldText,a=e.idGenerated,n=e.color,r=e.clickDelete,c=e.index;return l.a.createElement("div",{className:"alert_container ".concat(n),id:c},l.a.createElement("div",{className:"alert_container--text"},l.a.createElement("p",{className:"alert_text"},t),l.a.createElement("small",{className:"alert_id"},"ID: ",a)),l.a.createElement("button",{className:"alert_btn",id:c,onClick:r},l.a.createElement("i",{className:"fas fa-times"})))}}]),t}(l.a.Component)),b=(a(19),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.arrAlert,a=e.disableBtn,n=e.color,r=e.clickAdd,c=e.clickDelete,i=e.textInput;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"field_section"},l.a.createElement("div",{className:"field_section--container"},l.a.createElement("h1",{className:"app_title"},"Alert manager"),l.a.createElement("div",{className:"field_container"},l.a.createElement("label",{htmlFor:"field",className:"field_label"},"Campo de formulario"),l.a.createElement("input",{id:"field",type:"text",className:"field",ref:i}),l.a.createElement("button",{className:"field_btn ".concat(a?"field_btn--disabled":""),onClick:r,disabled:a},"Add")))),l.a.createElement("ul",{className:"alert_list"},t.map(function(e,t){return l.a.createElement("li",{className:"alert_item",key:t},l.a.createElement(h,{fieldText:e.fieldText,idGenerated:e.idGenerated,color:n,clickDelete:c,index:t}))})))}}]),t}(l.a.Component)),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).textInput=l.a.createRef(),a.state={arrAlert:[],disableBtn:!1},a.handleClickAdd=a.handleClickAdd.bind(Object(m.a)(a)),a.handleDeleteAlert=a.handleDeleteAlert.bind(Object(m.a)(a)),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"getRandomInt",value:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}},{key:"handleClickAdd",value:function(){var e=this,t=this.textInput.current.value;this.setState(function(a){return{arrAlert:[].concat(Object(i.a)(a.arrAlert),[{fieldText:t,idGenerated:e.getRandomInt(0,1e3)}])}})}},{key:"setChangeColor",value:function(e){return e.length<=3?"green":e.length>=4&&e.length<=7?"yellow":"red"}},{key:"handleDisableBtn",value:function(e){if(e.length>=12)return!0}},{key:"handleDeleteAlert",value:function(e){var t=e.currentTarget.parentElement;this.setState(function(e){return e.arrAlert.splice(t.id,1),{arrAlert:e.arrAlert}})}},{key:"render",value:function(){var e=this.state.arrAlert;return l.a.createElement("div",{className:"App"},l.a.createElement(b,{arrAlert:e,color:this.setChangeColor(e),disableBtn:this.handleDisableBtn(e),clickAdd:this.handleClickAdd,clickDelete:this.handleDeleteAlert,textInput:this.textInput}))}}]),t}(l.a.Component);c.a.render(l.a.createElement(p,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.afc32ee0.chunk.js.map