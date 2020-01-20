import React, { Fragment, useContext, useState } from 'react';
import ShoppingCart from '../components/ShoppingCart';
import { CartContext } from '../contexts/CartContext';
import { LanguageContext } from '../contexts/LanguageContext';
const cart = () => {
	const { cart } = useContext(CartContext);
	const { language, currLang, setCurrLang } = useContext(LanguageContext);
	const ru = language.russian.cart;
	const en = language.english.cart;
	return (
		<Fragment>
			{cart.length !== 0 ? (
				<ShoppingCart />
			) : (
				<div className="cart">
					<h1
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '50vh',
							fontFamily: 'Candra',
							color: '#888888',
							fontWeight: '500'
						}}
					>
						{currLang ? ru.nothing_in_cart : en.nothing_in_cart}
					</h1>
				</div>
			)}
		</Fragment>
	);
};

export default cart;
