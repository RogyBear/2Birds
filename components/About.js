import React, { Fragment, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const About = (props) => {
	const { language, currLang } = useContext(LanguageContext);
	const ru = language.russian.about;
	const en = language.english.about;
	return (
		<div className="about">
			<img src="../static/img/about_photo.jpg" className="about__picture" />
			<div className="about__text" >
				<p className="about__text__bold">{currLang ? ru.helloBold : en.helloBold}</p>
				{currLang ? ru.text : en.text}
				<p className="about__text__bold">{currLang ? ru.endBold : en.endBold}</p>
			</div>
		</div>
	);
};

export default About;


