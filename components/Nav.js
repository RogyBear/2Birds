import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../contexts/LanguageContext';
import DropdownMenu from './DropdownMenu';
import Router from 'next/router';

const Nav = (props) => {
	const { language, currLang, setCurrLang } = useContext(LanguageContext);
	const [ isOpen, setIsOpen ] = useState(false);
	const ru = language.russian.nav;
	const en = language.english.nav;
	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	const closeNav = () => {
		setIsOpen(false);
	};
	Router.events.on('routeChangeStart', closeNav);
	return (
		<nav className="nav">
			<ul style={isOpen ? { display: 'flex' } : { display: 'none' }} className="nav__list">
				<li className="nav__list__item">
					<Link href={{ pathname: '/' }}>
						<a className="nav__list__link">{currLang ? ru.main : en.main}</a>
					</Link>
				</li>
				<div className="nav__list__dot" />
				<li className="nav__list__item">
					<Link href={{ pathname: '/store' }}>
						<a test="test" className="nav__list__link">
							{currLang ? ru.store : en.store}
						</a>
					</Link>
				</li>

				<div className="nav__list__dot" />
				<li className="nav__list__item">
					<Link href={{ pathname: '/about' }}>
						<a className="nav__list__link">{currLang ? ru.about : en.about}</a>
					</Link>
				</li>
				<div className="nav__list__dot" />
				<li className="nav__list__item">
					<Link href={{ pathname: '/contact' }}>
						<a className="nav__list__link">{currLang ? ru.contact : en.contact}</a>
					</Link>
				</li>

				<div className="nav__list__dot" />
				<li className="nav__list__item">
					<button
						className="nav__list__item__button"
						style={{ border: 'none', background: 'transparent' }}
						onClick={() => {
							setCurrLang(!currLang);
						}}
					>
						{currLang === true ? (
							<img style={{ width: '35px', cursor: 'pointer' }} src="/static/img/US-flag.svg" />
						) : (
							<img style={{ width: '35px', cursor: 'pointer' }} src="/static/img/russia-flag.svg" />
						)}
					</button>
				</li>
				<div className="nav__list__dot" />
				<li className="nav__list__item">
					<Link href={{ pathname: '/cart' }}>
						<a>
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 32 32"
							>
								<title>cart</title>
								<path
									fill="rgb(255, 172, 186)"
									d="M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"
								/>
								<path
									fill="rgb(255, 172, 186)"
									d="M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"
								/>
								<path
									fill="rgb(255, 172, 186)"
									d="M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z"
								/>
							</svg>
						</a>
					</Link>
				</li>
				<div className="nav__list__exit" onClick={handleClick} />
			</ul>
			<DropdownMenu menuToggle={handleClick} />
		</nav>
	);
};

export default Nav;
