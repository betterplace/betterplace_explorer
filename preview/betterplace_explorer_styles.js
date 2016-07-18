<<<<<<< HEAD
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./betterplace_explorer.sass", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./betterplace_explorer.sass");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, ".betterplace-explorer {\n  height: calc(100vh - 0px); }\n  @media only screen and (max-width: 767px) {\n    .betterplace-explorer {\n      margin: 0 10px; } }\n\n.bpe--location-input {\n  background: white;\n  position: relative; }\n  @media only screen and (min-width: 768px) {\n    .bpe--location-input {\n      position: absolute;\n      border-bottom: 1px solid #cccccc;\n      top: 0;\n      left: 0;\n      z-index: 100;\n      width: 325px;\n      height: 75px; } }\n\n.bpe--location-input--input {\n  display: block;\n  padding: 10px 30px 10px 10px;\n  box-shadow: none;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  width: 308px;\n  margin: 17px 20px; }\n  @media only screen and (max-width: 767px) {\n    .bpe--location-input--input {\n      width: 100%;\n      margin: 10px 0; } }\n  .browser-edge .bpe--location-input--input,\n  .browser-msie .bpe--location-input--input {\n    padding-right: 5px; }\n\n.bpe--location-input--reset {\n  position: absolute;\n  z-index: 1000;\n  font-size: 3rem;\n  font-weight: 100;\n  cursor: pointer;\n  right: 8px;\n  top: 14px; }\n  @media only screen and (max-width: 767px) {\n    .bpe--location-input--reset {\n      right: 10px;\n      top: 0;\n      line-height: 37px; } }\n  .browser-edge .bpe--location-input--reset,\n  .browser-msie .bpe--location-input--reset {\n    display: none; }\n  .bpe--location-input--reset:hover {\n    text-decoration: none; }\n\n.bpe--map {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 70;\n  width: calc(100% - 650px);\n  height: calc(100vh - 0px); }\n\n@media only screen and (min-width: 768px) {\n  .bpe--pagination {\n    position: absolute;\n    left: 325px;\n    top: 18.75px;\n    width: 325px;\n    height: 56.25px;\n    padding-right: 35px;\n    border-bottom: 1px solid #cccccc; } }\n\n@media only screen and (max-width: 767px) {\n  .bpe--pagination {\n    margin: 10px 0; } }\n\n.bpe--pagination .bpe--pagination--current-page {\n  display: inline-block;\n  width: calc(100% - 36px * 2 - 2px);\n  padding-right: 10px;\n  font-weight: bold; }\n  @media only screen and (min-width: 768px) {\n    .bpe--pagination .bpe--pagination--current-page {\n      text-align: right; } }\n  .bpe--pagination .bpe--pagination--current-page:empty + .bpe--pagination--pager {\n    display: none; }\n\n.bpe--pagination .bpe--pagination--pager {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n  width: 74px; }\n  .bpe--pagination .bpe--pagination--pager li {\n    display: inline-block;\n    margin-right: 1px; }\n  .bpe--pagination .bpe--pagination--pager li a {\n    background: #3f3f3f;\n    color: white;\n    display: inline-block;\n    width: 36px;\n    height: 36px;\n    text-align: center;\n    line-height: 36px; }\n  .bpe--pagination .bpe--pagination--pager li.disabled a {\n    background: #cccccc; }\n  .bpe--pagination .bpe--pagination--pager li:first-child a {\n    border-radius: 4px 0 0 4px; }\n  .bpe--pagination .bpe--pagination--pager li:last-child a {\n    border-radius: 0 4px 4px 0; }\n  .bpe--pagination .bpe--pagination--pager li a:before {\n    content: '';\n    display: inline-block;\n    width: 0;\n    height: 0;\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent; }\n  .bpe--pagination .bpe--pagination--pager li.previous a:before {\n    border-right: 5px solid white; }\n  .bpe--pagination .bpe--pagination--pager li.next a:before {\n    border-left: 5px solid white; }\n\n.bpe--volunteering {\n  border: 1px solid #cccccc; }\n  @media only screen and (min-width: 768px) {\n    .bpe--volunteering {\n      margin-bottom: 20px; } }\n  @media only screen and (max-width: 767px) {\n    .bpe--volunteering {\n      margin-bottom: 10px; } }\n  .bpe--map .bpe--volunteering {\n    border: 0;\n    margin-bottom: 0; }\n  .bpe--volunteering.active h4 {\n    text-decoration: underline; }\n\n.bpe--volunteering--body {\n  font-size: 14px; }\n  @media only screen and (min-width: 768px) {\n    .bpe--volunteering--body {\n      padding-top: 10px; } }\n  @media only screen and (max-width: 767px) {\n    .bpe--volunteering--body {\n      padding-top: 5px; } }\n  .bpe--volunteering--body small {\n    font-size: 12px; }\n  .bpe--volunteering-list .bpe--volunteering--body {\n    display: inline-block;\n    vertical-align: top;\n    width: 48%;\n    padding-right: 2%; }\n  .bpe--map .bpe--volunteering--body {\n    padding: 10px; }\n  .bpe--volunteering--body h4 {\n    font-weight: 400; }\n    @media only screen and (min-width: 768px) {\n      .bpe--volunteering--body h4 {\n        line-height: 21px; } }\n    @media only screen and (max-width: 767px) {\n      .bpe--volunteering--body h4 {\n        font-size: 14px;\n        line-height: 18px;\n        hyphens: auto;\n        -webkit-hyphens: auto;\n        margin-top: 0; } }\n\n.bpe--volunteering--carrier-name {\n  font-size: 13px;\n  color: #949494;\n  position: relative; }\n  @media only screen and (min-width: 768px) {\n    .bpe--volunteering--carrier-name {\n      margin-top: 5px;\n      padding-left: 22px; } }\n  @media only screen and (max-width: 767px) {\n    .bpe--volunteering--carrier-name {\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n      margin-bottom: 0; } }\n  @media only screen and (min-width: 768px) {\n    .bpe--volunteering--carrier-name:before {\n      position: absolute;\n      top: 0;\n      left: 0;\n      content: '';\n      display: inline-block;\n      vertical-align: middle;\n      height: 17px;\n      width: 17px;\n      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABFCAMAAADerVCrAAAAM1BMVEUAAAC60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wSM4IHZAAAAEHRSTlMAwECAYDDg0KDwsBBQIJBwPkbmYQAAAMhJREFUWMPt18sOgjAQheFpGa4Fnfd/Wp1E2sbZcaqpZv5dAzl+JiyAvthx50R4+yYi6zKCmGGSVzMnCFNSFobRCgvAGBaAMSwAY1gAxrAAjGEBGMO6hrEsAGNZFgOwagzCImnUPw+FZ7NABY20tArQTCVGHshIdfFqI30sDmf6I2M+sV685aO51TTIWdS/mk+DXgz5+HarD/mQD/mQD/mQD/3iUFyAl+yDSpMAbRVIoHoe6qvEAW/biRZpEpO0aerw66i/odCoByH8r05KM8SjAAAAAElFTkSuQmCC);\n      background-size: contain;\n      background-repeat: no-repeat; } }\n\n.bpe--volunteering-list .bpe--volunteering--image {\n  display: inline-block;\n  vertical-align: top;\n  width: 46%;\n  margin-right: 4%; }\n\n.bpe--map .bpe--volunteering--image {\n  width: 210px;\n  height: 109px;\n  margin-right: 0; }\n\n.bpe--volunteering-info-bubble .bpe--volunteering-info-bubble-close {\n  top: 1px !important;\n  right: 1px !important; }\n\n@media only screen and (min-width: 768px) {\n  .bpe--volunteering-list {\n    position: absolute;\n    top: 75px;\n    left: 0;\n    width: 650px;\n    height: calc(100vh - 75px - 0px);\n    overflow-x: hidden;\n    overflow-y: scroll;\n    padding: 20px; } }\n\n.bpe--volunteering-list.loading:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  opacity: 0.6;\n  background: white; }\n", ""]);

	// exports


