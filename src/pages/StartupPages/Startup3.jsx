import style from './Startup.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StartupButton from '../../components/UI/StartupButton/StartupButton';

function Startup3() {
	return (
		<div className='wrapper'>
			<Header />
			<main>
				<section>
					<div className={style.startup__main__info}>
						<img src='img/startup3photo.jpg' alt='' style={{ zIndex: 999 }} />
						<div className={style.rightside}>
							<h1 className={style.startup__title}>
								UNIT 1 AURA: next-gen smart helmet for urban &amp; road ridin
							</h1>
							<p className={style.startup__description}>
								AURA gives you lights on your highest point, offers E-Bike certified protection and will
								even call for help if you crash. It does all that in a super lightweight package with
								extrensive ventilation and undeniable style.
							</p>
							<p className={style.startup__money__count}>
								0/30.000$ earned <button>Donate</button>
							</p>
						</div>
					</div>
					<div className={style.startup__info}>
						<p className={style.text}>
							Our three sizes can accommodate a wide range of heads and make sure everyone gets a snug,
							comfortable fit. Remember, the fitting system will get you that 5% to reach perfect fit.
						</p>
						<img src='img/startup3photo2.jpg' alt='' />
					</div>
					<div className={style.startup__info}>
						<img src='img/startup3photo3.jpg' alt='' />
						<p className={style.text}>
							AURA is a fully sealed system, making it perfect for all-weather use. All elements are
							designed up to IPX6 waterproof ratings, so you can rest assured they are with you for the
							long haul.
						</p>
					</div>
					<div className={style.startup__contacts}>
						<div className={style.contacts__email}>
							<p className={style.contacts__text}>Do you have any questions or proposals? Write to us</p>
							<input type='text' name='name' id='name' placeholder='Your name*' required='' />
							<input type='text' name='email' id='email' placeholder='Your email*' required='' />
							<textarea rows={5} cols={50} placeholder='Your message' required='' defaultValue={''} />
							<input type='file' id='file' name='filename' />
							<StartupButton>Send</StartupButton>
						</div>
						<div className={style.circle3} />
						<div className={style.contacts__socials}>
							<p className={style.contacts__text}>Also check out our socials:</p>
							<a className={style.social}>
								<img className={style.socialImg} src='img/instalogo.png' alt='' />
								Instagram name
							</a>
							<a className={style.social}>
								<img className={style.socialImg} src='img/twitterlogo.webp' alt='' />
								Twitter name
							</a>
							<a className={style.social}>
								<img className={style.socialImg} src='img/telegramlogo.webp' alt='' />
								Telegram name
							</a>
							<a className={style.social}>
								<img className={style.socialImg} src='img/linkedinlogo.webp' alt='' />
								LinkedIn name
							</a>
							<a className={style.social}>
								<img className={style.socialImg} src='img/youtubelogo.png' alt='' />
								YouTube name
							</a>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default Startup3;
