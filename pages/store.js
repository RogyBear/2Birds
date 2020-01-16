import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import axios from 'axios';
export default class store extends Component {
	static async getInitialProps() {
		const res = await axios.get(`${process.env.CMSLINKSTORES}`);
		const { data } = res;
		return { product: data };
	}

	render() {
		const { product } = this.props;

		return (
			<div style={{ marginTop: '80px', marginBottom: '80px' }}>
				<ProductList product={product} />
			</div>
		);
	}
}
