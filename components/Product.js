import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../contexts/LanguageContext';

const Product = (props) => {
	const { language, currLang, setCurrLang } = useContext(LanguageContext);
	const [ selected, setSelected ] = useState('');
	const ru = language.russian.product;
	const en = language.english.product;

	return (
		<div className="products">
			<ul className="products__categories">
				<li className="products__categories__item">
					<a
						onClick={() => {
							props.setCategory('custom');
							props.setCurrentPage(1);
							setSelected('custom');
						}}
						style={props.category === 'custom' ? { color: '#FFACBA' } : { color: '#888888' }}
					>
						{currLang ? ru.custom_cards : en.custom_cards}
					</a>
				</li>
				<li className="products__categories__item">
					<a
						onClick={() => {
							props.setCategory('premade');
							props.setCurrentPage(1);
						}}
						style={props.category === 'premade' ? { color: '#FFACBA' } : { color: '#888888' }}
					>
						{/* {t('prepared_cards')} */}
						{currLang ? ru.prepared_cards : en.prepared_cards}
					</a>
				</li>
				<li className="products__categories__item">
					<a
						onClick={() => {
							props.setCategory('gift');
							props.setCurrentPage(1);
						}}
						style={props.category === 'gift' ? { color: '#FFACBA' } : { color: '#888888' }}
					>
						{currLang ? ru.souvenirs : en.souvenirs}
					</a>
				</li>
			</ul>
			<select
				className="products__select"
				onChange={(e) => {
					props.setCategory(e.target.value);
					props.setCurrentPage(1);
					setSelected(e.target.value);
				}}
			>
				<option value="custom" className="products__select__item">
					{currLang ? ru.custom_cards : en.custom_cards}
				</option>
				<option value="premade" className="products__select__item">
					{currLang ? ru.prepared_cards : en.prepared_cards}
				</option>
				<option value="gift" className="products__select__item">
					{currLang ? ru.souvenirs : en.souvenirs}
				</option>
			</select>
			<div className="products__display">
				{props.posts.map((post) => {
					return (
						<div key={post.id} className="products__display__single-item">
							<Link href={`/store/[id]?id=${post.id}`} as={`/store/${post.id}`}>
								<a>
									<img
										className="products__display__single-item__img"
										src={`${process.env.CMSLINK}${post.image[0].url}`}
									/>
								</a>
							</Link>
							<h3>{post.name}</h3>
							<p>{`${currLang ? ru.from : en.from} ${post.price} р.`}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Product;
