import React, { useState, useContext, Fragment } from 'react';
import Product from './Product';
import Pagination from './Pagination';
import { LanguageContext } from '../contexts/LanguageContext';

const ProductList = ({ product }) => {
	const [ posts, setPosts ] = useState(product);
	const [ category, setCategory ] = useState('custom');
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ postsPerPage, setPostsPerPage ] = useState(6);
	const { currLang, language } = useContext(LanguageContext);
	const ru = language.russian.product;
	const en = language.english.product;
	let selectedOpt;
	let filteredProducts = posts.filter((post) => {
		let filteredArray = [];
		if (post.category === category) {
			return filteredArray.push(post);
		}
	});

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = filteredProducts.slice(indexOfFirstPost, indexOfLastPost);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	//Category Selection
	if (category === 'custom') {
		selectedOpt = currLang ? ru.custom_cards : en.custom_cards;
	} else if (category === 'premade') {
		selectedOpt = currLang ? ru.prepared_cards : en.prepared_cards;
	} else {
		selectedOpt = currLang ? ru.souvenirs : en.souvenirs;
	}

	return (
		<Fragment>
			<h1 className="store-title">{selectedOpt}</h1>
			<Product posts={currentPosts} setCategory={setCategory} setCurrentPage={setCurrentPage} category={category}/>
			<Pagination postsPerPage={postsPerPage} totalPosts={filteredProducts.length} paginate={paginate} />
		</Fragment>
	);
};

export default ProductList;
