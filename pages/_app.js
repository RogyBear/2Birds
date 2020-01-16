import React from 'react';
import Head from 'next/head';
import App from 'next/app';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../static/main.scss';
import { PageTransition } from 'next-page-transitions';
import { Helmet } from 'react-helmet';
import { CartProvider } from '../contexts/CartContext';
import { ShippingProvider } from '../contexts/ShippingContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import Logo from '../components/Logo';
class MyApp extends App {
	constructor(props) {
		super(props);
		this.state = {
			cart: []
		};
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<div className="container">
				<Helmet>
					<link
						rel="stylesheet"
						type="text/css"
						charset="UTF-8"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
					/>
				</Helmet>
				<LanguageProvider>
					<CartProvider>
						<ShippingProvider>
							<Header />
							<Nav />
							<Logo />
							<PageTransition timeout={500} classNames="page-transition">
								<Component {...pageProps} />
							</PageTransition>
							<style jsx global>{`
								.page-transition-enter {
									opacity: 0;
								}
								.page-transition-enter-active {
									opacity: 1;
									transition: opacity 300ms;
								}
								.page-transition-exit {
									opacity: 1;
								}
								.page-transition-exit-active {
									opacity: 0;
									transition: opacity 300ms;
								}
							`}</style>
							<Footer />
						</ShippingProvider>
					</CartProvider>
				</LanguageProvider>
			</div>
		);
	}
}

export default MyApp;
