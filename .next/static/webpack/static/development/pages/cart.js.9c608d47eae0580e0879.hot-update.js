webpackHotUpdate("static\\development\\pages\\cart.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\roger\\OneDrive\\Desktop\\Dasha_Next\\Dasha\\contexts\\LanguageContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var LanguageContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var LanguageProvider = function LanguageProvider(props) {
  // TRUE  = RUSSIAN || FASLE = ENGLISH
  var russianLanguage = {
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
      shipping: 'Адрес доставки',
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
      "return": 'Мы свяжемся с Вами в течение 24 часов'
    }
  };
  var englishLanguage = {
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
      shipping: 'Contact Information',
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
      "return": 'We will be in contact with you within 24 hours'
    }
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    english: englishLanguage,
    russian: russianLanguage
  }),
      language = _useState[0],
      setLanguage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      currLang = _useState2[0],
      setCurrLang = _useState2[1];

  return __jsx(LanguageContext.Provider, {
    value: {
      language: language,
      currLang: currLang,
      setCurrLang: setCurrLang
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, props.children);
};

/***/ })

})
//# sourceMappingURL=cart.js.9c608d47eae0580e0879.hot-update.js.map