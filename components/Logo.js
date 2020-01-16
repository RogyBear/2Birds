import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
export default function Logo() {
	let bgAnimation;
	let logoAnimation;
	let birdFlyRight;
	let birdFlyLeft;
	let wing;
	const [ animation, setAnimation ] = useState(false);
	const router = useRouter();
	const handleAnimation = () => {
		setTimeout(() => {
			setAnimation(true);
		}, 1000);
	};
	Router.events.on('routeChangeStart', handleAnimation);

	if (router.pathname === '/') {
		bgAnimation = {
			animationName: 'background-fade',
			animationDuration: '1s',
			animationDelay: '4s',
			animationFillMode: 'forwards'
		};
		logoAnimation = {
			animationName: 'logo-fade',
			animationDuration: '3s',
			animationDelay: '1s',
			animationFillMode: 'forwards',

		};
		birdFlyRight = {
			animationName: 'bird-fly-right',
			animationDuration: '3s',
			animationDelay: '1s',
			animationFillMode: 'forwards',
			animationDirection: 'ease-out'
		};
		birdFlyLeft = {
			animationName: 'bird-fly-left',
			animationDuration: '3s',
			animationDelay: '1s',
			animationFillMode: 'forwards',
			animationDirection: 'ease-out'
		};
		wing = {
			animationName: 'wing-flap',
			animationDuration: '.13s',
			animationDelay: '1s',
			animationIterationCount: 'infinite',
			animationFillMode: 'forwards'
		};
	}

	return (
		<div
			onAnimationEnd={handleAnimation}
			style={router.pathname === '/' && animation === false ? bgAnimation : { opacity: 0, zIndex: '-1' }}
			className="logo"
		>
			<img className="logo__img" style={logoAnimation} src="../static/img/logo.png" />
			<div className="logo__purple-bird " style={birdFlyRight}>
				<img className="logo__purple-bird__body" src="../static/img/ptichka1.png" />
				<img className="logo__purple-bird__wing" style={wing} src="../static/img/krylo1.png" />
			</div>
			<div className="logo__pink-bird bird-fly" style={birdFlyLeft}>
				<img className="logo__pink-bird__body" src="../static/img/ptichka2.png" />
				<img className="logo__pink-bird__wing" style={wing} src="../static/img/krylo2.png" />
			</div>
		</div>
	);
}
