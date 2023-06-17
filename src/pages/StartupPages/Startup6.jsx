import style from './Startup.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StartupButton from '../../components/UI/StartupButton/StartupButton';

function Startup6() {
	return (
		<div className='wrapper'>
			<Header />
			<main>
				<section>
					<div className={style.startup__main__info}>
						<img src='img/startup6photo.jpg' alt='' style={{ zIndex: 999 }} />
						<div className={style.rightside}>
							<h1 className={style.startup__title}>
								Euhomy: The Electric Cooler With A Fully Automated Ice Maker
							</h1>
							<p className={style.startup__description}>
								Welcome to the future of outdoor cooling! Euhomy presents a groundbreaking solution for
								outdoor enthusiasts - a portable electric cooler with a fully automated ice maker. Say
								goodbye to traditional coolers and their limitations. With Euhomy, you can enjoy
								ice-cold refreshments and keep your food fresh anywhere you go.
							</p>
							<p className={style.startup__money__count}>
								0/30.000$ earned <button>Donate</button>
							</p>
						</div>
					</div>
					<div className={style.startup__info}>
						<p className={style.text}>
							With a 34.9qt (33L) refrigerator and a 12.7qt (12L) ice maker, Euhomy provides ample space
							for all your essentials. Keep your drinks, snacks, and perishables cold and organized, while
							the ice maker guarantees a constant supply of refreshing ice cubes.
						</p>
						<img src='img/startup6photo2.jpg' alt='' />
					</div>
					<div className={style.startup__info}>
						<img src='img/startup6photo3.jpg' alt='' />
						<p className={style.text}>
							Euhomy features a USB port for charging devices, a bottle opener, cup holders (up to 10
							cups), and a visible window above the icemaker to observe the ice-making process. <br />
							Euhomy's temperature control panel and companion app allow you to adjust the internal
							temperature precisely. Keep your items chilled between -4° and 50° Fahrenheit (-20° to 10°
							Celsius), ensuring optimal freshness for an array of items.
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

export default Startup6;
