(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(33)},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),o=a(6),i=a(8),u=a(7),s="LOAD_PLAYLIST",p="FILTER_PLAYLIST",m="SORT_PLAYLIST",g="CHANGE_PAGE_SIZE",d="CHANGE_PAGE",f="NEXT_PAGE",h={loading:!1,loaded:!1,playlist:[]},y=a(11),b={performer:"",genre:"",year:""},v={performer:"sort",song:"sort",genre:"sort",year:"sort"},E=Object(i.c)({playlist:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.response;switch(a){case s+"_START":return Object(u.a)({},e,{loading:!0,loaded:!1});case s+"_SUCCESS":return Object(u.a)({},e,{playlist:n,loading:!1,loaded:!0});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case p:return Object(u.a)({},e,Object(y.a)({},n.name,n.value));default:return e}},sort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case m:var r=e;for(var l in r)r[l]!==r[n.column]&&(r[l]="sort");return"sort"===r[n.column]?r[n.column]="sort-up":"sort-up"===r[n.column]?r[n.column]="sort-down":"sort-down"===r[n.column]&&(r[n.column]="sort-up"),Object(u.a)({},r);default:return e}},pageSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"5",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case g:return e===n.pageSize?e:n.pageSize;default:return e}},currentPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case d:return e===n.page?e:n.page;case f:if("back"===n.order)return--e;if("forward"===n.order)return++e;break;case g:case p:return"1";default:return e}}}),O=a(19),j=Object(i.a)(function(e){return function(e){return function(t){var a=t.callAJAX,n=t.type,r=Object(O.a)(t,["callAJAX","type"]);if(!a)return e(t);e(Object(u.a)({},r,{type:n+"_START"})),fetch(a).then(function(e){return e.json()}).then(function(t){return e(Object(u.a)({},r,{type:n+"_SUCCESS",response:t}))}).catch(function(t){return e(Object(u.a)({},r,{type:n+"_FAIL",error:t}))})}}}),k=Object(i.d)(E,{},j),C=(a(29),a(1)),P=a(2),w=a(4),S=a(3),A=a(5);a(31);function N(e,t){var a=new Set(e.map(function(e){return e[t]})),n=[];return a.forEach(function(e){return n.push(e)}),n}function _(e,t){var a=t.performer,n=t.genre,r=t.year;return e.filter(function(e){return(!a||e.performer==a)&&(!n||e.genre==n)&&(!r||e.year==r)})}function z(e,t){var a,n,r;for(var l in t)"sort"!==t[l]&&(a=t[l],n=l);return n?(r=function(e,t){switch(n){case"performer":case"song":case"genre":var r=e[n].toLowerCase().trim(),l=t[n].toLowerCase().trim();switch(a){case"sort-up":if(r<l)return-1;if(r>l)return 1;case"sort-down":if(r>l)return-1;if(r<l)return 1}break;case"year":switch(a){case"sort-up":return e.year-t.year;case"sort-down":return t.year-e.year}}},e.sort(r)):e}var T=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(w.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){(0,a.props.sortPlaylist)(e.currentTarget.getAttribute("data-column"))},a}return Object(A.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.name,n=e.order;return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{onClick:this.handleClick,"data-column":a,className:"playlist_table_header"},r.a.createElement("span",null,t),n?r.a.createElement("i",{className:"sort_icon fas fa-".concat(n)}):null))}}]),t}(n.Component),L=Object(o.b)(null,{sortPlaylist:function(e){return{type:m,payload:{column:e}}}})(T),F=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(w.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){(0,a.props.changePageSize)(e.target.getAttribute("data-size"))},a.getClassName=function(e){return a.props.pageSize===e?"pagesize_current":null},a}return Object(A.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement("table",{className:"pagesize",border:"1"},r.a.createElement("tbody",null,r.a.createElement("tr",{onClick:this.handleClick},r.a.createElement("td",{key:1,"data-size":5,className:this.getClassName("5")},"5"),r.a.createElement("td",{key:2,"data-size":10,className:this.getClassName("10")},"10"),r.a.createElement("td",{key:3,"data-size":25,className:this.getClassName("25")},"25"),r.a.createElement("td",{key:4,"data-size":50,className:this.getClassName("50")},"50"),r.a.createElement("td",{key:5,"data-size":100,className:this.getClassName("100")},"100"))))}}]),t}(n.Component),I=Object(o.b)(null,{changePageSize:function(e){return{type:g,payload:{pageSize:e}}}})(F),G=function(e){function t(){return Object(C.a)(this,t),Object(w.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props,t=e.playlist,a=e.pageSize,n=e.currentPage;if(!t.length)return null;var l=t.slice((n-1)*a,n*a);return r.a.createElement("tbody",null,l.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{key:1},e.performer),r.a.createElement("td",{key:2},e.song),r.a.createElement("td",{key:3},e.genre),r.a.createElement("td",{key:4},e.year))}))}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(w.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(l)))).getTotalPages=function(){var e=a.props,t=e.length,n=e.pageSize;return t?Math.ceil(t/n):0},a.getPaginationBody=function(){var e,t,n=a.props.currentPage,l=a.getTotalPages();if(0===l)return r.a.createElement("li",null,0);n<4&&l<6&&(e=1,t=l),n<4&&l>=6&&(e=1,t=5),+n>=4&&+n<=l-2&&(e=+n-2,t=+n+2),+n>=4&&+n>l-2&&(e=l-4,t=l);for(var c=[],o=e;o<=t;o++)c.push(r.a.createElement("li",{key:o,"data-value":o,onClick:a.handleClick,className:o===+n?"pagination_current":null},r.a.createElement("span",null,o)));return r.a.createElement(r.a.Fragment,null,c)},a.handleClick=function(e){(0,a.props.changePage)(e.currentTarget.getAttribute("data-value"))},a.handleChangePage=function(e){var t=a.props,n=t.nextPage,r=t.currentPage,l=a.getTotalPages(),c=e.currentTarget.getAttribute("data-type");("back"===c&&r>1||"forward"===c&&r<l)&&n(c)},a}return Object(A.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",{onClick:this.handleChangePage,"data-type":"back"},r.a.createElement("i",{className:"pagination_icon fas fa-angle-left"})),this.getPaginationBody(),r.a.createElement("li",{onClick:this.handleChangePage,"data-type":"forward"},r.a.createElement("i",{className:"pagination_icon fas fa-angle-right"})))}}]),t}(n.Component),B=Object(o.b)(null,{changePage:function(e){return{type:d,payload:{page:e}}},nextPage:function(e){return{type:f,payload:{order:e}}}})(J),R=function(e){function t(){return Object(C.a)(this,t),Object(w.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loaded,a=e.loading,n=e.loadPlaylist;t||a||n()}},{key:"render",value:function(){var e=this.props,t=e.sort,a=e.playlist,n=e.pageSize,l=e.currentPage;return r.a.createElement("div",null,r.a.createElement("h3",null,"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442"),r.a.createElement("table",{className:"playlist_table"},r.a.createElement("thead",{className:"playlist_table_thead"},r.a.createElement("tr",null,r.a.createElement(L,{title:"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c",name:"performer",order:t.performer}),r.a.createElement(L,{title:"\u041f\u0435\u0441\u043d\u044f",name:"song",order:t.song}),r.a.createElement(L,{title:"\u0416\u0430\u043d\u0440",name:"genre",order:t.genre}),r.a.createElement(L,{title:"\u0413\u043e\u0434",name:"year",order:t.year}))),r.a.createElement(G,{playlist:a,pageSize:n,currentPage:l})),r.a.createElement(I,{pageSize:n}),r.a.createElement(B,{length:a.length,pageSize:n,currentPage:l}))}}]),t}(n.Component),X=Object(o.b)(function(e){return{loading:e.playlist.loading,loaded:e.playlist.loaded,playlist:z(_(e.playlist.playlist,e.filter),e.sort),sort:e.sort,pageSize:e.pageSize,currentPage:e.currentPage}},{loadPlaylist:function(){return{type:s,callAJAX:"../../serverData.json"}}})(R),x=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(w.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(l)))).getOptionsForSelect=function(){var e=a.props.option;return e.length?e.map(function(e){return r.a.createElement("option",{value:e,key:e},e)}):null},a.handleChange=function(){return function(e){(0,a.props.filterPlaylist)(e.target.name,e.target.value)}},a}return Object(A.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{name:this.props.name,onChange:this.handleChange()},r.a.createElement("option",{value:"",defaultValue:!0},"\u0412\u0441\u0435"),this.getOptionsForSelect()))}}]),t}(n.Component),D=Object(o.b)(null,{filterPlaylist:function(e,t){return{type:p,payload:{name:e,value:t}}}})(x),Y=function(e){function t(){return Object(C.a)(this,t),Object(w.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props.playlist,t=N(e,"performer"),a=N(e,"genre"),n=N(e,"year");return r.a.createElement("div",{className:"filter"},r.a.createElement("h3",null,"\u0424\u0438\u043b\u044c\u0442\u0440"),r.a.createElement("div",{className:"filter_body"},r.a.createElement("p",null,"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c"),r.a.createElement(D,{option:t,name:"performer"}),r.a.createElement("p",null,"\u0416\u0430\u043d\u0440"),r.a.createElement(D,{option:a,name:"genre"}),r.a.createElement("p",null,"\u0413\u043e\u0434"),r.a.createElement(D,{option:n,name:"year"})))}}]),t}(n.Component),H=Object(o.b)(function(e){return{playlist:_(e.playlist.playlist,e.filter)}})(Y),M=function(e){function t(){return Object(C.a)(this,t),Object(w.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"inline_block"},r.a.createElement(X,null),r.a.createElement(H,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,{store:k},r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.98d6669e.chunk.js.map