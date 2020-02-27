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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
      twoDescription: 'Свадебная полиграфия',
      twoCursive: 'готовый дизайн',
      threeDescription: 'Подарки гостям',
      threeCursive: 'сувениры ручной работы',
      details: 'Перейти в магазин'
    },
    nav: {
      main: 'Главная',
      store: 'Магазин',
      gallery: 'Галерея',
      about: 'Обо мне',
      contact: 'Контакты'
    },
    header: {
      home: 'Свадебные приглашения',
      store: 'Магазин',
      gallery: 'Галерея',
      about: 'Обо мне',
      contact: 'Контакты',
      cart: 'Корзина',
      thankyou: 'Спасибо',
      shipping: 'Подтверждение товаров',
      confirmation: 'Детали заказа'
    },
    product: {
      custom_cards: 'Индивидуальные приглашения',
      prepared_cards: 'Готовые приглашения',
      souvenirs: 'Подарки гостям',
      from: 'от',
      add: 'Добавить в корзину',
      complekt: 'Комплект',
      additions: 'Вы можете добавить к своему приглашению'
    },
    postcard: {
      name: 'Имя',
      telephone: 'Телефон',
      email: 'Почта',
      message: 'Комментарии',
      send: 'Отправить',
      writing: 'У вас возникли\nвопросы?\n\nОставьте,\nпожалуйста, свои\nконтактые данные,\nи я с Вами свяжусь!'
    },
    about: {
      helloBold: 'Привет!',
      text: 'Меня зовут Огнева Дарья, я профессиональный\nдизайнер-иллюстратор.\nВ 2010 году окончила Северо-Западный институт Печати\nСанкт-Петербургского университета Технологии и Дизайна по\nспециальности "Художник-график".\n\n Еще в 2007 году судьба привела меня в свадебную индустрию: свой\nпуть я начала со свадебных магнитов ручной работы в подарок\nгостям, а затем занялась авторскими пригласительными.\n\n И с тех пор я счастлива работать с лучшими заказчиками на свете!\n Это вы - невесты и женихи!\n\n Если у вас возникнут какие-то вопросы, а на сайте на них нет ответа,',
      endBold: ' загляните в раздел “Контакты” и свяжитесь со мной!'
    },
    cart: {
      nothing_in_cart: 'Корзина пуста',
      total: 'Итог',
      confirm: 'Контактная информация',
      unit: 'шт',
      productImage: 'Изображение товара',
      productName: 'Название товара',
      productAddOns: 'Дополнения',
      productUnitPrice: 'Стоимость за штуку',
      productQuantity: 'Количество',
      productTotal: 'Итог',
      productDelete: 'Удалить товар',
      orderTotal: 'Итог заказа ',
      title: 'Контактная информация',
      firstName: 'Имя',
      lastName: 'Фамилия',
      email: 'Почта',
      phoneNumber: 'Номер телефона',
      address: 'Адрес',
      address2: 'Адрес 2',
      city: 'Город',
      country: 'Страна',
      region: 'Область',
      index: 'Индекс',
      confirmation: 'Подтверждение товаров',
      submit: 'Отправить'
    },
    confirmation: {
      title: 'Информация о заказе',
      lineOne: 'Спасибо за заказ!',
      lineTwo: 'Мы свяжемся с Вами, чтобы подтвердить заказ и способ оплаты.',
      orderNumber: 'Номер заказа'
    },
    access: {
      access: 'У Вас нет доступа к этой странице'
    },
    thankYou: {
      thanks: 'Спасибо за письмо!',
      return: 'Мы свяжемся с Вами в течение 24 часов'
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
      shipping: 'Order Review',
      confirmation: 'Order Details'
    },
    product: {
      custom_cards: 'Custom Invitations',
      prepared_cards: 'Pre-made Invitations',
      souvenirs: 'Souviners',
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
      confirm: 'Contact Information',
      unit: 'unit',
      productImage: 'Product Image',
      productName: 'Product Name',
      productAddOns: 'Additions',
      productUnitPrice: 'Unit Price',
      productQuantity: 'Quantity',
      productTotal: 'Total Price',
      productDelete: 'Delete Item',
      orderTotal: 'Cart Total',
      title: 'Contact Information',
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
      confirmation: 'Order Review',
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./pages/confirmation.js":
/*!*******************************!*\
  !*** ./pages/confirmation.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ConfirmationInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ConfirmationInfo */ "./components/ConfirmationInfo.js");
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/CartContext */ "./contexts/CartContext.js");
/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/LanguageContext */ "./contexts/LanguageContext.js");
var _jsxFileName = "C:\\Users\\roger\\OneDrive\\Desktop\\Dasha_Next\\Dasha\\pages\\confirmation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const confirmation = () => {
  const {
    cart,
    shipSubmit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_2__["CartContext"]);
  const {
    currLang,
    language
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"]);
  const ru = language.russian.access;
  const en = language.english.access;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, shipSubmit ? __jsx(_components_ConfirmationInfo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
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
      lineNumber: 15
    },
    __self: undefined
  }, currLang ? ru.access : en.access));
};

/* harmony default export */ __webpack_exports__["default"] = (confirmation);

/***/ }),

/***/ 3:
/*!*************************************!*\
  !*** multi ./pages/confirmation.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\roger\OneDrive\Desktop\Dasha_Next\Dasha\pages\confirmation.js */"./pages/confirmation.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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
//# sourceMappingURL=confirmation.js.map