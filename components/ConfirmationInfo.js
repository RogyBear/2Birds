import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { withRouter } from 'next/router';

function ConfirmationInfo(props) {
	const { language, currLang, setCurrLang } = useContext(LanguageContext);
	const ru = language.russian.confirmation;
	const en = language.english.confirmation;
	return (
		<div className="confirmation">
			<h1 className="confirmation__title">{currLang ? ru.title : en.title}</h1>

			<p className="confirmation__line-one">{currLang ? ru.lineOne : en.lineOne}</p>
			<p className="confirmation__line-two">{currLang ? ru.lineTwo : en.lineTwo}</p>

			<h2 className="confirmation__order">
				<p className="confirmation__order__line-three">
					{currLang ? ru.orderNumber : en.orderNumber}: {props.router.query.orderNumber}
				</p>
			</h2>
		</div>
	);
}

export default withRouter(ConfirmationInfo);
