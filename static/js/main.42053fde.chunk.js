(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(e,t,a){},33:function(e,t,a){e.exports=a(63)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),l=a.n(r),o=a(25),i=a(26),s=a(31),m=a(27),u=a(32),E=a(28),d=a.n(E),p=(a(55),a(7)),v=(a(56),function(e){var t=e.data;return c.a.createElement("div",{className:"profile-card"},c.a.createElement("div",{className:"name-container"},c.a.createElement("h1",null,t.name),c.a.createElement("h3",null,t.label)),c.a.createElement("div",{className:"profile-card-mid"},c.a.createElement("img",{src:t.picture,alt:"pic of me"}),c.a.createElement("div",{className:"headline"},c.a.createElement("h2",null,t.headline))))}),h=a(5),f=(a(57),function(){var e={textDecoration:"none",color:"black"};return c.a.createElement("div",{className:"nav"},c.a.createElement("div",{className:"nav-child"}," ",c.a.createElement(h.b,{style:e,to:"/"},"Home ")),"|",c.a.createElement("div",{className:"nav-child"}," ",c.a.createElement(h.b,{style:e,to:"/projects"},"Projects ")),"|",c.a.createElement("div",{className:"nav-child"}," ",c.a.createElement(h.b,{style:e,to:"/goals"},"Goals ")),"|",c.a.createElement("div",{className:"nav-child"},c.a.createElement(h.b,{style:e,to:"/contact"},"Contact Me ")),"|",c.a.createElement("div",{className:"nav-child"},c.a.createElement(h.b,{style:e,to:"/experience"},"Experience ")),"|",c.a.createElement("div",{className:"nav-child"},c.a.createElement(h.b,{style:e,to:"/education"},"Education ")))}),b=(a(23),function(e){var t=e.data;return console.log(t),c.a.createElement("div",{className:"project-card"},c.a.createElement("h2",{className:"proj-title"},t.name),c.a.createElement("div",{className:"proj-dsc"},t.summary),c.a.createElement("div",null,c.a.createElement("ul",{className:"proj-tech"},c.a.createElement("div",{className:"tech-list"},c.a.createElement("h3",null,"Languages"),t.languages.map((function(e){return c.a.createElement("li",null,e)}))),c.a.createElement("div",{className:"tech-list"},c.a.createElement("h3",null,"Packages"),t.libraries.map((function(e){return c.a.createElement("li",null,e)}))))),c.a.createElement("div",{className:"proj-links"},"links"),c.a.createElement("a",{href:t.githubUrl},"GitHub"))}),N=function(e){var t=e.data;return c.a.createElement("div",{className:"projects"}," ",t.map((function(e){return c.a.createElement(b,{data:e})})))},g=function(){return c.a.createElement("div",null,"Goals")},j=function(){return c.a.createElement("div",null,"contact me")},y=function(){return c.a.createElement("div",null,"Experience")},k=function(){return c.a.createElement("div",null,"Education")},x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={user:{}},a.getUser=function(){d.a.get("https://gitconnected.com/v1/portfolio/thomasutsey").then((function(e){a.setState({user:e.data})})).catch((function(e){console.log(e)}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this;return console.log(this.state),this.state.user.basics?c.a.createElement("div",{className:"app-container"},c.a.createElement(f,null),c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return c.a.createElement(v,{data:e.state.user.basics})}}),c.a.createElement(p.a,{path:"/projects",render:function(t){return c.a.createElement(N,{data:e.state.user.projects})}}),c.a.createElement(p.a,{path:"/goals",render:function(e){return c.a.createElement(g,null)}}),c.a.createElement(p.a,{path:"/contact",component:j}),c.a.createElement(p.a,{path:"/experience",render:function(t){return c.a.createElement(y,{data:e.state.user.work})}}),c.a.createElement(p.a,{path:"/education",render:function(t){return c.a.createElement(k,{data:e.state.user.education})}}),c.a.createElement(p.a,{component:t})),c.a.createElement(f,null)):c.a.createElement("div",null,"Loading...")}}]),t}(c.a.Component);l.a.render(c.a.createElement(h.a,null,c.a.createElement(x,null)),document.querySelector("#root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.42053fde.chunk.js.map