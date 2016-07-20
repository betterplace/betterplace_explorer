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
	exports.push([module.id, ".betterplace-explorer {\n  height: calc(100vh - 0px); }\n  @media only screen and (max-width: 767px) {\n    .betterplace-explorer {\n      margin: 0 10px; } }\n\n.bpe--location-input {\n  background: white;\n  position: relative; }\n  @media only screen and (min-width: 768px) {\n    .bpe--location-input {\n      position: absolute;\n      border-bottom: 1px solid #cccccc;\n      top: 0;\n      left: 0;\n      z-index: 100;\n      width: 325px;\n      height: 75px; } }\n\n.bpe--location-input--input {\n  display: block;\n  padding: 10px 30px 10px 10px;\n  box-shadow: none;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  width: 308px;\n  margin: 17px 20px; }\n  @media only screen and (max-width: 767px) {\n    .bpe--location-input--input {\n      width: 100%;\n      margin: 10px 0; } }\n  .browser-edge .bpe--location-input--input,\n  .browser-msie .bpe--location-input--input {\n    padding-right: 5px; }\n  .bpe--location-input--input[value=''] ~ .bpe--location-input--search-icon {\n    display: block; }\n  .bpe--location-input--input[value=''] ~ .bpe--location-input--reset {\n    display: none; }\n\n.bpe--location-input--search-icon {\n  display: none;\n  position: absolute;\n  right: 10px;\n  height: 17px;\n  width: 17px;\n  opacity: 0.6;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA5CAYAAABj2ui7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMEE4OEE2RjQ2QUYxMUU2ODM2MUJGMkQ0RTlCRTU0MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMEE4OEE3MDQ2QUYxMUU2ODM2MUJGMkQ0RTlCRTU0MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEwQTg4QTZENDZBRjExRTY4MzYxQkYyRDRFOUJFNTQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEwQTg4QTZFNDZBRjExRTY4MzYxQkYyRDRFOUJFNTQzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uBxrQwAAA1BJREFUeNrcmt1t2zAQxxnB79EGUSYQM0HUl34ALexOYGWCOhuoE1SdIPIElZGHIE+lNlAmiLKBvUFJ5NQogizf0SQl6w8c8hB98Mc73h0pn338/JU5FpfmN/7W2korpVVgKD0+3Pf+f+YAKJC2ALtG3rOTJsByCnBbnkWwGAb4LO0XAU7pXNoc7nsGyGgsgBHM+B0Rqk8K9i9MWDQUoA8zrQZyYSkqruH5aWv9WgesvTZ3lKh+QELiLgBjmNVzx9lYRYn49OVbbBMwhrU2lNSk3vVBeicM15SC7Ew+Z5qFPoKw1NELZMOqUdybxT/SDHdVO7ks/NWxhb7OllStIfuVHf8THROoImRJDNe8nXh0QjQlzvBG2iUMuETeI+B6dV9BeFcoQzU5BjAizuoNtGi6rVYF7/xJuGclIQNdwISwHq6kZYaSSAKThQ3VRAcwIrReC0I4YpURIJe1FymAMfK6246kYRLyN2W8WEAfvHJIBSQhm0qg1BgFxNammNnXFpkLLmSYco+wpjDloGJulCG9GGEBOfKlLpWaBAwR1+SOATGJLMAABohrngZosDFlKDQFWLFhdLCN8xzO5iDy2MRlCtCfOiAfaPyBCUAxUkAVNYeOJ3dYD+4QWxTXkBEm+WEBMVkydgy4MAkokIC+w7WHOVkQWEBMG6bCdOUIEHuyICghiuneVw7WYoT03vrx4X5LKRMp0ouZxVClHFlm1DqYIbJpvfMQFiB9eC5m4/0ivSeogFvCcYRpyACeFyKvX+l2MilyLdaQJdP8MtsqByUBrpDey3UBsech/89F2Os3jAy57Wp3R8prfxjtJP1dJp9pvFTn1GwJtmFvPy4o92RIDjU11HjPrfReqQvICYt8n+bM3ldgVRZS3d2ECTibepJwse5uYuxwRV8im5043Hqf5zAeHDOcajhuMDsYzyCceuEVo32w1NEGxpfpHlnowmWNwv6dmT8rVRP3gRE/qHoG4drbKw4DWiN72M6ekr1+LruEiRPUB8wswLU3yqJVxDl0NX6rmBeNrVnV0wxoAdqA64N1Jq/RqduEG0weNM+ThGt6cJJw1O3SycHVgNVU4WrAdKpwNWAJncduanDNOpizt5//B3A0cdTP+ceifwIMAJHe04NKI6MQAAAAAElFTkSuQmCC\");\n    background-size: cover; }\n  @media only screen and (min-width: 768px) {\n    .bpe--location-input--search-icon {\n      top: 30px; } }\n  @media only screen and (max-width: 767px) {\n    .bpe--location-input--search-icon {\n      top: 13px; } }\n\n.bpe--location-input--reset {\n  position: absolute;\n  z-index: 1000;\n  font-size: 3rem;\n  font-weight: 100;\n  cursor: pointer;\n  right: 8px;\n  top: 14px; }\n  @media only screen and (max-width: 767px) {\n    .bpe--location-input--reset {\n      right: 10px;\n      top: 0;\n      line-height: 37px; } }\n  .browser-edge .bpe--location-input--reset,\n  .browser-msie .bpe--location-input--reset {\n    display: none; }\n  .bpe--location-input--reset:hover {\n    text-decoration: none; }\n\n.bpe--map {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 70;\n  width: calc(100% - 650px);\n  height: calc(100vh - 0px); }\n\n@media only screen and (min-width: 768px) {\n  .bpe--pagination {\n    position: absolute;\n    left: 325px;\n    top: 18.75px;\n    width: 325px;\n    height: 56.25px;\n    padding-right: 35px;\n    border-bottom: 1px solid #cccccc; } }\n\n@media only screen and (max-width: 767px) {\n  .bpe--pagination {\n    margin: 10px 0; } }\n\n.bpe--pagination .bpe--pagination--current-page {\n  display: inline-block;\n  width: calc(100% - 36px * 2 - 2px);\n  padding-right: 10px;\n  font-weight: bold; }\n  @media only screen and (min-width: 768px) {\n    .bpe--pagination .bpe--pagination--current-page {\n      text-align: right; } }\n  .bpe--pagination .bpe--pagination--current-page:empty + .bpe--pagination--pager {\n    display: none; }\n\n.bpe--pagination .bpe--pagination--pager {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n  width: 74px; }\n  .bpe--pagination .bpe--pagination--pager li {\n    display: inline-block;\n    margin-right: 1px; }\n  .bpe--pagination .bpe--pagination--pager li a {\n    background: #3f3f3f;\n    color: white;\n    display: inline-block;\n    width: 36px;\n    height: 36px;\n    text-align: center;\n    line-height: 36px; }\n  .bpe--pagination .bpe--pagination--pager li.disabled a {\n    background: #cccccc; }\n  .bpe--pagination .bpe--pagination--pager li:first-child a {\n    border-radius: 4px 0 0 4px; }\n  .bpe--pagination .bpe--pagination--pager li:last-child a {\n    border-radius: 0 4px 4px 0; }\n  .bpe--pagination .bpe--pagination--pager li a:before {\n    content: '';\n    display: inline-block;\n    width: 0;\n    height: 0;\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent; }\n  .bpe--pagination .bpe--pagination--pager li.previous a:before {\n    border-right: 5px solid white; }\n  .bpe--pagination .bpe--pagination--pager li.next a:before {\n    border-left: 5px solid white; }\n\n.bpe--volunteering {\n  border: 1px solid #cccccc; }\n  @media only screen and (min-width: 768px) {\n    .bpe--volunteering {\n      margin-bottom: 20px; } }\n  @media only screen and (max-width: 767px) {\n    .bpe--volunteering {\n      margin-bottom: 10px; } }\n  .bpe--map .bpe--volunteering {\n    border: 0;\n    margin-bottom: 0; }\n\n.bpe--map a:hover {\n  text-decoration: none; }\n  .bpe--map a:hover .bpe--volunteering h4 {\n    text-decoration: underline; }\n\n.bpe--volunteering--body {\n  font-size: 14px; }\n  @media only screen and (min-width: 768px) {\n    .bpe--volunteering--body {\n      padding-top: 10px; } }\n  @media only screen and (max-width: 767px) {\n    .bpe--volunteering--body {\n      padding-top: 5px; } }\n  .bpe--volunteering--body small {\n    font-size: 12px; }\n  .bpe--volunteering-list .bpe--volunteering--body {\n    display: inline-block;\n    vertical-align: top;\n    width: 48%;\n    padding-right: 2%; }\n  .bpe--map .bpe--volunteering--body {\n    padding: 10px; }\n  .bpe--volunteering--body h4 {\n    font-weight: 400; }\n    @media only screen and (min-width: 768px) {\n      .bpe--volunteering--body h4 {\n        line-height: 21px; }\n        .bpe--map .bpe--volunteering--body h4 {\n          font-size: 16px;\n          line-height: 18px; } }\n    @media only screen and (max-width: 767px) {\n      .bpe--volunteering--body h4 {\n        font-size: 14px;\n        line-height: 18px;\n        hyphens: auto;\n        -webkit-hyphens: auto;\n        margin-top: 0; } }\n\n.bpe--volunteering--carrier-name {\n  font-size: 13px;\n  color: #949494;\n  position: relative; }\n  @media only screen and (min-width: 768px) {\n    .bpe--volunteering--carrier-name {\n      margin-top: 5px;\n      padding-left: 22px; } }\n  @media only screen and (max-width: 767px) {\n    .bpe--volunteering--carrier-name {\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n      margin-bottom: 0; } }\n  @media only screen and (min-width: 768px) {\n    .bpe--volunteering--carrier-name:before {\n      position: absolute;\n      top: 0;\n      left: 0;\n      content: '';\n      display: inline-block;\n      vertical-align: middle;\n      height: 17px;\n      width: 17px;\n      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABFCAMAAADerVCrAAAAM1BMVEUAAAC60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wS60wSM4IHZAAAAEHRSTlMAwECAYDDg0KDwsBBQIJBwPkbmYQAAAMhJREFUWMPt18sOgjAQheFpGa4Fnfd/Wp1E2sbZcaqpZv5dAzl+JiyAvthx50R4+yYi6zKCmGGSVzMnCFNSFobRCgvAGBaAMSwAY1gAxrAAjGEBGMO6hrEsAGNZFgOwagzCImnUPw+FZ7NABY20tArQTCVGHshIdfFqI30sDmf6I2M+sV685aO51TTIWdS/mk+DXgz5+HarD/mQD/mQD/mQD/3iUFyAl+yDSpMAbRVIoHoe6qvEAW/biRZpEpO0aerw66i/odCoByH8r05KM8SjAAAAAElFTkSuQmCC);\n      background-size: contain;\n      background-repeat: no-repeat; } }\n\n.bpe--volunteering-list .bpe--volunteering--image {\n  display: inline-block;\n  vertical-align: top;\n  width: 46%;\n  margin-right: 4%; }\n\n.bpe--map .bpe--volunteering--image {\n  width: 210px;\n  height: 109px;\n  margin-right: 0; }\n\n.bpe--volunteering-info-bubble .bpe--volunteering-info-bubble-close {\n  top: 1px !important;\n  right: 1px !important; }\n\n@media only screen and (min-width: 768px) {\n  .bpe--volunteering-list {\n    position: absolute;\n    top: 75px;\n    left: 0;\n    width: 650px;\n    height: calc(100vh - 75px - 0px);\n    overflow-x: hidden;\n    overflow-y: scroll;\n    padding: 20px; } }\n\n.bpe--volunteering-list.loading:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  opacity: 0.6;\n  background: white; }\n\n.bpe--volunteering-list .no-results p {\n  font-size: 22px;\n  line-height: 18px; }\n", ""]);

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