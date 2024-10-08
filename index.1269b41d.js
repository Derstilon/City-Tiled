// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"higf9":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "42036d7a98ade5a7";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "bfcbaa651269b41d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"fJe33":[function(require,module,exports) {
var _game = require("./Game/game");
var _tile = require("./Tile/tile");
let game;
const startGameBtn = document.getElementById("startGame");
const uiContainer = document.getElementById("uiContainer");
startGameBtn === null || startGameBtn === void 0 || startGameBtn.addEventListener("click", ()=>{
    if (game) game.clearConnections();
    game = new (0, _game.Game)("gameCanvas");
    console.log(game);
    const tile1 = new (0, _tile.Tile)([
        0
    ]);
    const tile2 = new (0, _tile.Tile)([
        1
    ]);
    const tile3 = new (0, _tile.Tile)([
        2
    ]);
    const tile4 = new (0, _tile.Tile)([
        3
    ]);
    game.gameMap.data.put(tile1, [
        -2,
        -2
    ]);
    game.gameMap.data.put(tile2, [
        2,
        2
    ]);
    game.gameMap.data.put(tile3, [
        -2,
        2
    ]);
    game.gameMap.data.put(tile4, [
        2,
        -2
    ]);
});

},{"./Tile/tile":"jLVo4","./Game/game":"82ZN0"}],"jLVo4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tile", ()=>Tile);
var _tileState = require("./tileState");
class Tile {
    constructor(startingState){
        this._state = new (0, _tileState.TileState)();
        if (startingState && startingState.length > 4) throw new Error("Cannot create a tile with more than 4 values");
        this._state = new (0, _tileState.TileState)(startingState);
        console.log("Tile created");
    }
    mergeState(newState) {
        if (newState.size + this._state.size >= 4) throw new Error("Cannot merge states with more than 4 values");
        newState.forEach((value)=>this._state.add(value));
    }
    get state() {
        return Array.from(this._state.values());
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh","./tileState":"2mpLT"}],"j7FRh":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2mpLT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TileState", ()=>TileState);
class TileState {
    constructor(iterable){
        this.state = new Map();
        this.sumSize = 0;
        this.maxStateSize = 3;
        if (iterable) for (const value of iterable)this.add(value);
    }
    isFull() {
        return this.sumSize >= this.maxStateSize;
    }
    add(value) {
        if (this.isFull()) throw new Error("Cannot add more values to a full state");
        if (this.state.has(value)) this.state.set(value, this.state.get(value) + 1);
        else this.state.set(value, 1);
        this.sumSize++;
        return this;
    }
    clear() {
        this.state.clear();
        this.sumSize = 0;
    }
    delete(value) {
        if (this.state.has(value)) {
            if (this.state.get(value) > 1) this.state.set(value, this.state.get(value) - 1);
            else this.state.delete(value);
            this.sumSize--;
            return true;
        }
        return false;
    }
    forEach(callbackfn, thisArg) {
        this.state.forEach((value, key)=>{
            for(let i = 0; i < value; i++)callbackfn.call(thisArg, key, key, this);
        });
    }
    has(value) {
        return this.state.has(value);
    }
    get size() {
        return this.sumSize;
    }
    values() {
        return Array.from(this.state.entries()).reduce((acc, [key, value])=>{
            for(let i = 0; i < value; i++)acc.push(key);
            return acc;
        }, []).values();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"82ZN0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Game", ()=>Game);
var _typedSignals = require("typed-signals");
var _drawer = require("./Drawer/drawer");
var _gameMap = require("./gameMap");
var _gameController = require("./gameController");
var _connectionHandler = require("../ConnectionHandler/connectionHandler");
class Game extends (0, _connectionHandler.ConnectionHandler) {
    constructor(canvasClass = "gameCanvas"){
        super();
        this.signals = {
            zoomChanged: new (0, _typedSignals.Signal)(),
            dataUpdate: new (0, _typedSignals.Signal)(),
            canvasRightPressed: new (0, _typedSignals.Signal)(),
            canvasRightReleased: new (0, _typedSignals.Signal)(),
            canvasLeftReleased: new (0, _typedSignals.Signal)(),
            canvasLeftPressed: new (0, _typedSignals.Signal)(),
            cursorMoved: new (0, _typedSignals.Signal)(),
            mapMoved: new (0, _typedSignals.Signal)()
        };
        const canvasElement = document.getElementById(canvasClass);
        if (!canvasElement) throw new Error("Canvas not found");
        this.gameCanvas = canvasElement;
        // make gameCanvas fill the screen and add resize listener
        const ctx = this.gameCanvas.getContext("2d");
        if (!ctx) throw new Error("2d context not supported");
        this.drawer = new (0, _drawer.Drawer)(this, ctx);
        this.gameMap = new (0, _gameMap.GameMap)(this);
        this.gameController = new (0, _gameController.GameController)(this);
        this.drawer.addConnection(this.signals.dataUpdate, this.drawer.generateVisuals, this.drawer);
        this.gameController.addConnection(this.signals.canvasRightPressed, this.gameController.setClickPosition, this.gameController);
        this.gameController.addConnection(this.signals.canvasRightReleased, this.gameController.moveMapBasedOnOffset, this.gameController);
        this.gameController.addConnection(this.signals.canvasRightReleased, this.gameController.clearClickPosition, this.gameController);
        this.gameController.addConnection(this.signals.cursorMoved, this.gameController.moveMapBasedOnOffset, this.gameController);
        this.drawer.addConnection(this.signals.mapMoved, this.drawer.updateOffset, this.drawer);
        this.drawer.addConnection(this.signals.canvasRightReleased, this.drawer.applyOffset, this.drawer);
        this.drawer.addConnection(this.signals.zoomChanged, this.drawer.updateScale, this.drawer);
        console.log("Game created");
    }
    clearConnections() {
        this.drawer.clearConnections();
        this.gameController.clearConnections();
        this.gameMap.clearConnections();
        super.clearConnections();
    }
}

},{"typed-signals":"gpi0Y","./gameMap":"gL6Lm","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh","./gameController":"fEu2W","../ConnectionHandler/connectionHandler":"2Bltm","./Drawer/drawer":"kdf0R"}],"gpi0Y":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SignalConnections = exports.Signal = exports.CollectorWhile0 = exports.CollectorUntil0 = exports.CollectorLast = exports.CollectorArray = exports.Collector = void 0;
var Collector_1 = require("331eb98b854ac4e0");
Object.defineProperty(exports, "Collector", {
    enumerable: true,
    get: function() {
        return Collector_1.Collector;
    }
});
var CollectorArray_1 = require("ba6fb8662fd4dbcb");
Object.defineProperty(exports, "CollectorArray", {
    enumerable: true,
    get: function() {
        return CollectorArray_1.CollectorArray;
    }
});
var CollectorLast_1 = require("933bdf4115a2f1c4");
Object.defineProperty(exports, "CollectorLast", {
    enumerable: true,
    get: function() {
        return CollectorLast_1.CollectorLast;
    }
});
var CollectorUntil0_1 = require("2380448e8bc4929b");
Object.defineProperty(exports, "CollectorUntil0", {
    enumerable: true,
    get: function() {
        return CollectorUntil0_1.CollectorUntil0;
    }
});
var CollectorWhile0_1 = require("417d2b697242769");
Object.defineProperty(exports, "CollectorWhile0", {
    enumerable: true,
    get: function() {
        return CollectorWhile0_1.CollectorWhile0;
    }
});
var Signal_1 = require("383be5a03abf4ceb");
Object.defineProperty(exports, "Signal", {
    enumerable: true,
    get: function() {
        return Signal_1.Signal;
    }
});
var SignalConnections_1 = require("afda5e9c45e025b7");
Object.defineProperty(exports, "SignalConnections", {
    enumerable: true,
    get: function() {
        return SignalConnections_1.SignalConnections;
    }
});

},{"331eb98b854ac4e0":"4Lhev","ba6fb8662fd4dbcb":"9yhEl","933bdf4115a2f1c4":"j6QoA","2380448e8bc4929b":"kMB3k","417d2b697242769":"pAQDl","383be5a03abf4ceb":"eKS9x","afda5e9c45e025b7":"1FDL4"}],"4Lhev":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Collector = void 0;
/**
 * Base class for collectors.
 *
 * @typeparam THandler The function signature to be implemented by handlers.
 */ class Collector {
    /**
     * Create a new collector.
     *
     * @param signal The signal to emit.
     */ constructor(signal){
        // eslint-disable-next-line dot-notation
        this.emit = (...args)=>{
            // eslint-disable-next-line dot-notation
            signal["emitCollecting"](this, args);
        };
    }
}
exports.Collector = Collector;

},{}],"9yhEl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CollectorArray = void 0;
const Collector_1 = require("c0aa894f579afb9e");
/**
 * Returns the result of the all signal handlers from a signal emission in an array.
 *
 * @typeparam THandler The function signature to be implemented by handlers.
 */ class CollectorArray extends Collector_1.Collector {
    constructor(){
        super(...arguments);
        this.result = [];
    }
    handleResult(result) {
        this.result.push(result);
        return true;
    }
    /**
     * Get the list of results from the signal handlers.
     */ getResult() {
        return this.result;
    }
    /**
     * Reset the result
     */ reset() {
        this.result.length = 0;
    }
}
exports.CollectorArray = CollectorArray;

},{"c0aa894f579afb9e":"4Lhev"}],"j6QoA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CollectorLast = void 0;
const Collector_1 = require("40c8d4c5ebf1de14");
/**
 * Returns the result of the last signal handler from a signal emission.
 *
 * @typeparam THandler The function signature to be implemented by handlers.
 */ class CollectorLast extends Collector_1.Collector {
    handleResult(result) {
        this.result = result;
        return true;
    }
    /**
     * Get the result of the last signal handler.
     */ getResult() {
        return this.result;
    }
    /**
     * Reset the result
     */ reset() {
        delete this.result;
    }
}
exports.CollectorLast = CollectorLast;

},{"40c8d4c5ebf1de14":"4Lhev"}],"kMB3k":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CollectorUntil0 = void 0;
const Collector_1 = require("37a06e8262631f0e");
/**
 * Keep signal emissions going while all handlers return true.
 *
 * @typeparam THandler The function signature to be implemented by handlers.
 */ class CollectorUntil0 extends Collector_1.Collector {
    constructor(){
        super(...arguments);
        this.result = false;
    }
    handleResult(result) {
        this.result = result;
        return this.result;
    }
    /**
     * Get the result of the last signal handler.
     */ getResult() {
        return this.result;
    }
    /**
     * Reset the result
     */ reset() {
        this.result = false;
    }
}
exports.CollectorUntil0 = CollectorUntil0;

},{"37a06e8262631f0e":"4Lhev"}],"pAQDl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CollectorWhile0 = void 0;
const Collector_1 = require("518a746b6680301");
/**
 * Keep signal emissions going while all handlers return false.
 *
 * @typeparam THandler The function signature to be implemented by handlers.
 */ class CollectorWhile0 extends Collector_1.Collector {
    constructor(){
        super(...arguments);
        this.result = false;
    }
    handleResult(result) {
        this.result = result;
        return !this.result;
    }
    /**
     * Get the result of the last signal handler.
     */ getResult() {
        return this.result;
    }
    /**
     * Reset the result
     */ reset() {
        this.result = false;
    }
}
exports.CollectorWhile0 = CollectorWhile0;

},{"518a746b6680301":"4Lhev"}],"eKS9x":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Signal = void 0;
const SignalConnection_1 = require("242ffcfd690d9fe6");
const SignalLink_1 = require("24901b0574330ab1");
// eslint-disable-next-line @typescript-eslint/no-empty-function
const headOptions = {
    order: 0,
    isPublic: true,
    onUnlink () {}
};
/**
 * A signal is a way to publish and subscribe to events.
 *
 * @typeparam THandler The function signature to be implemented by handlers.
 */ class Signal {
    constructor(){
        this.head = new SignalLink_1.SignalLink(null, null, headOptions);
        this.hasNewLinks = false;
        this.emitDepth = 0;
        this.connectionsCount = 0;
        this.onUnlink = ()=>{
            this.connectionsCount--;
        };
    }
    /**
     * @returns The number of connections on this signal.
     */ getConnectionsCount() {
        return this.connectionsCount;
    }
    /**
     * @returns true if this signal has connections.
     */ hasConnections() {
        return this.connectionsCount > 0;
    }
    /**
     * Subscribe to this signal.
     *
     * @param callback This callback will be run when emit() is called.
     * @param options Configure options for the connection
     */ connect(callback, { order = 0, isPublic = true } = {}) {
        this.connectionsCount++;
        const link = this.head.insert({
            callback,
            order,
            isPublic,
            onUnlink: this.onUnlink
        });
        if (this.emitDepth > 0) {
            this.hasNewLinks = true;
            link.newLink = true;
        }
        return new SignalConnection_1.SignalConnectionImpl(link);
    }
    /**
     * Unsubscribe from this signal with the original callback instance.
     * While you can use this method, the SignalConnection returned by connect() will not be updated!
     *
     * @param callback The callback you passed to connect().
     */ disconnect(callback) {
        for(let link = this.head.next; link !== this.head; link = link.next)if (link.callback === callback) {
            link.unlink();
            return true;
        }
        return false;
    }
    /**
     * Disconnect all handlers from this signal event.
     */ disconnectAll() {
        let { next } = this.head;
        while(next !== this.head){
            if (next.isPublic) next.unlink();
            next = next.next;
        }
    }
    /**
     * Publish this signal event (call all handlers).
     */ emit(...args) {
        this.emitDepth++;
        for(let link = this.head.next; link !== this.head; link = link.next)if (link.isEnabled() && link.callback) link.callback.apply(null, args);
        this.emitDepth--;
        this.unsetNewLink();
    }
    emitCollecting(collector, args) {
        this.emitDepth++;
        for(let link = this.head.next; link !== this.head; link = link.next)if (link.isEnabled() && link.callback) {
            const result = link.callback.apply(null, args);
            if (!collector.handleResult(result)) break;
        }
        this.emitDepth--;
        this.unsetNewLink();
    }
    unsetNewLink() {
        if (this.hasNewLinks && this.emitDepth === 0) {
            for(let link = this.head.next; link !== this.head; link = link.next)link.newLink = false;
            this.hasNewLinks = false;
        }
    }
}
exports.Signal = Signal;

},{"242ffcfd690d9fe6":"eoxc2","24901b0574330ab1":"iTuJM"}],"eoxc2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SignalConnectionImpl = void 0;
/**
 * Implementation of SignalConnection, for internal use only.
 * @private
 */ class SignalConnectionImpl {
    /**
     * @param link The actual link of the connection.
     */ constructor(link){
        this.link = link;
    }
    disconnect() {
        return this.link.unlink();
    }
    set enabled(enable) {
        this.link.setEnabled(enable);
    }
    get enabled() {
        return this.link.isEnabled();
    }
}
exports.SignalConnectionImpl = SignalConnectionImpl;

},{}],"iTuJM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SignalLink = void 0;
/**
 * SignalLink implements a doubly-linked ring with nodes containing the signal handlers.
 * @private
 */ class SignalLink {
    constructor(prev, next, options){
        this.enabled = true;
        this.newLink = false;
        this.prev = prev !== null && prev !== void 0 ? prev : this;
        this.next = next !== null && next !== void 0 ? next : this;
        this.order = options.order;
        this.isPublic = options.isPublic;
        this.callback = options.callback;
        this.onUnlink = options.onUnlink;
    }
    isEnabled() {
        return this.enabled && !this.newLink;
    }
    setEnabled(flag) {
        this.enabled = flag;
    }
    unlink() {
        if (this.callback) {
            delete this.callback;
            this.next.prev = this.prev;
            this.prev.next = this.next;
            this.onUnlink();
            return true;
        }
        return false;
    }
    insert(options) {
        const { order } = options;
        let after = this.prev;
        while(after !== this){
            if (after.order <= order) break;
            after = after.prev;
        }
        const link = new SignalLink(after, after.next, options);
        after.next = link;
        link.next.prev = link;
        return link;
    }
}
exports.SignalLink = SignalLink;

},{}],"1FDL4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SignalConnections = void 0;
/**
 * Represents a list of connections to a signal for easy disconnect.
 */ class SignalConnections {
    constructor(){
        this.list = [];
    }
    /**
     * Add a connection to the list.
     * @param connection
     */ add(connection) {
        this.list.push(connection);
    }
    /**
     * Disconnect all connections in the list and empty the list.
     */ disconnectAll() {
        for (const connection of this.list)connection.disconnect();
        this.list = [];
    }
    /**
     * @returns The number of connections in this list.
     */ getCount() {
        return this.list.length;
    }
    /**
     * @returns true if this list is empty.
     */ isEmpty() {
        return this.list.length === 0;
    }
}
exports.SignalConnections = SignalConnections;

},{}],"gL6Lm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameMap", ()=>GameMap);
var _gameData = require("./gameData");
var _connectionHandler = require("../ConnectionHandler/connectionHandler");
class GameMap extends (0, _connectionHandler.ConnectionHandler) {
    constructor(game){
        super();
        this._data = new (0, _gameData.GameData)();
        this.data = new Proxy(this._data, {
            get: (target, prop, receiver)=>{
                if (prop === "put") return new Proxy(target[prop], {
                    apply: (target2, thisArg, argArray)=>{
                        const result = Reflect.apply(target2, thisArg, argArray);
                        game.signals.dataUpdate.emit(target);
                        return result;
                    }
                });
                return Reflect.get(target, prop, receiver);
            }
        });
        console.log("Map created");
    }
}

},{"./gameData":"1uLzo","../ConnectionHandler/connectionHandler":"2Bltm","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"1uLzo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameData", ()=>GameData);
var _mapTile = require("../Tile/mapTile");
class GameData {
    constructor(){
        this.data = new Map();
        console.log("Data created");
    }
    put(tile, position) {
        if ((0, _mapTile.isMapTile)(tile) && !position) this.data.set(`${tile.position}`, tile);
        else {
            if (!position) throw new Error("Position is required");
            this.data.set(`${position}`, (0, _mapTile.MapTile).fromBaseTile(tile, position));
        }
    }
    get(position) {
        return this.data.get(`${position}`);
    }
}

},{"../Tile/mapTile":"7ZR66","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"7ZR66":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MapTile", ()=>MapTile);
parcelHelpers.export(exports, "isMapTile", ()=>isMapTile);
var _tile = require("./tile");
class MapTile extends (0, _tile.Tile) {
    constructor(position, startingState){
        super(startingState);
        this.position = position;
    }
    static fromBaseTile(tile, position) {
        return new MapTile(position, tile.state);
    }
}
function isMapTile(tile) {
    return tile.position !== undefined;
}

},{"./tile":"jLVo4","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"2Bltm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConnectionHandler", ()=>ConnectionHandler);
class ConnectionHandler {
    constructor(){
        this.connections = new Set();
        console.log("ConnectionHandler created");
    }
    clearConnections() {
        this.connections.forEach((connection)=>connection.disconnect());
        this.connections.clear();
    }
    addConnection(signal, callback, that = this) {
        const boundCallback = callback.bind(that);
        this.connections.add(signal.connect(boundCallback));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"fEu2W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameController", ()=>GameController);
var _connectionHandler = require("../ConnectionHandler/connectionHandler");
class GameController extends (0, _connectionHandler.ConnectionHandler) {
    constructor(game){
        super();
        this.canvasPressed = false;
        const getRelativePosition = (event)=>{
            const rect = game.gameCanvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            return [
                x,
                y
            ];
        };
        const getOffset = (position)=>{
            return [
                position[0] - this.clickPosition[0],
                position[1] - this.clickPosition[1]
            ];
        };
        this.mouseMoveHandler = (event)=>{
            event.preventDefault();
            game.signals.cursorMoved.emit(getRelativePosition(event));
        };
        this.mouseDownHandler = (event)=>{
            event.preventDefault();
            if (event.target === game.gameCanvas) {
                // get mouse button
                const button = event.button;
                switch(button){
                    case 0:
                        game.signals.canvasLeftPressed.emit(getRelativePosition(event));
                        break;
                    case 2:
                        game.signals.canvasRightPressed.emit(getRelativePosition(event));
                        this.canvasPressed = true;
                        break;
                    case 1:
                        break;
                }
            }
        };
        this.mouseUpHandler = (event)=>{
            event.preventDefault();
            if (this.canvasPressed) {
                const button = event.button;
                switch(button){
                    case 0:
                        game.signals.canvasLeftReleased.emit(getRelativePosition(event));
                        break;
                    case 2:
                        game.signals.canvasRightReleased.emit(getRelativePosition(event));
                        this.canvasPressed = false;
                        break;
                    case 1:
                        break;
                }
            }
        };
        this.mouseScrollHandler = (event)=>{
            // event.preventDefault();
            game.signals.zoomChanged.emit([
                event.deltaX,
                event.deltaY
            ]);
        };
        this.moveMapBasedOnOffset = (position)=>{
            game.signals.mapMoved.emit(getOffset(position));
        };
        document.addEventListener("mousedown", this.mouseDownHandler);
        document.addEventListener("mouseup", this.mouseUpHandler);
        document.addEventListener("wheel", this.mouseScrollHandler);
        this.addConnection(game.signals.canvasRightPressed, ()=>document.addEventListener("mousemove", this.mouseMoveHandler));
        this.addConnection(game.signals.canvasRightReleased, ()=>document.removeEventListener("mousemove", this.mouseMoveHandler));
        console.log("Controls created");
    }
    setClickPosition(position) {
        this.clickPosition = position;
    }
    clearClickPosition() {
        this.clickPosition = undefined;
    }
    clearConnections() {
        super.clearConnections();
        document.removeEventListener("mousedown", this.mouseDownHandler);
        document.removeEventListener("mouseup", this.mouseUpHandler);
        document.removeEventListener("mousemove", this.mouseMoveHandler);
        document.removeEventListener("wheel", this.mouseScrollHandler);
    }
}

},{"../ConnectionHandler/connectionHandler":"2Bltm","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"kdf0R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Drawer", ()=>Drawer);
var _connectionHandler = require("../../ConnectionHandler/connectionHandler");
var _visuals = require("./visuals");
class Drawer extends (0, _connectionHandler.ConnectionHandler) {
    constructor(game, ctx){
        super();
        this.centerPosition = [
            0,
            0
        ];
        this.offset = [
            0,
            0
        ];
        this.scale = 100;
        this.draw = true;
        this.resizeCanvas = ()=>{
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
        };
        this.ctx = ctx;
        this.visuals = new (0, _visuals.Visuals)();
        window.addEventListener("resize", this.resizeCanvas);
        this.resizeCanvas();
        this.drawMap();
        console.log("Drawer created");
    }
    generateVisuals(data) {
        data.data.forEach((value, key)=>{
            switch(value.state[0]){
                case 0:
                    this.visuals.set(key, "red");
                    break;
                case 1:
                    this.visuals.set(key, "green");
                    break;
                case 2:
                    this.visuals.set(key, "blue");
                    break;
                case 3:
                    this.visuals.set(key, "yellow");
                    break;
                default:
                    throw new Error("Invalid color");
            }
        });
        console.log("Visuals generated", this.visuals);
    }
    updateScale(delta) {
        this.scale *= 1 - 0.001 * delta[1];
        this.scale = Math.max(50, Math.min(500, this.scale));
        let origin = [
            this.centerPosition[0] - this.offset[0] / this.scale - this.ctx.canvas.width / 2 / this.scale,
            this.centerPosition[1] - this.offset[1] / this.scale - this.ctx.canvas.height / 2 / this.scale
        ];
        let bound = [
            this.centerPosition[0] - this.offset[0] / this.scale + this.ctx.canvas.width / 2 / this.scale,
            this.centerPosition[1] - this.offset[1] / this.scale + this.ctx.canvas.height / 2 / this.scale
        ];
        this.visuals.boundWithDataBounds(origin, bound);
        origin = [
            this.centerPosition[0] - this.offset[0] / this.scale - this.ctx.canvas.width / 2 / this.scale - origin[0],
            this.centerPosition[1] - this.offset[1] / this.scale - this.ctx.canvas.height / 2 / this.scale - origin[1]
        ];
        bound = [
            this.centerPosition[0] - this.offset[0] / this.scale + this.ctx.canvas.width / 2 / this.scale - bound[0],
            this.centerPosition[1] - this.offset[1] / this.scale + this.ctx.canvas.height / 2 / this.scale - bound[1]
        ];
        this.centerPosition[0] -= origin[0] + bound[0];
        this.centerPosition[1] -= origin[1] + bound[1];
    }
    updateOffset(offset) {
        let origin = [
            this.centerPosition[0] - offset[0] / this.scale - this.ctx.canvas.width / 2 / this.scale,
            this.centerPosition[1] - offset[1] / this.scale - this.ctx.canvas.height / 2 / this.scale
        ];
        let bound = [
            this.centerPosition[0] - offset[0] / this.scale + this.ctx.canvas.width / 2 / this.scale,
            this.centerPosition[1] - offset[1] / this.scale + this.ctx.canvas.height / 2 / this.scale
        ];
        this.visuals.boundWithDataBounds(origin, bound);
        origin = [
            this.centerPosition[0] - offset[0] / this.scale - this.ctx.canvas.width / 2 / this.scale - origin[0],
            this.centerPosition[1] - offset[1] / this.scale - this.ctx.canvas.height / 2 / this.scale - origin[1]
        ];
        bound = [
            this.centerPosition[0] - offset[0] / this.scale + this.ctx.canvas.width / 2 / this.scale - bound[0],
            this.centerPosition[1] - offset[1] / this.scale + this.ctx.canvas.height / 2 / this.scale - bound[1]
        ];
        this.offset[0] = offset[0] + (origin[0] + bound[0]) * this.scale;
        this.offset[1] = offset[1] + (origin[1] + bound[1]) * this.scale;
    }
    applyOffset() {
        this.centerPosition[0] -= this.offset[0] / this.scale;
        this.centerPosition[1] -= this.offset[1] / this.scale;
        this.offset = [
            0,
            0
        ];
    }
    drawMap() {
        this.redraw();
        if (this.draw) window.requestAnimationFrame(()=>this.drawMap());
    }
    redraw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        const relativeCenter = [
            this.centerPosition[0] - this.offset[0] / this.scale,
            this.centerPosition[1] - this.offset[1] / this.scale
        ];
        // Calculate visible bounds of the map
        const origin = [
            Math.floor(relativeCenter[0] - this.ctx.canvas.width / 2 / this.scale),
            Math.floor(relativeCenter[1] - this.ctx.canvas.height / 2 / this.scale)
        ];
        const bound = [
            Math.ceil(1 + relativeCenter[0] + this.ctx.canvas.width / 2 / this.scale),
            Math.ceil(1 + relativeCenter[1] + this.ctx.canvas.height / 2 / this.scale)
        ];
        for(let x = origin[0]; x < bound[0]; x++)for(let y = origin[1]; y < bound[1]; y++){
            const color = this.visuals.get(`${x},${y}`);
            this.drawColor(color !== null && color !== void 0 ? color : "white", [
                x,
                y
            ], relativeCenter);
        }
    // Draw the map
    }
    drawColor(color, position, center) {
        this.ctx.fillStyle = color;
        const x = this.ctx.canvas.width / 2 + (position[0] - center[0] - 0.5) * this.scale;
        const y = this.ctx.canvas.height / 2 + (position[1] - center[1] - 0.5) * this.scale;
        const w = this.scale;
        const h = this.scale;
        this.ctx.fillRect(x, y, w, h);
        this.ctx.strokeRect(x, y, w, h);
    }
    clearConnections() {
        this.draw = false;
        super.clearConnections();
        window.removeEventListener("resize", this.resizeCanvas);
    }
}

},{"../../ConnectionHandler/connectionHandler":"2Bltm","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh","./visuals":"fC74L"}],"fC74L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Visuals", ()=>Visuals);
class Visuals {
    constructor(){
        this._data = new Map();
        this.dataBounds = [
            [
                0,
                0
            ],
            [
                0,
                0
            ]
        ];
        console.log("Visuals created");
    }
    set(key, value) {
        this._data.set(key, value);
        const [x, y] = key.split(",").map((v)=>parseInt(v));
        this.dataBounds[0] = [
            Math.min(this.dataBounds[0][0], x),
            Math.min(this.dataBounds[0][1], y)
        ];
        this.dataBounds[1] = [
            Math.max(this.dataBounds[1][0], x),
            Math.max(this.dataBounds[1][1], y)
        ];
    }
    get(key) {
        return this._data.get(key);
    }
    boundWithDataBounds(origin, bound = origin) {
        origin[0] = Math.min(this.dataBounds[1][0], origin[0]);
        origin[1] = Math.min(this.dataBounds[1][1], origin[1]);
        bound[0] = Math.max(this.dataBounds[0][0], bound[0]);
        bound[1] = Math.max(this.dataBounds[0][1], bound[1]);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}]},["higf9","fJe33"], "fJe33", "parcelRequire6b2a")

