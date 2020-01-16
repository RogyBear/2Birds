import React, { useContext } from 'react';

export default function shipConfirm() {
	const { cart } = useContext(CartContext);
	const { contact } = useContext(ShippingContext);

	let cartConfirm;
	let shippingConfirm;
	//Initializes session storage
	if (typeof window !== 'undefined') {
		cartConfirm = JSON.parse(sessionStorage.getItem('cart'));
	} else {
		cartConfirm = [];
	}

	const handleIteration = (cartItem) => {
		return Object.values(cartItem).map((el) => {
			if (typeof el === 'object') {
				return Object.values(el).map((element) => {
					return (
						<ul key={element.id}>
							{Object.entries(element).map((items) => <li>{`${items[0]} - ${items[1]}`}</li>)}
						</ul>
					);
				});
			} else {
				return <li>{el}</li>;
			}
		});
	};
	return <div onLoad={handleIteration}> </div>;
}
