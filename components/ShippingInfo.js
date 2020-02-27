import React, { useState, useEffect, useContext } from 'react';
import { ShippingContext } from '../contexts/ShippingContext';
import { CartContext } from '../contexts/CartContext';
import { useRouter } from 'next/router';
import axios from 'axios';
import { LanguageContext } from '../contexts/LanguageContext';
export default function ShippingInfo() {
	const { cart, setCart, shipSubmit, setShipSubmit } = useContext(CartContext);
	const { handleChange, contact } = useContext(ShippingContext);
	const { currLang, language } = useContext(LanguageContext);
	const router = useRouter();
	const style = { display: 'flex', justifyContent: 'space-between', width: '100%' };
	let cartConfirm;
	let totalStoredPrice;
	const ru = language.russian.cart;
	const en = language.english.cart;
	if (typeof window !== 'undefined') {
		cartConfirm = JSON.parse(sessionStorage.getItem('cart'));
		totalStoredPrice = JSON.parse(sessionStorage.getItem('totalPrice'));
	} else {
		cartConfirm = [];
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const parsedCart = JSON.parse(sessionStorage.getItem('cart'));
		const data = { contact, parsedCart };
		const email = {};
		axios.post(`${process.env.CMSLINKORDERS}`, data).then((res) => {
			email.to = res.data.emailAddress;
			email.subject = `2BirdsWedding: Номер заказа / Order Confirmation: ${res.data.order_number}`;
			email.text = `Мы получили Ваш заказ и свяжемся с Вами в течение 24 часов. Спасибо! 
				<br> 
				С уважением, 
				<br>
				Даша 
				<br>
				<br> 
				<hr> 
				<br> 
				Your order has been submitted! We will be in contact with you within 24 hours. Thank You!
				<br> 
				Sincerely, 
				<br>
				Dasha`;
			email.orderNumber = res.data.order_number;
			//redirect to thank you page

			router.push({ pathname: '/confirmation', query: { orderNumber: res.data.order_number } });

			//clear session storage

			setCart([]);
			return axios.post(`${process.env.CMSLINKEMAILS}`, email);
		});
	};

	//Handles iteration of items in the session storage cart

	return (
		<div className="shipping-info">
			<form onSubmit={handleSubmit} className="shipping-info__form" style={{ margin: '0px auto' }}>
				<h2 className="shipping-info__form__title">{currLang ? ru.title : en.title}</h2>
				<div className="shipping-info__form__group" style={style}>
					<input
						type="text"
						name="firstName"
						onChange={(e) => {
							handleChange(e);
						}}
						className="shipping-info__form__group__input"
						placeholder={currLang ? ru.firstName : en.firstName}
						style={{ width: '340px' }}
						required
					/>
					<input
						type="text"
						name="lastName"
						onChange={(e) => {
							handleChange(e);
						}}
						style={{ width: '340px' }}
						className="shipping-info__form__group__input"
						placeholder={currLang ? ru.lastName : en.lastName}
						required
					/>
				</div>
				<div className="shipping-info__form__group" style={style}>
					<input
						type="email"
						name="emailAddress"
						onChange={(e) => {
							handleChange(e);
						}}
						style={{ width: '340px' }}
						className="shipping-info__form__group__input"
						placeholder={currLang ? ru.email : en.email}
						required
					/>
					<input
						type="tel"
						name="telephoneNumber"
						onChange={(e) => {
							handleChange(e);
						}}
						style={{ width: '340px' }}
						className="shipping-info__form__group__input"
						placeholder={currLang ? ru.phoneNumber : en.phoneNumber}
					/>
				</div>
				{/* <input
					type="text"
					name="address"
					onChange={(e) => {
						handleChange(e);
					}}
					className="shipping-info__form__input"
					placeholder={currLang ? ru.address : en.address}
					required
				/>
				<input
					type="text"
					name="address_two"
					onChange={(e) => {
						handleChange(e);
					}}
					className="shipping-info__form__input"
					placeholder={currLang ? ru.address2 : en.address2}
				/>
				<input
					type="text"
					name="city"
					onChange={(e) => {
						handleChange(e);
					}}
					className="shipping-info__form__input"
					placeholder={currLang ? ru.city : en.city}
					required
				/>
				<div />
				<input
					type="text"
					name="state_region_province"
					onChange={(e) => {
						handleChange(e);
					}}
					className="shipping-info__form__input"
					placeholder={currLang ? ru.region : en.region}
					required
				/>

				<input
					type="text"
					name="country"
					onChange={(e) => {
						handleChange(e);
					}}
					className="shipping-info__form__input"
					placeholder={currLang ? ru.country : en.country}
					required
				/>

				<input
					type="text"
					name="index"
					onChange={(e) => {
						handleChange(e);
					}}
					className="shipping-info__form__input"
					placeholder={currLang ? ru.index : en.index}
					required
				/> */}
				<h2 className="shipping-info__form__title">{currLang ? ru.confirmation : en.confirmation}</h2>
				<ul className="shipping-info__form__cart shipping-info__form__cart__header">
					<li className="shipping-info__form__cart__item shipping-info__form__cart__header">
						{currLang ? ru.productImage : en.productImage}
					</li>
					<li className="shipping-info__form__cart__item shipping-info__form__cart__header">
						{currLang ? ru.productName : en.productName}
					</li>
					<li className="shipping-info__form__cart__item shipping-info__form__cart__header">
						{currLang ? ru.productAddOns : en.productAddOns}
					</li>
					<li className="shipping-info__form__cart__item shipping-info__form__cart__header">
						{currLang ? ru.productQuantity : en.productQuantity}
					</li>

					<li className="shipping-info__form__cart__item shipping-info__form__cart__header">
						{currLang ? ru.productTotal : en.productTotal}
					</li>
				</ul>
				{Object.values(cartConfirm).map((el) => {
					if (typeof el === 'object') {
						return (
							<ul className="shipping-info__form__cart">
								<li className="shipping-info__form__cart__item">
									<img
										style={{ width: '75px', height: '85px' }}
										src={`${process.env.CMSLINK}${el.productImage}`}
									/>
								</li>
								<li className="shipping-info__form__cart__item">
									{currLang ? el.productName.ru : el.productName.en}
								</li>
								<li className="shipping-info__form__cart__item">
									<ul>
										{Object.values(el.productParams).map((element) => {
											return <li key={element.id}>{currLang ? element.ru : element.en}</li>;
										})}
									</ul>
								</li>
								<li className="shipping-info__form__cart__item">{el.quantity}</li>

								<li className="shipping-info__form__cart__item">{el.productPrice * el.quantity} p.</li>
							</ul>
						);
					}
				})}
				<ul className="shipping-info__form__cart" style={{ borderBottom: 'none' }}>
					<li className="shipping-info__form__cart__item" style={{ borderBottom: 'none' }}>
						{' '}
					</li>
					<li className="shipping-info__form__cart__item" style={{ borderBottom: 'none' }}>
						{' '}
					</li>
					<li className="shipping-info__form__cart__item">
						<button
							type="submit"
							onClick={() => {
								setShipSubmit(true);
							}}
							className="shipping-info__form__button"
						>
							{currLang ? ru.submit : en.submit}
						</button>
					</li>
					<li className="shipping-info__form__cart__item">{currLang ? ru.orderTotal : en.orderTotal}:</li>
					<li className="shipping-info__form__cart__item">{totalStoredPrice} p.</li>
				</ul>
			</form>
		</div>
	);
}
