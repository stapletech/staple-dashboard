webpackJsonp([58],{1258:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,o,i=a(0),s=a.n(i),u=a(225),m=a(444),p=a.n(m),d=a(2144),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),E=(o=c=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),f(t,[{key:"render",value:function(){var e=this.props;return s.a.createElement(u.a,e,s.a.createElement(p.a,{title:"Cart/Checkout"}),s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement(d.a,null))))}}]),t}(s.a.Component),c.defaultProps={pathName:"Cart / Checkout",roles:["agent","administrator"]},o);t.default=E},1672:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=a(0),o=a.n(c),i=a(22),s=a(1673),u=a.n(s),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p=function(e){function t(){var e,a,l,c;n(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return a=l=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),l.state={data:u.a.invoiceData,tableData:u.a.invoiceData.invoiceContent},c=a,r(l,c)}return l(t,e),m(t,[{key:"render",value:function(){var e=[{title:"#",dataIndex:"number"},{title:"Description",dataIndex:"description"},{title:"Quantity",dataIndex:"quantity"},{title:"Unit Cost",dataIndex:"unitcost"},{title:"Total",dataIndex:"total"}],t=this.state,a=t.data,n=t.tableData;return o.a.createElement("div",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("h4",{className:"text-black mb-3"},o.a.createElement("strong",null,a.senderName),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("img",{className:"mr-2",src:a.senderLogo,height:"50",alt:"Amazon"})),o.a.createElement("address",null,a.senderAdress,o.a.createElement("br",null),o.a.createElement("abbr",{className:"mr-2",title:"Mail"},"E-mail:"),a.senderEmail,o.a.createElement("br",null),o.a.createElement("abbr",{className:"mr-2",title:"Phone"},"Phone:"),a.senderPhone,o.a.createElement("br",null),o.a.createElement("abbr",{className:"mr-2",title:"Fax"},"Fax:"),a.senderFax,o.a.createElement("br",null),o.a.createElement("br",null))),o.a.createElement("div",{className:"col-md-6 text-right"},o.a.createElement("h4",{className:"text-black mb-3"},o.a.createElement("strong",null,"Invoice Info")),o.a.createElement("p",null,o.a.createElement("a",{className:"font-size-20",href:"javascript: void(0);"},a.invoiceNumber),o.a.createElement("br",null),o.a.createElement("span",{className:"font-size-20"},a.recipientName)),o.a.createElement("address",null,a.recipientAdress,o.a.createElement("br",null),o.a.createElement("abbr",{className:"mr-2",title:"Phone"},"P:"),a.recipientPhone,o.a.createElement("br",null)),o.a.createElement("span",null,"Invoice Date: "+a.invoiceDate," "),o.a.createElement("br",null),o.a.createElement("span",null,"Due Date: "+a.invoiceDueDate),o.a.createElement("br",null),o.a.createElement("br",null))),o.a.createElement(i.P,{columns:e,dataSource:n,pagination:!1}),o.a.createElement("div",{className:"text-right clearfix mt-5"},o.a.createElement("div",{className:"pull-right"},o.a.createElement("p",null,"Sub - Total amount:"," ",o.a.createElement("strong",null,o.a.createElement("span",null,a.invoiceAmount))),o.a.createElement("p",null,"VAT:"," ",o.a.createElement("strong",null,o.a.createElement("span",null,a.invoiceVAT))),o.a.createElement("p",null,o.a.createElement("strong",null,"Grand Total: ",o.a.createElement("span",null,a.invoiceTotal))),o.a.createElement("br",null))),o.a.createElement("div",{className:"text-right"},o.a.createElement(i.i,{className:"mr-2",type:"primary"},o.a.createElement(i.u,{type:"check-circle-o"})," Proceed to payment"),o.a.createElement(i.i,{type:"default"},o.a.createElement(i.u,{type:"printer"})," Print")))}}]),t}(o.a.Component);t.a=p},1673:function(e,t){e.exports={invoiceData:{senderName:"Amazon Delivery",senderLogo:"resources/images/amazon.jpg",senderAdress:"795 Folsom Ave, Suite 600, San Francisco, CA, 94107 ",senderEmail:"example@amazon.com",senderPhone:"(123) 456-7890",senderFax:"800-692-7753",recipientName:"Artour Arteezy",recipientAdress:"795 Folsom Ave, Suite 600, San Francisco, CA, 94107",recipientPhone:"(123) 456-7890",invoiceNumber:"W32567-2352-4756",invoiceDueDate:"January 22, 2016",invoiceDate:"January 20, 2016",invoiceContent:[{key:"1",number:"1",description:"Server hardware purchase",quantity:"35",unitcost:"$75.00",total:"$2,152.00"},{key:"2",number:"2",description:"Office furniture purchase",quantity:"21",unitcost:"$169.00",total:"$4,169.00"},{key:"3",number:"3",description:"Company Anual Dinner Catering",quantity:"58",unitcost:"$49.00",total:"$1,260.00"},{key:"4",number:"4",description:"Payment for Jan 2016",quantity:"231",unitcost:"$12.00",total:"$866.00"}],invoiceAmount:"$5,700.00",invoiceVAT:"$57.00",invoiceTotal:"$5,757.00"}}},2144:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=a(0),o=a.n(c),i=a(22),s=a(2145),u=a(1672),m=a(2146),p=a.n(m),d=a(2147),f=(a.n(d),function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}()),E=i.N.Step,h=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={ordersTableData:[],invoicePrices:{}},a.state={current:0},a}return l(t,e),f(t,[{key:"next",value:function(){var e=this.state.current+1;this.setState({current:e})}},{key:"prev",value:function(){var e=this.state.current-1;this.setState({current:e})}},{key:"componentWillMount",value:function(){this.setState({ordersTableData:p.a.ordersTableData,invoicePrices:p.a.invoicePrices})}},{key:"render",value:function(){var e=this,t=this.state,a=t.current,n=t.ordersTableData,r=t.invoicePrices,l=[{title:"#",dataIndex:"number"},{title:"Description",dataIndex:"description",render:function(e){return o.a.createElement("a",{className:"utils__link--underlined",href:"javascript: void(0);"},e)}},{title:"Quantity",dataIndex:"quantity",render:function(e){return o.a.createElement(i.w,{defaultValue:e,size:"small"})}},{title:"Unit Cost",dataIndex:"unitcost"},{title:"Total",dataIndex:"total"},{title:"",dataIndex:"",render:function(){return o.a.createElement(i.i,{icon:"cross",size:"small"},"Remove")}}],c=[{title:"Cart",icon:o.a.createElement(i.u,{type:"shopping-cart",style:{fontSize:40}}),content:o.a.createElement("div",null,o.a.createElement(i.P,{dataSource:n,columns:l,pagination:!1}),o.a.createElement("div",{className:"text-right clearfix mt-4"},o.a.createElement("div",{className:"pull-right"},o.a.createElement("p",null,"Sub - Total amount:"," ",o.a.createElement("strong",null,o.a.createElement("span",null,r.invoiceAmount))),o.a.createElement("p",null,"VAT:"," ",o.a.createElement("strong",null,o.a.createElement("span",null,r.invoiceVAT))),o.a.createElement("p",null,o.a.createElement("strong",null,"Grand Total: ",o.a.createElement("span",null,r.invoiceTotal))),o.a.createElement("br",null))))},{title:"Shipment and Payment",icon:o.a.createElement(i.u,{type:"tags",style:{fontSize:40}}),content:o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-8"},o.a.createElement(s.a,null)),o.a.createElement("div",{className:"col-md-4"},o.a.createElement("h4",{className:"text-black mb-3"},o.a.createElement("strong",null,"General Info")),o.a.createElement("h2",null,o.a.createElement("i",{className:"fa fa-cc-visa text-primary mr-1"}),o.a.createElement("i",{className:"fa fa-cc-mastercard text-default mr-1"}),o.a.createElement("i",{className:"fa fa-cc-amex text-default"})),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")," ",o.a.createElement("p",null,"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."," ")))},{title:"Confirmation",icon:o.a.createElement(i.u,{type:"credit-card",style:{fontSize:40}}),content:o.a.createElement("div",null,o.a.createElement(u.a,null))}];return o.a.createElement("div",{className:"cart"},o.a.createElement(i.N,{current:a},c.map(function(e){return o.a.createElement(E,{key:e.title,title:e.title,icon:e.icon})})),o.a.createElement("div",{className:"steps-content"},c[this.state.current].content),o.a.createElement("div",{className:"steps-action text-center"},this.state.current>0&&o.a.createElement(i.i,{style:{marginRight:8},onClick:function(){return e.prev()}},"Previous"),this.state.current<c.length-1&&o.a.createElement(i.i,{type:"primary",onClick:function(){return e.next()}},"Next"),this.state.current===c.length-1&&o.a.createElement(i.i,{type:"primary",onClick:function(){return i.Z.success("Processing complete!")}},"Done")))}}]),t}(o.a.Component);t.a=h},2145:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c,o,i=a(0),s=a.n(i),u=a(22),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p=u.t.Item,d=(c=u.t.create())(o=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),m(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return s.a.createElement(u.t,null,s.a.createElement("h4",{className:"text-black mb-3"},s.a.createElement("strong",null,"Shipment Details")),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement(p,null,e("email",{rules:[{required:!0,message:"Please input your Email!"}]})(s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"checkout-email"},"Email"),s.a.createElement(u.v,{id:"checkout-email",placeholder:"Email"}))))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(p,null,e("phoneNumber",{rules:[{required:!0,message:"Please input your Phone Number!"}]})(s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"checkout-phnum"},"Phone Number"),s.a.createElement(u.v,{id:"checkout-phnum",placeholder:"Phone Number"})))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement(p,null,e("name",{rules:[{required:!0,message:"Please input your Name!"}]})(s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"checkout-name"},"Name"),s.a.createElement(u.v,{id:"checkout-name",placeholder:"Name"}))))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(p,null,e("surname",{rules:[{required:!0,message:"Please input your Surname!"}]})(s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"checkout-surname"},"Surname"),s.a.createElement(u.v,{id:"checkout-surname",placeholder:"Surname"})))))),s.a.createElement(p,null,e("city",{rules:[{required:!0,message:"Please input your City!"}]})(s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"checkout-city"},"City"),s.a.createElement(u.v,{id:"checkout-city",placeholder:"City"})))),s.a.createElement(p,null,e("adress",{rules:[{required:!0,message:"Please input your Adress!"}]})(s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"checkout-adress"},"Adress"),s.a.createElement(u.v,{id:"checkout-adress",placeholder:"Adress",className:"mb-3"})))),s.a.createElement("h4",{className:"text-black mb-3"},s.a.createElement("strong",null,"Billing Details")),e("cardnum",{rules:[{required:!0,message:"Please input Card Number!"}]})(s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"checkout-cardnum"},"Card Number"),s.a.createElement(u.v,{addonBefore:s.a.createElement(u.u,{type:"credit-card"}),id:"checkout-cardnum",placeholder:"Card Number"}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-7"},e("expirationdate",{rules:[{required:!0,message:"Please input Card Expiration Date!"}]})(s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"checkout-cardexpdate"},"Expiration Date"),s.a.createElement(u.v,{id:"checkout-cardexpdate",placeholder:"MM / YY"})))),s.a.createElement("div",{className:"col-md-5 pull-right"},e("cardcvc",{rules:[{required:!0,message:"Please input Card CVC!"}]})(s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"checkout-cardholder"},"CVC"),s.a.createElement(u.v,{id:"checkout-cardholder",placeholder:"CVC"}))))),e("cardholdername",{rules:[{required:!0,message:"Please input Card Holder Name!"}]})(s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"checkout-cardholder"},"Card Holder Name"),s.a.createElement(u.v,{id:"checkout-cardholder",placeholder:"Name and Surname"}))))}}]),t}(s.a.Component))||o;t.a=d},2146:function(e,t){e.exports={ordersTableData:[{key:"1",number:"1",description:"Server hardware purchase",quantity:"35",unitcost:"$75.00",total:"$2,152.00"},{key:"2",number:"2",description:"Office furniture purchase",quantity:"21",unitcost:"$169.00",total:"$4,169.00"},{key:"3",number:"3",description:"Company Anual Dinner Catering",quantity:"58",unitcost:"$49.00",total:"$1,260.00"},{key:"4",number:"4",description:"Payment for Jan 2016",quantity:"231",unitcost:"$12.00",total:"$866.00"}],invoicePrices:{invoiceAmount:"$5,700.00",invoiceVAT:"$57.00",invoiceTotal:"$5,757.00"}}},2147:function(e,t,a){var n=a(2148);"string"===typeof n&&(n=[[e.i,n,""]]);var r={hmr:!1};r.transform=void 0;a(1236)(n,r);n.locals&&(e.exports=n.locals)},2148:function(e,t,a){t=e.exports=a(1235)(!0),t.push([e.i,".cart .steps-content{border:none;min-height:0;background:none;margin-top:2.3rem;margin-bottom:2.3rem;padding-top:0;text-align:left}.cart .steps-action{margin-top:0}","",{version:3,sources:["/Users/benstein/Desktop/cleanui-admin-template/cleanui-admin-template-react/src/pages/Apps/Ecommerce/CartPage/Cart/style.scss"],names:[],mappings:"AAAA,qBACE,YAAa,AACb,aAAoB,AACpB,gBAAiB,AACjB,kBAAmB,AACnB,qBAAsB,AACtB,cAAe,AACf,eAAiB,CAAE,AAErB,oBACE,YAAc,CAAE",file:"style.scss",sourcesContent:[".cart .steps-content {\n  border: none;\n  min-height: initial;\n  background: none;\n  margin-top: 2.3rem;\n  margin-bottom: 2.3rem;\n  padding-top: 0;\n  text-align: left; }\n\n.cart .steps-action {\n  margin-top: 0; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=58.3b8f4413.chunk.js.map