(this.webpackJsonpreactwork=this.webpackJsonpreactwork||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(7),i=t.n(l),c=(t(13),t(1)),o=t(2),s=t(4),m=t(3),u=(t(14),function(e){return n.a.createElement("header",{className:e.variant||" "},e.children?e.children:e.content," ")}),h=function(e){var a=e.handleChange;return n.a.createElement("div",{className:"searchBox"},n.a.createElement("input",{className:"SearchBar",type:"text",placeholder:"Search",onChange:a}))},d=function(e){return n.a.createElement("li",{className:"ListItem",onClick:function(){e.onListItemClick(e.user)},key:e.id},n.a.createElement("span",null," ",e.user.first_name," ",e.user.last_name),n.a.createElement("label",null,"Manager ",n.a.createElement("input",{type:"checkbox",disabled:!0,checked:e.user.is_manager})))},f=[{id:1,first_name:"Fremont",last_name:"Chesswas",email:"framont@gmail.com",is_manager:!0,hire_year:2010,color:"green"},{id:2,first_name:"Ezri",last_name:"Bagworth",email:"ezrit@gmail.com",is_manager:!1,hire_year:2012,color:"black"},{id:3,first_name:"Arvie",last_name:"Copplestone",email:"arvie@gmail.com",is_manager:!0,hire_year:2018,color:"blue"}],y=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(c.a)(this,t),(r=a.call(this,e)).handleClick=function(e){return r.setState({selectedUser:e,detailsTitle:"User "+e.first_name})},r.handleYearChange=function(e){return r.setState({yearFilter:parseInt(e.target.value)||""})},r.state={detailsTitle:"",selectedUser:{},showManagers:!1,showEveryone:!1,yearFilter:""},r}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.selectedUser,r=a.detailsTitle,l=a.showManagers,i=a.showEveryone,c=a.yearFilter,o=this.props.searchTerm,s=f.filter((function(e){return(e.first_name+" "+e.last_name).toLowerCase().includes(o.toLowerCase())})).filter((function(e){return!c||c===e.hire_year}));return i||(s=s.filter((function(e){return e.is_manager&&l||!e.is_manager&&!l}))),s=s.map((function(a){return n.a.createElement(d,{key:a.id,onListItemClick:e.handleClick,user:a})})),n.a.createElement("div",null,n.a.createElement("p",null,n.a.createElement("input",{id:"filter_managers",type:"radio",name:"filter",checked:l&&!i,onChange:function(){return e.setState({showManagers:!0,showEveryone:!1})}}),n.a.createElement("label",{htmlFor:"filter_managers"},"Only managers"),n.a.createElement("input",{id:"filter_employees",type:"radio",name:"filter",checked:!l&&!i,onChange:function(){return e.setState({showManagers:!1,showEveryone:!1})}}),n.a.createElement("label",{htmlFor:"filter_employees"},"Only employees"),n.a.createElement("input",{id:"filter_everyone",type:"radio",name:"filter",checked:i,onChange:function(){return e.setState({showEveryone:!0})}}),n.a.createElement("label",{htmlFor:"filter_everyone"},"Everyone")),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"year"},"Filter by hire year"),n.a.createElement("select",{id:"year",onChange:this.handleYearChange,defaultValue:""},n.a.createElement("option",{value:""},"All years"),f.map((function(e){return n.a.createElement("option",{key:e.id,value:e.hire_year},e.hire_year)})))),n.a.createElement("h1",null,r),n.a.createElement("div",{className:"lista"},s),n.a.createElement("div",null,"Search term: ",o),t.id?n.a.createElement("div",null,t.email):n.a.createElement("div",null,"Select a user to view"))}}]),t}(r.Component),E=(t(5),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={searchTerm:" "},e.onSearchChange=function(a){e.setState({searchTerm:a.target.value.toLowerCase()})},e}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u,{variant:"blue"},n.a.createElement("h3",null,"Employee directory")),n.a.createElement("br",null),n.a.createElement(h,{handleChange:this.onSearchChange}),n.a.createElement(y,{searchTerm:this.state.searchTerm,otherProp:!0}))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.64c67289.chunk.js.map