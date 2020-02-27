import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { LanguageContext } from '../contexts/LanguageContext';
import { css } from '@emotion/core';
import ClockLoader from 'react-spinners/ClockLoader';
export default function Postcard() {
	const { currLang, language } = useContext(LanguageContext);
	const [ loading, setLoading ] = useState(false);
	const en = language.english.postcard;
	const ru = language.russian.postcard;
	const [ contact, setContact ] = useState({
		code: 'contact',
		subject: '2BirdsWedding: Ваше письмо было отправлено / Your Message Has Been Sent',
		text: `Ваше письмо успешно отправлено. Мы свяжемся с Вами в течение 24 часов. Спасибо! 
		<br> 
		С уважением, 
		<br>
		Даша 
		<br>
		<br>
		<hr> 
		<br>
		Your message has been sent successfully. We will be in contact with you within 24 hours. Thank you!
		<br>
		Sincerely, 
		<br>
		Dasha
		`
	});
	const router = useRouter();

	const override = css`
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
	`;
	// Sends Contact Email
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		axios
			.post(`${process.env.CMSLINKEMAILS}`, contact, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(() => {
				router.push({ pathname: '/thankyou' });
			});
	};

	//Sets Contact State
	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setContact((prevState) => ({
			...prevState,
			[name]: value
		}));
	};

	return (
		<div className="postcard">
			<ClockLoader css={override} size={150} color={'#FFACBA'} loading={loading} />
			<img src="../static/img/postcard-border.png" className="postcard__border" />
			<img className="postcard__stamp place-stamp-here" src="../static/img/place_stamp_here.png" />
			<img src="../static/img/love_stamp.png" className="postcard__stamp love-stamp" />
			<img src="../static/img/ring_stamp.png" className="postcard__stamp ring-stamp" />
			<img src="../static/img/heart_rings_stamp.png" className="postcard__stamp heart-ring-stamp" />
			<img src="../static/img/2birds_stamp.png" className="postcard__stamp two-birds-stamp" />
			<div className="postcard__data">
				<div className="postcard__data__left">
					<p className="postcard__data__left__paragraph">{currLang ? ru.writing : en.writing}</p>
				</div>
				<div className="postcard__data__line" style={{ width: '3px', height: '400px', background: '#000' }}>
					{' '}
				</div>
				<form onSubmit={handleSubmit} className="postcard__data__right">
					{/* Name */}
					<label>{currLang ? ru.name : en.name}</label>
					<input type="text" required name="name" onChange={handleChange} />
					{/* Telephone */}
					<label>{currLang ? ru.telephone : en.telephone}</label>
					<input name="telephone" onChange={handleChange} type="tel" />
					{/* Email */}
					<label>{currLang ? ru.email : en.email}</label>
					<input name="to" required onChange={handleChange} type="text" />
					{/* Message */}
					<label>{currLang ? ru.message : en.message}:</label>
					<textarea name="message" onChange={handleChange} required />

					{/* Submit Button */}
					<button type="submit">{currLang ? ru.send : en.send}</button>
				</form>
			</div>
		</div>
	);
}
