webpackJsonp([87],{1262:function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function n(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,m,s=a(0),o=a.n(s),i=a(225),d=a(444),u=a.n(d),p=a(2155),E=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),b=(m=r=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,e),E(t,[{key:"render",value:function(){var e=this.props;return o.a.createElement(i.a,e,o.a.createElement(u.a,{title:"Grid"}),o.a.createElement(p.a,null))}}]),t}(o.a.Component),r.defaultProps={pathName:"Grid",roles:["agent","administrator"]},m);t.default=b},2155:function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function n(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=a(0),m=a.n(r),s=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),o=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,e),s(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("section",{className:"card"},m.a.createElement("div",{className:"card-header"},m.a.createElement("div",{className:"utils__title"},m.a.createElement("strong",null,"Grid Options"),m.a.createElement("a",{href:"http://v4-alpha.getbootstrap.com/layout/grid/",target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm btn-primary ml-4"},"Official Documentation ",m.a.createElement("i",{className:"icmn-link ml-1"})))),m.a.createElement("div",{className:"card-body"},m.a.createElement("p",null,"While Bootstrap uses aaa",m.a.createElement("code",null,"em"),"s or ",m.a.createElement("code",null,"rem"),"s for defining most sizes,"," ",m.a.createElement("code",null,"px"),"s are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the"," ",m.a.createElement("a",{href:"https://drafts.csswg.org/mediaqueries-3/#units"},"font size"),"."),m.a.createElement("p",null,"See how aspects of the Bootstrap grid system work across multiple devices with a handy table."),m.a.createElement("br",null),m.a.createElement("div",{className:"table-responsive"},m.a.createElement("table",{className:"table"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null),m.a.createElement("th",null,"Extra small",m.a.createElement("br",null),m.a.createElement("small",null,"<576px")),m.a.createElement("th",null,"Small",m.a.createElement("br",null),m.a.createElement("small",null,"\u2265576px")),m.a.createElement("th",null,"Medium",m.a.createElement("br",null),m.a.createElement("small",null,"\u2265768px")),m.a.createElement("th",null,"Large",m.a.createElement("br",null),m.a.createElement("small",null,"\u2265992px")),m.a.createElement("th",null,"Extra large",m.a.createElement("br",null),m.a.createElement("small",null,"\u22651200px")))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",{className:"text-nowrap",scope:"row"},"Grid behavior"),m.a.createElement("td",null,"Horizontal at all times"),m.a.createElement("td",{colSpan:"4"},"Collapsed to start, horizontal above breakpoints")),m.a.createElement("tr",null,m.a.createElement("th",{className:"text-nowrap",scope:"row"},"Container width"),m.a.createElement("td",null,"None (auto)"),m.a.createElement("td",null,"576px"),m.a.createElement("td",null,"720px"),m.a.createElement("td",null,"940px"),m.a.createElement("td",null,"1140px")),m.a.createElement("tr",null,m.a.createElement("th",{className:"text-nowrap",scope:"row"},"Class prefix"),m.a.createElement("td",null,m.a.createElement("code",null,".col-")),m.a.createElement("td",null,m.a.createElement("code",null,".col-sm-")),m.a.createElement("td",null,m.a.createElement("code",null,".col-md-")),m.a.createElement("td",null,m.a.createElement("code",null,".col-lg-")),m.a.createElement("td",null,m.a.createElement("code",null,".col-xl-"))),m.a.createElement("tr",null,m.a.createElement("th",{className:"text-nowrap",scope:"row"},"# of columns"),m.a.createElement("td",{colSpan:"5"},"12")),m.a.createElement("tr",null,m.a.createElement("th",{className:"text-nowrap",scope:"row"},"Gutter width"),m.a.createElement("td",{colSpan:"5"},"30px (15px on each side of a column)")),m.a.createElement("tr",null,m.a.createElement("th",{className:"text-nowrap",scope:"row"},"Nestable"),m.a.createElement("td",{colSpan:"5"},"Yes")),m.a.createElement("tr",null,m.a.createElement("th",{className:"text-nowrap",scope:"row"},"Offsets"),m.a.createElement("td",{colSpan:"5"},"Yes")),m.a.createElement("tr",null,m.a.createElement("th",{className:"text-nowrap",scope:"row"},"Column ordering"),m.a.createElement("td",{colSpan:"5"},"Yes"))))))),m.a.createElement("section",{className:"card"},m.a.createElement("div",{className:"card-header"},m.a.createElement("div",{className:"utils__title"},m.a.createElement("strong",null,"Example: Stacked-to-Horizontal"))),m.a.createElement("div",{className:"card-body"},m.a.createElement("p",null,"Using a single set of ",m.a.createElement("code",null,".col-md-*")," grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any ",m.a.createElement("code",null,".row"),"."),m.a.createElement("br",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-8"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-8")),m.a.createElement("div",{className:"col-md-4"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-4"))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-4"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-4")),m.a.createElement("div",{className:"col-md-4"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-4")),m.a.createElement("div",{className:"col-md-4"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-4"))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-6"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-6")),m.a.createElement("div",{className:"col-md-6"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-6"))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-1"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-1")),m.a.createElement("div",{className:"col-md-1"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-1")),m.a.createElement("div",{className:"col-md-1"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-1")),m.a.createElement("div",{className:"col-md-1"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-1")),m.a.createElement("div",{className:"col-md-1"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-1")),m.a.createElement("div",{className:"col-md-1"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-1")),m.a.createElement("div",{className:"col-md-1"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-1")),m.a.createElement("div",{className:"col-md-1"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-1")),m.a.createElement("div",{className:"col-md-1"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-1")),m.a.createElement("div",{className:"col-md-1"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-1")),m.a.createElement("div",{className:"col-md-1"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-1")),m.a.createElement("div",{className:"col-md-1"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-md-1"))))),m.a.createElement("section",{className:"card"},m.a.createElement("div",{className:"card-header"},m.a.createElement("div",{className:"utils__title"},m.a.createElement("strong",null,"Example: Mobile and Desktop"))),m.a.createElement("div",{className:"card-body"},m.a.createElement("p",null,"Don\u2019t want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding ",m.a.createElement("code",null,".col-xs-*")," and ",m.a.createElement("code",null,".col-md-*")," ","to your columns. See the example below for a better idea of how it all works."),m.a.createElement("br",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-xs-12 col-md-8"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-xs-12 .col-md-8")),m.a.createElement("div",{className:"col-xs-6 col-md-4"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},"col-xs-6 .col-md-4"))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-xs-6 col-md-4"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-xs-6 .col-md-4")),m.a.createElement("div",{className:"col-xs-6 col-md-4"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-xs-6 .col-md-4")),m.a.createElement("div",{className:"col-xs-6 col-md-4"},m.a.createElement("div",{className:"w100 mb-4 px-3 py-2 bg-default text-white"},".col-xs-6 .col-md-4"))))))}}]),t}(m.a.Component);t.a=o}});
//# sourceMappingURL=87.650ad015.chunk.js.map