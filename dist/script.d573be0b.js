// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/script.js":[function(require,module,exports) {
var swup = new Swup(); // only this line when included with script tag

var characters = ["&", "#", "*", "+", "%", "?", "£", "@", "§", "$"];
var originalLetter = ["H", "e", "y", ",", "I", "'", "m", "M", "a", "r", "c", "o", ",", "a", "w", "e", "b", "d", "e", "v", "e", "l", "o", "p", "e", "r", "."];
init();
swup.on("contentReplaced", init);

function init() {
  eachLetter(22); // For navbar hiding on smaller screen

  var swipe = new Hammer(document);

  if ($(window).width() <= 1100) {
    swipe.on("panright  panleft", function (e) {
      e.preventDefault();

      if (e.type == "panright") {
        // open menu
        $("#nav-placeholder").css("transform", "translateX(0px)");
        $("#homeBody").css("margin-left", "60px");
      } else {
        // close/hide menu
        $("#nav-placeholder").css("transform", "translateX(-60px)");
        $("#homeBody").css("margin-left", "-60px");
      }
    });
  } else {
    $("#nav-placeholder").css("transform", "translateX(0px)");
    $("#homeBody").css("margin-left", "60px");
  }

  $(window).resize(function () {
    if ($(window).width() <= 1100) {
      swipe.on("panright  panleft", function (e) {
        e.preventDefault();

        if (e.type == "panright") {
          // open menu
          $("#nav-placeholder").css("transform", "translateX(0px)");
          $("#homeBody").css("margin-left", "0px");
        } else {
          // close/hide menu
          $("#nav-placeholder").css("transform", "translateX(-60px)");
          $("#homeBody").css("margin-left", "-60px");
        }
      });
    } else {
      $("#nav-placeholder").css("transform", "translateX(0px)"); //$("#homeBody").css("margin-left", "0px");
    }
  });
  var fileName = location.pathname.split("/").slice(-1);

  if (fileName == "about.html") {
    // Star-1
    setInterval(function () {
      var randomColumn = Math.floor(Math.random() * 21);
      var randomRow = Math.floor(Math.random() * 21);
      $(".star-1").css("grid-column", randomColumn);
      $(".star-1").css("grid-row", randomRow);
    }, 3000); // Star-2

    setInterval(function () {
      var randomColumn = Math.floor(Math.random() * 21);
      var randomRow = Math.floor(Math.random() * 21);
      $(".star-2").css("grid-column", randomColumn);
      $(".star-2").css("grid-row", randomRow);
    }, 4500); // Star-3

    setInterval(function () {
      var randomColumn = Math.floor(Math.random() * 21);
      var randomRow = Math.floor(Math.random() * 21);
      $(".star-3").css("grid-column", randomColumn);
      $(".star-3").css("grid-row", randomRow);
    }, 3500); // Star-4

    setInterval(function () {
      var randomColumn = Math.floor(Math.random() * 21);
      var randomRow = Math.floor(Math.random() * 21);
      $(".star-4").css("grid-column", randomColumn);
      $(".star-4").css("grid-row", randomRow);
    }, 4000); // Star-5

    setInterval(function () {
      var randomColumn = Math.floor(Math.random() * 21);
      var randomRow = Math.floor(Math.random() * 21);
      $(".star-5").css("grid-column", randomColumn);
      $(".star-5").css("grid-row", randomRow);
    }, 5000); // Star-6

    setInterval(function () {
      var randomColumn = Math.floor(Math.random() * 21);
      var randomRow = Math.floor(Math.random() * 21);
      $(".star-6").css("grid-column", randomColumn);
      $(".star-6").css("grid-row", randomRow);
    }, 2500); // Star-7

    setInterval(function () {
      var randomColumn = Math.floor(Math.random() * 21);
      var randomRow = Math.floor(Math.random() * 21);
      $(".star-7").css("grid-column", randomColumn);
      $(".star-7").css("grid-row", randomRow);
    }, 3300); // Star-8

    setInterval(function () {
      var randomColumn = Math.floor(Math.random() * 21);
      var randomRow = Math.floor(Math.random() * 21);
      $(".star-8").css("grid-column", randomColumn);
      $(".star-8").css("grid-row", randomRow);
    }, 4200);
  } //glitching();

} // function glitching() {
//   var bg = $(".myName")[0];
//   var count = 5;
//   for (var i = 0; i < count; i++) {
//     var glitchBox = document.createElement("::after");
//     glitchBox.className = "box";
//     bg.appendChild(glitchBox);
//   }
// Make a glitchy effect for the full page (full image usualy)
//setInterval(function() {
// var glitch = $(".box")
// for (var i = 0; i < glitch.length; i++) {
// 	glitch[i].style.left = Math.floor(Math.random() * 60) + "%"
// 	glitch[i].style.top = Math.floor(Math.random() * 60) + "%"
// 	glitch[i].style.width = Math.floor(Math.random() * 150) + "px"
// 	glitch[i].style.height = Math.floor(Math.random() * 50) + "px"
// }
//}, 400)
// }


var nthChild = 1;
var counter = 0;

(function eachLetter(letterIndex) {
  alert("Letter function called"); // Have the function for each letter queue and change letter

  $(".text-animated").addClass("myName").css("color", "#f3f3f3");
  setTimeout(function () {
    ;

    (function loadHeader(nthChild, i) {
      // let each letter go through ~10 random signs
      setTimeout(function () {
        var randomNbr = Math.floor(Math.random() * (characters.length - 1 - 0 + 1)) + 0;
        $(".text-data" + nthChild).css("visibility", "visible");
        $(".text-data" + nthChild).text(characters[randomNbr]);

        if (--i) {
          loadHeader(nthChild, i);
        } else {
          $(".text-data" + nthChild).text(originalLetter[counter]);
          counter++;
          if (counter > 25) $(".text-animated").removeClass("myName");
        }
      }, 75);
    })(nthChild, characters.length);

    nthChild++;

    if (--letterIndex) {
      eachLetter(letterIndex);
    }
  }, 55);
});
},{}],"../../../../../../Local Files - No Backup/Node/node-v12.14.1-win-x64/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52685" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../Local Files - No Backup/Node/node-v12.14.1-win-x64/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map