import React, { Fragment, useContext } from 'react';
import ShippingInfo from '../components/ShippingInfo';
import ConfirmationInfo from '../components/ConfirmationInfo';
import { CartContext } from '../contexts/CartContext';
import { LanguageContext } from '../contexts/LanguageContext';

const shipping = () => {
	const { cart } = useContext(CartContext);
	const { currLang, language } = useContext(LanguageContext);
	const ru = language.russian.access;
	const en = language.english.access;
	return (
		<div className="shipping-info">
			{cart.length !== 0 ? (
				<ShippingInfo />
			) : (
				<h1
					style={{
						height: '50vh',
						marginTop: '7rem',
						marginBottom: '10rem',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						fontFamily: 'Calibri',
						color: '#888',
						fontWeight: '100'
					}}
				>
					{currLang ? ru.access : en.access}
				</h1>
			)}
		</div>
	);
};

export default shipping;
