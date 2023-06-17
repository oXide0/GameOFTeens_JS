import style from './Startup.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StartupButton from '../../components/UI/StartupButton/StartupButton';

function Startup1() {
	return (
		<div className='wrapper'>
			<Header />
			<main>
				<section>
					<div className={style.startup__main__info}>
						<img src='img/startup1photo.png' alt='' style={{ zIndex: 999 }} />
						<div className={style.rightside}>
							<h1 className={style.startup__title}>AirCard - Find your wallet. Always.</h1>
							<p className={style.startup__description}>
								Air card is the first card-sized tracker in the world with an integrated digital
								business card. Locate your wallet with the help of millions of devices in Apple's mesh
								network.
							</p>
							<p className={style.startup__money__count}>
								0/30.000$ earned <button>Donate</button>
							</p>
						</div>
					</div>
					<div className={style.startup__info}>
						<p className={style.text}>
							Hundreds of Millions of Iphones, iPads and Macs all across the globe are connected to to
							Apple's Find My network. AirCard emits a strong bluetooth signal that can be detected by
							neighbouring devices in the network, which they convey the AirCard's position to iCloud.
							Because of this, you can always access the Find My app and view its location on the map.
						</p>
						<img src='img/startup1photo2.png' alt='' />
					</div>
					<div className={style.startup__info}>
						<img src='img/startup1photo3.png' alt='' />
						<p className={style.text}>
							If your wallet is hiding nearby, make it sound using the app to find it right away. You can
							also ask Siri where your wallet is to make it sound. AirCard batteries last for 30 months. A
							couple of weeks prior, we will send you a 50% discount code for a new AirCard. But the
							AirCard is designed to avoid e-waste, so even 30 months from now, it will still have most of
							its functionality: it will remain a digital business card and save a scan to find.
							Otherwise, you can also send it to us and we will reuse most of its components!
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

export default Startup1;
