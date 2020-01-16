import React, { Component } from 'react';
import Slider from 'react-slick';

export default class ShoppingCartSlider extends Component {
	render() {
		let settings = {
			customPaging: function(i) {
				return (
					<a>
						<img style={{ width: '80px', height: '80px' }} src={`${process.env.CMSLINK}${image[i].url}`} />
					</a>
				);
			},
			dots: true,
			infinite: true,
			dotsClass: 'slick-dots slick-thumb',
			speed: 500,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false
		};
		let props = this.props;
		let image = props.product.image;

		return (
			<Slider {...settings} style={{ width: 400 }}>
				{image.map((el, i) => (
					<div key={el.id} className="slider-id-page">
						<img className="slider-id-page__img" src={`${process.env.CMSLINK}${el.url}`} />
					</div>
				))}
			</Slider>
		);
	}
}
