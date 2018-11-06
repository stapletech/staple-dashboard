webpackJsonp([75],{1256:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,s,o=a(0),c=a.n(o),l=a(225),m=a(444),p=a.n(m),d=a(2138),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),f=(s=u=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),h(t,[{key:"render",value:function(){var e=this.props;return c.a.createElement(l.a,e,c.a.createElement(p.a,{title:"Product List"}),c.a.createElement(d.a,null))}}]),t}(c.a.Component),u.defaultProps={pathName:"Product List",roles:["agent","administrator"]},s);t.default=f},2138:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=a(0),s=a.n(u),o=a(22),c=a(2139),l=a.n(c),m=a(2140),p=(a.n(m),function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}()),d={pageSizeOptions:["10","50","100","250"],showSizeChanger:!0,current:1,size:"small",showTotal:function(e){return"Total "+e+" items"},total:0},h=function(e){function t(){var e,a,i,u;r(this,t);for(var o=arguments.length,c=Array(o),m=0;m<o;m++)c[m]=arguments[m];return a=i=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.state={tableData:l.a.data,data:l.a.data,pager:Object.assign({},d),filterDropdownVisible:!1,searchText:"",filtered:!1},i.onInputChange=function(e){i.setState({searchText:e.target.value})},i.onSearch=function(){var e=i.state,t=e.searchText,a=e.tableData,r=new RegExp(t,"gi");i.setState({filterDropdownVisible:!1,filtered:!!t,data:a.map(function(e){var t=e.name.match(r);return t?Object.assign({},e,{name:s.a.createElement("span",null,e.name.split(r).map(function(e,a){return a>0?[s.a.createElement("span",{className:"highlight"},t[0]),e]:e}))}):null}).filter(function(e){return!!e})})},i.handleTableChange=function(e,t,a){if(i.state.pager){var r=Object.assign({},i.state.pager);r.pageSize!==e.pageSize?(i.pageSize=e.pageSize,r.pageSize=e.pageSize,r.current=1):r.current=e.current,i.setState({pager:r})}},u=a,n(i,u)}return i(t,e),p(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.pager,r=t.data,n=[{title:"ID",dataIndex:"id",key:"id",render:function(e){return s.a.createElement("a",{className:"utils__link--underlined",href:"javascript: void(0);"},"#"+e)},sorter:function(e,t){return e.id-t.id}},{title:"Thumbnail",dataIndex:"thumbnail",key:"thumbnail",render:function(e){return s.a.createElement("a",{href:"javascript: void(0);",className:"productsList__thumbnail"},s.a.createElement("img",{src:e,alt:""}))}},{title:"Name",dataIndex:"name",key:"name",sorter:function(e,t){return e.name.length-t.name.length},render:function(e){return s.a.createElement("a",{className:"utils__link--underlined",href:"javascript: void(0);"},e)},filterDropdown:s.a.createElement("div",{className:"custom-filter-dropdown"},s.a.createElement(o.v,{ref:function(t){return e.searchInput=t},placeholder:"Search name",value:this.state.searchText,onChange:this.onInputChange,onPressEnter:this.onSearch}),s.a.createElement(o.i,{type:"primary",onClick:this.onSearch},"Search")),filterIcon:s.a.createElement(o.u,{type:"search",style:{color:this.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:this.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(t){e.setState({filterDropdownVisible:t},function(){return e.searchInput&&e.searchInput.focus()})}},{title:"Type",dataIndex:"type",key:"type",sorter:function(e,t){return e.type.length-t.type.length}},{title:"Attribute Set",dataIndex:"attribute",key:"attribute",sorter:function(e,t){return e.attribute.length-t.attribute.length}},{title:"SKU",dataIndex:"sku",key:"sku",sorter:function(e,t){return e.sku.length-t.sku.length}},{title:"Price",dataIndex:"price",key:"price",render:function(e){return s.a.createElement("span",null,"$"+e)},sorter:function(e,t){return e.price-t.price}},{title:"Quantity",dataIndex:"quantity",key:"quantity",sorter:function(e,t){return e.quantity-t.quantity}},{title:"Status",dataIndex:"status",key:"status",sorter:function(e,t){return e.status.length-t.status.length}},{title:"Action",key:"action",render:function(e,t){return s.a.createElement("span",null,s.a.createElement("a",{href:"javascript: void(0);",className:"mr-2"},s.a.createElement("i",{className:"icmn-pencil mr-1"})," View"),s.a.createElement("a",{href:"javascript: void(0);"},s.a.createElement("i",{className:"icmn-cross mr-1"})," Remove"))}}];return s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("div",{className:"utils__title"},s.a.createElement("strong",null,"Products List"))),s.a.createElement("div",{className:"card-body"},s.a.createElement(o.P,{columns:n,dataSource:r,pagination:a,onChange:this.handleTableChange})))}}]),t}(s.a.Component);t.a=h},2139:function(e,t){e.exports={data:[{key:"1",thumbnail:"resources/images/ecommerce/001.jpg",name:"Rounded Chair",id:2412,type:"Furniture",attribute:"Home",sku:"ITEM-0001",price:67,quantity:421,status:"Disabled"},{key:"2",thumbnail:"resources/images/ecommerce/002.jpg",name:"Scoop",id:262,type:"Cleaning",attribute:"Home",sku:"ITEM-0002",price:35,quantity:124,status:"Enabled"},{key:"3",thumbnail:"resources/images/ecommerce/003.jpg",name:"Pure Wooden chair",id:3255,type:"Furniture",attribute:"Home",sku:"ITEM-0003",price:26,quantity:65,status:"Enabled"},{key:"4",thumbnail:"resources/images/ecommerce/004.jpg",name:"Gray Chair",id:2362,type:"Furniture",attribute:"Home",sku:"ITEM-0004",price:78,quantity:43,status:"Enabled"},{key:"5",thumbnail:"resources/images/ecommerce/001.jpg",name:"Rounded Chair",id:2412,type:"Furniture",attribute:"Home",sku:"ITEM-0001",price:67,quantity:421,status:"Disabled"},{key:"6",thumbnail:"resources/images/ecommerce/002.jpg",name:"Scoop",id:262,type:"Cleaning",attribute:"Home",sku:"ITEM-0002",price:35,quantity:124,status:"Enabled"},{key:"7",thumbnail:"resources/images/ecommerce/003.jpg",name:"Pure Wooden chair",id:3255,type:"Furniture",attribute:"Home",sku:"ITEM-0003",price:26,quantity:65,status:"Enabled"},{key:"8",thumbnail:"resources/images/ecommerce/004.jpg",name:"Gray Chair",id:2362,type:"Furniture",attribute:"Home",sku:"ITEM-0004",price:78,quantity:43,status:"Enabled"},{key:"9",thumbnail:"resources/images/ecommerce/001.jpg",name:"Rounded Chair",id:2412,type:"Furniture",attribute:"Home",sku:"ITEM-0001",price:67,quantity:421,status:"Disabled"},{key:"10",thumbnail:"resources/images/ecommerce/002.jpg",name:"Scoop",id:262,type:"Cleaning",attribute:"Home",sku:"ITEM-0002",price:35,quantity:124,status:"Enabled"},{key:"11",thumbnail:"resources/images/ecommerce/003.jpg",name:"Pure Wooden chair",id:3255,type:"Furniture",attribute:"Home",sku:"ITEM-0003",price:26,quantity:65,status:"Enabled"},{key:"12",thumbnail:"resources/images/ecommerce/004.jpg",name:"Gray Chair",id:2362,type:"Furniture",attribute:"Home",sku:"ITEM-0004",price:78,quantity:43,status:"Enabled"},{key:"13",thumbnail:"resources/images/ecommerce/001.jpg",name:"Rounded Chair",id:2412,type:"Furniture",attribute:"Home",sku:"ITEM-0001",price:67,quantity:421,status:"Disabled"},{key:"14",thumbnail:"resources/images/ecommerce/002.jpg",name:"Scoop",id:262,type:"Cleaning",attribute:"Home",sku:"ITEM-0002",price:35,quantity:124,status:"Enabled"},{key:"15",thumbnail:"resources/images/ecommerce/003.jpg",name:"Pure Wooden chair",id:3255,type:"Furniture",attribute:"Home",sku:"ITEM-0003",price:26,quantity:65,status:"Enabled"},{key:"16",thumbnail:"resources/images/ecommerce/004.jpg",name:"Gray Chair",id:2362,type:"Furniture",attribute:"Home",sku:"ITEM-0004",price:78,quantity:43,status:"Enabled"}]}},2140:function(e,t,a){var r=a(2141);"string"===typeof r&&(r=[[e.i,r,""]]);var n={hmr:!1};n.transform=void 0;a(1236)(r,n);r.locals&&(e.exports=r.locals)},2141:function(e,t,a){t=e.exports=a(1235)(!0),t.push([e.i,".productsList__thumbnail{display:inline-block;width:4.28rem;height:4.28rem;border:1px solid #e4e9f0;border-radius:3px;background:#fff;text-align:center}.productsList__thumbnail img{max-width:100%;min-height:100%;max-height:100%;vertical-align:middle}","",{version:3,sources:["/Users/benstein/Desktop/cleanui-admin-template/cleanui-admin-template-react/src/pages/Apps/Ecommerce/ProductsListPage/ProductList/style.scss"],names:[],mappings:"AAAA,yBACE,qBAAsB,AACtB,cAAe,AACf,eAAgB,AAChB,yBAA0B,AAC1B,kBAAmB,AACnB,gBAAoB,AACpB,iBAAmB,CAAE,AACrB,6BACE,eAAgB,AAChB,gBAAiB,AACjB,gBAAiB,AACjB,qBAAuB,CAAE",file:"style.scss",sourcesContent:[".productsList__thumbnail {\n  display: inline-block;\n  width: 4.28rem;\n  height: 4.28rem;\n  border: 1px solid #e4e9f0;\n  border-radius: 3px;\n  background: #ffffff;\n  text-align: center; }\n  .productsList__thumbnail img {\n    max-width: 100%;\n    min-height: 100%;\n    max-height: 100%;\n    vertical-align: middle; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=75.3578a6bd.chunk.js.map