/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 788
() {

// глобальный объект для экспорта логики
window.Site = {};

// Флаг активного JS (для reveal-анимаций и доступности)
document.documentElement.classList.add('js');

/* Polyfills */
(function (e) {
  e.matches = e.matches || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
  e.closest = e.closest || function closest(selector) {
    if (!this) return null;
    if (this.matches(selector)) return this;
    if (!this.parentElement) {
      return null;
    } else return this.parentElement.closest(selector);
  };
})(Element.prototype);
(function (e) {
  var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
  !matches ? e.matches = e.matchesSelector = function matches(selector) {
    var matches = document.querySelectorAll(selector);
    var th = this;
    return Array.prototype.some.call(matches, function (e) {
      return e === th;
    });
  } : e.matches = e.matchesSelector = matches;
})(Element.prototype);

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

;// ./src/js/libs/utils.js
var _this = undefined;
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// Проверка на объект (не массив)
var isObject = function isObject(item) {
  return item && _typeof(item) === 'object' && !Array.isArray(item);
};

// Слияние двух объектов с глубокой вложенностью
var _mergeDeep = function mergeDeep(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  if (!sources.length) return target;
  var source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
        _mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    }
  }
  return _mergeDeep.apply(void 0, [target].concat(sources));
};

// Глубокое клонирование объекта

var _cloneObj = function cloneObj(obj) {
  if (obj === null || _typeof(obj) !== 'object') return obj;
  var newObj = Array.isArray(obj) ? [] : {};
  for (var prop in obj) {
    obj.hasOwnProperty(prop) && (newObj[prop] = _cloneObj(obj[prop]));
  }
  return newObj;
};

// Отложить вызов функции

var throttle = function throttle(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var timeout = null;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (timeout === null) {
      // fn.apply(this, args);

      timeout = setTimeout(function () {
        fn.apply(_this, args);
        timeout = null;
      }, delay);
    }
  };
};

/* window.addEventListener("resize", throttle(() => {
	console.log('hello');
}, 200)); */

// Получить ширину прокрутки
var getScrollSize = function getScrollSize() {
  var outer = document.createElement('div');
  var inner = document.createElement('div');
  outer.style.overflow = 'scroll';
  outer.classList.add('scrollbar');
  document.body.appendChild(outer);
  outer.appendChild(inner);
  var scrollbarSize = outer.offsetWidth - inner.offsetWidth;
  document.body.removeChild(outer);
  return scrollbarSize;
};

// Получить высоту скрытого элемента
var getHeight = function getHeight(el) {
  if (!el) return;
  var computed = window.getComputedStyle(el);
  var height = el.offsetHeight;

  // Если элемент с "border-box", учитываем паддинги и бордеры
  if (computed.boxSizing !== "border-box") {
    height -= parseFloat(computed.paddingTop) + parseFloat(computed.borderBottomWidth) + parseFloat(computed.borderTopWidth) + parseFloat(computed.paddingBottom);
  }

  // Если высота авто и элемент скрыт, клонируем его для вычислений
  if (computed.height === 'auto' && computed.display === 'none') {
    var clone = el.cloneNode(true);
    Object.assign(clone.style, {
      visibility: 'hidden',
      overflow: 'visible',
      maxHeight: 'none',
      display: 'block',
      opacity: '0'
    });
    el.after(clone);
    height = clone.offsetHeight;
    clone.remove();
  }
  return height;
};

/* 
* Плавная прокрутка к заданному элементу 
* @вызов:
* 
import { scrollToId } from "../../js/libs/utils";
scrollToId(document.querySelectorAll('a[href^="#"]'));
* 
*/

var scrollToId = function scrollToId(items) {
  items.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById(item.getAttribute('href').substring(1)).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
};

/* 
* Плавная прокрутка к верху страницы
* @вызов:
* 
import { scrollToTop } from "../../js/libs/utils";
scrollToTop(document.querySelector('a[href^="top"]'));
* 
*/

