import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { useRouter } from 'next/router';
const Header = () => {
	const { language, currLang } = useContext(LanguageContext);
	const ru = language.russian.header;
	const en = language.english.header;
	const router = useRouter();
	let query = router.pathname;
	if (query === '/') {
		query = 'home';
	} else if (query.endsWith('[id]')) {
		query = 'store';
	} else {
		query = query.slice(1);
	}

	return (
		<div className="bg-img">
			<img className="bg-img__birds" src="/static/img/birds.png" />
			<div className="bg-img__title">
				<div className="bg-img__title__name">{currLang ? ru[query] : en[query]}</div>
				<div className="bg-img__title__text" style={{ whiteSpace: 'pre-line' }} />
			</div>
		</div>
	);
};

export default Header;
