import style from './Modal.module.css';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useState } from 'react';

const CARD_OPTIONS = {
	iconStyle: 'solid',
	style: {
		base: {
			iconColor: '#000',
			color: '#000',
			fontWeight: 500,
			fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
			fontSize: '22px',
			fontSmoothing: 'antialiased',
			marginTop: '20px',
			':-webkit-autofill': { color: 'gray' },
			'::placeholder': { color: 'gray' },
		},
		invalid: {
			iconColor: '#000',
			color: '#000',
		},
	},
};

function Modal({ active, setActive }) {
	const [success, setSuccess] = useState(false);
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement),
		});

		if (!error) {
			try {
				const { id } = paymentMethod;
				const response = await axios.post('http://localhost:4000/payment', {
					amount: 1000,
					id,
				});

				if (response.data.success) {
					console.log('Successful payment');
					setSuccess(true);
				}
			} catch (error) {
				console.log('Error', error);
			}
		} else {
			console.log(error.message);
		}
	};

	return (
		<div
			className={active ? `${style.modal__container} ${style.active}` : style.modal__container}
			onClick={() => setActive(false)}
		>
			<div
				className={active ? `${style.modal} ${style.active}` : style.modal}
				onClick={(e) => e.stopPropagation()}
			>
				<h2 className={style.modal__title}>Support startup</h2>
				<p className={style.modal__subtitle}>Please enter your email and password.</p>
				<form onSubmit={handleSubmit} className={style.modal__form}>
					<div className={style.modal__input_block}>
						<input type='email' placeholder='Email' className={style.modal__input} />
					</div>
					<div className={style.modal__input_block}>
						<input type='password' placeholder='Password' className={style.modal__input} />
					</div>
					<div className={style.modal__input_block}>
						<input type='text' placeholder='Sum of donate' className={style.modal__input} />
					</div>
					<CardElement options={CARD_OPTIONS} className={style.card_input} />
					<div className={style.modal__btn}>
						<button className={style.btn__pay}>Donate</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Modal;