var scrollToTop = function scrollToTop(item) {
  if (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
};

/* 
* Обновление заданного массива в localStorage
* @вызов:
* 
import { updateLocalStorage } from "../../js/libs/utils";
updateLocalStorage('myArray', 'item1');
updateLocalStorage('myArray', 'item1', false);
* 
*/

var updateLocalStorage = function updateLocalStorage(key, item) {
  var add = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var storage = JSON.parse(localStorage.getItem(key)) || [];
  var updated = add ? _toConsumableArray(new Set([].concat(_toConsumableArray(storage), [item]))) : storage.filter(function (val) {
    return val !== item;
  });
  localStorage.setItem(key, JSON.stringify(updated));
};

/* 
* Простая валидация формы
* @вызов:
* 
import { validate } from "../../js/libs/utils";
input.classList.toggle('error', !validate(input));
* 
*/

var validate = function validate(input) {
  if (!input || !input.dataset.rules) return true;
  var rules = input.dataset.rules.split(',').map(function (rule) {
    return rule.trim();
  }).filter(Boolean);
  if (!rules.length) return true;
  var value = input.value.trim();
  var patterns = {
    req: /.+/,
    omit: /^$/,
    num: /^\d*$/,
    name: /^[a-zA-Zа-яА-ЯёЁ\s-]+$/,
    phone: /^\+?\d{1,4}[-\d()\s]{5,20}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    url: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/i
  };
  var _iterator = _createForOfIteratorHelper(rules),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var rule = _step.value;
      if (rule.startsWith('min:') && value.length < +rule.slice(4)) return false;
      if (rule.startsWith('max:') && value.length > +rule.slice(4)) return false;
      if (rule.startsWith('num:') && (isNaN(+value) || +value > +rule.slice(4))) return false;
      if (patterns[rule] && !patterns[rule].test(value)) return false;
      if (!patterns[rule] && !rule.includes(':')) {
        console.warn("Unknown rule: ".concat(rule));
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
};

/* 
* Изменение высоты формы по мере ввода текста
* @вызов:
* 
import { textareaResize } from "../../js/libs/utils";
document.querySelectorAll('textarea').forEach(autoResizeTextarea);
* 
*/

var textareaResize = function textareaResize(textarea) {
  if (!textarea) return;
  var resize = function resize() {
    var style = getComputedStyle(textarea);
    var borderOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + borderOffset + 'px';
  };
  textarea.addEventListener('input', resize);
  resize();
};
;// ./src/js/libs/makeModal.js
function makeModal_toConsumableArray(r) { return makeModal_arrayWithoutHoles(r) || makeModal_iterableToArray(r) || makeModal_unsupportedIterableToArray(r) || makeModal_nonIterableSpread(); }
function makeModal_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function makeModal_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return makeModal_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? makeModal_arrayLikeToArray(r, a) : void 0; } }
function makeModal_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function makeModal_arrayWithoutHoles(r) { if (Array.isArray(r)) return makeModal_arrayLikeToArray(r); }
function makeModal_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function makeModal_typeof(o) { "@babel/helpers - typeof"; return makeModal_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, makeModal_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { makeModal_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function makeModal_defineProperty(e, r, t) { return (r = makeModal_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, makeModal_toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function makeModal_toPropertyKey(t) { var i = makeModal_toPrimitive(t, "string"); return "symbol" == makeModal_typeof(i) ? i : i + ""; }
function makeModal_toPrimitive(t, r) { if ("object" != makeModal_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != makeModal_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
/* 
* Простое модальное окно. Слушает элементы имеющие data-атрибут с именем 
* укзанным в параметре class при вызове (по умолчанию 'modal'). Выборка элементов 
* для прослушиваения, может уточняться параметром select при вызове. 
* 
* <a href="./" data-modal>some content..</a>:
* если нет значения - берет свое содержимое (some content..)
* 
* <a href="./" data-modal="#someblock"></a>:
* если начинается с "#", то находит элемент с id="someblock"
* 
* <a href="./" data-modal="./images/somepicture.png"></a>:
* если значение есть, но НЕ начинается с "#" - создает элемент img, в src указывает значение data-modal
* 
* <a href="./" data-modal="./images/somepicture.png" rel="gallery"></a>: 
* если значение есть, но НЕ начинается с "#", а так-же имеет не пустой атрибут "rel" - создает элемент img, 
* в src указывает значение data-modal и создает галерею, из всех найденных, с таким же "rel"
* 
* <a href="./" data-modal rel="gallery"><img src="./images/somepicture.png" alt="" /></a>:
* если нет занчения, но есть не пустой атрибут "rel" - не создает img, а использует содержимое, как элемент галереи
* 
* 
* @элемент для прослушивания:
* <span class="somebutton" data-modal="#someblock"></span>
* 
* @вызов:
* 
import { makeModal, slideshow, playbutton, thumbnails } from "../../js/libs/makeModal";
import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import Inputmask from "inputmask";

makeModal({ 
	class: 'modal', 
	preserve: true,
	classActive: 'active'
	select: '.somebutton', 
	modules: [ slideshow, playbutton, thumbnails ],
	slideshow: {
		// navigation: false
	},
	init(underlay) {

	},
	open(modal, button) {
		disablePageScroll();
		
		Inputmask({ 
			"mask": "+7 (999) 999-99-99", 
			showMaskOnHover: false 
		}).mask(this.querySelectorAll('input[type="tel"]'));

		if (modal.slideshow) {
			this.addEventListener('click', (e) => modal.move());
		}
	},
	close() {
		enablePageScroll();
	},
	move(modal) {
		// работает только если подключен slideshow
	}
});
* 
* @типичная структура html для создания галлереи:
* 
<div data-modal="./images/someimage-big-1.png" rel="gallery">
	<img src="./images/someimage-1.png" alt="" />
</div>
<div data-modal="./images/someimage-big-2.png" rel="gallery">
	<img src="./images/someimage-2.png" alt="" />
</div>
<div data-modal="./images/someimage-big-3.png" rel="gallery">
	<img src="./images/someimage-3.png" alt="" />
</div>
* 
* @типичные стили для thumbnails:
* 
&__thumbs {
	overflow: hidden;

	&-wrapper {
		will-change: transform;
		touch-action: pan-y;
		display: flex;
		gap: 16px;
	}

	&-slide {
		aspect-ratio: 2;
		background-size: cover;

		&.active {
			outline: 2px solid orange;
			outline-offset: -2px;
		}
	}
}
* 
*/

var makeModal = function makeModal() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _Modal_brand = /*#__PURE__*/new WeakSet();
  var Modal = /*#__PURE__*/function () {
    function Modal(props) {
      var _this$props$select;
      _classCallCheck(this, Modal);
      _classPrivateMethodInitSpec(this, _Modal_brand);
      this.props = _objectSpread({
        modules: [],
        "class": 'modal',
        preserve: false,
        classActive: 'active'
      }, props);
      this.select = (_this$props$select = this.props.select) !== null && _this$props$select !== void 0 ? _this$props$select : "[data-".concat(this.props["class"], "]");
      this.modal = document.querySelector("#".concat(this.props["class"], "__underlay"));
      this.body = document.querySelector(".".concat(this.props["class"], "__body"));
      this.content = document.querySelector(".".concat(this.props["class"], "__content"));
      this._hooks = {
        open: [],
        close: []
      };
      this.detached = null;
      _assertClassBrand(_Modal_brand, this, _init).call(this);
    }
    return _createClass(Modal, [{
      key: "open",
      value: function open(source) {
        var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.open;
        if (!source) return;
        this.props.preserve && this.restore();
        var isData = source.hasAttribute("data-".concat(this.props["class"]));
        var data = source.dataset[this.props["class"]];
        var content = null;
        var mod = 'self';
        if (source instanceof HTMLElement && !isData) {
          // Прямо переданный целевой блок
          mod = 'custom';
          if (this.props.preserve) {
            content = source;
            this.detached = {
              node: content,
              parent: content.parentNode,
              next: content.nextSibling
            };
          } else {
            content = source.cloneNode(true);
          }
        } else {
          // Обычный режим — кнопка с data-modal
          if (isData && !data) {
            content = source.innerHTML;
          } else if (data.startsWith('#')) {
            var node = document.querySelector(data);
            mod = data.slice(1);
            if (this.props.preserve && node) {
              this.detached = {
                node: node,
                parent: node.parentNode,
                next: node.nextSibling
              };
              content = node;
            } else {
              content = node === null || node === void 0 ? void 0 : node.innerHTML;
            }
          } else {
            content = document.createElement('img');
            content.src = data;
          }
        }
        this.modal.className = this.props["class"];
        this.modal.classList.add("".concat(this.props["class"], "_").concat(mod));
        this.modal.style.display = "block";
        this.content.innerHTML = '';
        this.content.className = "".concat(this.props["class"], "__content");
        this.content['insertAdjacent' + (typeof content === 'string' ? 'HTML' : 'Element')]('beforeend', content !== null && content !== void 0 ? content : '');

        // вызов хука open у плагинов
        this._hooks.open.forEach(function (open) {
          return open(source);
        });
        cb === null || cb === void 0 || cb.call(this.content, this, source);
        return true;
      }
    }, {
      key: "close",
      value: function close() {
        var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.close;
        this.modal.className = "".concat(this.props["class"]);
        this.modal.style.display = "none";
        this.buttons(false);
        this.content.className = "".concat(this.props["class"], "__content");
        this.content.innerHTML = '';
        this.props.preserve && this.restore();

        // вызов хука close у плагинов
        this._hooks.close.forEach(function (close) {
          return close();
        });
        cb === null || cb === void 0 || cb.call(this.content, this);
        return false;
      }
    }, {
      key: "restore",
      value: function restore() {
        if (!this.detached) return;
        var _this$detached = this.detached,
          node = _this$detached.node,
          parent = _this$detached.parent,
          next = _this$detached.next;
        ((next === null || next === void 0 ? void 0 : next.parentNode) === parent ? parent.insertBefore : parent.appendChild).call(parent, node, next);
        this.detached = null;
      }
    }, {
      key: "buttons",
      value: function buttons() {
        var build = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        if (build) {
          this.prev = document.createElement('button');
          this.next = document.createElement('button');
          this.prev.className = "".concat(this.props["class"], "__button ").concat(this.props["class"], "__button_prev");
          this.next.className = "".concat(this.props["class"], "__button ").concat(this.props["class"], "__button_next");
          this.body.append(this.prev);
          this.body.append(this.next);
        } else {
          var _this$prev, _this$next;
          (_this$prev = this.prev) === null || _this$prev === void 0 || _this$prev.remove();
          (_this$next = this.next) === null || _this$next === void 0 || _this$next.remove();
        }
      }
    }]);
  }();
  function _underlay() {
    if (!this.modal) {
      var underlay = document.createElement('div');
      var body = document.createElement('div');
      var close = document.createElement('button');
      var content = document.createElement('div');
      underlay.className = "".concat(this.props["class"]);
      underlay.id = "".concat(this.props["class"], "__underlay");
      body.className = "".concat(this.props["class"], "__body");
      close.className = "".concat(this.props["class"], "__close");
      content.className = "".concat(this.props["class"], "__content");
      body.append(close);
      body.append(content);
      underlay.append(body);
      document.body.append(underlay);
      this.modal = underlay;
      this.body = body;
      this.content = content;
    }
  }
  function _init() {
    var _this = this,
      _this$props$init;
    _assertClassBrand(_Modal_brand, this, _underlay).call(this);

    // инициализация плагинов и их хуков
    this.props.modules.forEach(function (plugin) {
      if (plugin && makeModal_typeof(plugin) === 'object') {
        var _plugin$init;
        (_plugin$init = plugin.init) === null || _plugin$init === void 0 || _plugin$init.call(plugin, _this, _this.props[plugin.name]);
        Object.keys(_this._hooks).forEach(function (hook) {
          if (typeof plugin[hook] === 'function') {
            _this._hooks[hook].push(plugin[hook].bind(plugin, _this));
          }
        });
      }
    });
    document.addEventListener('click', function (e) {
      var el = e.target.closest(_this.select);
      if (el && el.hasAttribute("data-".concat(_this.props["class"]))) {
        e.preventDefault();
        _this.open(el);
      }
      if (e.target == _this.modal || e.target.classList.contains("".concat(_this.props["class"], "__close"))) {
        e.preventDefault();
        _this.close();
      }
    });
    document.addEventListener('keydown', function (e) {
      if (_this.modal.style.display === 'block' && (e.key === "Escape" || e.key === "Esc")) _this.close();
    });
    (_this$props$init = this.props.init) === null || _this$props$init === void 0 || _this$props$init.call(this, this.modal);
  }
  return new Modal(props);
};

// плагин галлереи
var slideshow = (/* unused pure expression or super */ null && ({
  name: 'slideshow',
  init: function init(modal) {
    var _modal$_hooks;
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.props = _objectSpread({
      navigation: true,
      classMod: 'gallery'
    }, props);
    this.setupSlideshow = function (modal, el) {
      var _el$attributes$rel,
        _this2 = this;
      var rel = (_el$attributes$rel = el.attributes.rel) === null || _el$attributes$rel === void 0 ? void 0 : _el$attributes$rel.value;
      if (!rel) return;
      var current = modal.content.querySelector('img, video');
      var append = false;
      var counter = 0;
      makeModal_toConsumableArray(document.querySelectorAll("[rel=\"".concat(rel, "\"]"))).forEach(function (item, i) {
        var source = item.querySelector('img, video');
        var data = item.dataset[modal.props["class"]];
        var child = data ? Object.assign(document.createElement('img'), {
          src: data
        }) : source.cloneNode();
        if (child.src === current.src) {
          Object.assign(current.dataset, source.dataset);
          append = true;
          return;
        }
        modal.content[append ? 'appendChild' : 'insertBefore'](child, append ? null : current);
        Object.assign(child.dataset, source.dataset);
        counter++;
      });
      modal.content.classList.add("".concat(modal.props["class"], "__content_").concat(this.props.classMod));
      current.classList.add("".concat(modal.props.classActive));
      if (counter > 1) {
        modal.slideshow = modal.content.querySelectorAll('img, video');
        modal.cnt = makeModal_toConsumableArray(modal.slideshow).findIndex(function (item) {
          return item.classList.contains(modal.props.classActive);
        });
        if (this.props.navigation) {
          modal.buttons();
          modal.prev.addEventListener('click', function () {
            return _this2.slideshowMove(-1);
          });
          modal.next.addEventListener('click', function () {
            return _this2.slideshowMove();
          });
        }
      }
    };
    this.slideshowMove = function () {
      var _modal$props$move;
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var isIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var slides = modal.slideshow;
      slides[modal.cnt].classList.remove(modal.props.classActive);
      modal.cnt = isIndex ? (value + slides.length) % slides.length : (modal.cnt + value + slides.length) % slides.length;
      slides[modal.cnt].classList.add(modal.props.classActive);
      modal._hooks.move.forEach(function (move) {
        return move();
      });
      (_modal$props$move = modal.props.move) === null || _modal$props$move === void 0 || _modal$props$move.call(modal.content, modal);
    };

    // Добавить новый хук в базовый класс
    (_modal$_hooks = modal._hooks).move || (_modal$_hooks.move = []);

    // Добавить новый метод в базовый класс
    modal.move = this.slideshowMove.bind(this);
  },
  open: function open(modal, el) {
    var data = el.dataset["".concat(modal.props["class"])];
    !!data && data.startsWith('#') || this.setupSlideshow(modal, el);
  },
  close: function close(modal) {
    delete modal.cnt;
    delete modal.slideshow;
    delete modal.slideshow;
  }
}));

// плагин кнопки для воспроизведения видео
var playbutton = (/* unused pure expression or super */ null && ({
  name: 'playbutton',
  init: function init(modal) {
    this.setPlayButton = function (content, video) {
      var play = content.querySelector('.modal__play');
      if (!!(video !== null && video !== void 0 && video.canPlayType)) {
        video.controls = true;
        play || (play = document.createElement('button'));
        play.className = 'modal__play';
        play.addEventListener('click', function (e) {
          return video.play();
        });
        content.append(play);
        ['pause', 'ended', 'playing'].forEach(function (event) {
          video.addEventListener(event, function (e) {
            play.classList.toggle('playing', !(video.paused || video.ended));
          });
        });
      } else {
        var _play;
        content.querySelectorAll('video').forEach(function (video) {
          return video.pause();
        });
        (_play = play) === null || _play === void 0 || _play.remove();
      }
    };
  },
  open: function open(modal, el) {
    var content = modal.content,
      slideshow = modal.slideshow,
      props = modal.props;
    var active = slideshow ? ".".concat(props.classActive) : '';
    this.setPlayButton(content, content.querySelector("video".concat(active)));
  },
  move: function move(modal) {
    var content = modal.content,
      props = modal.props;
    var active = ".".concat(props.classActive);
    this.setPlayButton(content, content.querySelector("video".concat(active)));
  }
}));

// плагин миниатюр для навигации в галерее
var thumbnails = (/* unused pure expression or super */ null && ({
  name: 'thumbnails',
  init: function init(modal) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.props = _objectSpread({
      count: 4,
      // сколько миниатюр видно одновременно
      maxSkip: 3,
      duration: 0.3,
      dragThreshold: 5
    }, props);
    this.isDragging = false;
    this.modal = modal;
    this.index = 0;
    this._boundOnMove = this.onDrag.bind(this);
    this._boundOnUp = this.onUp.bind(this);
  },
  get slideSize() {
    return this.slideWidth + this.gap;
  },
  get offset() {
    // на сколько нужно сдвинуть wrapper, чтобы отображалось count слайдов, начиная с нужного индекса
    return this.index * this.slideSize;
  },
  get maxIndex() {
    // максимально возможный индекс до которого можно прокрутить, чтобы во контейнере было ровно count слайдов
    return Math.max(0, this.slides.length - this.props.count);
  },
  open: function open(modal) {
    var _this3 = this;
    if (!modal.slideshow) return;

    // Создаем обертку для миниатюр
    this.container = document.createElement('div');
    this.container.className = "".concat(modal.props["class"], "__thumbs");
    this.wrapper = document.createElement('div');
    this.wrapper.className = "".concat(modal.props["class"], "__thumbs-wrapper");

    // Добавляем миниатюры
    this.slides = Array.from(modal.slideshow, function (item, i) {
      var slide = document.createElement('span');
      slide.className = "".concat(modal.props["class"], "__thumbs-slide");
      slide.style.backgroundImage = "url('".concat(item.poster || item.src, "')");
      slide.addEventListener('click', function () {
        return _this3.isDragging || _this3.modal.move(i, true);
      });
      _this3.wrapper.appendChild(slide);
      return slide;
    });

    // Строим структуру
    this.container.appendChild(this.wrapper);
    modal.body.appendChild(this.container);
    this.setupThumbSizes();
    this.bindEvents();
    this.updateActiveThumb();

    // Подписка на переключение слайдов
    modal._hooks.move.push(this.updateActiveThumb.bind(this));
  },
  setupThumbSizes: function setupThumbSizes() {
    var _this4 = this;
    var styles = getComputedStyle(this.wrapper);
    this.gap = parseFloat(styles.gap) || 0;
    this.slideWidth = (this.container.clientWidth - this.gap * (this.props.count - 1)) / this.props.count;
    this.slides.forEach(function (slide) {
      return slide.style.flex = "0 0 ".concat(_this4.slideWidth, "px");
    });
    this.movingThumbs(this.index);
  },
  onDrag: function onDrag(e) {
    var dx = e.clientX - this.startX;
    var total = this.slideSize * this.slides.length - this.gap;
    var limit = total - this.container.clientWidth + this.slideSize;
    var offset = Math.max(-limit, Math.min(this.startOffset + dx, this.slideSize));
    this.wrapper.style.transform = "translateX(".concat(offset, "px)");
    this.isDragging || (this.isDragging = Math.abs(dx) > this.props.dragThreshold);
  },
  onUp: function onUp(e) {
    // длина свайпа
    var dx = e.clientX - this.startX;
    window.removeEventListener('pointerup', this._boundOnUp);
    window.removeEventListener('pointermove', this._boundOnMove);
    window.removeEventListener('pointercancel', this._boundOnUp);

    // сколько слайдов сдвинуть на основе длины свайпа, но не больше, чем разрешено (maxSkip)
    var movedSlides = Math.min(this.props.maxSkip, Math.round(Math.abs(dx) / this.slideSize));

    // смещение к актуальному индексу
    movedSlides > 0 ? this.movingThumbs(this.index - Math.sign(dx) * movedSlides) : this.movingThumbs(this.index);
  },
  bindEvents: function bindEvents() {
    var _this5 = this;
    this.wrapper.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      _this5.wrapper.style.transition = 'none';
      _this5.isDragging = false;
      _this5.startX = e.clientX;
      _this5.startOffset = -_this5.index * (_this5.slideWidth + _this5.gap);
      window.addEventListener('pointerup', _this5._boundOnUp);
      window.addEventListener('pointermove', _this5._boundOnMove);
      window.addEventListener('pointercancel', _this5._boundOnUp);
    }, {
      passive: false
    });
    this.wrapper.querySelectorAll('*').forEach(function (el) {
      el.addEventListener('click', function (e) {
        return _this5.isDragging && e.preventDefault();
      });
    });
    window.addEventListener('resize', function () {
      return _this5.setupThumbSizes();
    });
  },
  movingThumbs: function movingThumbs(i) {
    this.index = Math.max(0, Math.min(i, this.maxIndex));
    this.wrapper.style.transition = "transform ".concat(this.props.duration, "s");
    this.wrapper.style.transform = "translateX(-".concat(this.offset, "px)");
  },
  updateActiveThumb: function updateActiveThumb() {
    var _this$slides;
    if (!((_this$slides = this.slides) !== null && _this$slides !== void 0 && _this$slides.length)) return;
    this.slides.forEach(function (slide) {
      return slide.classList.remove('active');
    });
    this.slides[this.modal.cnt].classList.add('active');
    this.scrollToActiveThumb();
  },
  scrollToActiveThumb: function scrollToActiveThumb() {
    // Если активный слайд вышел за пределы видимости — подстраиваем индекс
    if (this.modal.cnt < this.index) {
      this.movingThumbs(this.modal.cnt);
    } else if (this.modal.cnt >= this.index + this.props.count) {
      this.movingThumbs(this.modal.cnt - this.props.count + 1);
    }
  },
  close: function close(modal) {
    var _this$container;
    (_this$container = this.container) === null || _this$container === void 0 || _this$container.remove();
  }
}));
;// ./src/js/libs/scrollBasedToggle.js
function scrollBasedToggle_typeof(o) { "@babel/helpers - typeof"; return scrollBasedToggle_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, scrollBasedToggle_typeof(o); }
function scrollBasedToggle_toConsumableArray(r) { return scrollBasedToggle_arrayWithoutHoles(r) || scrollBasedToggle_iterableToArray(r) || scrollBasedToggle_unsupportedIterableToArray(r) || scrollBasedToggle_nonIterableSpread(); }
function scrollBasedToggle_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function scrollBasedToggle_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return scrollBasedToggle_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? scrollBasedToggle_arrayLikeToArray(r, a) : void 0; } }
function scrollBasedToggle_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function scrollBasedToggle_arrayWithoutHoles(r) { if (Array.isArray(r)) return scrollBasedToggle_arrayLikeToArray(r); }
function scrollBasedToggle_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function scrollBasedToggle_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function scrollBasedToggle_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? scrollBasedToggle_ownKeys(Object(t), !0).forEach(function (r) { scrollBasedToggle_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : scrollBasedToggle_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function scrollBasedToggle_defineProperty(e, r, t) { return (r = scrollBasedToggle_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function scrollBasedToggle_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function scrollBasedToggle_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, scrollBasedToggle_toPropertyKey(o.key), o); } }
function scrollBasedToggle_createClass(e, r, t) { return r && scrollBasedToggle_defineProperties(e.prototype, r), t && scrollBasedToggle_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function scrollBasedToggle_toPropertyKey(t) { var i = scrollBasedToggle_toPrimitive(t, "string"); return "symbol" == scrollBasedToggle_typeof(i) ? i : i + ""; }
function scrollBasedToggle_toPrimitive(t, r) { if ("object" != scrollBasedToggle_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != scrollBasedToggle_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { scrollBasedToggle_checkPrivateRedeclaration(e, t), t.set(e, a); }
function scrollBasedToggle_classPrivateMethodInitSpec(e, a) { scrollBasedToggle_checkPrivateRedeclaration(e, a), a.add(e); }
function scrollBasedToggle_checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(scrollBasedToggle_assertClassBrand(s, a)); }
function scrollBasedToggle_assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
/* 
* Отслеживает появление элемента снизу в области просмотра 
* браузера. Добавляет и (опционально) убирает заданный класс. 
* Передает в коллбек динамический фактор от 0 до 100, от 
* пройденного элементом расстояния в области просмотра
* 
* @разметка:
* 
<div class="someblock" data-animation="-0.5"></div>
<div class="someblock" data-animation="0" data-repeat></div>
<div class="someblock" data-animation="0.5" data-repeat-both></div>
<div class="someblock" data-animation="200px"></div>
* 
* @параметры разметки: 
* 
* data-animation="0.5" - показатель смещения. Относительный множитель 
* показывающий на какую часть от своей высоты, должен показаться снизу 
* элемент, чтобы добавился класс. Принимает положительные и отрицательные 
* значения. Так же, может абсолютно задаваться в пикселях. 
* 
* data-repeat - убирать класс, если элемент вновь уходит за нижндюю
* границу браузера
* 
* data-repeat-both - убирать класс, если элемент уходит за нижндюю 
* или верхнюю границу браузера
* 
* @вызов:
* 
import { scrollBasedToggle } from "../../js/libs/scrollBasedToggle";
let toggle = scrollBasedToggle({
	nodes: document.querySelectorAll('.someblock'), // это нужно, если есть элементы имеющие СВОЮ прокрутку, которую надо слушать
	progress: true,
	throttle: false,
	data: 'animation',
	class: 'showed',
	add() {
		console.log(this);
	},
	remove() {
		console.log(this);
	},
	tick(progress) {
		this.style.setProperty('--progress', progress);
	}
});
toggle.init(); // переинициализация
toggle.init(false); // удаление добавленных классов и отвязка обработчиков
* 
*/

var scrollBasedToggle = function scrollBasedToggle() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _Toggle_brand = /*#__PURE__*/new WeakSet();
  var _throttle = /*#__PURE__*/new WeakMap();
  var Toggle = /*#__PURE__*/function () {
    function Toggle(options) {
      var _this = this;
      scrollBasedToggle_classCallCheck(this, Toggle);
      scrollBasedToggle_classPrivateMethodInitSpec(this, _Toggle_brand);
      _classPrivateFieldInitSpec(this, _throttle, function (fn) {
        var lastTime = 0;
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          if (_this.options.throttle) {
            var now = new Date().getTime();
            if (now - lastTime >= _this.options.throttle) {
              lastTime = now;
              fn.apply(_this, args);
            }
          } else {
            fn.apply(_this, args);
          }
        };
      });
      this.options = scrollBasedToggle_objectSpread({
        throttle: 250,
        nodes: [],
        "class": 'active',
        dataRun: 'animation',
        dataRepeat: 'repeat',
        dataRepeatBoth: 'repeatBoth',
        progress: false
      }, options);
      this.isTicking = false;
      this.nodes = [window].concat(scrollBasedToggle_toConsumableArray(this.options.nodes));
      this.init();
    }
    return scrollBasedToggle_createClass(Toggle, [{
      key: "setProgress",
      value: function setProgress(box, shift) {
        if (this.options.progress) {
          var end = box.top + window.scrollY;
          var start = box.bottom - shift + window.scrollY - window.innerHeight;
          var progress = Math.round((window.scrollY - start) / (end - start) * 100);
          box.bottom - shift - window.innerHeight > 0 && (progress = 0);
          box.top < 0 && (progress = 100);
          return progress;
        }
        return null;
      }
    }, {
      key: "scrollToggle",
      value: function scrollToggle(item) {
        var _this$options$tick;
        var action;
        var box = item.getBoundingClientRect();
        var active = item.classList.contains("".concat(this.options["class"]));
        var repeat = item.dataset[this.options.dataRepeat] != undefined;
        var repeatBoth = item.dataset[this.options.dataRepeatBoth] != undefined;
        var shift = item.dataset["".concat(this.options.dataRun)] || '0';
        shift = shift.includes('px') ? box.height - parseFloat(shift) : box.height * shift;
        var insideOver = box.bottom > 0;
        var insideUnder = box.bottom - shift - window.innerHeight < 0;
        !insideUnder && repeat && active && (action = 'remove');
        !active && insideOver && insideUnder && (action = 'add');
        !(insideOver && insideUnder) && repeatBoth && active && (action = 'remove');
        if (action) {
          var _this$options$action;
          item.classList[action]("".concat(this.options["class"]));
          (_this$options$action = this.options[action]) === null || _this$options$action === void 0 || _this$options$action.call(item);
        }
        (_this$options$tick = this.options.tick) === null || _this$options$tick === void 0 || _this$options$tick.call(item, this.setProgress(box, shift));
      }
    }, {
      key: "init",
      value: function init() {
        var _this2 = this;
        var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        if (flag) {
          this.items = scrollBasedToggle_toConsumableArray(document.querySelectorAll("[data-".concat(this.options.dataRun, "]"))).map(function (item) {
            item.handler = _classPrivateFieldGet(_throttle, _this2).call(_this2, scrollBasedToggle_assertClassBrand(_Toggle_brand, _this2, _onScroll).bind(_this2, item));
            return item;
          });
        }
        this.items.forEach(function (item, i) {
          item.classList.remove("".concat(_this2.options["class"]));
          _this2.nodes.forEach(function (node) {
            node[(flag ? 'add' : 'remove') + 'EventListener']('scroll', item.handler);
          });
          flag && scrollBasedToggle_assertClassBrand(_Toggle_brand, _this2, _onScroll).call(_this2, item);
        });
      }
    }]);
  }();
  function _onScroll(item) {
    var _this3 = this;
    if (!this.isTicking && !this.options.throttle) {
      this.isTicking = true;
      requestAnimationFrame(function () {
        _this3.scrollToggle(item);
        _this3.isTicking = false;
      });
    } else {
      this.scrollToggle(item);
    }
  }
  return new Toggle(options);
};
// EXTERNAL MODULE: ./src/js/polyfills.js
var polyfills = __webpack_require__(788);
;// ./src/blocks/header/header.js
var header = function header() {
  var node = document.querySelector(".header");
  if (!node) return;
  var inner = node.querySelector(".header__inner");
  var nav = node.querySelector(".header__nav");
  var actions = node.querySelector(".header__actions");
  var burger = node.querySelector(".header__burger");
  var mobile = node.querySelector(".header__mobile");
  var mobileNav = node.querySelector(".header__mobile-nav");
  var mobileBottom = node.querySelector(".header__mobile-bottom");
  var mobileClose = node.querySelector(".header__mobile-close");

  /* Мобильное меню */
  var openMenu = function openMenu() {
    node.classList.add("opened");
    document.documentElement.classList.add("no-scroll");
  };
  var closeMenu = function closeMenu() {
    node.classList.remove("opened");
    document.documentElement.classList.remove("no-scroll");
  };

  /* Перенос навигации в мобильное меню */
  var mq = window.matchMedia("(max-width: 960px)");
  var moveMobile = function moveMobile() {
    if (mq.matches) {
      mobileNav === null || mobileNav === void 0 || mobileNav.appendChild(nav);
      mobileBottom === null || mobileBottom === void 0 || mobileBottom.appendChild(actions);
    } else {
      inner.insertBefore(nav, burger);
      inner.insertBefore(actions, burger);
      closeMenu();
    }
  };
  moveMobile();
  mq.addEventListener("change", moveMobile);
  burger === null || burger === void 0 || burger.addEventListener("click", function () {
    node.classList.contains("opened") ? closeMenu() : openMenu();
  });
  mobileClose === null || mobileClose === void 0 || mobileClose.addEventListener("click", closeMenu);
  mobile === null || mobile === void 0 || mobile.addEventListener("click", function (e) {
    if (e.target.closest("a, button")) closeMenu();
  });
  document.addEventListener("click", function (e) {
    if (node.classList.contains("opened") && !e.target.closest(".header")) closeMenu();
  });

  /* Тень и сворачивание панели при прокрутке (с гистерезисом) */
  var ticking = false;
  var onScroll = function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY;
      if (y > 24) {
        node.classList.add("is-scrolled");
      } else if (y < 4) {
        node.classList.remove("is-scrolled");
      }
      ticking = false;
    });
  };
  onScroll();
  window.addEventListener("scroll", onScroll, {
    passive: true
  });
};
;// ./src/blocks/hero/hero.js
function hero_toConsumableArray(r) { return hero_arrayWithoutHoles(r) || hero_iterableToArray(r) || hero_unsupportedIterableToArray(r) || hero_nonIterableSpread(); }
function hero_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function hero_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return hero_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? hero_arrayLikeToArray(r, a) : void 0; } }
function hero_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function hero_arrayWithoutHoles(r) { if (Array.isArray(r)) return hero_arrayLikeToArray(r); }
function hero_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var hero = function hero() {
  var root = document.querySelector(".hero");
  if (!root) return;
  var slides = hero_toConsumableArray(root.querySelectorAll(".hero__slide"));
  var dots = hero_toConsumableArray(root.querySelectorAll(".slider-dot"));
  var visuals = hero_toConsumableArray(root.querySelectorAll(".hero__visual-img"));
  if (slides.length < 2) return;
  var index = 0;
  var timer = null;
  var delay = 6000;
  var restart = function restart() {
    clearInterval(timer);
    timer = setInterval(function () {
      return go(index + 1);
    }, delay);
  };
  var go = function go(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach(function (slide, k) {
      return slide.classList.toggle("is-active", k === index);
    });
    dots.forEach(function (dot, k) {
      return dot.classList.toggle("active", k === index);
    });
    visuals.forEach(function (visual, k) {
      return visual.classList.toggle("is-active", k === index);
    });
    restart();
  };
  dots.forEach(function (dot, i) {
    return dot.addEventListener("click", function () {
      return go(i);
    });
  });
  root.addEventListener("mouseenter", function () {
    return clearInterval(timer);
  });
  root.addEventListener("mouseleave", restart);
  go(0);
};
;// ./src/js/libs/makeCarousel.js
function makeCarousel_toConsumableArray(r) { return makeCarousel_arrayWithoutHoles(r) || makeCarousel_iterableToArray(r) || makeCarousel_unsupportedIterableToArray(r) || makeCarousel_nonIterableSpread(); }
function makeCarousel_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function makeCarousel_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return makeCarousel_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? makeCarousel_arrayLikeToArray(r, a) : void 0; } }
function makeCarousel_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function makeCarousel_arrayWithoutHoles(r) { if (Array.isArray(r)) return makeCarousel_arrayLikeToArray(r); }
function makeCarousel_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var makeCarousel = function makeCarousel(container) {
  if (!container) return;
  var track = container.querySelector('[data-carousel-track]');
  if (!track) return;
  var items = makeCarousel_toConsumableArray(track.children);
  if (!items.length) return;
  var prev = container.querySelector('[data-carousel-prev]');
  var next = container.querySelector('[data-carousel-next]');
  var dotsWrap = container.querySelector('[data-carousel-dots]');
  var dots = [];
  var gap = function gap() {
    var s = getComputedStyle(track);
    return parseFloat(s.columnGap || s.gap) || 0;
  };
  var itemStep = function itemStep() {
    return items[0].getBoundingClientRect().width + gap();
  };
  var groups = function groups() {
    return Math.min(4, items.length);
  };
  var maxScroll = function maxScroll() {
    return Math.max(0, track.scrollWidth - track.clientWidth);
  };
  var currentSlide = function currentSlide() {
    if (maxScroll() <= 0) return 0;
    return Math.round(track.scrollLeft / itemStep());
  };
  var goSlide = function goSlide(slide) {
    var target = Math.max(0, Math.min(slide * itemStep(), maxScroll()));
    track.scrollTo({
      left: target,
      behavior: 'smooth'
    });
  };
  var buildDots = function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    dots = [];
    var _loop = function _loop(i) {
      var d = document.createElement('button');
      d.type = 'button';
      d.className = 'slider-dot';
      d.setAttribute('aria-label', "\u0422\u043E\u0447\u043A\u0430 ".concat(i + 1));
      d.addEventListener('click', function () {
        return goSlide(i);
      });
      dotsWrap.appendChild(d);
      dots.push(d);
    };
    for (var i = 0; i < groups(); i++) {
      _loop(i);
    }
    update();
  };
  var update = function update() {
    if (!dots.length) return;
    var current = currentSlide() % groups();
    dots.forEach(function (dot, i) {
      return dot.classList.toggle('active', i === current);
    });
  };
  prev === null || prev === void 0 || prev.addEventListener('click', function () {
    return track.scrollBy({
      left: -itemStep(),
      behavior: 'smooth'
    });
  });
  next === null || next === void 0 || next.addEventListener('click', function () {
    return track.scrollBy({
      left: itemStep(),
      behavior: 'smooth'
    });
  });
  track.addEventListener('scroll', function () {
    return requestAnimationFrame(update);
  }, {
    passive: true
  });
  window.addEventListener('resize', buildDots);
  buildDots();
};
;// ./src/blocks/catalog/catalog.js

