webpackHotUpdate("static\\development\\pages\\shipping.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ShippingContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ShippingContext */ "./contexts/ShippingContext.js");
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CartContext */ "./contexts/CartContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/LanguageContext */ "./contexts/LanguageContext.js");

var _jsxFileName = "C:\\Users\\roger\\OneDrive\\Desktop\\Dasha_Next\\Dasha\\components\\ShippingInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function ShippingInfo() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_3__["CartContext"]),
      cart = _useContext.cart,
      setCart = _useContext.setCart,
      shipSubmit = _useContext.shipSubmit,
      setShipSubmit = _useContext.setShipSubmit;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ShippingContext__WEBPACK_IMPORTED_MODULE_2__["ShippingContext"]),
      handleChange = _useContext2.handleChange,
      contact = _useContext2.contact;

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_6__["LanguageContext"]),
      currLang = _useContext3.currLang,
      language = _useContext3.language;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var style = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  };
  var cartConfirm;
  var totalStoredPrice;
  var ru = language.russian.cart;
  var en = language.english.cart;

  if (true) {
    cartConfirm = JSON.parse(sessionStorage.getItem('cart'));
    totalStoredPrice = JSON.parse(sessionStorage.getItem('totalPrice'));
  } else {}

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var parsedCart = JSON.parse(sessionStorage.getItem('cart'));
    var data = {
      contact: contact,
      parsedCart: parsedCart
    };
    var email = {};
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat("http://localhost:1337/orders"), data).then(function (res) {
      email.to = res.data.emailAddress;
      email.subject = "2BirdsWedding: \u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430 / Order Confirmation: ".concat(res.data.order_number);
      email.text = "\u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u0438 \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0412\u0430\u043C\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 24 \u0447\u0430\u0441\u043E\u0432. \u0421\u043F\u0430\u0441\u0438\u0431\u043E! \n\t\t\t\t<br> \n\t\t\t\t\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C, \n\t\t\t\t<br>\n\t\t\t\t\u0414\u0430\u0448\u0430 \n\t\t\t\t<br>\n\t\t\t\t<br> \n\t\t\t\t<hr> \n\t\t\t\t<br> \n\t\t\t\tYour order has been submitted! We will be in contact with you within 24 hours. Thank You!\n\t\t\t\t<br> \n\t\t\t\tSincerely, \n\t\t\t\t<br>\n\t\t\t\tDasha";
      email.orderNumber = res.data.order_number; //redirect to thank you page

      router.push({
        pathname: '/confirmation',
        query: {
          orderNumber: res.data.order_number
        }
      }); //clear session storage

      setCart([]);
      return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat("http://localhost:1337/email"), email);
    });
  }; //Handles iteration of items in the session storage cart


  return __jsx("div", {
    className: "shipping-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
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
      lineNumber: 62
    },
    __self: this
  }, __jsx("h2", {
    className: "shipping-info__form__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, currLang ? ru.title : en.title), __jsx("div", {
    className: "shipping-info__form__group",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "firstName",
    onChange: function onChange(e) {
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
      lineNumber: 65
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    name: "lastName",
    onChange: function onChange(e) {
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
      lineNumber: 76
    },
    __self: this
  })), __jsx("div", {
    className: "shipping-info__form__group",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("input", {
    type: "email",
    name: "emailAddress",
    onChange: function onChange(e) {
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
      lineNumber: 89
    },
    __self: this
  }), __jsx("input", {
    type: "tel",
    name: "telephoneNumber",
    onChange: function onChange(e) {
      handleChange(e);
    },
    style: {
      width: '340px'
    },
    className: "shipping-info__form__group__input",
    placeholder: currLang ? ru.phoneNumber : en.phoneNumber,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), __jsx("div", {
    className: "shipping-info__form__information",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), __jsx("h2", {
    className: "shipping-info__form__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, currLang ? ru.confirmation : en.confirmation), __jsx("ul", {
    className: "shipping-info__form__cart shipping-info__form__cart__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("li", {
    className: "shipping-info__form__cart__item shipping-info__form__cart__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, currLang ? ru.productImage : en.productImage), __jsx("li", {
    className: "shipping-info__form__cart__item shipping-info__form__cart__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, currLang ? ru.productName : en.productName), __jsx("li", {
    className: "shipping-info__form__cart__item shipping-info__form__cart__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, currLang ? ru.productAddOns : en.productAddOns), __jsx("li", {
    className: "shipping-info__form__cart__item shipping-info__form__cart__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, currLang ? ru.productQuantity : en.productQuantity), __jsx("li", {
    className: "shipping-info__form__cart__item shipping-info__form__cart__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, currLang ? ru.productTotal : en.productTotal)), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(cartConfirm).map(function (el) {
    if (typeof el === 'object') {
      return __jsx("ul", {
        className: "shipping-info__form__cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, __jsx("li", {
        className: "shipping-info__form__cart__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, __jsx("img", {
        style: {
          width: '75px',
          height: '85px'
        },
        src: "".concat("http://localhost:1337").concat(el.productImage),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      })), __jsx("li", {
        className: "shipping-info__form__cart__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, currLang ? el.productName.ru : el.productName.en), __jsx("li", {
        className: "shipping-info__form__cart__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(el.productParams).map(function (element) {
        return __jsx("li", {
          key: element.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, currLang ? element.ru : element.en);
      }))), __jsx("li", {
        className: "shipping-info__form__cart__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, el.quantity), __jsx("li", {
        className: "shipping-info__form__cart__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, el.productPrice * el.quantity, " p."));
    }
  }), __jsx("ul", {
    className: "shipping-info__form__cart",
    style: {
      borderBottom: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("li", {
    className: "shipping-info__form__cart__item",
    style: {
      borderBottom: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, ' '), __jsx("li", {
    className: "shipping-info__form__cart__item",
    style: {
      borderBottom: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, ' '), __jsx("li", {
    className: "shipping-info__form__cart__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx("button", {
    type: "submit",
    onClick: function onClick() {
      setShipSubmit(true);
    },
    className: "shipping-info__form__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, currLang ? ru.submit : en.submit)), __jsx("li", {
    className: "shipping-info__form__cart__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, currLang ? ru.orderTotal : en.orderTotal, ":"), __jsx("li", {
    className: "shipping-info__form__cart__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, totalStoredPrice, " p."))));
}

/***/ })

})
//# sourceMappingURL=shipping.js.06ee77d0bb0d89f357d2.hot-update.js.map