(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(56),c=a.n(r),s=(a(63),a(23)),i=a(5),l=a(6),m=a(8),d=a(7),u=a(9),b=a(1),h=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},o.a.createElement("a",{className:"navbar-brand",href:"#"},"Burger Queen"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})))}}]),t}(n.Component),p=a(57),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={plates:p.a,toShow:[]},e.handleBreakfastButton=e.handleBreakfastButton.bind(Object(b.a)(Object(b.a)(e))),e.handleLunchButton=e.handleLunchButton.bind(Object(b.a)(Object(b.a)(e))),e.handleDataFood=e.handleDataFood.bind(Object(b.a)(Object(b.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleBreakfastButton",value:function(e){e.preventDefault(),this.setState(Object(s.a)({},this.state,{toShow:this.state.plates.filter(function(e){return"desayuno"===e.type})}))}},{key:"handleLunchButton",value:function(e){e.preventDefault(),this.setState(Object(s.a)({},this.state,{toShow:this.state.plates.filter(function(e){return"restodia"===e.type})}))}},{key:"handleDataFood",value:function(e){e.preventDefault(),console.log(this.props.name)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"menu"},o.a.createElement("button",{className:"btn btn-lg btn-warning mt-2",onClick:this.handleBreakfastButton},"Desayuno"),o.a.createElement("button",{className:"btn btn-lg btn-warning ml-2 mt-2",onClick:this.handleLunchButton},"Almuerzo y Cena"),o.a.createElement("div",{className:"row"},this.state.toShow.map(function(t,a){return o.a.createElement("div",{key:a,className:"col-md-4"},o.a.createElement("button",{className:"btn btn-success btn-lg mt-2",onClick:function(){var a=t.name,n=t.cost;e.props.items(a,n)}},t.name," ",o.a.createElement("br",null),"$",t.cost))})))}}]),t}(n.Component),v=a(29),y=a.n(v);a(111);y.a.initializeApp({apiKey:"AIzaSyCzmJJVcoCMtkbGnz6MClhrn_nteobXLDA",authDomain:"burgerqueen-milexys.firebaseapp.com",databaseURL:"https://burgerqueen-milexys.firebaseio.com",projectId:"burgerqueen-milexys"});var g=y.a.firestore(),j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).searchRef=o.a.createRef(),e.handleChange=function(t){t.preventDefault(),e.setState({name:e.searchRef.current.value})},e.handleData=function(t){t.preventDefault(),e.setState({name:""}),g.collection("clientes").add({clientName:e.state.name,food:e.props.order}).then(function(){console.log("enviado")}).catch(function(){console.error("error")})},e.state={name:""},e.handleData=e.handleData.bind(Object(b.a)(Object(b.a)(e))),e.handleChange=e.handleChange.bind(Object(b.a)(Object(b.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleData},o.a.createElement("label",null,"Nombre del Cliente: "),o.a.createElement("input",{ref:this.searchRef,type:"text",className:"form-control",onChange:this.handleChange}),this.props.order.map(function(e,t){return o.a.createElement("div",{key:t,className:"row"},o.a.createElement("div",{className:"col-md-6"},e.name),o.a.createElement("div",{className:"col-md-6"},"$",e.cost))}),o.a.createElement("input",{type:"submit",className:"btn btn-info mt-2",value:"SUBMIT"}))}}]),t}(n.Component),O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={items:[]},e.handleFood=e.handleFood.bind(Object(b.a)(Object(b.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleFood",value:function(e,t){this.setState(Object(s.a)({},this.state,{items:this.state.items.concat([{name:e,cost:t}])}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement(h,null)),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(f,{items:this.handleFood})),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"jumbotron mt-2"},o.a.createElement(j,{order:this.state.items}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e){e.exports={a:[{name:"Cafe americano",id:1,type:"desayuno",cost:"500"},{name:"Cafe con leche",id:2,type:"desayuno",cost:"700"},{name:"Sandwich de jam\xf3n y queso",id:3,type:"desayuno",cost:"1000"},{name:"Jugo natural",id:4,type:"desayuno",cost:"700"},{name:"Hamburguesa Simple",id:5,type:"restodia",cost:"1500"},{name:"Hamburguesa Doble",id:6,type:"restodia",cost:"2500"},{name:"Papas fritas",id:7,type:"restodia",cost:"500",mode:"acompanamiento"},{name:"Onion rings",id:8,type:"restodia",cost:"500",mode:"acompanamiento"},{name:"Agua 500ml",id:9,type:"restodia",cost:"500",mode:"bebidas"},{name:"Agua 750ml",id:10,type:"restodia",cost:"800",mode:"bebidas"},{name:"Gaseosa 500ml",id:11,type:"restodia",cost:"700",mode:"bebidas"},{name:"Gaseosa 750ml",id:12,type:"restodia",cost:"1000",mode:"bebidas"}]}},58:function(e,t,a){e.exports=a(116)},63:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.2b122cea.chunk.js.map