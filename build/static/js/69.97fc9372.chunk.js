webpackJsonp([69],{1239:function(e,n,t){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var o,l,A=t(0),m=t.n(A),c=t(225),s=t(444),d=t.n(s),g=t(1873),_=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),f=(l=o=function(e){function n(){return i(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,e),_(n,[{key:"render",value:function(){var e=this.props;return m.a.createElement(c.a,e,m.a.createElement(d.a,{title:"Login Alpha"}),m.a.createElement(g.a,null))}}]),n}(m.a.Component),o.defaultProps={pathName:"Login Alpha",roles:["agent","administrator"]},l);n.default=f},1873:function(e,n,t){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var o=t(0),l=t.n(o),A=t(22),m=t(1874),c=t(1875),s=(t.n(c),function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}()),d=function(e){function n(){var e,t,r,o;i(this,n);for(var l=arguments.length,A=Array(l),m=0;m<l;m++)A[m]=arguments[m];return t=r=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(A))),r.state={backgroundImage:"url(resources/images/login/1.jpg)",fullSize:!1},r.generateBackground=function(){var e=r.state.backgroundImage;e="url(resources/images/login/"+(Math.floor(5*Math.random())+1)+".jpg)",r.setState({backgroundImage:e})},r.switchSize=function(){var e=r.state.fullSize;e=!e,r.setState({fullSize:e})},o=t,a(r,o)}return r(n,e),s(n,[{key:"render",value:function(){var e=this.state,n=e.backgroundImage,t=e.fullSize;return l.a.createElement("div",{className:!1===t?"login":"login login--fullscreen",style:{backgroundImage:n}},l.a.createElement("div",{className:"login__header"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-8"},l.a.createElement("div",{className:"login__header__logo"},l.a.createElement("a",{href:"javascript: void(0);"},l.a.createElement("img",{src:"resources/images/login/logo-inverse.png",alt:"Clean UI Admin Template"})),l.a.createElement(A.i,{className:"ml-3",onClick:this.switchSize},"Switch Fullscreen / Windowed"),l.a.createElement(A.i,{className:"ml-3",onClick:this.generateBackground},"Randomize Background Image"))),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"login__header__menu"},l.a.createElement("ul",{className:"list-unstyled list-inline"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"javascript: void(0);"},"\u2190 Back")),l.a.createElement("li",{className:"list-inline-item active"},l.a.createElement("a",{href:"javascript: void(0);"},"Login")),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"javascript: void(0);"},"About")),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"javascript: void(0);"},"Support"))))))),l.a.createElement("div",{className:"login__block"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12"},l.a.createElement("div",{className:"login__block__promo text-white text-center"},l.a.createElement("h1",{className:"mb-3 text-white"},l.a.createElement("strong",null,"WELCOME TO CLEAN UI ADMIN TEMPLATE")),l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.")),l.a.createElement("div",{className:"login__block__inner"},l.a.createElement("div",{className:"login__block__form"},l.a.createElement("h4",{className:"text-uppercase"},l.a.createElement("strong",null,"Please log in")),l.a.createElement("br",null),l.a.createElement(m.a,null)))))),l.a.createElement("div",{className:"login__footer text-center"},l.a.createElement("ul",{className:"list-unstyled list-inline"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"javascript: void(0);"},"Terms of Use")),l.a.createElement("li",{className:"active list-inline-item"},l.a.createElement("a",{href:"javascript: void(0);"},"Compliance")),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"javascript: void(0);"},"Confidential Information")),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"javascript: void(0);"},"Support")),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"javascript: void(0);"},"Contacts")))))}}]),n}(l.a.Component);n.a=d},1874:function(e,n,t){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var o=t(0),l=t.n(o),A=t(22),m=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),c=A.t.Item,s=function(e){function n(){var e,t,r,o;i(this,n);for(var l=arguments.length,A=Array(l),m=0;m<l;m++)A[m]=arguments[m];return t=r=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(A))),r.handleSubmit=function(e){e.preventDefault(),r.props.form.validateFields(function(e,n){e||console.log("Received values of form: ",n)})},o=t,a(r,o)}return r(n,e),m(n,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return l.a.createElement(A.t,{onSubmit:this.handleSubmit,className:"login-form"},l.a.createElement(c,null,l.a.createElement("label",{className:"form-label mb-0"},"Username"),e("userName",{rules:[{required:!0,message:"Please input your username!"}]})(l.a.createElement(A.v,{prefix:l.a.createElement(A.u,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),l.a.createElement(c,null,l.a.createElement("label",{className:"form-label mb-0"},"Password"),e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(l.a.createElement(A.v,{prefix:l.a.createElement(A.u,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),l.a.createElement(c,null,e("remember",{valuePropName:"checked",initialValue:!0})(l.a.createElement(A.n,null,"Remember me")),l.a.createElement("a",{className:"login-form-forgot pull-right text-primary",style:{lineHeight:"36px"},href:"javascript: void(0);"},"Forgot password?")),l.a.createElement("div",{className:"form-actions"},l.a.createElement(A.i,{type:"primary",htmlType:"submit",className:"login-form-button"},"Sign in"),l.a.createElement("span",{className:"ml-3 register-link"},l.a.createElement("a",{href:"javascript: void(0);",className:"text-primary utils__link--underlined"},"Register")," ","if you don't have account")),l.a.createElement("div",{className:"form-group"},l.a.createElement("span",null,"Use another service to Log In"),l.a.createElement("div",{className:"mt-2"},l.a.createElement("a",{href:"javascript: void(0);",className:"btn btn-icon mr-2"},l.a.createElement("i",{className:"icmn-facebook"})),l.a.createElement("a",{href:"javascript: void(0);",className:"btn btn-icon mr-2"},l.a.createElement("i",{className:"icmn-google"})),l.a.createElement("a",{href:"javascript: void(0);",className:"btn btn-icon mr-2"},l.a.createElement("i",{className:"icmn-windows"})),l.a.createElement("a",{href:"javascript: void(0);",className:"btn btn-icon mr-2"},l.a.createElement("i",{className:"icmn-twitter"})))))}}]),n}(l.a.Component),d=A.t.create()(s);n.a=d},1875:function(e,n,t){var i=t(1876);"string"===typeof i&&(i=[[e.i,i,""]]);var a={hmr:!1};a.transform=void 0;t(1236)(i,a);i.locals&&(e.exports=i.locals)},1876:function(e,n,t){n=e.exports=t(1235)(!0),n.push([e.i,".login{background-size:cover;background-color:#f2f4f8;background-position:50%}.login--fullscreen{position:fixed;z-index:20000;top:0;left:0;height:100%;width:100%;overflow-y:auto}.login__block{padding:6.15rem 3.07rem;margin-bottom:5.38rem;width:100%;-ms-flex-item-align:center;align-self:center;position:relative;z-index:2}@media (max-width:991px){.login__block{padding:3.07rem 1.53rem 6.15rem}}.login__block__inner{min-width:23.07rem;max-width:38.46rem;margin:0 auto;padding:3.84rem 3.07rem 1.53rem;border-radius:10px;overflow:hidden;background-color:#fff;position:relative}.login__block__form{position:relative;z-index:2}.login__block__promo{padding:0 0 4.61rem;max-width:61.53rem;font-size:1.23rem;line-height:2rem;text-align:center;margin:0 auto}.login__block__sidebar{display:none}@media (min-width:992px){.login__block--extended .login__block__inner{max-width:61.53rem;padding:6.15rem 6.15rem 3.84rem}.login__block--extended .login__block__form{margin-right:23.07rem}.login__block--extended .login__block__sidebar{display:block;position:absolute;top:0;right:0;bottom:0;width:23.07rem;padding:6.15rem 3.07rem;color:#fff;background:#222034}.login__block--extended .login__block__sidebar__item{padding-left:1.53rem;border-left:2px solid #74708d;margin-bottom:1.53rem;color:#74708d}.login__block--extended .login__block__sidebar__title{margin-bottom:1.53rem;line-height:1.5}.login__block--extended .login__block__sidebar__place{font-size:1.07rem;font-weight:700;position:absolute;z-index:2;bottom:3.07rem;left:3.07rem}}.login__header{-ms-flex-item-align:start;align-self:flex-start;width:100%;color:#fff;padding:3.07rem}@media (max-width:991px){.login__header{padding:3.07rem 1.53rem}}.login__header__logo img{max-width:11.53rem;max-height:3.84rem}.login__header__menu{text-align:right;margin-top:.76rem}@media (max-width:991px){.login__header__menu{text-align:left}}.login__header__menu ul{font-size:1.23rem}.login__header__menu ul li{margin-right:1.53rem;text-transform:uppercase}.login__header__menu ul li:last-child{margin-right:0}.login__header__menu ul li.active a{border-bottom:1px solid hsla(0,0%,100%,.5)}.login__header__menu ul li a{color:#fff!important;line-height:1.4;display:inline-block;margin-right:.76rem;font-weight:700}.login__header__menu ul li a:hover{border-bottom:1px solid hsla(0,0%,100%,.5)}.login__footer{-ms-flex-item-align:end;align-self:flex-end;width:100%;color:#fff;padding:3.07rem}@media (max-width:991px){.login__footer{padding:3.07rem 1.53rem}}.login__footer ul{margin-bottom:0}.login__footer ul li{margin-right:1.53rem;text-transform:uppercase}.login__footer ul li:last-child{margin-right:0}.login__footer ul li a{color:#fff;opacity:.7;line-height:1.4;display:inline-block;margin-right:.76rem}.login__footer ul li a:hover{opacity:1}","",{version:3,sources:["/Users/benstein/Desktop/cleanui-admin-template/cleanui-admin-template-react/src/pages/DefaultPages/LoginAlphaPage/LoginAlpha/style.scss"],names:[],mappings:"AAAA,OACE,sBAAuB,AACvB,yBAA0B,AAC1B,uBAAmC,CAAE,AACrC,mBACE,eAAgB,AAChB,cAAe,AACf,MAAO,AACP,OAAQ,AACR,YAAa,AACb,WAAY,AACZ,eAAiB,CAAE,AACrB,cACE,wBAAiC,AACjC,sBAAuB,AACvB,WAAY,AACZ,2BAA4B,AACxB,kBAAmB,AACvB,kBAAmB,AACnB,SAAW,CAAE,AACb,yBACE,cACE,+BAAiC,CAAE,CAAE,AACzC,qBACE,mBAAoB,AACpB,mBAAoB,AACpB,cAAe,AACf,gCAAiC,AACjC,mBAAoB,AACpB,gBAAiB,AACjB,sBAA0B,AAC1B,iBAAmB,CAAE,AACvB,oBACE,kBAAmB,AACnB,SAAW,CAAE,AACf,qBACE,oBAAqB,AACrB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,kBAAmB,AACnB,aAAe,CAAE,AACnB,uBACE,YAAc,CAAE,AAClB,yBACE,6CACE,mBAAoB,AACpB,+BAAiC,CAAE,AACrC,4CACE,qBAAuB,CAAE,AAC3B,+CACE,cAAe,AACf,kBAAmB,AACnB,MAAO,AACP,QAAS,AACT,SAAU,AACV,eAAgB,AAChB,wBAAyB,AACzB,WAAe,AACf,kBAAoB,CAAE,AACtB,qDACE,qBAAsB,AACtB,8BAA+B,AAC/B,sBAAuB,AACvB,aAAe,CAAE,AACnB,sDACE,sBAAuB,AACvB,eAAiB,CAAE,AACrB,sDACE,kBAAmB,AACnB,gBAAkB,AAClB,kBAAmB,AACnB,UAAW,AACX,eAAgB,AAChB,YAAc,CAAE,CAAE,AAC1B,eACE,0BAA2B,AACvB,sBAAuB,AAC3B,WAAY,AACZ,WAAe,AACf,eAAiB,CAAE,AACnB,yBACE,eACE,uBAAiC,CAAE,CAAE,AACzC,yBACE,mBAAoB,AACpB,kBAAoB,CAAE,AACxB,qBACE,iBAAkB,AAClB,iBAAoB,CAAE,AACtB,yBACE,qBACE,eAAiB,CAAE,CAAE,AACzB,wBACE,iBAAmB,CAAE,AACrB,2BACE,qBAAsB,AACtB,wBAA0B,CAAE,AAC5B,sCACE,cAAgB,CAAE,AACpB,oCACE,0CAAkD,CAAE,AACtD,6BACE,qBAA0B,AAC1B,gBAAiB,AACjB,qBAAsB,AACtB,oBAAsB,AACtB,eAAkB,CAAE,AACpB,mCACE,0CAAkD,CAAE,AAChE,eACE,wBAAyB,AACrB,oBAAqB,AACzB,WAAY,AACZ,WAAa,AACb,eAAiB,CAAE,AACnB,yBACE,eACE,uBAAiC,CAAE,CAAE,AACzC,kBACE,eAAiB,CAAE,AACnB,qBACE,qBAAsB,AACtB,wBAA0B,CAAE,AAC5B,gCACE,cAAgB,CAAE,AACpB,uBACE,WAAe,AACf,WAAY,AACZ,gBAAiB,AACjB,qBAAsB,AACtB,mBAAsB,CAAE,AACxB,6BACE,SAAW,CAAE",file:"style.scss",sourcesContent:[".login {\n  background-size: cover;\n  background-color: #f2f4f8;\n  background-position: center center; }\n  .login--fullscreen {\n    position: fixed;\n    z-index: 20000;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    overflow-y: auto; }\n  .login__block {\n    padding: 6.15rem 3.07rem 6.15rem;\n    margin-bottom: 5.38rem;\n    width: 100%;\n    -ms-flex-item-align: center;\n        align-self: center;\n    position: relative;\n    z-index: 2; }\n    @media (max-width: 991px) {\n      .login__block {\n        padding: 3.07rem 1.53rem 6.15rem; } }\n    .login__block__inner {\n      min-width: 23.07rem;\n      max-width: 38.46rem;\n      margin: 0 auto;\n      padding: 3.84rem 3.07rem 1.53rem;\n      border-radius: 10px;\n      overflow: hidden;\n      background-color: #ffffff;\n      position: relative; }\n    .login__block__form {\n      position: relative;\n      z-index: 2; }\n    .login__block__promo {\n      padding: 0 0 4.61rem;\n      max-width: 61.53rem;\n      font-size: 1.23rem;\n      line-height: 2rem;\n      text-align: center;\n      margin: 0 auto; }\n    .login__block__sidebar {\n      display: none; }\n    @media (min-width: 992px) {\n      .login__block--extended .login__block__inner {\n        max-width: 61.53rem;\n        padding: 6.15rem 6.15rem 3.84rem; }\n      .login__block--extended .login__block__form {\n        margin-right: 23.07rem; }\n      .login__block--extended .login__block__sidebar {\n        display: block;\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        width: 23.07rem;\n        padding: 6.15rem 3.07rem;\n        color: #ffffff;\n        background: #222034; }\n        .login__block--extended .login__block__sidebar__item {\n          padding-left: 1.53rem;\n          border-left: 2px solid #74708d;\n          margin-bottom: 1.53rem;\n          color: #74708d; }\n        .login__block--extended .login__block__sidebar__title {\n          margin-bottom: 1.53rem;\n          line-height: 1.5; }\n        .login__block--extended .login__block__sidebar__place {\n          font-size: 1.07rem;\n          font-weight: bold;\n          position: absolute;\n          z-index: 2;\n          bottom: 3.07rem;\n          left: 3.07rem; } }\n  .login__header {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n    width: 100%;\n    color: #ffffff;\n    padding: 3.07rem; }\n    @media (max-width: 991px) {\n      .login__header {\n        padding: 3.07rem 1.53rem 3.07rem; } }\n    .login__header__logo img {\n      max-width: 11.53rem;\n      max-height: 3.84rem; }\n    .login__header__menu {\n      text-align: right;\n      margin-top: 0.76rem; }\n      @media (max-width: 991px) {\n        .login__header__menu {\n          text-align: left; } }\n      .login__header__menu ul {\n        font-size: 1.23rem; }\n        .login__header__menu ul li {\n          margin-right: 1.53rem;\n          text-transform: uppercase; }\n          .login__header__menu ul li:last-child {\n            margin-right: 0; }\n          .login__header__menu ul li.active a {\n            border-bottom: 1px solid rgba(255, 255, 255, 0.5); }\n          .login__header__menu ul li a {\n            color: #ffffff !important;\n            line-height: 1.4;\n            display: inline-block;\n            margin-right: 0.76rem;\n            font-weight: bold; }\n            .login__header__menu ul li a:hover {\n              border-bottom: 1px solid rgba(255, 255, 255, 0.5); }\n  .login__footer {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    width: 100%;\n    color: white;\n    padding: 3.07rem; }\n    @media (max-width: 991px) {\n      .login__footer {\n        padding: 3.07rem 1.53rem 3.07rem; } }\n    .login__footer ul {\n      margin-bottom: 0; }\n      .login__footer ul li {\n        margin-right: 1.53rem;\n        text-transform: uppercase; }\n        .login__footer ul li:last-child {\n          margin-right: 0; }\n        .login__footer ul li a {\n          color: #ffffff;\n          opacity: .7;\n          line-height: 1.4;\n          display: inline-block;\n          margin-right: 0.76rem; }\n          .login__footer ul li a:hover {\n            opacity: 1; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=69.97fc9372.chunk.js.map