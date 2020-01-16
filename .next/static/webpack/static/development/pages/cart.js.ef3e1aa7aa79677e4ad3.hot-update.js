webpackHotUpdate("static\\development\\pages\\cart.js",{

/***/ "./components/ShoppingCart.js":
/*!************************************!*\
  !*** ./components/ShoppingCart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CartContext */ "./contexts/CartContext.js");
/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/LanguageContext */ "./contexts/LanguageContext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\roger\\OneDrive\\Desktop\\Dasha_Next\\Dasha\\components\\ShoppingCart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



 // import { css } from '@emotion/core';
// import ClockLoader from 'react-spinners/ClockLoader';

var ShoppingCart = function ShoppingCart(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_3__["CartContext"]),
      cart = _useContext.cart,
      deleteItem = _useContext.deleteItem,
      quantityDecrease = _useContext.quantityDecrease,
      quantityIncrease = _useContext.quantityIncrease,
      totalPrice = _useContext.totalPrice,
      setTotalPrice = _useContext.setTotalPrice;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_4__["LanguageContext"]),
      language = _useContext2.language,
      currLang = _useContext2.currLang,
      setCurrLang = _useContext2.setCurrLang; // const [ loading, setLoading ] = useState(false);


  var ru = language.russian.cart;
  var en = language.english.cart;
  var sessionStorageCart;

  if (true) {
    sessionStorageCart = JSON.parse(sessionStorage.getItem('cart'));
  } else {}

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var totalPrice = 0;

    for (var i = 0; i < cart.length; i++) {
      totalPrice = totalPrice + cart[i].productPrice * cart[i].quantity;
    }

    setTotalPrice(totalPrice);
    window.sessionStorage.setItem('totalPrice', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(totalPrice));
  }, [cart]);
  return __jsx("div", {
    className: "cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "cart__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("p", {
    className: "cart__item__content cart__item__content__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, currLang ? ru.productImage : en.productImage), __jsx("p", {
    className: "cart__item__content cart__item__content__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, currLang ? ru.productName : en.productName), __jsx("p", {
    className: "cart__item__content cart__item__content__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, currLang ? ru.productAddOns : en.productAddOns), __jsx("p", {
    className: "cart__item__content cart__item__content__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, currLang ? ru.productUnitPrice : en.productUnitPrice), __jsx("p", {
    className: "cart__item__content cart__item__content__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, currLang ? ru.productQuantity : en.productQuantity), __jsx("p", {
    className: "cart__item__content cart__item__content__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, currLang ? ru.productTotal : en.productTotal), __jsx("p", {
    className: "cart__item__content cart__item__content__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, currLang ? ru.productDelete : en.productDelete)), sessionStorageCart.map(function (e, i) {
    return __jsx("div", {
      className: "cart__item",
      key: e.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("div", {
      className: "cart__item__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: '75px',
        height: '85px'
      },
      src: "".concat("http://localhost:1337").concat(e.productImage),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })), __jsx("p", {
      className: "cart__item__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, currLang ? e.productName.ru : e.productName.en), __jsx("ul", {
      className: "cart__item__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(e.productParams).map(function (el) {
      var arr = [];

      _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(el).map(function (ele) {
        arr.push(ele.toString());
      });

      return __jsx("li", {
        className: "cart__item__content__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, currLang ? "".concat(arr[1], " - ").concat(arr[2], " p.") : "".concat(arr[0], " - ").concat(arr[2], " p."));
    })), __jsx("p", {
      className: "cart__item__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, e.productPrice, " p. / ", currLang ? ru.unit : en.unit), __jsx("div", {
      className: "cart__item__content cart__cart-quantity",
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("button", {
      className: "cart__cart-quantity__btn",
      value: i,
      onClick: function onClick(el) {
        return quantityDecrease(el);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), __jsx("p", {
      className: "cart__cart-quantity__number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, e.quantity), __jsx("button", {
      className: "cart__cart-quantity__btn__increase",
      value: i,
      onClick: function onClick(el) {
        return quantityIncrease(el);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    })), __jsx("p", {
      className: "cart__item__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, e.quantity * e.productPrice, " p."), __jsx("div", {
      className: "cart__item__content cart__delete",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("button", {
      className: "cart__delete__btn",
      onClick: function onClick(el) {
        return deleteItem(el);
      },
      value: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("svg", {
      className: "cart__delete__garbage",
      width: "25",
      height: "55",
      viewBox: "0 0 32 32",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("path", {
      fill: "red",
      d: "M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }), __jsx("path", {
      className: "cart__delete__garbage__lid",
      fill: "red",
      d: "M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    })))));
  }), __jsx("div", {
    className: "cart__item cart__item__button",
    style: {
      border: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "cart__item__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), __jsx("div", {
    className: "cart__item__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), __jsx("div", {
    className: "cart__item__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx("div", {
    className: "cart__item__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx("div", {
    className: "cart__item__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: {
      pathname: '/shipping'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("button", {
    className: "cart__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, currLang ? ru.confirm : en.confirm))), __jsx("div", {
    className: "cart__item__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, currLang ? ru.orderTotal : en.orderTotal, ": ", totalPrice, " p."), __jsx("div", {
    className: "cart__item__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ShoppingCart);

/***/ })

})
//# sourceMappingURL=cart.js.ef3e1aa7aa79677e4ad3.hot-update.js.map