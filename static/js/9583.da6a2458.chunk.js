"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[9583,9764],{19583:(e,r,t)=>{t.r(r),t.d(r,{default:()=>V});var i=t(27366),s=t(76200),a=t(62044),o=t(10064),l=t(41691),n=t(93002),y=t(92026),p=t(97642),u=t(66978),h=t(49861),c=(t(63780),t(93169),t(25243)),m=t(38511),d=t(69912),b=t(31201),f=t(25265),g=t(53866),v=t(82582),S=t(74184),x=t(27961),_=t(6741),C=t(11936),I=t(6693),O=t(46671),L=t(6061),w=t(29598),E=t(71684),N=t(56811),P=t(18870),D=t(99063),M=t(45948),T=t(44041),F=t(77990),R=t(58132),j=t(26704);let J=class extends((0,I.h)((0,D.n)((0,N.M)((0,P.x)((0,_.O)((0,C.Y)((0,L.q)((0,w.I)((0,p.R)((0,E.Q)((0,x.V)((0,O.N)((0,l.p)(S.Z)))))))))))))){constructor(){super(...arguments),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=(0,y.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(u.r9).then((()=>this._fetchService(r)))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,r,t,i){if(!this.loaded||!e)return;const s=e.slice().reverse().flatten((e=>{let{sublayers:r}=e;return r&&r.toArray().reverse()})).toArray();let a=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=(0,f.M9)(i.origin);if(e===f.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;a=(0,R.QV)(s,e,f.s3.SERVICE)}else if(e>f.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");a=(0,R.QV)(s,e.sublayers,(0,f.M9)(e.origin))}}const o=[],l={writeSublayerStructure:a,...i};let n=a;s.forEach((e=>{const r=e.write({},l);o.push(r),n=n||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(r.layers=o),n&&(r.visibleLayers=s.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,r,t,i){const s=i&&i.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new T.R({layer:this,floors:null==i?void 0:i.floors,scale:(0,v.yZ)({extent:e,width:r})*s}),o=a.toJSON();a.destroy();const l=!i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},n=e&&e.spatialReference,y=n.wkid||JSON.stringify(n.toJSON());o.dpi*=s;const p={};if(null!=i&&i.timeExtent){const{start:e,end:r}=i.timeExtent.toJSON();p.time=e&&r&&e===r?""+e:`${null==e?"null":e},${null==r?"null":r}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(p.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:r+","+t,...o,...l,...p}}async fetchImage(e,r,t,i){var a;const l={responseType:"image",signal:null!=(a=null==i?void 0:i.signal)?a:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,r,t,i),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";return null==l.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?(0,s.default)(n,l).then((e=>e.data)).catch((e=>{if((0,u.D_)(e))throw e;throw new o.Z("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:e})})):Promise.reject(new o.Z("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:l.query}))}async fetchRecomputedExtents(){const e={...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:r}=await(0,s.default)(this.url,e),{extent:t,fullExtent:i,timeExtent:o}=r,l=t||i;return{fullExtent:l&&g.Z.fromJSON(l),timeExtent:o&&a.Z.fromJSON({start:o[0],end:o[1]})}}loadAll(){return(0,n.G)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return(0,j.D)(this,e)}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:t}=await(0,s.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});t&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}};(0,i._)([(0,h.Cb)({type:Boolean})],J.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,h.Cb)()],J.prototype,"dpi",void 0),(0,i._)([(0,h.Cb)()],J.prototype,"gdbVersion",void 0),(0,i._)([(0,h.Cb)()],J.prototype,"imageFormat",void 0),(0,i._)([(0,m.r)("imageFormat",["supportedImageFormatTypes"])],J.prototype,"readImageFormat",null),(0,i._)([(0,h.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],J.prototype,"imageMaxHeight",void 0),(0,i._)([(0,h.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],J.prototype,"imageMaxWidth",void 0),(0,i._)([(0,h.Cb)()],J.prototype,"imageTransparency",void 0),(0,i._)([(0,h.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],J.prototype,"isReference",void 0),(0,i._)([(0,h.Cb)({json:{read:!1,write:!1}})],J.prototype,"labelsVisible",void 0),(0,i._)([(0,h.Cb)({type:["ArcGISMapServiceLayer"]})],J.prototype,"operationalLayerType",void 0),(0,i._)([(0,h.Cb)({json:{read:!1,write:!1}})],J.prototype,"popupEnabled",void 0),(0,i._)([(0,h.Cb)()],J.prototype,"sourceJSON",void 0),(0,i._)([(0,h.Cb)({json:{write:{ignoreOrigin:!0}}})],J.prototype,"sublayers",void 0),(0,i._)([(0,b.c)("sublayers",{layers:{type:[F.Z]},visibleLayers:{type:[c.z8]}})],J.prototype,"writeSublayers",null),(0,i._)([(0,h.Cb)({type:["show","hide","hide-children"]})],J.prototype,"listMode",void 0),(0,i._)([(0,h.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],J.prototype,"type",void 0),(0,i._)([(0,h.Cb)(M.HQ)],J.prototype,"url",void 0),J=(0,i._)([(0,d.j)("esri.layers.MapImageLayer")],J);const V=J},44041:(e,r,t)=>{t.d(r,{R:()=>c});var i=t(27366),s=t(85015),a=t(41691),o=t(92026),l=t(49861),n=(t(63780),t(93169),t(25243),t(69912)),y=t(45948),p=t(58132),u=t(10141);const h={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let c=class extends((0,a.p)(s.Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=(0,u.ff)(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,p.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(h[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const r=!(null==(e=this.floors)||!e.length),t=this.visibleSublayers.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return t.length?JSON.stringify(t.reduce(((e,r)=>{const t=(0,u.ff)(this.floors,r),i=(0,o.pC)(t)?(0,u.Hp)(t,r):r.definitionExpression;return e[r.id]=i,e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,t=r=>{const i=this.scale,s=0===i,a=0===r.minScale||i<=r.minScale,o=0===r.maxScale||i>=r.maxScale;r.visible&&(s||a&&o)&&(r.sublayers?r.sublayers.forEach(t):e.unshift(r))};r&&r.forEach(t);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((r,t)=>e[t]!==r))?e:i}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};(0,i._)([(0,l.Cb)({readOnly:!0})],c.prototype,"dynamicLayers",null),(0,i._)([(0,l.Cb)()],c.prototype,"floors",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],c.prototype,"hasDynamicLayers",null),(0,i._)([(0,l.Cb)()],c.prototype,"layer",null),(0,i._)([(0,l.Cb)({readOnly:!0})],c.prototype,"layers",null),(0,i._)([(0,l.Cb)({readOnly:!0})],c.prototype,"layerDefs",null),(0,i._)([(0,l.Cb)({type:Number})],c.prototype,"scale",void 0),(0,i._)([(0,l.Cb)(y.qG)],c.prototype,"timeExtent",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],c.prototype,"version",null),(0,i._)([(0,l.Cb)({readOnly:!0})],c.prototype,"visibleSublayers",null),c=(0,i._)([(0,n.j)("esri.layers.mixins.ExportImageParameters")],c)},10141:(e,r,t)=>{function i(e){var r;const t=e.layer;return"floorInfo"in t&&null!=(r=t.floorInfo)&&r.floorField&&"floors"in e.view?o(e.view.floors,t.floorInfo.floorField):null}function s(e,r){var t;return"floorInfo"in r&&null!=(t=r.floorInfo)&&t.floorField?o(e,r.floorInfo.floorField):null}function a(e,r){const{definitionExpression:t}=r;return e?t?`(${t}) AND (${e})`:e:t}function o(e,r){if(null==e||!e.length)return null;const t=e.filter((e=>""!==e)).map((e=>`'${e}'`));return t.push("''"),`${r} IN (${t.join(",")}) OR ${r} IS NULL`}t.d(r,{Hp:()=>a,cx:()=>i,ff:()=>s})}}]);
//# sourceMappingURL=9583.da6a2458.chunk.js.map