/***/ },
/* 2 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
=======
!function(e){function n(t){if(i[t])return i[t].exports;var o=i[t]={exports:{},id:t,loaded:!1};return e[t].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var i={};return n.m=e,n.c=i,n.p="",n(0)}([function(e,n,i){var t=i(1);"string"==typeof t&&(t=[[e.id,t,""]]);i(3)(t,{});t.locals&&(e.exports=t.locals)},function(e,n,i){n=e.exports=i(2)(),n.push([e.id,".betterplace-explorer{height:calc(100vh - 0px)}@media only screen and (max-width:767px){.betterplace-explorer{margin:0 10px}}.bpe--location-input{background:#fff;position:relative}@media only screen and (min-width:768px){.bpe--location-input{position:absolute;border-bottom:1px solid #ccc;top:0;left:0;z-index:100;width:325px;height:75px}}.bpe--location-input--input{display:block;padding:10px 30px 10px 10px;box-shadow:none;border:1px solid #ccc;border-radius:4px;width:308px;margin:17px 20px}@media only screen and (max-width:767px){.bpe--location-input--input{width:100%;margin:10px 0}}.browser-edge .bpe--location-input--input,.browser-msie .bpe--location-input--input{padding-right:5px}.bpe--location-input--reset{position:absolute;z-index:1000;font-size:3rem;font-weight:100;cursor:pointer;right:8px;top:14px}@media only screen and (max-width:767px){.bpe--location-input--reset{right:10px;top:0;line-height:37px}}.browser-edge .bpe--location-input--reset,.browser-msie .bpe--location-input--reset{display:none}.bpe--location-input--reset:hover{text-decoration:none}.bpe--map{position:absolute;top:0;right:0;z-index:70;width:calc(100% - 650px);height:calc(100vh - 0px)}@media only screen and (min-width:768px){.bpe--pagination{position:absolute;left:325px;top:18.75px;width:325px;height:56.25px;padding-right:35px;border-bottom:1px solid #ccc}}@media only screen and (max-width:767px){.bpe--pagination{margin:10px 0}}.bpe--pagination .bpe--pagination--current-page{display:inline-block;width:calc(100% - 36px * 2 - 2px);padding-right:10px;font-weight:700}@media only screen and (min-width:768px){.bpe--pagination .bpe--pagination--current-page{text-align:right}}.bpe--pagination .bpe--pagination--current-page:empty+.bpe--pagination--pager{display:none}.bpe--pagination .bpe--pagination--pager{list-style-type:none;margin:0;padding:0;display:inline-block;width:74px}.bpe--pagination .bpe--pagination--pager li{display:inline-block;margin-right:1px}.bpe--pagination .bpe--pagination--pager li a{background:#3f3f3f;color:#fff;display:inline-block;width:36px;height:36px;text-align:center;line-height:36px}.bpe--pagination .bpe--pagination--pager li.disabled a{background:#ccc}.bpe--pagination .bpe--pagination--pager li:first-child a{border-radius:4px 0 0 4px}.bpe--pagination .bpe--pagination--pager li:last-child a{border-radius:0 4px 4px 0}.bpe--pagination .bpe--pagination--pager li a:before{content:'';display:inline-block;width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent}.bpe--pagination .bpe--pagination--pager li.previous a:before{border-right:5px solid #fff}.bpe--pagination .bpe--pagination--pager li.next a:before{border-left:5px solid #fff}.bpe--volunteering{border:1px solid #ccc}@media only screen and (min-width:768px){.bpe--volunteering{margin-bottom:20px}}@media only screen and (max-width:767px){.bpe--volunteering{margin-bottom:10px}}.bpe--map .bpe--volunteering{border:0;margin-bottom:0}.bpe--volunteering.active h4{text-decoration:underline}.bpe--volunteering--body{font-size:14px}@media only screen and (min-width:768px){.bpe--volunteering--body{padding-top:10px}}@media only screen and (max-width:767px){.bpe--volunteering--body{padding-top:5px}}.bpe--volunteering--body small{font-size:12px}.bpe--volunteering-list .bpe--volunteering--body{display:inline-block;vertical-align:top;width:48%;padding-right:2%}.bpe--map .bpe--volunteering--body{padding:10px}.bpe--volunteering--body h4{font-weight:400}@media only screen and (min-width:768px){.bpe--volunteering--body h4{line-height:21px}}@media only screen and (max-width:767px){.bpe--volunteering--body h4{font-size:14px;line-height:18px;hyphens:auto;-webkit-hyphens:auto;margin-top:0}}.bpe--volunteering--carrier-name{font-size:14px;color:#949494;padding-left:22px;position:relative}@media only screen and (min-width:768px){.bpe--volunteering--carrier-name{margin-top:5px}}@media only screen and (max-width:767px){.bpe--volunteering--carrier-name{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-bottom:0}}.bpe--volunteering--carrier-name:before{position:absolute;top:0;left:0;content:'';display:inline-block;vertical-align:middle;height:17px;width:17px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABFCAMAAADerVCrAAAAM1BMVEUAAAC60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wSM4IHZAAAAEHRSTlMAwECAYDDg0KDwsBBQIJBwPkbmYQAAAMhJREFUWMPt18sOgjAQheFpGa4Fnfd/Wp1E2sbZcaqpZv5dAzl+JiyAvthx50R4+yYi6zKCmGGSVzMnCFNSFobRCgvAGBaAMSwAY1gAxrAAjGEBGMO6hrEsAGNZFgOwagzCImnUPw+FZ7NABY20tArQTCVGHshIdfFqI30sDmf6I2M+sV685aO51TTIWdS/mk+DXgz5+HarD/mQD/mQD/mQD/3iUFyAl+yDSpMAbRVIoHoe6qvEAW/biRZpEpO0aerw66i/odCoByH8r05KM8SjAAAAAElFTkSuQmCC);background-size:contain;background-repeat:no-repeat}@media only screen and (max-width:767px){.bpe--volunteering--carrier-name:before{display:none}}.bpe--volunteering-list .bpe--volunteering--image{display:inline-block;vertical-align:top;width:46%;margin-right:4%}.bpe--map .bpe--volunteering--image{width:210px;height:109px;margin-right:0}.bpe--volunteering-info-bubble .bpe--volunteering-info-bubble-close{top:1px!important;right:1px!important}@media only screen and (min-width:768px){.bpe--volunteering-list{position:absolute;top:75px;left:0;width:650px;height:calc(100vh - 75px - 0px);overflow-x:hidden;overflow-y:scroll;padding:20px}}.bpe--volunteering-list.loading:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;z-index:1050;opacity:.6;background:#fff}",""])},function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var i=this[n];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(n,i){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(t[r]=!0)}for(o=0;o<n.length;o++){var p=n[o];"number"==typeof p[0]&&t[p[0]]||(i&&!p[2]?p[2]=i:i&&(p[2]="("+p[2]+") and ("+i+")"),e.push(p))}},e}},function(e,n,i){function t(e,n){for(var i=0;i<e.length;i++){var t=e[i],o=b[t.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](t.parts[r]);for(;r<t.parts.length;r++)o.parts.push(d(t.parts[r],n))}else{for(var p=[],r=0;r<t.parts.length;r++)p.push(d(t.parts[r],n));b[t.id]={id:t.id,refs:1,parts:p}}}}function o(e){for(var n=[],i={},t=0;t<e.length;t++){var o=e[t],r=o[0],p=o[1],a=o[2],l=o[3],d={css:p,media:a,sourceMap:l};i[r]?i[r].parts.push(d):n.push(i[r]={id:r,parts:[d]})}return n}function r(e,n){var i=f(),t=v[v.length-1];if("top"===e.insertAt)t?t.nextSibling?i.insertBefore(n,t.nextSibling):i.appendChild(n):i.insertBefore(n,i.firstChild),v.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(n)}}function p(e){e.parentNode.removeChild(e);var n=v.indexOf(e);n>=0&&v.splice(n,1)}function a(e){var n=document.createElement("style");return n.type="text/css",r(e,n),n}function l(e){var n=document.createElement("link");return n.rel="stylesheet",r(e,n),n}function d(e,n){var i,t,o;if(n.singleton){var r=m++;i=x||(x=a(n)),t=s.bind(null,i,r,!1),o=s.bind(null,i,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=l(n),t=c.bind(null,i),o=function(){p(i),i.href&&URL.revokeObjectURL(i.href)}):(i=a(n),t=g.bind(null,i),o=function(){p(i)});return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}function s(e,n,i,t){var o=i?"":t.css;if(e.styleSheet)e.styleSheet.cssText=w(n,o);else{var r=document.createTextNode(o),p=e.childNodes;p[n]&&e.removeChild(p[n]),p.length?e.insertBefore(r,p[n]):e.appendChild(r)}}function g(e,n){var i=n.css,t=n.media;if(t&&e.setAttribute("media",t),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}function c(e,n){var i=n.css,t=n.sourceMap;t&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */");var o=new Blob([i],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}var b={},u=function(e){var n;return function(){return"undefined"==typeof n&&(n=e.apply(this,arguments)),n}},h=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=u(function(){return document.head||document.getElementsByTagName("head")[0]}),x=null,m=0,v=[];e.exports=function(e,n){n=n||{},"undefined"==typeof n.singleton&&(n.singleton=h()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var i=o(e);return t(i,n),function(e){for(var r=[],p=0;p<i.length;p++){var a=i[p],l=b[a.id];l.refs--,r.push(l)}if(e){var d=o(e);t(d,n)}for(var p=0;p<r.length;p++){var l=r[p];if(0===l.refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete b[l.id]}}}};var w=function(){var e=[];return function(n,i){return e[n]=i,e.filter(Boolean).join("\n")}}()}]);
>>>>>>> cd1523482f4b9ade2103930297cdc44429311536
