(this["webpackJsonpconde-nast-test"]=this["webpackJsonpconde-nast-test"]||[]).push([[0],{164:function(e,n,t){"use strict";(function(e){var c=t(86),i=t.n(c),r=t(87),o=t(165),a=t(19),s=t.n(a),u=(t(173),t(166)),l=t(4);function d(){return(d=Object(o.a)(i.a.mark((function e(n){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(n),e.next=3,fetch("https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Strict&q=".concat(n),{method:"GET",headers:{"x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"40199c7edbmshf840146aee5fa9cp1ce9d4jsnfa0a8c032744","x-bingapis-sdk":"true"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c.value);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){var n,t,c,i,r=e.item;return Object(l.jsxs)("li",{className:"item",children:[r.image&&Object(l.jsx)("img",{className:"thumbnail",alt:"",src:null===(n=r.image)||void 0===n||null===(t=n.thumbnail)||void 0===t?void 0:t.contentUrl}),Object(l.jsx)("h2",{className:"title",children:Object(l.jsx)("a",{href:r.url,children:r.name})}),Object(l.jsx)("p",{className:"description",children:r.description}),Object(l.jsxs)("div",{className:"meta",children:[Object(l.jsx)("span",{children:(i=r.datePublished,new Date(i).toLocaleDateString(void 0,{dateStyle:"long"}))}),Object(l.jsxs)("span",{className:"provider",children:[(null===(c=r.provider[0].image)||void 0===c?void 0:c.thumbnail)&&Object(l.jsx)("img",{className:"provider-thumbnail",alt:"",src:r.provider[0].image.thumbnail.contentUrl+"&w=16&h=16"}),r.provider[0].name]}),r.category&&Object(l.jsx)("span",{children:function(e){return e.replace(/[A-Z][a-z]+/g,"$& ").trim()}(r.category)})]})]})}u.listen(3e3).timeout=36e4,console.log("Express server listening on port 3000 process id is "+e.pid),n.a=function(){var e=s.a.useState("docker"),n=Object(r.a)(e,2),t=n[0],c=n[1],i=s.a.useState(null),o=Object(r.a)(i,2),a=o[0],u=o[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){return d.apply(this,arguments)}(t).then(u)},children:[Object(l.jsx)("input",{autoFocus:!0,value:t,onChange:function(e){return c(e.target.value)}}),Object(l.jsx)("button",{children:"Search"})]}),a?0===a.length?Object(l.jsx)("p",{children:Object(l.jsx)("i",{children:"No results"})}):Object(l.jsx)("ul",{children:a.map((function(e,n){return Object(l.jsx)(p,{item:e},n)}))}):null]})}}).call(this,t(2))},166:function(e,n,t){var c=t(174),i=c(),r=c.Router();r.get("/",(function(e,n){n.send("Hello World")})),i.use("/",r);var o=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||3e3;i.listen(o,(function(){console.log("Server started. Listening on port: ".concat(o))})),e.exports=i},171:function(e,n,t){},173:function(e,n,t){},202:function(e,n){},203:function(e,n){},207:function(e,n){},209:function(e,n){},247:function(e,n){},250:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=250},261:function(e,n){},263:function(e,n){},291:function(e,n){},293:function(e,n){},294:function(e,n){},299:function(e,n){},301:function(e,n){},307:function(e,n){},309:function(e,n){},328:function(e,n){},340:function(e,n){},343:function(e,n){},364:function(e,n,t){"use strict";t.r(n);var c=t(19),i=t.n(c),r=t(163),o=t.n(r),a=(t(171),t(164)),s=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,365)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),c(e),i(e),r(e),o(e)}))},u=t(4);o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(a.a,{})}),document.getElementById("root")),s()}},[[364,1,2]]]);
//# sourceMappingURL=main.616aa928.chunk.js.map