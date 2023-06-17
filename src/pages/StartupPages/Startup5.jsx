import style from './Startup.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StartupButton from '../../components/UI/StartupButton/StartupButton';

function Startup5() {
	return (
		<div className='wrapper'>
			<Header />
			<main>
				<section>
					<div className={style.startup__main__info}>
						<img src='img/startup5photo.jpg' alt='' style={{ zIndex: 999 }} />
						<div className={style.rightside}>
							<h1 className={style.startup__title}>Philips x Kokoon Sleep Headphones</h1>
							<p className={style.startup__description}>
								Say goodbye to short nights and embrace the ultimate sleep experience with Sleep
								Headphones.
							</p>
							<p className={style.startup__money__count}>
								0/30.000$ earned <button>Donate</button>
							</p>
						</div>
					</div>
					<div className={style.startup__info}>
						<p className={style.text}>
							We spend a third of our lives sleeping, and it's been scientifically proven that sleep is
							incredibly important for our health, happiness, performance, and relationships. Yet, so many
							of us leave sleep to chance. At Kokoon, we believe we can all sleep better through science.
							This is why we've teamed up with one of the worlds leading technology brands, Philips, to
							create the ultimate sleep solution: Sleep Headphones.
						</p>
						<img src='img/startup5photo2.jpg' alt='' />
					</div>
					<div className={style.startup__info}>
						<img src='img/startup5photo3.jpg' alt='' />
						<p className={style.text}>
							While other sleep trackers only monitor your sleep, Kokoon goes a step further by helping
							you both fall asleep and stay asleep. Soft and super-slim, these tiny buds sit snug within
							the ear; unnoticeable no matter what position you sleep.
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

export default Startup5;
