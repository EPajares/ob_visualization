(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/ob_visualization/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("19b3"),r=a.n(n);r.a},"06eb":function(e,t,a){e.exports=a.p+"img/osmDark.35cd3f00.png"},"19b3":function(e,t,a){},"19c2":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAUCAIAAACMMcMmAAAAKklEQVRIx2NgGAWjgAbAh/aI4S7t0agdI9COzx00Rwz/z9Ecjdox8uwAACkGSkKIaGlAAAAAAElFTkSuQmCC"},"265b":function(e,t,a){"use strict";var n=a("6928"),r=a.n(n);r.a},4913:function(e,t,a){e.exports=a.p+"img/bingTraffic.2fcc09a1.png"},"49f8":function(e,t,a){var n={"./de.json":"6ce2","./en.json":"edd4"};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id="49f8"},"56d7":function(e,t,a){"use strict";a.r(t);a("d3b7"),a("ac1f"),a("5319"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=(a("15f5"),a("f309")),o=(a("4160"),a("466d"),a("159b"),a("ddb0"),a("a925"));function i(){var e=a("49f8"),t={};return e.keys().forEach((function(a){var n=a.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var r=n[1];t[r]=e(a)}})),t}n["default"].use(o["a"]);var s=new o["a"]({locale:Object({NODE_ENV:"production",BASE_URL:"/ob_visualization/"}).VUE_APP_I18N_LOCALE||"de",fallbackLocale:Object({NODE_ENV:"production",BASE_URL:"/ob_visualization/"}).VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:i()});n["default"].use(r["a"]);var c=new r["a"]({icons:{iconfont:"fa"},lang:{t:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return s.t(e,a)}}}),l=a("2901"),u=a.n(l);n["default"].use(u.a,{ops:{},name:"vue-scroll"}),n["default"].prototype.$vuescrollConfig={bar:{background:"#cecece",onlyShowBarOnScroll:!0,keepShow:!1}};a("a15b"),a("b64b"),a("841c"),a("1276");var d={getQueryParams:function(e){e||(e=document.location.search),e=e.split("+").join(" ");var t,a=/[?&]?([^=]+)=([^&]*)/g,n={};while(t=a.exec(e))n[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return n},getQueryParam:function(e,t){var a,n=this.getQueryParams(t);return Object.keys(n).forEach((function(t){t!==e||(a=n[t])})),a}},p=d,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{class:{"wg-app":!0,"wg-app-embedded":e.isEmbedded},attrs:{id:"app","data-app":""}},[a("v-navigation-drawer",{staticClass:"hidden-sm-and-down left-shadow",attrs:{right:"",app:!e.$vuetify.breakpoint.smAndDown,absolute:"",permanent:"",stateless:"",width:"400"}},[a("panel",{attrs:{controlsColor:e.controlsColor}})],1),e.$vuetify.breakpoint.smAndDown?a("v-app-bar",{attrs:{color:e.controlsColor,app:"",dark:""}},[a("v-btn",{attrs:{icon:""},on:{click:function(t){e.bottomSheet=!e.bottomSheet}}},[a("v-icon",{attrs:{medium:""}},[e._v(e._s(e.bottomSheet?"$close":"$menu"))])],1),a("v-toolbar-title",[e._v("Erreichbarkeit ICO Obernburg")])],1):e._e(),e.$vuetify.breakpoint.smAndDown?a("v-bottom-sheet",{attrs:{"no-click-animation":"","hide-overlay":"",persistent:""},model:{value:e.bottomSheet,callback:function(t){e.bottomSheet=t},expression:"bottomSheet"}},[a("v-sheet",{staticClass:"text-center",attrs:{height:"60vh"}},[a("panel",{attrs:{controlsColor:e.controlsColor}})],1)],1):e._e(),a("v-content",[a("v-container",{staticClass:"pa-0",attrs:{id:"ol-map-container",fluid:"","fill-height":""}},[a("app-map",{attrs:{color:e.controlsColor}}),a("background-switcher")],1)],1)],1)},g=[],m=new n["default"],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},h=[],y=(a("d81d"),a("26e9"),a("0d03"),a("25f0"),a("498a"),a("e587")),b=a("5eee"),w=a("a2c7"),x=a("3a39"),k=(a("b0c0"),a("480c")),_=a("f2f0"),S=a("d0e9"),L=a("a226"),A=a("97e6"),C=a("78db2"),P=a("fdb7"),I=a("a2e1"),T=a("b168"),E=a("1ab5"),O=a("3e6b"),F=a("5831"),V=a("6792"),M=a("c810"),j=a("2ef1"),z=a("6c77"),D=a("ce2c"),R=a("8682"),H=a("83a6"),N={getInstance:function(e){if(e)return e.radius?N.createPointStyle(e):e.fillColor?N.createPolygonStyle(e):e.strokeColor||e.strokeWidth?N.createLineStyle(e):void 0},createPointStyle:function(e){return new z["b"]({image:new D["a"]({radius:e.radius,fill:N.createFill(e),stroke:N.createStroke(e)})})},createLineStyle:function(e){var t=new z["b"]({stroke:N.createStroke(e)});return t},createPolygonStyle:function(e){var t=N.createLineStyle(e);return t.setFill(N.createFill(e)),t},createStroke:function(e){return new R["a"]({color:e.strokeColor,width:e.strokeWidth})},createFill:function(e){return new H["a"]({color:e.fillColor})}},$=(a("99af"),a("284c")),B=a("6cbf"),Z=a("8295"),G=a("f403"),U=(a("c740"),a("2fa7")),q=n["default"].observable({activeFeatures:[],routesCache:{},routeColor:{cycling:"#AAE08F",car:"#67000D",walking:"#2E62DB",rail:"#EC7158",pt:"#EC7158"},ptDetailIcons:{WALKING:{icon:"directions_walk",category:"walking"},HEAVY_RAIL:{icon:"train",category:"rail"},COMMUTER_RAIL:{icon:"train",category:"rail"},COMMUTER_TRAIN:{icon:"train",category:"rail"},HIGH_SPEED_TRAIN:{icon:"train",category:"rail"},TRAM:{icon:"tram",category:"rail"},BUS:{icon:"directions_bus",category:"rail"}},panel:[0]}),W={addActiveFeature:function(e){var t=e[0].get("start"),a=e[0].get("mode"),r=e[0].get("gate"),o="".concat(t,"__").concat(a);"car"===a&&(o+="__".concat(e[0].get("traffic_time")));var i=q.activeFeatures.findIndex((function(e){return e.name===o}));-1!==i?n["default"].set(q.activeFeatures[i].data,r,e):q.activeFeatures.push({name:o,mode:a,data:Object(U["a"])({},r,e)})},clearActiveFeatures:function(){q.activeFeatures=[]},addRoutesInCache:function(e,t){q.routesCache[e]=t},panelChanged:function(e){q.panel=e}};a("a4d3"),a("4de4"),a("13d5"),a("a9e3"),a("e439"),a("dbb4"),a("e25e");function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach((function(t){Object(U["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function Q(e,t){return e.reduce((function(e,a){return J({},e,Object(U["a"])({},a[t],[].concat(Object($["a"])(e[a[t]]||[]),[a])))}),{})}function X(e){e=Number(e);var t=Math.floor(e/3600),a=Math.floor(e%3600/60),n=t>0?t+(1==t?0==a?" Hr":" Hr, ":0==a?" Hrs":" Hrs, "):"",r=a>0?a+(1==a?" Min":" Mins"):"";return n+r}function Y(e,t){var a=parseInt(e.substring(1,3),16),n=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16);a=parseInt(a*(100+t)/100),n=parseInt(n*(100+t)/100),r=parseInt(r*(100+t)/100),a=a<255?a:255,n=n<255?n:255,r=r<255?r:255;var o=1==a.toString(16).length?"0"+a.toString(16):a.toString(16),i=1==n.toString(16).length?"0"+n.toString(16):n.toString(16),s=1==r.toString(16).length?"0"+r.toString(16):r.toString(16);return"#"+o+i+s}var ee={},te={boundaryStyle:function(){return new z["b"]({fill:new H["a"]({color:[0,0,0,0]}),stroke:new R["a"]({color:"#707070",width:5.5})})},getSelectStyle:function(){return new z["b"]({fill:new H["a"]({color:[0,0,0,0]}),stroke:new R["a"]({color:"#fe4a49",width:5,lineDash:[10,10]})})},defaultStyle:function(){var e=new z["b"]({fill:new H["a"]({color:[0,0,0,0]}),stroke:new R["a"]({color:"#707070",width:3})});return[e]},getFeatureHighlightStyle:function(){return[new z["b"]({fill:new H["a"]({color:[0,0,0,0]}),stroke:new R["a"]({color:"#FF0000",width:10}),image:new D["a"]({radius:10,fill:new H["a"]({color:"#FF0000"})})})]},getGatesStyle:function(){var e=function(e){var t=[],a=new z["b"]({image:new B["a"]({anchor:[.5,.9],src:"static/marker-24.png",scale:1}),text:new Z["a"]({offsetX:38,offsetY:-22,font:"bold 14px Roboto",fill:new H["a"]({color:"#fff"}),backgroundFill:new H["a"]({color:"rgb(255, 0, 0)"}),padding:[3,5,2,4],text:e.get("name")})});return t.push(a),t};return e},getRoutesStyle:function(){var e=function(e){var t=[],a=e.get("mode"),n=[0,0,0,0];n="pt"===a?q.routeColor[q.ptDetailIcons[e.get("transit_type")].category]:q.routeColor[a];var r=ee["line_"+n];r||(r=[new z["b"]({stroke:new R["a"]({color:Y(n,-10),width:9})}),new z["b"]({stroke:new R["a"]({color:Y(n,0),width:5})})],ee["line_"+n]=r),t.push.apply(t,Object($["a"])(r));var o=e.getGeometry().getFirstCoordinate(),i=e.getGeometry().getLastCoordinate();if("pt"===a&&"rail"===q.ptDetailIcons[e.get("transit_type")].category){var s="pt_rail_".concat(o[0],"_").concat(o[1],"_").concat(e.get("transit_type")),c=ee[s];c||(c=new z["b"]({geometry:new G["a"]([o[0],o[1]]),image:new B["a"]({src:"static/".concat(q.ptDetailIcons[e.get("transit_type")].icon,".png"),anchor:[.5,.9],scale:1})}),ee[s]=c),t.push(c)}else{var l="start_point_".concat(o[0],"_").concat(o[1]),u=ee[l];u||(u=new z["b"]({geometry:new G["a"]([o[0],o[1]]),image:new D["a"]({radius:6,fill:new H["a"]({color:"#FFFFFF"}),stroke:new R["a"]({color:"#000000",width:3})})}),ee[l]=u),t.push(u)}var d="end_point_".concat(i[0],"_").concat(i[1]),p=ee[d];return p||(p=new z["b"]({geometry:new G["a"]([i[0],i[1]]),image:new D["a"]({radius:6,fill:new H["a"]({color:"#FFFFFF"}),stroke:new R["a"]({color:"#000000",width:3})})}),ee[d]=p),t.push(p),t};return e}},ae=te,ne=a("9c78");a("3c5c");function re(e,t){return e.replace("{time}",t.time).replace("{base}",t.base).replace("{type}",t.type).replace("{scheme}",t.scheme).replace("{app_id}",t.app_id).replace("{app_code}",t.app_code)}var oe={formatMapping:{MVT:P["a"],GeoJSON:I["a"],TopoJSON:T["a"],KML:E["a"]},getInstance:function(e){if(!e.lid){var t=new Date;e.lid=t.getTime()}return"WMS"===e.type?this.createWmsLayer(e):"WMSTILE"===e.type?this.createWmsTileLayer(e):"XYZ"===e.type?this.createXyzLayer(e):"OSM"===e.type?this.createOsmLayer(e):"BING"===e.type?this.createBingLayer(e):"HERE"===e.type?this.createHereLayer(e):"VECTOR"===e.type?this.createVectorLayer(e):"VECTORTILE"===e.type?this.createVectorTileLayer(e):null},createWmsLayer:function(e){var t=new M["a"]({name:e.name,title:e.title,canEdit:e.canEdit,lid:e.lid,displayInLayerList:e.displayInLayerList,visible:e.visible,opacity:e.opacity,queryable:e.queryable,zIndex:e.zIndex,source:new V["a"]({url:e.url,params:{LAYERS:e.layers,viewparams:e.viewparams},serverType:e.serverType,ratio:e.ratio,attributions:e.attributions})});return t},createWmsTileLayer:function(e){var t=new k["a"]({name:e.name,title:e.title,canEdit:e.canEdit,lid:e.lid,cascadePrint:e.cascadePrint,displayInLayerList:e.displayInLayerList,extent:e.extent,visible:e.visible,opacity:e.opacity,zIndex:e.zIndex,source:new _["a"]({url:e.url,params:{LAYERS:e.layers,TILED:e.tiled,viewparams:e.viewparams},serverType:e.serverType,attributions:e.attributions})});return t},createXyzLayer:function(e){var t=new k["a"]({name:e.name,title:e.title,lid:e.lid,cascadePrint:e.cascadePrint,displayInLayerList:e.displayInLayerList,visible:e.visible,opacity:e.opacity,source:new j["a"]({url:e.hasOwnProperty("accessToken")?e.url+"?access_token="+e.accessToken:e.url,maxZoom:e.maxZoom,attributions:e.attributions})});return t},createOsmLayer:function(e){var t=new k["a"]({name:e.name,title:e.title,lid:e.lid,cascadePrint:e.cascadePrint,displayInLayerList:e.displayInLayerList,visible:e.visible,opacity:e.opacity,source:new S["a"]({url:e.url,maxZoom:e.maxZoom})});return t},createBingLayer:function(e){var t=new L["a"]({key:e.accessToken,imagerySet:e.imagerySet,maxZoom:e.maxZoom}),a=new k["a"]({name:e.name,title:e.title,lid:e.lid,cascadePrint:e.cascadePrint,displayInLayerList:e.displayInLayerList,visible:e.visible,opacity:e.opacity,source:t});return a},createHereLayer:function(e){var t={base:e.map_base,type:e.map_type,scheme:e.map_scheme,app_id:e.app_id,app_code:e.app_code,time:e.time},a=new k["a"]({name:e.name,title:e.title,lid:e.lid,cascadePrint:e.cascadePrint,displayInLayerList:e.displayInLayerList,visible:e.visible,opacity:e.opacity,source:new j["a"]({url:re(e.url,t),maxZoom:e.maxZoom,attributions:e.attributions})});return a},createVectorLayer:function(e){var t=new O["a"]({name:e.name,title:e.title,canEdit:e.canEdit,lid:e.lid,displayInLayerList:e.displayInLayerList,extent:e.extent,visible:e.visible,opacity:e.opacity,zIndex:e.zIndex,source:new F["a"]({url:e.url,format:new this.formatMapping[e.format](e.formatConfig),attributions:e.attributions}),style:N.getInstance(e.style)||ae[e.styleRef],hoverable:e.hoverable,hoverAttribute:e.hoverAttribute});return t},createVectorTileLayer:function(e){var t=new A["a"]({name:e.name,title:e.title,canEdit:e.canEdit,lid:e.lid,displayInLayerList:e.displayInLayerList,visible:e.visible,opacity:e.opacity,source:new C["a"]({url:e.url,format:new this.formatMapping[e.format],attributions:e.attributions}),style:N.getInstance(e.style)||ae[e.styleRef],hoverable:e.hoverable,hoverAttribute:e.hoverAttribute});return t}},ie=a("076a"),se=a("21bc");function ce(e){return!!e&&!!e.match(/^(#|(rgb|hsl)a?\()/)}var le={name:"app-map",props:{color:{type:String,required:!1,default:"red darken-3"}},data:function(){return{zoom:this.$appConfig.map.zoom,center:this.$appConfig.map.center,minZoom:this.$appConfig.map.minZoom,maxZoom:this.$appConfig.map.maxZoom,allLayers:[]}},mounted:function(){var e=this;n["default"].prototype.$map=e.map,m.$emit("ol-map-mounted",e.map),window.setTimeout((function(){e.map.setTarget(document.getElementById("ol-map-container")),e.map.updateSize(),e.setOlButtonColor()}),200)},created:function(){var e=this,t=Object(x["a"])({altShiftDragRotate:e.rotateableMap}),a=new ie["a"]({collapsible:!0});e.map=new b["a"]({layers:[],interactions:t,controls:Object(se["a"])({attribution:!1}).extend([a]),view:new w["a"]({center:e.center||[0,0],zoom:e.zoom,minZoom:e.minZoom,maxZoom:e.maxZoom})});var n=e.createLayers();e.map.getLayers().extend(n)},methods:{createLayers:function(){var e=[],t=Q(this.$appConfig.map.layers,"group"),a=function(){if(!t.hasOwnProperty(n))return"continue";var a=[];t[n].reverse().forEach((function(e){var t=oe.getInstance(e);a.push(t)}));var r=new ne["a"]({name:void 0!==n?n.toString():"Other Layers",layers:a});e.push(r)};for(var n in t)a();return e},setOlButtonColor:function(){var e=this;if(ce(e.color))document.querySelector(".ol-zoom")&&(document.querySelector(".ol-zoom .ol-zoom-in").style.backgroundColor=e.color,document.querySelector(".ol-zoom .ol-zoom-out").style.backgroundColor=e.color),document.querySelector(".ol-rotate")&&(document.querySelector(".ol-rotate .ol-rotate-reset").style.backgroundColor=e.color),document.querySelector(".ol-attribution")&&(document.querySelector(".ol-attribution button[type='button']").style.backgroundColor=e.color);else{var t=e.color.toString().trim().split(" ",2),a=Object(y["a"])(t,2),n=a[0],r=a[1];document.querySelector(".ol-zoom")&&(document.querySelector(".ol-zoom .ol-zoom-in").classList.add(n),document.querySelector(".ol-zoom .ol-zoom-in").classList.add(r),document.querySelector(".ol-zoom .ol-zoom-out").classList.add(n),document.querySelector(".ol-zoom .ol-zoom-out").classList.add(r)),document.querySelector(".ol-rotate")&&(document.querySelector(".ol-rotate .ol-rotate-reset").classList.add(n),document.querySelector(".ol-rotate .ol-rotate-reset").classList.add(r))}}}},ue=le,de=(a("b283"),a("2877")),pe=Object(de["a"])(ue,v,h,!1,null,null,null),fe=pe.exports,ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"justify-space-between":"",column:"","fill-height":""}},[a("v-app-bar",{staticClass:"hidden-sm-and-down",attrs:{flat:"",dark:"",color:e.controlsColor,height:"50"}},[a("v-toolbar-title",[e._v("Erreichbarkeit ICO Obernburg")])],1),a("vue-scroll",[a("v-layout",{staticStyle:{"overflow-y":"auto"},attrs:{"justify-space-between":"",column:"","fill-height":""}},[a("v-expansion-panels",{attrs:{accordion:"",multiple:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[a("v-expansion-panel",[a("v-expansion-panel-header",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.open;return[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs1:""}},[a("v-icon",{class:n?"active-header":"",attrs:{large:""}},[e._v("directions")])],1),a("v-flex",{staticClass:"subtitle-1 pl-4",attrs:{xs10:""}},[a("div",{class:n?"font-weight-medium":""},[e._v(" "+e._s(e.$t("selection.title"))+" ")])])],1)]}}])}),a("v-divider"),a("v-expansion-panel-content",{staticClass:"px-6"},[a("selection")],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.open;return[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs1:""}},[a("v-icon",{class:n?"active-header":"",attrs:{large:""}},[e._v("swap_vert")])],1),a("v-flex",{staticClass:"subtitle-1 pl-4",attrs:{xs10:""}},[a("div",{class:n?"font-weight-medium":""},[e._v(" "+e._s(e.$t("results.title"))+" ")])])],1)]}}])}),a("v-divider"),a("v-expansion-panel-content",[a("results",{staticClass:"px-0 mx-0"})],1)],1)],1)],1)],1),a("Footer")],1)},me=[],ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-select",{attrs:{items:e.startPoints.values,"item-text":"display","item-value":"value",chips:"","deletable-chips":"",label:e.$t("selection.startPoints"),"prepend-icon":"room",multiple:""},on:{change:e.changed},model:{value:e.startPoints.actives,callback:function(t){e.$set(e.startPoints,"actives",t)},expression:"startPoints.actives"}}),a("v-select",{attrs:{items:e.transportModes.values,"item-text":e.transportModesDisplayText,"item-value":"value",chips:"","deletable-chips":"",label:e.$t("selection.transportModes"),"prepend-icon":"emoji_transportation",multiple:""},on:{change:e.changed},scopedSlots:e._u([{key:"selection",fn:function(t){return[a("v-chip",e._b({key:JSON.stringify(t.item.value),attrs:{dark:"",color:e.routeColor[t.item.value],close:"","input-value":t.selected,disabled:t.disabled},on:{"click:close":function(e){return t.parent.selectItem(t.item.value)}}},"v-chip",t.attrs,!1),[a("v-icon",{attrs:{left:""}},[e._v(e._s(t.item.icon))]),e._v(" "+e._s(e.$t("transportModes."+t.item.value))+" ")],1)]}}]),model:{value:e.transportModes.actives,callback:function(t){e.$set(e.transportModes,"actives",t)},expression:"transportModes.actives"}}),a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-checkbox",{staticClass:"ml-3",attrs:{color:"#1976d2",label:""+e.$t("selection.peak")},on:{change:e.changed},model:{value:e.peak,callback:function(t){e.peak=t},expression:"peak"}},[a("template",{slot:"prepend"},[a("v-icon",[e._v("access_time")]),a("span",{staticClass:"v-label theme--light ml-1 mr-2"},[e._v(e._s(e.$t("selection.time")))])],1)],2),a("v-checkbox",{staticClass:"ml-3",attrs:{color:"#1976d2",label:""+e.$t("selection.offPeak")},on:{change:e.changed},model:{value:e.offPeak,callback:function(t){e.offPeak=t},expression:"offPeak"}})],1)],1)},he=[];a("caad"),a("4e827"),a("2532"),a("f5dd"),a("78db"),a("4cdf"),a("0af5"),a("64d9"),a("790a");function ye(e,t){var a=new F["a"]({features:(new I["a"]).readFeatures(e,t)});return a.getFeatures()}var be={created:function(){var e=this;this.$map?(this.map=this.$map,this.onMapBound&&this.onMapBound()):m.$on("ol-map-mounted",(function(t){e.map=t,e.onMapBound&&e.onMapBound()}))}},we={mixins:[be],data:function(){return{peak:!0,offPeak:!1,transportModes:{values:[{display:"Auto",value:"car",icon:"directions_car"},{display:"Öffentlicher Verkehr",value:"pt",icon:"directions_transit"},{display:"Zu Fuß",value:"walking",icon:"directions_walk"},{display:"Fahrrad",value:"cycling",icon:"directions_bike"}],actives:[]},startPoints:{values:[{display:"Obernburg",value:"Obernburg"},{display:"Elsenfeld",value:"Elsenfeld"},{display:"Erlenbach",value:"Erlenbach"},{display:"Klingenberg",value:"Klingenberg"},{display:"Miltenberg",value:"Miltenberg"},{display:"Freudenberg",value:"Freudenberg"},{display:"Frankfurt a.M. Hbf",value:"Frankfurt a.M. Hbf"},{display:"Frankfurt a.M. Flughafen",value:"Frankfurt a.M. Flughafen"},{display:"Aschaffenburg Hbf",value:"Aschaffenburg Hbf"},{display:"Würzburg Hbf",value:"Würzburg Hbf"},{display:"Darmstadt Hbf",value:"Darmstadt Hbf"},{display:"Mannheim Zentrum",value:"Mannheim Zentrum"},{display:"Mannheim Bahnhof",value:"Mannheim Bahnhof"},{display:"Ludwigshafen Zentrum",value:"Ludwigshafen Zentrum"},{display:"Ludwigshafen Hbf",value:"Ludwigshafen Hbf"}],actives:[]},gates:{walking:["tor1","tor2","tor4"],cycling:["tor1","tor2","tor4"],car:["tor1","tor2","tor4"],pt:["tor2"]},hasTime:["car"]}},computed:{routeColor:function(){return q.routeColor}},methods:{onMapBound:function(){this.createRouteLayer(),this.createGatesLayer()},transportModesDisplayText:function(e){return this.$t("transportModes.".concat(e.value))},addActiveFeature:W.addActiveFeature,clearActiveFeatures:W.clearActiveFeatures,addRoutesInCache:W.addRoutesInCache,panelChanged:W.panelChanged,createRouteLayer:function(){var e=this,t=new O["a"]({name:"Routes Layer",zIndex:3,style:ae.getRoutesStyle(),source:new F["a"]});e.map.addLayer(t),this.routeLayer=t},createGatesLayer:function(){var e=this,t=new O["a"]({name:"Gates Layer",zIndex:6,style:ae.getGatesStyle(),source:new F["a"]});e.map.addLayer(t),this.gatesLayer=t,this.fetchGates()},changed:function(){var e=this,t=this;t.clearActiveFeatures(),t.routeLayer.getSource().clear(),t.startPoints.actives.forEach((function(a){t.transportModes.actives.forEach((function(n){t.gates[n]&&t.gates[n].forEach((function(r){var o="".concat(a,"_").concat(r,"_").concat(n);q.panel.length<2&&t.panelChanged([0,1]),t.hasTime.includes(n)?(e.peak&&t.load("".concat(o,"_peak"),n,a,r),e.offPeak&&t.load("".concat(o,"_off_peak"),n,a,r)):t.load(o,n,a,r)}))}))}))},load:function(e,t,a,n){var r=this;q.routesCache[e]?(r.addActiveFeature(q.routesCache[e]),r.routeLayer.getSource().addFeatures(q.routesCache[e]),r.map.getView().fit(this.routeLayer.getSource().getExtent())):r.fetchFile(e,t,a,n)},fetchFile:function(e,t,a,n){var r=this;return fetch("static/routes/"+e+".geojson").then((function(e){return e.json()})).then((function(o){var i=ye(o,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});if(i.forEach((function(e){e.setProperties({mode:t,start:a,gate:n})})),"pt"===t){i=i.filter((function(e){return e.get("duration").value>60}));var s={distance:0};i.forEach((function(e){s.distance+=e.get("distance").value})),i.map((function(e){return e.setProperties({summary:s}),e}))}i.length>1&&i[0].get("step")&&i.sort((function(e,t){return e.get("step")-t.get("step")})),r.addRoutesInCache(e,i),r.addActiveFeature(i),r.routeLayer.getSource().addFeatures(i),r.map.getView().fit(r.routeLayer.getSource().getExtent())}))},fetchGates:function(){var e=this;fetch("static/gates.geojson").then((function(e){return e.json()})).then((function(t){var a=ye(t,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});e.gatesLayer.getSource().addFeatures(a)}))}}},xe=we,ke=a("6544"),_e=a.n(ke),Se=a("ac7c"),Le=a("cc20"),Ae=a("132d"),Ce=a("a722"),Pe=a("b974"),Ie=Object(de["a"])(xe,ve,he,!1,null,null,null),Te=Ie.exports;_e()(Ie,{VCheckbox:Se["a"],VChip:Le["a"],VIcon:Ae["a"],VLayout:Ce["a"],VSelect:Pe["a"]});var Ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-list",[e._l(e.activeFeatures,(function(t,n){return[a("v-list-item",{key:n,staticClass:"pr-0"},[[a("v-list-item-avatar",{staticClass:"mr-4",attrs:{left:""}},[a("v-icon",{attrs:{large:""},domProps:{textContent:e._s(e.getAvatarIcon(t))}})],1),a("v-list-item-content",{staticClass:"text-left"},[a("span",{staticClass:"subtitle-2",domProps:{textContent:e._s(e.getTitle(t))}}),"pt"===t.mode?[a("span",[e._l(t.data.tor2,(function(t,n,r){return[a("span",{key:r,staticStyle:{"margin-bottom":"2px"}},[a("i",{staticClass:"v-icon notranslate material-icons mr-1 theme--light",staticStyle:{"font-size":"20px"}},[e._v(" "+e._s(e.ptDetailIcons[t.get("transit_type")].icon))]),a("span"),a("div",{staticClass:"pt-rectangle mr-1",staticStyle:{"min-height":"10px",cursor:"pointer"},style:{"background-color":e.routeColor[e.ptDetailIcons[t.get("transit_type")].category]},on:{mouseover:function(a){return e.mouseover(t)},mouseleave:function(t){return e.clearHighlight()},click:function(a){return e.clicked(t)}}}),a("span")])]})),a("span",{staticClass:"ml-1"},[a("i",{staticClass:"fas fa-industry v-icon notranslate material-icons theme--light",staticStyle:{"font-size":"18px","margin-bottom":"4px"}})])],2)]:e._e()],2),a("v-list-item-action",{staticClass:"my-0 py-0",class:{"ml-1":"pt"===t.mode}},["pt"!==t.mode?a("table",{staticClass:"detail-gate"},[e._l(t.data,(function(t,n,r){return[a("tr",{key:r,on:{mouseover:function(a){return e.mouseover(t)},mouseleave:function(t){return e.clearHighlight()}}},[a("td",[a("a",{on:{click:function(a){return e.clicked(t)}}},[e._v(e._s(e.$t("results."+n)))])]),a("td",{staticClass:"detail-gate-rectangle",staticStyle:{minWidth:"149px",cursor:"pointer"},style:{"background-color":e.routeColor[t[0].get("mode")]}},[a("span",[e._v(e._s(e.getTimeAndDistance(t)))])])])]}))],2):"pt"===t.mode?[a("span",{staticClass:"subtitle-2",staticStyle:{"text-align":"right","padding-right":"10px"}},[e._v(e._s(e.getTransitTotalDistance(t))),a("br"),e._v(e._s(e.getTransitTotalTime(t)))])]:e._e()],2)]],2),n+1<e.activeFeatures.length?a("v-divider",{key:n+3e3}):e._e()]}))],2)},Oe=[],Fe=(a("b680"),{mixins:[be],data:function(){return{endPointName:"",icon:{walking:"directions_walk",cycling:"directions_bike",pt:"directions_transit",car:"directions_car"},routes:[]}},computed:{routeColor:function(){return q.routeColor},activeFeatures:function(){return q.activeFeatures},ptDetailIcons:function(){return q.ptDetailIcons}},methods:{onMapBound:function(){this.createHightLightLayer()},createHightLightLayer:function(){var e=this,t=new O["a"]({name:"Highlight Layer",style:ae.getFeatureHighlightStyle(),zIndex:4,source:new F["a"]});e.map.addLayer(t),this.highlightLayer=t},getAvatarIcon:function(e){var t=this.icon[e.name.split("__")[1]];return t},getTitle:function(e){var t="".concat(e.name.split("__")[0]," ").concat(this.endPointName);return"car"===e.mode&&(t="(".concat(this.$t("selection."+e.name.split("__")[2]),") ")+t),t},getTimeAndDistance:function(e){var t,a=e[0].get("mode");t="car"===a?{duration:e[0].get("duration").value,distance:e[0].get("distance").value}:e[0].get("summary");var n=X(t.duration);return"".concat(n," (").concat((t.distance/1e3).toFixed(1)," km)")},getTransitTotalTime:function(e){var t=e.data.tor2[0].get("total_traveltime"),a=t.split(":").reverse(),n=0;return a.forEach((function(e,t){var a=parseInt(e,10);0===t?n+=a/3600:1===t?n+=a/60:2===t&&(n+=a)})),"".concat(X(3600*n))},getTransitTotalDistance:function(e){var t="".concat((e.data.tor2[0].get("summary").distance/1e3).toFixed(1)," km");return t},addHighlight:function(e){var t=this;Array.isArray(e)?e.forEach((function(e){t.highlightLayer.getSource().addFeature(e.clone())})):this.highlightLayer.getSource().addFeature(e.clone())},clearHighlight:function(){this.highlightLayer.getSource().clear()},mouseover:function(e){this.addHighlight(e)},clicked:function(e){var t=this;this.addHighlight(e),this.map.getView().fit(this.highlightLayer.getSource().getExtent()),setTimeout((function(){t.clearHighlight()}),1e3)}}}),Ve=Fe,Me=(a("e0c5"),a("ce7e")),je=a("8860"),ze=a("da13"),De=a("1800"),Re=a("8270"),He=a("5d23"),Ne=Object(de["a"])(Ve,Ee,Oe,!1,null,"793bcd28",null),$e=Ne.exports;_e()(Ne,{VDivider:Me["a"],VIcon:Ae["a"],VList:je["a"],VListItem:ze["a"],VListItemAction:De["a"],VListItemAvatar:Re["a"],VListItemContent:He["a"]});var Be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{staticClass:"font-weight-medium",attrs:{height:"40"}},[a("v-btn",{attrs:{small:"",icon:""},on:{click:function(t){return e.changeLocale()}}},[a("v-img",{attrs:{src:e.flag[e.languageSelected],contain:""}})],1),a("v-spacer"),a("a",{staticClass:"footer",attrs:{href:"https://www.mainsite.de/de/industrie-center-obernburg.html",target:"_blank"}},[e._v(" © "+e._s((new Date).getFullYear())+" ICO ")])],1)},Ze=[],Ge={data:function(){return{flag:{de:a("19c2"),en:a("a402")}}},computed:{languageSelected:function(){return s.locale}},methods:{changeLocale:function(){"de"===s.locale?s.locale="en":s.locale="de"}}},Ue=Ge,qe=(a("94f4"),a("8336")),We=a("553a"),Ke=a("adda"),Je=a("2fa4"),Qe=Object(de["a"])(Ue,Be,Ze,!1,null,"4c0f33d8",null),Xe=Qe.exports;_e()(Qe,{VBtn:qe["a"],VFooter:We["a"],VImg:Ke["a"],VSpacer:Je["a"]});var Ye={components:{Selection:Te,Results:$e,Footer:Xe},props:["controlsColor"],computed:{panel:{get:function(){return q.panel},set:function(e){this.panelChanged(e)}}},methods:{panelChanged:W.panelChanged}},et=Ye,tt=(a("265b"),a("40dc")),at=a("cd55"),nt=a("49e2"),rt=a("c865"),ot=a("0393"),it=a("0e8f"),st=a("2a7f"),ct=Object(de["a"])(et,ge,me,!1,null,"91ee665c",null),lt=ct.exports;_e()(ct,{VAppBar:tt["a"],VDivider:Me["a"],VExpansionPanel:at["a"],VExpansionPanelContent:nt["a"],VExpansionPanelHeader:rt["a"],VExpansionPanels:ot["a"],VFlex:it["a"],VIcon:Ae["a"],VLayout:Ce["a"],VToolbarTitle:st["a"]});var ut=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.backgroundLayers.length>0?n("v-speed-dial",{staticStyle:{position:"absolute",bottom:"30px",left:"30px","z-index":"2"},attrs:{direction:"top",transition:"slide-y-reverse-transition"},scopedSlots:e._u([{key:"activator",fn:function(){return e._l(e.backgroundLayers,(function(t,r){return n("v-card",{directives:[{name:"show",rawName:"v-show",value:!0===t.getVisible(),expression:"item.getVisible() === true"}],key:r,staticClass:"mx-auto pa-1 elevation-5",attrs:{"max-width":"80"},on:{click:function(a){return e.selectBaselayer(t)}}},[n("v-img",{staticClass:"white--text",attrs:{src:a("d002")("./"+t.get("name")+".png"),height:"75",gradient:"to bottom, rgba(0,0,0,.2), rgba(0,0,0,.5)"}},[n("v-card-title",{staticClass:"fill-height align-end pl-1 pr-0 mb-0 pb-0 caption",staticStyle:{"font-size":"10px"}},[e._v(e._s(""+t.get("title")))])],1)],1)}))},proxy:!0}],null,!1,2617145631)},[e._l(e.backgroundLayers,(function(t,r){return[n("v-card",{directives:[{name:"show",rawName:"v-show",value:!1===t.getVisible(),expression:"item.getVisible() === false"}],key:r,staticClass:"mx-auto  mt-2 pa-1",attrs:{"max-width":"80"},on:{click:function(a){return e.selectBaselayer(t)}}},[n("v-img",{staticClass:"white--text",attrs:{src:a("d002")("./"+t.get("name")+".png"),height:"75",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[n("v-card-title",{staticClass:"fill-height align-end pl-1 pr-0 mb-0 pb-0 caption",staticStyle:{"font-size":"10px"}},[e._v(e._s(""+t.get("title")))])],1)],1)]}))],2):e._e()},dt=[],pt={mixins:[be],data:function(){return{backgroundLayers:[]}},methods:{onMapBound:function(){var e=this;e.map.getLayers().getArray().forEach((function(t){t instanceof ne["a"]&&"backgroundLayers"===t.get("name")&&(e.backgroundLayers=t.getLayers().getArray())}))},selectBaselayer:function(e){var t=this;t.backgroundLayers.forEach((function(e){e.setVisible(!1)})),e.setVisible(!0)}}},ft=pt,gt=a("b0af"),mt=a("99d9"),vt=a("c73b"),ht=Object(de["a"])(ft,ut,dt,!1,null,null,null),yt=ht.exports;_e()(ht,{VCard:gt["a"],VCardTitle:mt["a"],VImg:Ke["a"],VSpeedDial:vt["a"]});var bt={name:"wg-app",components:{appMap:fe,BackgroundSwitcher:yt,Panel:lt},data:function(){return{bottomSheet:!1,isEmbedded:!1,controlsColor:n["default"].prototype.$appConfig.controlsColor}},mounted:function(){this.isEmbedded=this.$isEmbedded,m.$emit("app-mounted")}},wt=bt,xt=(a("034f"),a("7496")),kt=a("288c"),_t=a("a523"),St=a("a75b"),Lt=a("f774"),At=a("8dd9"),Ct=Object(de["a"])(wt,f,g,!1,null,null,null),Pt=Ct.exports;_e()(Ct,{VApp:xt["a"],VAppBar:tt["a"],VBottomSheet:kt["a"],VBtn:qe["a"],VContainer:_t["a"],VContent:St["a"],VIcon:Ae["a"],VNavigationDrawer:Lt["a"],VSheet:At["a"],VToolbarTitle:st["a"]}),a("5bc0"),a("7e7d"),n["default"].config.productionTip=!1;var It=document.querySelector("#app");n["default"].prototype.$isEmbedded=It.hasAttribute("embedded");var Tt=p.getQueryParam("appCtx"),Et="";Tt&&(Et="-"+Tt.replace(/(\.\.[/])+/g,"")),fetch("static/app-conf"+Et+".json").then((function(e){return e.json()})).then((function(e){n["default"].prototype.$appConfig=e,new n["default"]({el:"#app",vuetify:c,i18n:s,render:function(e){return e(Pt)}})}))},"5f2e":function(e,t,a){e.exports=a.p+"img/bingAerial.efd4986d.png"},6928:function(e,t,a){},"6ce2":function(e){e.exports=JSON.parse('{"appTitle":"ICO Visualization","buttonLabels":{"yes":"Ja","cancel":"Abbrechen","save":"Speichern"},"selection":{"title":"Auswahl","transportModes":"Verkehrsmittel","startPoints":"Startpunkte","time":"Zeit","hour":"h","peak":"HVZ","offPeak":"NVZ","off_peak":"NVZ"},"transportModes":{"car":"Auto","pt":"Öffentlicher Verkehr","walking":"Zu Fuß","cycling":"Fahrrad"},"results":{"title":"Routen","tor1":"Tor 1","tor2":"Tor 2","tor3":"Tor 3","tor4":"Tor 4"},"$vuetify":{"close":"Schließen","dataIterator":{"pageText":"{0} - {1} von {2}","noResultsText":"Keine übereinstimmenden Aufzeichnungen gefunden","loadingText":"Artikel werden geladen ..."},"dataTable":{"itemsPerPageText":"Zeilen pro Seite:","ariaLabel":{"sortDescending":": Absteigend sortiert. Um Sortierung aufzuheben, Option aktivieren.","sortAscending":": Aufsteigend sortiert. Option aktivieren, um absteigend zu sortieren.","sortNone":": Nicht sortiert. Option aktivieren, um aufsteigend zu sortieren."}},"dataFooter":{"itemsPerPageText":"Objekte pro Seite:","itemsPerPageAll":"Alle","nextPage":"Nächste Seite","prevPage":"Vorherige Seite","firstPage":"Erste Seite","lastPage":"Letzte Seite"},"datePicker":{"itemsSelected":"{0} ausgewählt"},"noDataText":"Keine Daten verfügbar","carousel":{"prev":"Vorheriges Bild","next":"Nächstes Bild"},"calendar":{"moreEvents":"{0} mehr"}}}')},7157:function(e,t,a){e.exports=a.p+"img/publicTransport.dd2470a0.png"},"7e7d":function(e,t,a){},"843b":function(e,t,a){},"94f4":function(e,t,a){"use strict";var n=a("f74f"),r=a.n(n);r.a},"95c2":function(e,t,a){e.exports=a.p+"img/osmLight.a25275f2.png"},"9b20":function(e,t,a){},a402:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUCAMAAADImI+JAAAAjVBMVEUAJH0OMIQPMYUQMoVYcKpieK9iea99j71+kL1/kb6Akr6erM6frM6frc6grc+suNTAyd/PFCvaTF7bTV/bTl/bUGHbUWLcVGTcVWXgZXTmucPnipbni5bnjJfnusToj5nowMnpwMnw1tzzwsjzw8nzxsv0x8z14eb32Nz32d357vH57/H79fb8+Pn///8pdguvAAAA4ElEQVR42sXTyRKCMBBF0WZQAUENDogTggMo+v7/8yRpSRm0LHfe9VkknQ7FB+AaWtTmQjTBpTZrsJqJxZmWQtHI/gxtTzGAglxTEzLbMauHRI6iR3kA24DM5ifJHCKSdJ+IKVMNX1jEzKSjHsOe32Uu1x8XWbqugDvDcpNuL8Bt0n8CQjeGb5H4sT/Cny+jxzO5AZdtuikZ3oFqnWbFWI9H5UQ1cJqL2c5vBz66AsepSPYBD9xk3usThh3qDDXrLAXTWCxzSSU7L5i9r1nU0IOixGzFzIAmJcUG375CqOgDi8Q+w2/CRkgAAAAASUVORK5CYII="},a6b1:function(e,t,a){e.exports=a.p+"img/mapboxStreets.db8e0fec.png"},b283:function(e,t,a){"use strict";var n=a("9b20"),r=a.n(n);r.a},d002:function(e,t,a){var n={"./bingAerial.png":"5f2e","./bingTraffic.png":"4913","./hereTraffic.png":"ffe9","./mapboxStreets.png":"a6b1","./osmDark.png":"06eb","./osmLight.png":"95c2","./osmStandard.png":"ddca","./publicTransport.png":"7157"};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id="d002"},ddca:function(e,t,a){e.exports=a.p+"img/osmStandard.4fd0aab4.png"},e0c5:function(e,t,a){"use strict";var n=a("843b"),r=a.n(n);r.a},edd4:function(e){e.exports=JSON.parse('{"appTitle":"ICO Visualization","buttonLabels":{"yes":"Yes","cancel":"Cancel","save":"Save"},"selection":{"title":"Selection","transportModes":"Transport Modes","startPoints":"Start Points","time":"Time","hour":"hr","peak":"Peak","offPeak":"Off-Peak","off_peak":"Off-Peak"},"transportModes":{"car":"Car","pt":"Public Transport","walking":"Walking","cycling":"Cycling"},"results":{"title":"Routes","tor1":"Gate 1","tor2":"Gate 2","tor3":"Gate 3","tor4":"Gate 4"},"$vuetify":{"close":"Close","dataIterator":{"pageText":"{0}-{1} of {2}","noResultsText":"No matching records found","loadingText":"Loading items..."},"dataTable":{"itemsPerPageText":"Rows per page:","ariaLabel":{"sortDescending":": Sorted descending. Activate to remove sorting.","sortAscending":": Sorted ascending. Activate to sort descending.","sortNone":": Not sorted. Activate to sort ascending."}},"dataFooter":{"itemsPerPageText":"Items per page:","itemsPerPageAll":"All","nextPage":"Next page","prevPage":"Previous page","firstPage":"First page","lastPage":"Last page"},"datePicker":{"itemsSelected":"{0} selected"},"noDataText":"No data available","carousel":{"prev":"Previous visual","next":"Next visual"},"calendar":{"moreEvents":"{0} more"}}}')},f74f:function(e,t,a){},ffe9:function(e,t,a){e.exports=a.p+"img/hereTraffic.2fcc09a1.png"}});
//# sourceMappingURL=app.6db6d621.js.map