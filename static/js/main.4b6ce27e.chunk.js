(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n.n(s),c=n(12),o=n.n(c),a=(n(23),n(13)),i=n(14),h=n(18),l=n(17),u=(n(24),n(25),n(0)),d=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),Object(u.jsxs)("h2",{children:[" ",e.monster.name," "]}),Object(u.jsx)("p",{children:e.monster.email})]})},j=function(e){return Object(u.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(u.jsx)(d,{monster:e},e.id)}))})},m=(n(27),n(15)),p=function(e){var t=e.placeholder,n=e.handleChange;return Object(u.jsx)(m.DebounceInput,{className:"search",debounceTimeout:300,type:"search",placeholder:t,onChange:n})},b=n(16),f=n.n(b),x=(n(49),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchMonster:t.target.value},(function(){console.log("file: App.js ~ line 36 ~ App ~ render ~ searchMonster",e.state.searchMonster)}))},e.state={monsters:[],searchMonster:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){return e.setState({monsters:t.data})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchMonster,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLocaleLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Monsters Rolodex"}),Object(u.jsx)(p,{placeholder:"search monsters",handleChange:this.handleChange}),Object(u.jsx)(j,{monsters:s})]})}}]),n}(s.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),O()}},[[50,1,2]]]);
//# sourceMappingURL=main.4b6ce27e.chunk.js.map