var catalog = function catalog() {
  makeCarousel(document.querySelector(".catalog__wrap"));
};
;// ./src/blocks/certs/certs.js

var certs = function certs() {
  makeCarousel(document.querySelector(".certs__wrap"));

  /* Лайтбокс-галерея (Fancybox) */
  if (window.Fancybox) {
    Fancybox.bind('[data-fancybox="gallery"]', {
      groupAll: true,
      infinite: true,
      Thumbs: {
        type: "modern"
      },
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["thumbs", "close"]
        }
      }
    });
  }
};
;// ./src/blocks/reviews/reviews.js

var reviews = function reviews() {
  makeCarousel(document.querySelector(".reviews__wrap"));
};
;// ./src/js/blocks.js





header();
hero();
catalog();
certs();
reviews();
;// ./src/js/common.js
function common_toConsumableArray(r) { return common_arrayWithoutHoles(r) || common_iterableToArray(r) || common_unsupportedIterableToArray(r) || common_nonIterableSpread(); }
function common_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function common_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return common_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? common_arrayLikeToArray(r, a) : void 0; } }
function common_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function common_arrayWithoutHoles(r) { if (Array.isArray(r)) return common_arrayLikeToArray(r); }
function common_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
;





// Функции

// Единицы высоты (ширины) экрана
function updateVH() {
  var _ref = window.visualViewport || {},
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? window.innerHeight : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? window.innerWidth : _ref$width;
  document.documentElement.style.setProperty('--vh', "".concat(height * 0.01, "px"));
  ['resize', 'orientationchange'].forEach(function (event) {
    window.addEventListener(event, throttle(updateVH, 200), {
      passive: true
    });
  });
}

