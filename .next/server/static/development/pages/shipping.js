module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ConfirmationInfo.js":
/*!****************************************!*\
  !*** ./components/ConfirmationInfo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/LanguageContext */ "./contexts/LanguageContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\roger\\OneDrive\\Desktop\\Dasha_Next\\Dasha\\components\\ConfirmationInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ConfirmationInfo(props) {
  const {
    language,
    currLang,
    setCurrLang
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_1__["LanguageContext"]);
  const ru = language.russian.confirmation;
  const en = language.english.confirmation;
  return __jsx("div", {
    className: "confirmation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h1", {
    className: "confirmation__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, currLang ? ru.title : en.title), __jsx("p", {
    className: "confirmation__line-one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, currLang ? ru.lineOne : en.lineOne), __jsx("p", {
    className: "confirmation__line-two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, currLang ? ru.lineTwo : en.lineTwo), __jsx("h2", {
    className: "confirmation__order",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("p", {
    className: "confirmation__order__line-three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, currLang ? ru.orderNumber : en.orderNumber, ": ", props.router.query.orderNumber)));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ConfirmationInfo));

/***/ }),

/***/ "./components/ShippingInfo.js":
/*!************************************!*\
  !*** ./components/ShippingInfo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShippingInfo; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ShippingContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ShippingContext */ "./contexts/ShippingContext.js");
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CartContext */ "./contexts/CartContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/LanguageContext */ "./contexts/LanguageContext.js");

var _jsxFileName = "C:\\Users\\roger\\OneDrive\\Desktop\\Dasha_Next\\Dasha\\components\\ShippingInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function ShippingInfo() {
  const {
    cart,
    setCart,
    shipSubmit,
    setShipSubmit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_3__["CartContext"]);
  const {
    handleChange,
    contact
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ShippingContext__WEBPACK_IMPORTED_MODULE_2__["ShippingContext"]);
  const {
    currLang,
    language
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_6__["LanguageContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  };
  let cartConfirm;
  let totalStoredPrice;
  const ru = language.russian.cart;
  const en = language.english.cart;

  if (false) {} else {
    cartConfirm = [];
  }

  const handleSubmit = e => {
    e.preventDefault();
    const parsedCart = JSON.parse(sessionStorage.getItem('cart'));
    const data = {
      contact,
      parsedCart
    };
    const email = {};
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${"http://localhost:1337/orders"}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      email.to = res.data.emailAddress;
      email.subject = `2BirdsWedding: Номер заказа / Order Confirmation: ${res.data.order_number}`;
      email.text = `Мы получили Ваш заказ! Мы свяжемся с Вами в течении 24 часа. Спасибо! 
				<br> 
				С уважением, 
				<br>
				Даша 
				<br>
				<br> 
				<hr> 
				<br> 
				You're Order has been submitted! We will be in contact with you within the next 24 hours. Thank You!
				<br> 
				Sincerely, 
				<br>
				Dasha`; //redirect to thank you page

      router.push({
        pathname: '/confirmation',
        query: {
          orderNumber: res.data.order_number
        }
      }); //clear session storage

      setCart([]);
      return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${"http://localhost:1337/email"}`, email, res);
    });
  }; //Handles iteration of items in the session storage cart


  return __jsx("div", {
    className: "shipping-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "shipping-info__form",
    style: {
      margin: '0px auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("h2", {
    className: "shipping-info__form__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, currLang ? ru.title : en.title), __jsx("div", {
    className: "shipping-info__form__group",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "firstName",
    onChange: e => {
      handleChange(e);
    },
    className: "shipping-info__form__group__input",
    placeholder: currLang ? ru.firstName : en.firstName,
    style: {
      width: '340px'
    },
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    name: "lastName",
    onChange: e => {
      handleChange(e);
    },
    style: {
      width: '340px'
    },
    className: "shipping-info__form__group__input",
    placeholder: currLang ? ru.lastName : en.lastName,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), __jsx("div", {
    className: "shipping-info__form__group",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("input", {
    type: "email",
    name: "emailAddress",
    onChange: e => {
      handleChange(e);
    },
    style: {
      width: '340px'
    },
    className: "shipping-info__form__group__input",
    placeholder: currLang ? ru.email : en.email,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx("input", {
    type: "tel",
    name: "telephoneNumber",
    onChange: e => {
      handleChange(e);
    },
    style: {
      width: '340px'
    },
    className: "shipping-info__form__group__input",
    placeholder: currLang ? ru.phoneNumber : en.phoneNumber,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), __jsx("input", {
    type: "text",
    name: "address",
    onChange: e => {
      handleChange(e);
    },
    className: "shipping-info__form__input",
    placeholder: currLang ? ru.address : en.address,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    name: "address_two",
    onChange: e => {
      handleChange(e);
    },
    className: "shipping-info__form__input",
    placeholder: currLang ? ru.address2 : en.address2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    name: "city",
    onChange: e => {
      handleChange(e);
    },
    className: "shipping-info__form__input",
    placeholder: currLang ? ru.city : en.city,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    name: "state_region_province",
    onChange: e => {
      handleChange(e);
    },
    className: "shipping-info__form__input",
    placeholder: currLang ? ru.region : en.region,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    name: "country",
    onChange: e => {
      handleChange(e);
    },
    className: "shipping-info__form__input",
    placeholder: currLang ? ru.country : en.country,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    name: "index",
    onChange: e => {
      handleChange(e);
    },
    className: "shipping-info__form__input",
    placeholder: currLang ? ru.index : en.index,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), __jsx("h2", {
    className: "shipping-info__form__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, currLang ? ru.confirmation : en.confirmation), __jsx("ul", {
    className: "shipping-info__form__cart shipping-info__form__cart__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx("li", {
    className: "shipping-info__form__cart__item shipping-info__form__cart__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, currLang ? ru.productImage : en.productImage), __jsx("li", {
    className: "shipping-info__form__cart__item shipping-info__form__cart__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, currLang ? ru.productName : en.productName), __jsx("li", {
    className: "shipping-info__form__cart__item shipping-info__form__cart__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, currLang ? ru.productAddOns : en.productAddOns), __jsx("li", {
    className: "shipping-info__form__cart__item shipping-info__form__cart__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, currLang ? ru.productQuantity : en.productQuantity), __jsx("li", {
    className: "shipping-info__form__cart__item shipping-info__form__cart__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, currLang ? ru.productTotal : en.productTotal)), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(cartConfirm).map(el => {
    if (typeof el === 'object') {
      return __jsx("ul", {
        className: "shipping-info__form__cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, __jsx("li", {
        className: "shipping-info__form__cart__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, __jsx("img", {
        style: {
          width: '75px',
          height: '85px'
        },
        src: `${"http://localhost:1337"}${el.productImage}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      })), __jsx("li", {
        className: "shipping-info__form__cart__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, currLang ? el.productName.ru : el.productName.en), __jsx("li", {
        className: "shipping-info__form__cart__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(el.productParams).map(element => {
        return __jsx("li", {
          key: element.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, currLang ? element.ru : element.en);
      }))), __jsx("li", {
        className: "shipping-info__form__cart__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, el.quantity), __jsx("li", {
        className: "shipping-info__form__cart__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, el.productPrice, " p."));
    }
  }), __jsx("ul", {
    className: "shipping-info__form__cart",
    style: {
      borderBottom: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx("li", {
    className: "shipping-info__form__cart__item",
    style: {
      borderBottom: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, ' '), __jsx("li", {
    className: "shipping-info__form__cart__item",
    style: {
      borderBottom: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, ' '), __jsx("li", {
    className: "shipping-info__form__cart__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, __jsx("button", {
    type: "submit",
    onClick: () => {
      setShipSubmit(true);
    },
    className: "shipping-info__form__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, currLang ? ru.submit : en.submit)), __jsx("li", {
    className: "shipping-info__form__cart__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, currLang ? ru.orderTotal : en.orderTotal, ":"), __jsx("li", {
    className: "shipping-info__form__cart__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, totalStoredPrice, " p."))));
}

/***/ }),

/***/ "./contexts/CartContext.js":
/*!*********************************!*\
  !*** ./contexts/CartContext.js ***!
  \*********************************/
/*! exports provided: CartContext, CartProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartContext", function() { return CartContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProvider", function() { return CartProvider; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\roger\\OneDrive\\Desktop\\Dasha_Next\\Dasha\\contexts\\CartContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const CartContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
function CartProvider(props) {
  let initializeState = [];
  let initialTotal;

  if (false) {}

  const {
    0: shipSubmit,
    1: setShipSubmit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // INITALIZE THE CART

  const {
    0: cart,
    1: setCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initializeState);

  const checkCart = () => {
    return cart;
  };

  const {
    0: totalPrice,
    1: setTotalPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialTotal); //Session Storage

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.sessionStorage.setItem('cart', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(cart));
  }, [cart]);

  const checkArr = (obj1, obj2) => {
    return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEqual(obj1, obj2);
  }; // DELETE ITEM


  const deleteItem = e => {
    let currentItem = e.currentTarget.value;
    let cartCopy = cart;
    cartCopy.splice(currentItem, 1); //Session Storage State

    window.sessionStorage.setItem('cart', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()([...cartCopy]));
    setCart([...cartCopy]);
  }; // QUANTITY DECREASE


  const quantityDecrease = e => {
    let currentItem = e.target.value;
    let cartCopy = cart;
    cartCopy[currentItem].quantity = cartCopy[currentItem].quantity - 1; //Session Storage State

    window.sessionStorage.setItem('cart', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()([...cartCopy]));

    if (cartCopy[currentItem].quantity === 0) {
      deleteItem(e);
    }

    setCart([...cartCopy]);
  }; // QUANTITY INCREASE


  const quantityIncrease = e => {
    let currentItem = e.target.value;
    let cartCopy = cart;
    cartCopy[currentItem].quantity = cartCopy[currentItem].quantity + 1; //Session Storage State

    window.sessionStorage.setItem('cart', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()([...cartCopy]));
    setCart([...cartCopy]);
  }; // ADD ITEM
  // Change to reflect translation changes


  const addItem = obj => {
    let dataCheck = false;
    let noRepeat = false;

    if (cart.length != 0) {
      cart.map((e, i) => {
        if (e.productName.en === obj.productName.en) {
          const prevVal = e.productParams;
          const currentVal = obj.productParams;
          dataCheck = checkArr(prevVal, currentVal);

          if (dataCheck === true) {
            const object = e;
            const cartCopy = cart;
            const newObj = immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(object, {
              quantity: {
                $set: object.quantity + obj.quantity
              }
            });
            const newState = immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(cartCopy, {
              [i]: {
                $set: newObj
              }
            });
            setCart(newState);
            noRepeat = true;
          }
        }
      });
    } else {
      setCart([...cart, obj]);
    }

    if (dataCheck === false && noRepeat === false) {
      setCart([...cart, obj]);
    }
  };

  return __jsx(CartContext.Provider, {
    value: {
      cart,
      setCart,
      checkCart,
      addItem,
      deleteItem,
      quantityIncrease,
      quantityDecrease,
      shipSubmit,
      setShipSubmit,
      totalPrice,
      setTotalPrice
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, props.children);
}

/***/ }),

/***/ "./contexts/LanguageContext.js":
/*!*************************************!*\
  !*** ./contexts/LanguageContext.js ***!
  \*************************************/
/*! exports provided: LanguageContext, LanguageProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageContext", function() { return LanguageContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageProvider", function() { return LanguageProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\roger\\OneDrive\\Desktop\\Dasha_Next\\Dasha\\contexts\\LanguageContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const LanguageContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const LanguageProvider = props => {
  // TRUE  = RUSSIAN || FASLE = ENGLISH
  const russianLanguage = {
    main: {
      oneDescription: 'Свадебные приглашения',
      oneCursive: 'с портретами',
      twoDescription: 'Свадебные полиграфия',
      twoCursive: 'готовые дизайны',
      threeDescription: 'Подарки гостям',
      threeCursive: 'сувениры ручной работы',
      details: 'Переидти в мазазин'
    },
    nav: {
      main: 'Главная',
      store: 'Магазин',
      gallery: 'Галерея',
      about: 'Обо мне',
      contact: 'Контакты'
    },
    header: {
      home: 'Свадебеные приглашения',
      store: 'Магазин',
      gallery: 'Галерея',
      about: 'Обо мне',
      contact: 'Контакты',
      cart: 'Корзина',
      thankyou: 'Спасибо',
      shipping: 'Адрес доставки',
      confirmation: 'Детали заказа'
    },
    product: {
      custom_cards: 'Свадебные приглашения',
      prepared_cards: 'Свадебные полиграфия',
      souvenirs: 'Подарки гостям',
      from: 'от',
      add: 'Добавить в корзину',
      complekt: 'Комплект',
      additions: 'Вы можете дополнить свой комплект приглашения \n следущими дополнениями'
    },
    postcard: {
      name: 'Имя',
      telephone: 'Телефон',
      email: 'Почта',
      message: 'Коментарии',
      send: 'Отправить',
      writing: 'У вас остались\nвопросы?\n\nОставьте,\nпожалуйста, свои\nконтактые данные\nи я с Вами свяжусь!'
    },
    about: {
      helloBold: 'Привет!',
      text: 'Меня зовут Огнева Дарья, я - профессиональный\nдизайнер-иллюстратор.\nВ 2010 году окончила Северо-Западный институт Печати\nСанкт-Петербургского университета Технологии и Дизайна по\nспециальности художник-график.\n\n Еще в 2007 году судьба привела меня в свадебную индустрию: свой\nпуть я начала со свадебных магнитов ручной работы в подарок\nгостям, а затем занялась авторскими пригласительными.\n\n И с тех пор я счастлива работать с лучшими заказчиками на свете!\n Это вы: невесты и женихи!\n\n Если у вас возникнут какие-то вопросы, а на сайте на них нет ответа-',
      endBold: ' загляните в раздел “контакты” и свяжитесь со мной!'
    },
    cart: {
      nothing_in_cart: 'Корзина пуста',
      total: 'Итог',
      confirm: 'Адрес доставки',
      unit: 'шт',
      productImage: 'Картинка товара',
      productName: 'Название товара',
      productAddOns: 'Дополнения',
      productUnitPrice: 'Стоимость за штуку',
      productQuantity: 'Количество',
      productTotal: 'Итог',
      productDelete: 'Удалить товар',
      orderTotal: 'Итог заказа ',
      title: 'Адрес доставки',
      firstName: 'Имя',
      lastName: 'Фамилия',
      email: 'Почта',
      phoneNumber: 'Номер телефона',
      address: 'Адрес',
      address2: 'Адрес 2',
      city: 'Город',
      country: 'Страна',
      region: 'Облясть',
      index: 'Индекс',
      confirmation: 'Подтверждение товара',
      submit: 'Отправить'
    },
    confirmation: {
      title: 'Информация о заказе',
      lineOne: 'Спасибо за заказ!',
      lineTwo: 'Мы связемся с Вами чтобы подвердить способ оплаты, также как и заказ.',
      orderNumber: 'Номер заказа'
    },
    access: {
      access: 'У Вас нет доступ к этой странице'
    },
    thankYou: {
      thanks: 'Спасибо за письмо!',
      return: 'Мы свяжемся с Вами в течении 24 часа'
    }
  };
  const englishLanguage = {
    main: {
      oneDescription: 'Custom Invitations',
      oneCursive: 'with portraits',
      twoDescription: 'Wedding Polygraphy',
      twoCursive: 'pre-made invitations',
      threeDescription: 'Gifts For Guests',
      threeCursive: 'handmade souveniers',
      details: 'Go To Store'
    },
    nav: {
      main: 'Home',
      store: 'Store',
      gallery: 'Gallery',
      about: 'About',
      contact: 'Contact'
    },
    header: {
      home: 'Wedding Invitations',
      store: 'Store',
      gallery: 'Gallery',
      about: 'About',
      contact: 'Contact',
      cart: 'Shopping Cart',
      thankyou: 'Thank You',
      shipping: 'Shipping Information',
      confirmation: 'Order Details'
    },
    product: {
      custom_cards: 'Custom Invitations',
      prepared_cards: 'Pre-made Invitations',
      souvenirs: 'Gifts for Guests',
      from: 'from',
      add: 'Add To Cart',
      complekt: "What's Included",
      additions: 'You can add the following to your invitations'
    },
    postcard: {
      name: 'Name',
      telephone: 'Telephone',
      email: 'E-mail',
      message: 'Message',
      send: 'Send',
      writing: 'Do you still\nhave questions?\n\nPlease fill out your\ncontact information,\nand I will get in\ntouch with you soon!'
    },
    about: {
      helloBold: 'Hey there!',
      text: "My name is Daria Ogneva, and I am a professional\nillustrator and designer.\n In 2010 I graduated the Northwest Institute of Printing\nat the University of Saint-Petersburg Technology and Design\n with a degree in graphic design.\n\n In 2007 fate introduced me to the wedding industry. I began designing\n handmade magnets and then moved into custom wedding invitations.\n\n  Ever since then, I have been fortunate to work with the best clients in the world.\n That's you: the brides and grooms!\n\n If you have have any questions, and can't find the answers on this website ",
      endBold: 'then take a look at the "Contact" section and get in touch! '
    },
    cart: {
      nothing_in_cart: 'Your Cart is Empty',
      total: 'Total Price',
      confirm: 'Shipping Address',
      unit: 'unit',
      productImage: 'Product Image',
      productName: 'Product Name',
      productAddOns: 'Additions',
      productUnitPrice: 'Unit Price',
      productQuantity: 'Quantity',
      productTotal: 'Total Price',
      productDelete: 'Delete Item',
      orderTotal: 'Cart Total',
      title: 'Shipping Address',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phoneNumber: 'Phone Number',
      address: 'Street Address',
      address2: 'Street Address Line 2',
      city: 'City',
      country: 'Country',
      region: 'State/Province/Region',
      index: 'Postal Code',
      confirmation: 'Order Confirmation',
      submit: 'Submit'
    },
    confirmation: {
      title: 'Confirmation Information',
      lineOne: 'Thank you for ordering!',
      lineTwo: 'We will be in contact with you to confirm the payment method, as well as order details.',
      orderNumber: 'Order Number'
    },
    access: {
      access: 'You do not have access to this page'
    },
    thankYou: {
      thanks: "Thank's For The Message!",
      return: 'We will be in contact with you within 24 hours'
    }
  };
  const {
    0: language,
    1: setLanguage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    english: englishLanguage,
    russian: russianLanguage
  });
  const {
    0: currLang,
    1: setCurrLang
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  return __jsx(LanguageContext.Provider, {
    value: {
      language,
      currLang,
      setCurrLang
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, props.children);
};

/***/ }),

/***/ "./contexts/ShippingContext.js":
/*!*************************************!*\
  !*** ./contexts/ShippingContext.js ***!
  \*************************************/
/*! exports provided: ShippingContext, ShippingProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingContext", function() { return ShippingContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingProvider", function() { return ShippingProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\roger\\OneDrive\\Desktop\\Dasha_Next\\Dasha\\contexts\\ShippingContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const ShippingContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
function ShippingProvider(props) {
  let initializeState;

  if (false) {}

  const {
    0: contact,
    1: setContact
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setContact(prevState => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
      [name]: value
    }));
  };

  return __jsx(ShippingContext.Provider, {
    value: {
      contact,
      handleChange
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.children);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/shipping.js":
/*!***************************!*\
  !*** ./pages/shipping.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ShippingInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ShippingInfo */ "./components/ShippingInfo.js");
/* harmony import */ var _components_ConfirmationInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ConfirmationInfo */ "./components/ConfirmationInfo.js");
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CartContext */ "./contexts/CartContext.js");
/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/LanguageContext */ "./contexts/LanguageContext.js");
var _jsxFileName = "C:\\Users\\roger\\OneDrive\\Desktop\\Dasha_Next\\Dasha\\pages\\shipping.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const shipping = () => {
  const {
    cart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_3__["CartContext"]);
  const {
    currLang,
    language
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_4__["LanguageContext"]);
  const ru = language.russian.access;
  const en = language.english.access;
  return __jsx("div", {
    className: "shipping-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, cart.length !== 0 ? __jsx(_components_ShippingInfo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }) : __jsx("h1", {
    style: {
      height: '50vh',
      marginTop: '7rem',
      marginBottom: '10rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Calibri',
      color: '#888',
      fontWeight: '100'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, currLang ? ru.access : en.access));
};

/* harmony default export */ __webpack_exports__["default"] = (shipping);

/***/ }),

/***/ 7:
/*!*********************************!*\
  !*** multi ./pages/shipping.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\roger\OneDrive\Desktop\Dasha_Next\Dasha\pages\shipping.js */"./pages/shipping.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "immutability-helper":
/*!**************************************!*\
  !*** external "immutability-helper" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=shipping.js.map