import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const ShippingContext = createContext();
export function ShippingProvider(props) {
	let initializeState;
	if (typeof window !== 'undefined') {
		initializeState = JSON.parse(sessionStorage.getItem('contact'));
		if (initializeState === null) {
			initializeState = {};
		}
	}
	const [ contact, setContact ] = useState({});
	const router = useRouter();

	const handleChange = (e) => {
		const { name, value } = e.target;
		
		setContact((prevState) => ({ ...prevState, [name]: value }));
	};

	return <ShippingContext.Provider value={{ contact, handleChange }}>{props.children}</ShippingContext.Provider>;
}