// Ширина скроллбара
var setScrollbarWidth = function setScrollbarWidth() {
  document.documentElement.style.setProperty('--sw', "".concat(window.innerWidth - document.documentElement.clientWidth, "px"));
};

// Высота фиксированного хедера (для отступа у main)
var setHeaderHeight = function setHeaderHeight() {
  var header = document.querySelector('.header');
  if (!header) return;
  var top = header.querySelector('.header__top');
  var main = header.querySelector('.header__main');
  var h = (top ? top.scrollHeight : 0) + (main ? main.offsetHeight : 0);
  document.documentElement.style.setProperty('--header-h', "".concat(h, "px"));
};

// Запуск функций
updateVH();
setScrollbarWidth();
setHeaderHeight();
window.addEventListener('resize', throttle(setHeaderHeight, 200), {
  passive: true
});

/* Модальные окна */
makeModal({
  "class": 'modal',
  open: function open() {
    document.documentElement.classList.add('no-scroll');
  },
  close: function close() {
    document.documentElement.classList.remove('no-scroll');
  }
});

/* Появление блоков при прокрутке */
scrollBasedToggle({
  "class": 'showed',
  data: 'animation',
  throttle: 120
});

/* Обратная связь (форма обратного звонка) */
document.addEventListener('submit', function (e) {
  var form = e.target.closest('.callback');
  if (!form) return;
  e.preventDefault();
  var inputs = common_toConsumableArray(form.querySelectorAll('input[data-rules]'));
  var valid = true;
  inputs.forEach(function (input) {
    var ok = validate(input);
    input.classList.toggle('error', !ok);
    if (!ok) valid = false;
  });
  if (!valid) return;
  form.innerHTML = "\n\t\t<div class=\"callback__title\">\u0421\u043F\u0430\u0441\u0438\u0431\u043E!</div>\n\t\t<p class=\"callback__text\">\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430. \u041C\u044B \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C \u0432\u0430\u043C \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F.</p>\n\t";
});
})();

/******/ })()
;