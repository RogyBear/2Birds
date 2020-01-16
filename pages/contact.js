import React, { Component } from 'react';
import Postcard from '../components/Postcard';

export default class contact extends Component {
	render() {
		return (
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<Postcard />
			</div>
		);
	}
}
