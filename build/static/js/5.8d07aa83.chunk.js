(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{87:function(t,e,c){"use strict";c.r(e);var a=c(16),s=c(21),i=c.n(s),n=(c(0),c(68)),o=c(71),r=c(88),p=c(1);e.default=function(t){var e=t.id,c=Object(n.useState)(null),s=Object(a.a)(c,2),f=s[0],h=s[1];return Object(n.useEffect)((function(){i.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=9f076a639a51530d619fabd99f65fd8f")).then((function(t){return t.data.cast&&h(t.data.cast)})).catch((function(t){console.log(t)}))}),[e]),Object(p.jsx)("ul",{className:o.castList,children:f&&f.map((function(t){return Object(p.jsxs)("li",{className:r.castListItem,children:[t.profile_path&&Object(p.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t.profile_path),alt:t.name}),Object(p.jsx)("p",{children:t.name}),Object(p.jsx)("p",{children:t.character})]},t.id)}))})}},88:function(t,e,c){t.exports={castListItem:"Cast_castListItem__JBJgm"}}}]);
//# sourceMappingURL=5.8d07aa83.chunk.js.map