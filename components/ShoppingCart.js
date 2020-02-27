import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import { LanguageContext } from '../contexts/LanguageContext';
import Link from 'next/link';
// import { css } from '@emotion/core';
// import ClockLoader from 'react-spinners/ClockLoader';
const ShoppingCart = (props) => {
	const { cart, deleteItem, quantityDecrease, quantityIncrease, totalPrice, setTotalPrice } = useContext(CartContext);
	const { language, currLang, setCurrLang } = useContext(LanguageContext);
	// const [ loading, setLoading ] = useState(false);
	const ru = language.russian.cart;
	const en = language.english.cart;
	let sessionStorageCart;

	if (typeof window !== 'undefined') {
		sessionStorageCart = JSON.parse(sessionStorage.getItem('cart'));
	} else {
		sessionStorageCart = [];
	}
	useEffect(
		() => {
			let totalPrice = 0;
			for (let i = 0; i < cart.length; i++) {
				totalPrice = totalPrice + cart[i].productPrice * cart[i].quantity;
			}

			setTotalPrice(totalPrice);
			window.sessionStorage.setItem('totalPrice', JSON.stringify(totalPrice));
		},
		[ cart ]
	);
	return (
		<div className="cart">
			<div className="cart__item">
				<p className="cart__item__content cart__item__content__header">
					{currLang ? ru.productImage : en.productImage}
				</p>
				<p className="cart__item__content cart__item__content__header">
					{currLang ? ru.productName : en.productName}
				</p>
				<p className="cart__item__content cart__item__content__header">
					{currLang ? ru.productAddOns : en.productAddOns}
				</p>
				<p className="cart__item__content cart__item__content__header">
					{currLang ? ru.productUnitPrice : en.productUnitPrice}
				</p>
				<p className="cart__item__content cart__item__content__header">
					{currLang ? ru.productQuantity : en.productQuantity}
				</p>
				<p className="cart__item__content cart__item__content__header">
					{currLang ? ru.productTotal : en.productTotal}
				</p>
				<p className="cart__item__content cart__item__content__header">
					{currLang ? ru.productDelete : en.productDelete}
				</p>
			</div>
			{sessionStorageCart.map((e, i) => (
				<div className="cart__item" key={e.id}>
					<div className="cart__item__content">
						<img
							style={{ width: '75px', height: '85px' }}
							src={`${process.env.CMSLINK}${e.productImage}`}
						/>
					</div>

					<p className="cart__item__content">{currLang ? e.productName.ru : e.productName.en}</p>
					<ul className="cart__item__content">
						{Object.values(e.productParams).map((el) => {
							let arr = [];
							Object.values(el).map((ele) => {
								arr.push(ele.toString());
							});
							console.log(arr[1])
							return (
								<li key={el.id} className="cart__item__content__item">
									{currLang ? `${arr[1]}` : `${arr[0]}`}
								</li>
							);
						})}
					</ul>

					<p className="cart__item__content">
						{e.productPrice} p. / {currLang ? ru.unit : en.unit}
					</p>
					<div
						className="cart__item__content cart__cart-quantity"
						style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
					>
						<button className="cart__cart-quantity__btn" value={i} onClick={(el) => quantityDecrease(el)} />
						<p className="cart__cart-quantity__number">{e.quantity}</p>
						<button
							className="cart__cart-quantity__btn__increase"
							value={i}
							onClick={(el) => quantityIncrease(el)}
						/>
					</div>

					<p className="cart__item__content">{e.quantity * e.productPrice} p.</p>
					<div className="cart__item__content cart__delete">
						<button className="cart__delete__btn" onClick={(el) => deleteItem(el)} value={i}>
							<svg className="cart__delete__garbage" width="25" height="55" viewBox="0 0 32 32">
								<path
									fill="red"
									d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"
								/>
								<path
									className="cart__delete__garbage__lid"
									fill="red"
									d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"
								/>
							</svg>
						</button>
					</div>
				</div>
			))}
			<div className="cart__item cart__item__button" style={{ border: 'none' }}>
				<div className="cart__item__content" />
				<div className="cart__item__content" />
				<div className="cart__item__content" />
				<div className="cart__item__content" />
				<div className="cart__item__content">
					<Link href={{ pathname: '/shipping' }}>
						<button className="cart__button">{currLang ? ru.confirm : en.confirm}</button>
					</Link>
				</div>
				<div className="cart__item__content">
					{currLang ? ru.orderTotal : en.orderTotal}: {totalPrice} p.
				</div>
				<div className="cart__item__content" />
			</div>
		</div>
	);
};
export default ShoppingCart;
