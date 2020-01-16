import React, { Fragment, useContext, useEffect } from 'react';
import ConfirmationInfo from '../components/ConfirmationInfo';
import { CartContext } from '../contexts/CartContext'; 
import { LanguageContext } from '../contexts/LanguageContext';
const confirmation = () => {
	const { cart, shipSubmit } = useContext(CartContext);
	const { currLang, language } = useContext(LanguageContext);
	const ru = language.russian.access;
	const en = language.english.access;
	return (
		<Fragment>
			{shipSubmit ? (
				<ConfirmationInfo />
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
					{currLang ? ru.access : en.access }
				</h1>
			)}
		</Fragment>
	);
};

export default confirmation;
