!function(e,t,s,n,i){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="function"==typeof a[n]&&a[n],o=r.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,s){if(!o[t]){if(!e[t]){var i="function"==typeof a[n]&&a[n];if(!s&&i)return i(t,!0);if(r)return r(t,!0);if(l&&"string"==typeof t)return l(t);var h=Error("Cannot find module '"+t+"'");throw h.code="MODULE_NOT_FOUND",h}u.resolve=function(s){var n=e[t][1][s];return null!=n?n:s},u.cache={};var d=o[t]=new c.Module(t);e[t][0].call(d.exports,u,d,d.exports,this)}return o[t].exports;function u(e){var t=u.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=o,c.parent=r,c.register=function(t,s){e[t]=[function(e,t){t.exports=s},{}]},Object.defineProperty(c,"root",{get:function(){return a[n]}}),a[n]=c;for(var h=0;h<t.length;h++)c(t[h]);if(s){var d=c(s);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define(function(){return d})}}({"9DKK1":[function(e,t,s){let n;var i=e("./Game/game"),a=e("./Tile/tile");let r=document.getElementById("startGame");document.getElementById("uiContainer"),null==r||r.addEventListener("click",()=>{n&&n.clearConnections(),console.log(n=new i.Game("gameCanvas"));let e=new a.Tile([0]),t=new a.Tile([1]),s=new a.Tile([2]),r=new a.Tile([3]);n.gameMap.data.put(e,[-2,-2]),n.gameMap.data.put(t,[2,2]),n.gameMap.data.put(s,[-2,2]),n.gameMap.data.put(r,[2,-2])})},{"./Game/game":"ciLoE","./Tile/tile":"5KniA"}],ciLoE:[function(e,t,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(s),n.export(s,"Game",()=>c);var i=e("typed-signals"),a=e("./Drawer/drawer"),r=e("./gameMap"),o=e("./gameController"),l=e("../ConnectionHandler/connectionHandler");class c extends l.ConnectionHandler{constructor(e="gameCanvas"){super(),this.signals={zoomChanged:new i.Signal,dataUpdate:new i.Signal,canvasRightPressed:new i.Signal,canvasRightReleased:new i.Signal,canvasLeftReleased:new i.Signal,canvasLeftPressed:new i.Signal,cursorMoved:new i.Signal,mapMoved:new i.Signal};let t=document.getElementById(e);if(!t)throw Error("Canvas not found");this.gameCanvas=t;let s=this.gameCanvas.getContext("2d");if(!s)throw Error("2d context not supported");this.drawer=new a.Drawer(this,s),this.gameMap=new r.GameMap(this),this.gameController=new o.GameController(this),this.drawer.addConnection(this.signals.dataUpdate,this.drawer.generateVisuals,this.drawer),this.gameController.addConnection(this.signals.canvasRightPressed,this.gameController.setClickPosition,this.gameController),this.gameController.addConnection(this.signals.canvasRightReleased,this.gameController.moveMapBasedOnOffset,this.gameController),this.gameController.addConnection(this.signals.canvasRightReleased,this.gameController.clearClickPosition,this.gameController),this.gameController.addConnection(this.signals.cursorMoved,this.gameController.moveMapBasedOnOffset,this.gameController),this.drawer.addConnection(this.signals.mapMoved,this.drawer.updateOffset,this.drawer),this.drawer.addConnection(this.signals.canvasRightReleased,this.drawer.applyOffset,this.drawer),this.drawer.addConnection(this.signals.zoomChanged,this.drawer.updateScale,this.drawer),console.log("Game created")}clearConnections(){this.drawer.clearConnections(),this.gameController.clearConnections(),this.gameMap.clearConnections(),super.clearConnections()}}},{"typed-signals":"32wDN","./Drawer/drawer":"giLy2","./gameMap":"kH5G5","./gameController":"dEw2n","../ConnectionHandler/connectionHandler":"ed1de","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}],"32wDN":[function(e,t,s){Object.defineProperty(s,"__esModule",{value:!0}),s.SignalConnections=s.Signal=s.CollectorWhile0=s.CollectorUntil0=s.CollectorLast=s.CollectorArray=s.Collector=void 0;var n=e("331eb98b854ac4e0");Object.defineProperty(s,"Collector",{enumerable:!0,get:function(){return n.Collector}});var i=e("ba6fb8662fd4dbcb");Object.defineProperty(s,"CollectorArray",{enumerable:!0,get:function(){return i.CollectorArray}});var a=e("933bdf4115a2f1c4");Object.defineProperty(s,"CollectorLast",{enumerable:!0,get:function(){return a.CollectorLast}});var r=e("2380448e8bc4929b");Object.defineProperty(s,"CollectorUntil0",{enumerable:!0,get:function(){return r.CollectorUntil0}});var o=e("417d2b697242769");Object.defineProperty(s,"CollectorWhile0",{enumerable:!0,get:function(){return o.CollectorWhile0}});var l=e("383be5a03abf4ceb");Object.defineProperty(s,"Signal",{enumerable:!0,get:function(){return l.Signal}});var c=e("afda5e9c45e025b7");Object.defineProperty(s,"SignalConnections",{enumerable:!0,get:function(){return c.SignalConnections}})},{"331eb98b854ac4e0":"1BztN",ba6fb8662fd4dbcb:"cMSRJ","933bdf4115a2f1c4":"4IiSk","2380448e8bc4929b":"d51gK","417d2b697242769":"13NfD","383be5a03abf4ceb":"8Crhi",afda5e9c45e025b7:"4ZHQ6"}],"1BztN":[function(e,t,s){Object.defineProperty(s,"__esModule",{value:!0}),s.Collector=void 0,s.Collector=class{constructor(e){this.emit=(...t)=>{e.emitCollecting(this,t)}}}},{}],cMSRJ:[function(e,t,s){Object.defineProperty(s,"__esModule",{value:!0}),s.CollectorArray=void 0;let n=e("c0aa894f579afb9e");class i extends n.Collector{constructor(){super(...arguments),this.result=[]}handleResult(e){return this.result.push(e),!0}getResult(){return this.result}reset(){this.result.length=0}}s.CollectorArray=i},{c0aa894f579afb9e:"1BztN"}],"4IiSk":[function(e,t,s){Object.defineProperty(s,"__esModule",{value:!0}),s.CollectorLast=void 0;let n=e("40c8d4c5ebf1de14");class i extends n.Collector{handleResult(e){return this.result=e,!0}getResult(){return this.result}reset(){delete this.result}}s.CollectorLast=i},{"40c8d4c5ebf1de14":"1BztN"}],d51gK:[function(e,t,s){Object.defineProperty(s,"__esModule",{value:!0}),s.CollectorUntil0=void 0;let n=e("37a06e8262631f0e");class i extends n.Collector{constructor(){super(...arguments),this.result=!1}handleResult(e){return this.result=e,this.result}getResult(){return this.result}reset(){this.result=!1}}s.CollectorUntil0=i},{"37a06e8262631f0e":"1BztN"}],"13NfD":[function(e,t,s){Object.defineProperty(s,"__esModule",{value:!0}),s.CollectorWhile0=void 0;let n=e("518a746b6680301");class i extends n.Collector{constructor(){super(...arguments),this.result=!1}handleResult(e){return this.result=e,!this.result}getResult(){return this.result}reset(){this.result=!1}}s.CollectorWhile0=i},{"518a746b6680301":"1BztN"}],"8Crhi":[function(e,t,s){Object.defineProperty(s,"__esModule",{value:!0}),s.Signal=void 0;let n=e("242ffcfd690d9fe6"),i=e("24901b0574330ab1"),a={order:0,isPublic:!0,onUnlink(){}};s.Signal=class{constructor(){this.head=new i.SignalLink(null,null,a),this.hasNewLinks=!1,this.emitDepth=0,this.connectionsCount=0,this.onUnlink=()=>{this.connectionsCount--}}getConnectionsCount(){return this.connectionsCount}hasConnections(){return this.connectionsCount>0}connect(e,{order:t=0,isPublic:s=!0}={}){this.connectionsCount++;let i=this.head.insert({callback:e,order:t,isPublic:s,onUnlink:this.onUnlink});return this.emitDepth>0&&(this.hasNewLinks=!0,i.newLink=!0),new n.SignalConnectionImpl(i)}disconnect(e){for(let t=this.head.next;t!==this.head;t=t.next)if(t.callback===e)return t.unlink(),!0;return!1}disconnectAll(){let{next:e}=this.head;for(;e!==this.head;)e.isPublic&&e.unlink(),e=e.next}emit(...e){this.emitDepth++;for(let t=this.head.next;t!==this.head;t=t.next)t.isEnabled()&&t.callback&&t.callback.apply(null,e);this.emitDepth--,this.unsetNewLink()}emitCollecting(e,t){this.emitDepth++;for(let s=this.head.next;s!==this.head;s=s.next)if(s.isEnabled()&&s.callback){let n=s.callback.apply(null,t);if(!e.handleResult(n))break}this.emitDepth--,this.unsetNewLink()}unsetNewLink(){if(this.hasNewLinks&&0===this.emitDepth){for(let e=this.head.next;e!==this.head;e=e.next)e.newLink=!1;this.hasNewLinks=!1}}}},{"242ffcfd690d9fe6":"V22KN","24901b0574330ab1":"i3yF3"}],V22KN:[function(e,t,s){Object.defineProperty(s,"__esModule",{value:!0}),s.SignalConnectionImpl=void 0,s.SignalConnectionImpl=class{constructor(e){this.link=e}disconnect(){return this.link.unlink()}set enabled(e){this.link.setEnabled(e)}get enabled(){return this.link.isEnabled()}}},{}],i3yF3:[function(e,t,s){Object.defineProperty(s,"__esModule",{value:!0}),s.SignalLink=void 0;class n{constructor(e,t,s){this.enabled=!0,this.newLink=!1,this.prev=null!=e?e:this,this.next=null!=t?t:this,this.order=s.order,this.isPublic=s.isPublic,this.callback=s.callback,this.onUnlink=s.onUnlink}isEnabled(){return this.enabled&&!this.newLink}setEnabled(e){this.enabled=e}unlink(){return!!this.callback&&(delete this.callback,this.next.prev=this.prev,this.prev.next=this.next,this.onUnlink(),!0)}insert(e){let{order:t}=e,s=this.prev;for(;s!==this&&!(s.order<=t);)s=s.prev;let i=new n(s,s.next,e);return s.next=i,i.next.prev=i,i}}s.SignalLink=n},{}],"4ZHQ6":[function(e,t,s){Object.defineProperty(s,"__esModule",{value:!0}),s.SignalConnections=void 0,s.SignalConnections=class{constructor(){this.list=[]}add(e){this.list.push(e)}disconnectAll(){for(let e of this.list)e.disconnect();this.list=[]}getCount(){return this.list.length}isEmpty(){return 0===this.list.length}}},{}],giLy2:[function(e,t,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(s),n.export(s,"Drawer",()=>r);var i=e("../../ConnectionHandler/connectionHandler"),a=e("./visuals");class r extends i.ConnectionHandler{constructor(e,t){super(),this.centerPosition=[0,0],this.offset=[0,0],this.scale=100,this.draw=!0,this.resizeCanvas=()=>{t.canvas.width=window.innerWidth,t.canvas.height=window.innerHeight},this.ctx=t,this.visuals=new a.Visuals,window.addEventListener("resize",this.resizeCanvas),this.resizeCanvas(),this.drawMap(),console.log("Drawer created")}generateVisuals(e){e.data.forEach((e,t)=>{switch(e.state[0]){case 0:this.visuals.set(t,"red");break;case 1:this.visuals.set(t,"green");break;case 2:this.visuals.set(t,"blue");break;case 3:this.visuals.set(t,"yellow");break;default:throw Error("Invalid color")}}),console.log("Visuals generated",this.visuals)}updateScale(e){this.scale*=1-.001*e[1],this.scale=Math.max(50,Math.min(500,this.scale));let t=[this.centerPosition[0]-this.offset[0]/this.scale-this.ctx.canvas.width/2/this.scale,this.centerPosition[1]-this.offset[1]/this.scale-this.ctx.canvas.height/2/this.scale],s=[this.centerPosition[0]-this.offset[0]/this.scale+this.ctx.canvas.width/2/this.scale,this.centerPosition[1]-this.offset[1]/this.scale+this.ctx.canvas.height/2/this.scale];this.visuals.boundWithDataBounds(t,s),t=[this.centerPosition[0]-this.offset[0]/this.scale-this.ctx.canvas.width/2/this.scale-t[0],this.centerPosition[1]-this.offset[1]/this.scale-this.ctx.canvas.height/2/this.scale-t[1]],s=[this.centerPosition[0]-this.offset[0]/this.scale+this.ctx.canvas.width/2/this.scale-s[0],this.centerPosition[1]-this.offset[1]/this.scale+this.ctx.canvas.height/2/this.scale-s[1]],this.centerPosition[0]-=t[0]+s[0],this.centerPosition[1]-=t[1]+s[1]}updateOffset(e){let t=[this.centerPosition[0]-e[0]/this.scale-this.ctx.canvas.width/2/this.scale,this.centerPosition[1]-e[1]/this.scale-this.ctx.canvas.height/2/this.scale],s=[this.centerPosition[0]-e[0]/this.scale+this.ctx.canvas.width/2/this.scale,this.centerPosition[1]-e[1]/this.scale+this.ctx.canvas.height/2/this.scale];this.visuals.boundWithDataBounds(t,s),t=[this.centerPosition[0]-e[0]/this.scale-this.ctx.canvas.width/2/this.scale-t[0],this.centerPosition[1]-e[1]/this.scale-this.ctx.canvas.height/2/this.scale-t[1]],s=[this.centerPosition[0]-e[0]/this.scale+this.ctx.canvas.width/2/this.scale-s[0],this.centerPosition[1]-e[1]/this.scale+this.ctx.canvas.height/2/this.scale-s[1]],this.offset[0]=e[0]+(t[0]+s[0])*this.scale,this.offset[1]=e[1]+(t[1]+s[1])*this.scale}applyOffset(){this.centerPosition[0]-=this.offset[0]/this.scale,this.centerPosition[1]-=this.offset[1]/this.scale,this.offset=[0,0]}drawMap(){this.redraw(),this.draw&&window.requestAnimationFrame(()=>this.drawMap())}redraw(){this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);let e=[this.centerPosition[0]-this.offset[0]/this.scale,this.centerPosition[1]-this.offset[1]/this.scale],t=[Math.floor(e[0]-this.ctx.canvas.width/2/this.scale),Math.floor(e[1]-this.ctx.canvas.height/2/this.scale)],s=[Math.ceil(1+e[0]+this.ctx.canvas.width/2/this.scale),Math.ceil(1+e[1]+this.ctx.canvas.height/2/this.scale)];for(let n=t[0];n<s[0];n++)for(let i=t[1];i<s[1];i++){let t=this.visuals.get(`${n},${i}`);this.drawColor(null!=t?t:"white",[n,i],e)}}drawColor(e,t,s){this.ctx.fillStyle=e;let n=this.ctx.canvas.width/2+(t[0]-s[0]-.5)*this.scale,i=this.ctx.canvas.height/2+(t[1]-s[1]-.5)*this.scale,a=this.scale,r=this.scale;this.ctx.fillRect(n,i,a,r),this.ctx.strokeRect(n,i,a,r)}clearConnections(){this.draw=!1,super.clearConnections(),window.removeEventListener("resize",this.resizeCanvas)}}},{"../../ConnectionHandler/connectionHandler":"ed1de","./visuals":"9Ecw5","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}],ed1de:[function(e,t,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(s),n.export(s,"ConnectionHandler",()=>i);class i{constructor(){this.connections=new Set,console.log("ConnectionHandler created")}clearConnections(){this.connections.forEach(e=>e.disconnect()),this.connections.clear()}addConnection(e,t,s=this){let n=t.bind(s);this.connections.add(e.connect(n))}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}],XTfsy:[function(e,t,s){s.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},s.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.exportAll=function(e,t){return Object.keys(e).forEach(function(s){"default"===s||"__esModule"===s||Object.prototype.hasOwnProperty.call(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:function(){return e[s]}})}),t},s.export=function(e,t,s){Object.defineProperty(e,t,{enumerable:!0,get:s})}},{}],"9Ecw5":[function(e,t,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(s),n.export(s,"Visuals",()=>i);class i{constructor(){this._data=new Map,this.dataBounds=[[0,0],[0,0]],console.log("Visuals created")}set(e,t){this._data.set(e,t);let[s,n]=e.split(",").map(e=>parseInt(e));this.dataBounds[0]=[Math.min(this.dataBounds[0][0],s),Math.min(this.dataBounds[0][1],n)],this.dataBounds[1]=[Math.max(this.dataBounds[1][0],s),Math.max(this.dataBounds[1][1],n)]}get(e){return this._data.get(e)}boundWithDataBounds(e,t=e){e[0]=Math.min(this.dataBounds[1][0],e[0]),e[1]=Math.min(this.dataBounds[1][1],e[1]),t[0]=Math.max(this.dataBounds[0][0],t[0]),t[1]=Math.max(this.dataBounds[0][1],t[1])}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}],kH5G5:[function(e,t,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(s),n.export(s,"GameMap",()=>r);var i=e("./gameData"),a=e("../ConnectionHandler/connectionHandler");class r extends a.ConnectionHandler{constructor(e){super(),this._data=new i.GameData,this.data=new Proxy(this._data,{get:(t,s,n)=>"put"===s?new Proxy(t[s],{apply:(s,n,i)=>{let a=Reflect.apply(s,n,i);return e.signals.dataUpdate.emit(t),a}}):Reflect.get(t,s,n)}),console.log("Map created")}}},{"./gameData":"gRqZf","../ConnectionHandler/connectionHandler":"ed1de","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}],gRqZf:[function(e,t,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(s),n.export(s,"GameData",()=>a);var i=e("../Tile/mapTile");class a{constructor(){this.data=new Map,console.log("Data created")}put(e,t){if((0,i.isMapTile)(e)&&!t)this.data.set(`${e.position}`,e);else{if(!t)throw Error("Position is required");this.data.set(`${t}`,(0,i.MapTile).fromBaseTile(e,t))}}get(e){return this.data.get(`${e}`)}}},{"../Tile/mapTile":"hLDdF","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}],hLDdF:[function(e,t,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(s),n.export(s,"MapTile",()=>a),n.export(s,"isMapTile",()=>r);var i=e("./tile");class a extends i.Tile{constructor(e,t){super(t),this.position=e}static fromBaseTile(e,t){return new a(t,e.state)}}function r(e){return void 0!==e.position}},{"./tile":"5KniA","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}],"5KniA":[function(e,t,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(s),n.export(s,"Tile",()=>a);var i=e("./tileState");class a{constructor(e){if(this._state=new i.TileState,e&&e.length>4)throw Error("Cannot create a tile with more than 4 values");this._state=new i.TileState(e),console.log("Tile created")}mergeState(e){if(e.size+this._state.size>=4)throw Error("Cannot merge states with more than 4 values");e.forEach(e=>this._state.add(e))}get state(){return Array.from(this._state.values())}}},{"./tileState":"90CSt","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}],"90CSt":[function(e,t,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(s),n.export(s,"TileState",()=>i);class i{constructor(e){if(this.state=new Map,this.sumSize=0,this.maxStateSize=3,e)for(let t of e)this.add(t)}isFull(){return this.sumSize>=this.maxStateSize}add(e){if(this.isFull())throw Error("Cannot add more values to a full state");return this.state.has(e)?this.state.set(e,this.state.get(e)+1):this.state.set(e,1),this.sumSize++,this}clear(){this.state.clear(),this.sumSize=0}delete(e){return!!this.state.has(e)&&(this.state.get(e)>1?this.state.set(e,this.state.get(e)-1):this.state.delete(e),this.sumSize--,!0)}forEach(e,t){this.state.forEach((s,n)=>{for(let i=0;i<s;i++)e.call(t,n,n,this)})}has(e){return this.state.has(e)}get size(){return this.sumSize}values(){return Array.from(this.state.entries()).reduce((e,[t,s])=>{for(let n=0;n<s;n++)e.push(t);return e},[]).values()}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}],dEw2n:[function(e,t,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(s),n.export(s,"GameController",()=>a);var i=e("../ConnectionHandler/connectionHandler");class a extends i.ConnectionHandler{constructor(e){super(),this.canvasPressed=!1;let t=t=>{let s=e.gameCanvas.getBoundingClientRect();return[t.clientX-s.left,t.clientY-s.top]},s=e=>[e[0]-this.clickPosition[0],e[1]-this.clickPosition[1]];this.mouseMoveHandler=s=>{s.preventDefault(),e.signals.cursorMoved.emit(t(s))},this.mouseDownHandler=s=>{if(s.preventDefault(),s.target===e.gameCanvas)switch(s.button){case 0:e.signals.canvasLeftPressed.emit(t(s));break;case 2:e.signals.canvasRightPressed.emit(t(s)),this.canvasPressed=!0}},this.mouseUpHandler=s=>{if(s.preventDefault(),this.canvasPressed)switch(s.button){case 0:e.signals.canvasLeftReleased.emit(t(s));break;case 2:e.signals.canvasRightReleased.emit(t(s)),this.canvasPressed=!1}},this.mouseScrollHandler=t=>{e.signals.zoomChanged.emit([t.deltaX,t.deltaY])},this.moveMapBasedOnOffset=t=>{e.signals.mapMoved.emit(s(t))},document.addEventListener("mousedown",this.mouseDownHandler),document.addEventListener("mouseup",this.mouseUpHandler),document.addEventListener("wheel",this.mouseScrollHandler),this.addConnection(e.signals.canvasRightPressed,()=>document.addEventListener("mousemove",this.mouseMoveHandler)),this.addConnection(e.signals.canvasRightReleased,()=>document.removeEventListener("mousemove",this.mouseMoveHandler)),console.log("Controls created")}setClickPosition(e){this.clickPosition=e}clearClickPosition(){this.clickPosition=void 0}clearConnections(){super.clearConnections(),document.removeEventListener("mousedown",this.mouseDownHandler),document.removeEventListener("mouseup",this.mouseUpHandler),document.removeEventListener("mousemove",this.mouseMoveHandler),document.removeEventListener("wheel",this.mouseScrollHandler)}}},{"../ConnectionHandler/connectionHandler":"ed1de","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}]},["9DKK1"],"9DKK1","parcelRequire6b2a");