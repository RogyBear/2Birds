import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { LanguageContext } from '../../contexts/LanguageContext';
import { CartContext } from '../../contexts/CartContext';
import ShoppingCartSlider from '../../components/ShoppingCartSlider';

function Post({ product }) {
	let sum = product.price;
	const { language, currLang } = useContext(LanguageContext);
	const { cart, addItem } = useContext(CartContext);
	const [ price, setPrice ] = useState(product.price);
	const [ obj, setObj ] = useState({
		productName: {
			en: product.en_name,
			ru: product.ru_name
		},
		productParams: {},
		quantity: 1,
		productPrice: price,
		productImage: product.image[0].url
	});
	const ru = language.russian.product;
	const en = language.english.product;
	// Updates product price based on parameters that are selected
	useEffect(
		() => {
			Object.values(obj.productParams).map((value) => {
				sum += Number(value.price);
				setPrice(sum);
			});

			setObj((prevState) => ({
				...prevState,
				productPrice: sum
			}));
		},
		[ obj.productParams ]
	);

	// Updates state by using a copy of the rest of the object except the selected item
	const removeParam = (key, params) => {
		const { [key]: val, ...withoutParam } = params;
		setObj((prevState) => ({
			...prevState,
			productParams: withoutParam
		}));
	};

	// Handles parameters to be pushed to local object
	const handleChange = (e) => {
		const { name, value } = e.target;

		// grab both en and ru option and price
		const parsedValues = value.split('-');
		// store appropriate one in en or ru or price

		const price = parsedValues[0];
		const ru = parsedValues[1];
		const en = parsedValues[2];

		// store value in params
		let newInput;

		newInput = Object.assign({}, obj.productParams, { [name]: { en: en, ru: ru, price: price } });
		if (value === '0') {
			removeParam(name, obj.productParams);
		} else {
			setObj((prevState) => ({
				...prevState,
				productParams: newInput
			}));
		}
	};

	// Quantity Function
	const handleQuantity = (e) => {
		const quantityKey = e.target.value;
		if (quantityKey === 'inc') {
			setObj((prevState) => ({ ...prevState, quantity: obj.quantity + 1 }));
		} else {
			if (obj.quantity > 1) {
				setObj((prevState) => ({ ...prevState, quantity: obj.quantity - 1 }));
			}
		}
	};

	return (
		<div className="product-description">
			{/* Picture Slider */}
			<ShoppingCartSlider product={product} />

			<div className="product-description__information">
				{/* All text information on the [id] page */}
				<h1 className="product-description__information__title">
					{currLang ? ` ${product.ru_name}` : ` ${product.en_name}`}
					{` - ${obj.productPrice} p.`}
				</h1>
				{/* Product Description */}
				<div className="product-description__information__description">
					<div className="product-description__information__description__main-text">
						<h2 className="product-description__information__description__main-text__title">
							{currLang ? ru.complekt : en.complekt}:
						</h2>
						{product.komplekt_description.map((e, i) => (
							<p
								key={e.id}
								className="product-description__information__description__main-text__attributes"
							>
								- {currLang ? e.russian : e.english}
							</p>
						))}
					</div>
					<div className="product-description__information__description__sub-text">
						<h2 className="product-description__information__description__sub-text__title">
							{currLang ? ru.additions : en.additions}:
						</h2>

						{product.dopolneniye_description.map((e, i) => (
							<p
								key={e.id}
								className="product-description__information__description__sub-text__attributes"
							>
								- {currLang ? e.russian : e.english}
							</p>
						))}
					</div>
				</div>

				{/* Parameters + Add to Cart */}
				<div className="product-description__information__selectors">
					{product.product_params.map((options, i) => (
						<select
							className="product-description__information__selection"
							name={`parameter-${i + 1}`}
							key={options.id}
							onChange={handleChange}
						>
							<option label={currLang ? options.select_name_ru : options.select_name_en} value={'0'} />
							<option
								value={`${options.price_option_one}-${options.ru_option_one}-${options.en_option_one}`}
							>
								{currLang ? `${options.ru_option_one}` : `${options.en_option_one}`}
							</option>
							<option
								value={`${options.price_option_two}-${options.ru_option_two}-${options.en_option_two}`}
							>
								{currLang ? `${options.ru_option_two}` : `${options.en_option_two}`}
							</option>
							<option
								value={`${options.price_option_three}-${options.ru_option_three}-${options.en_option_three}`}
							>
								{currLang ? `${options.ru_option_three}` : `${options.en_option_three}`}
							</option>
						</select>
					))}

					<div className="product-description__information__control">
						<div className="product-description__information__quantity">
							<button
								className="product-description__information__quantity__decrease"
								value="dec"
								onClick={handleQuantity}
							>
								Decrease
							</button>
							<p className="product-description__information__quantity__number">{obj.quantity}</p>
							<button
								className="product-description__information__quantity__increase"
								value="inc"
								onClick={handleQuantity}
							>
								Increase
							</button>
						</div>

						<button
							className="product-description__information__add-item"
							onClick={() => {
								addItem(obj);
							}}
						>
							{currLang ? ru.add : en.add}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

Post.getInitialProps = async (context) => {
	const { id } = context.query;
	const res = await axios.get(`${process.env.CMSLINKSTORES}/${id}`);

	const { data } = res;
	return { product: data };
};

export default Post;
