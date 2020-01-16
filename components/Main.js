import React, { Component, useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../contexts/LanguageContext';
import { useRouter } from 'next/router';
const Main = () => {
	const { language, currLang, setCurrLang } = useContext(LanguageContext);
	const ru = language.russian.main;
	const en = language.english.main;
	const router = useRouter();
	const style = { textDecoration: 'none', color: '#FFF' };

	return (
		<div className="main-display">
			<div className="main-display__group">
				<div className="main-display__group__img">
					<img src="../static/img/married-card.jpg" />
					<button className="main-display__group__img__btn">
						<Link href="/store">
							<a style={style}>{currLang ? ru.details : en.details}</a>
						</Link>
					</button>
				</div>

				<h2 className="main-display__group__description">{currLang ? ru.oneDescription : en.oneDescription}</h2>
				<h3 className="main-display__group__cursive">{currLang ? ru.oneCursive : en.oneCursive}</h3>
			</div>
			<div className="main-display__group">
				<div className="main-display__group__img">
					<img src="../static/img/ocean-card.jpg" />
					<button className="main-display__group__img__btn">
						<Link href="/store">
							<a style={style}>{currLang ? ru.details : en.details}</a>
						</Link>
					</button>
				</div>

				<h2 className="main-display__group__description">{currLang ? ru.twoDescription : en.twoDescription}</h2>
				<h3 className="main-display__group__cursive">{currLang ? ru.twoCursive : en.twoCursive}</h3>
			</div>
			<div className="main-display__group">
				<div className="main-display__group__img">
					<img src="../static/img/purple-heart.jpg" />
					<button className="main-display__group__img__btn">
						<Link href="/store">
							<a style={style}>{currLang ? ru.details : en.details}</a>
						</Link>
					</button>
				</div>

				<h2 className="main-display__group__description">
					{currLang ? ru.threeDescription : en.threeDescription}
				</h2>
				<h3 className="main-display__group__cursive">{currLang ? ru.threeCursive : en.threeCursive}</h3>
			</div>
		</div>
	);
};

export default Main;
