import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();
export const LanguageProvider = (props) => {
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
			text:
				'Меня зовут Огнева Дарья, я - профессиональный\nдизайнер-иллюстратор.\nВ 2010 году окончила Северо-Западный институт Печати\nСанкт-Петербургского университета Технологии и Дизайна по\nспециальности художник-график.\n\n Еще в 2007 году судьба привела меня в свадебную индустрию: свой\nпуть я начала со свадебных магнитов ручной работы в подарок\nгостям, а затем занялась авторскими пригласительными.\n\n И с тех пор я счастлива работать с лучшими заказчиками на свете!\n Это вы: невесты и женихи!\n\n Если у вас возникнут какие-то вопросы, а на сайте на них нет ответа-',
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
			writing:
				'Do you still\nhave questions?\n\nPlease fill out your\ncontact information,\nand I will get in\ntouch with you soon!'
		},
		about: {
			helloBold: 'Hey there!',
			text:
				"My name is Daria Ogneva, and I am a professional\nillustrator and designer.\n In 2010 I graduated the Northwest Institute of Printing\nat the University of Saint-Petersburg Technology and Design\n with a degree in graphic design.\n\n In 2007 fate introduced me to the wedding industry. I began designing\n handmade magnets and then moved into custom wedding invitations.\n\n  Ever since then, I have been fortunate to work with the best clients in the world.\n That's you: the brides and grooms!\n\n If you have have any questions, and can't find the answers on this website ",
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
	const [ language, setLanguage ] = useState({ english: englishLanguage, russian: russianLanguage });
	const [ currLang, setCurrLang ] = useState(true);

	return (
		<LanguageContext.Provider value={{ language, currLang, setCurrLang }}>
			{props.children}
		</LanguageContext.Provider>
	);
};
