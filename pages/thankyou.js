import React, { Fragment, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
export default function ThankYou() {
	const { language, currLang } = useContext(LanguageContext);
	const en = language.english.thankYou;
	const ru = language.russian.thankYou;
	return (
		<div className="confirmation">
			<h1 className="confirmation__title">{currLang ? ru.thanks: en.thanks}</h1>

			<p className="confirmation__line-one">{currLang ? ru.return : en.return}</p>
		</div>
	);
}
