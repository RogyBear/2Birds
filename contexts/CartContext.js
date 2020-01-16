import React, { createContext, useState, useEffect } from 'react';
import update from 'immutability-helper';
import _ from 'lodash';

export const CartContext = createContext();

export function CartProvider(props) {
	let initializeState = [];
	let initialTotal;
	if (typeof window !== 'undefined' && sessionStorage.getItem('cart')) {
		initializeState = JSON.parse(sessionStorage.getItem('cart'));
	}

	const [ shipSubmit, setShipSubmit ] = useState(false);

	// INITALIZE THE CART
	const [ cart, setCart ] = useState(initializeState);
	const checkCart = () => {
		return cart;
	};
	const [ totalPrice, setTotalPrice ] = useState(initialTotal);
	//Session Storage
	useEffect(
		() => {
			window.sessionStorage.setItem('cart', JSON.stringify(cart));
			
		},
		[ cart ]
	);

	const checkArr = (obj1, obj2) => {
		return _.isEqual(obj1, obj2);
	};

	// DELETE ITEM
	const deleteItem = (e) => {
		let currentItem = e.currentTarget.value;
		let cartCopy = cart;
		cartCopy.splice(currentItem, 1);

		//Session Storage State

		window.sessionStorage.setItem('cart', JSON.stringify([ ...cartCopy ]));
		setCart([ ...cartCopy ]);
	};

	// QUANTITY DECREASE
	const quantityDecrease = (e) => {
		let currentItem = e.target.value;
		let cartCopy = cart;
		cartCopy[currentItem].quantity = cartCopy[currentItem].quantity - 1;

		//Session Storage State

		window.sessionStorage.setItem('cart', JSON.stringify([ ...cartCopy ]));
		if (cartCopy[currentItem].quantity === 0) {
			deleteItem(e);
		}
		setCart([ ...cartCopy ]);
	};

	// QUANTITY INCREASE
	const quantityIncrease = (e) => {
		let currentItem = e.target.value;
		let cartCopy = cart;
		cartCopy[currentItem].quantity = cartCopy[currentItem].quantity + 1;

		//Session Storage State

		window.sessionStorage.setItem('cart', JSON.stringify([ ...cartCopy ]));
		setCart([ ...cartCopy ]);
	};

	// ADD ITEM
	// Change to reflect translation changes
	const addItem = (obj) => {
		let dataCheck = false;
		let noRepeat = false;

		if (cart.length != 0) {
			cart.map((e, i) => {
				if (e.productName.en === obj.productName.en) {
					const prevVal = e.productParams;
					const currentVal = obj.productParams;
					dataCheck = checkArr(prevVal, currentVal);
					if (dataCheck === true) {
						const object = e;
						const cartCopy = cart;
						const newObj = update(object, { quantity: { $set: object.quantity + obj.quantity } });
						const newState = update(cartCopy, { [i]: { $set: newObj } });
						setCart(newState);
						noRepeat = true;
					}
				}
			});
		} else {
			setCart([ ...cart, obj ]);
		}
		if (dataCheck === false && noRepeat === false) {
			setCart([ ...cart, obj ]);
		}
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				checkCart,
				addItem,
				deleteItem,
				quantityIncrease,
				quantityDecrease,
				shipSubmit,
				setShipSubmit,
				totalPrice,
				setTotalPrice
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
}
