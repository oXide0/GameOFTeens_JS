import style from './Contact.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StartupButton from '../../components/UI/StartupButton/StartupButton';
import Input from '../../components/UI/Input/Input';

function Contact() {
	return (
		<div className='wrapper'>
			<Header />
			<main className='main'>
				<section className={style.contact}>
					<h1 className={style.contact__title}>Get in touch</h1>
					<div className={style.contact__content}>
						<form action='' className={style.content__from}>
							<div className={style.input__row}>
								<Input title='name' placeholder='Full Name' />
								<Input title='Email' placeholder='email@example.com' type='email' />
							</div>
							<div className={style.input__row}>
								<Input title='Startup' placeholder='Startup Name' />
								<Input title='Subject' placeholder='How can we help?' />
							</div>
							<div className={style.contact__message}>
								<label htmlFor='Message' className={style.contact__label}>
									Message
								</label>
								<textarea
									type='text'
									name='Message'
									placeholder='Tell about your startup'
									className={style.contact__input}
									rows='6'
								/>
							</div>
							<div className={style.contact__btn}>
								<StartupButton>Send message</StartupButton>
							</div>
						</form>
						<div className={style.contact__emails}>
							<h2 className={style.contact__subtitle}>Want to reach us directly?</h2>
							<p className={style.emails__text}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit
								id sagittis non donec egestas.
							</p>
							<div className={style.email}>
								<img src='img/message_icon.png' alt='message_icon' />
								<p className={style.email__link}>contact@example.com</p>
							</div>
							<div className={style.email}>
								<img src='img/message_icon.png' alt='message_icon' />
								<p className={style.email__link}>support@example.com</p>
							</div>
							<div className={style.email}>
								<img src='img/message_icon.png' alt='message_icon' />
								<p className={style.email__link}>press@example.com</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default Contact;
