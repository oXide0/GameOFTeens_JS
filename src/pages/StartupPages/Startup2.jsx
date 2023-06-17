import style from './Startup.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StartupButton from '../../components/UI/StartupButton/StartupButton';

function Startup2() {
	return (
		<div className='wrapper'>
			<Header />
			<main>
				<section>
					<div className={style.startup__main__info}>
						<img src='img/startup2photo.jpg' alt='' style={{ zIndex: 999 }} />
						<div className={style.rightside}>
							<h1 className={style.startup__title}>VH-80A: Auto Calibration Dual Laser Distance Meter</h1>
							<p className={style.startup__description}>
								Introducing the VH-80A: The World's Most Advanced Dual Laser Measure with Auto
								Calibration technology. Say goodbye to clunky, slow, and inaccurate tools on the job.
								With the VH-80A, it's like having a personal assistant in your pocket to provide you the
								power and accuracy of a professional. You can take on any project with confidence and
								precision to become a true expert.
							</p>
							<p className={style.startup__money__count}>
								0/30.000$ earned <button>Donate</button>
							</p>
						</div>
					</div>
					<div className={style.startup__info}>
						<p className={style.text}>
							The dual laser technology enables more than nine times faster work efficiency than
							conventional measuring tools. With the ability to measure at any point on the line with just
							one click, VH-80A ensures quick and accurate results every time.
							<br />
							With the advanced Auto Calibration function, you can trust the VH-80A will deliver accurate
							measurement values, taking your measuring operations to a new level of comfort, efficiency,
							and professionalism.
						</p>
						<img src='img/startup2photo2.jpg' alt='' />
					</div>
					<div className={style.startup__info}>
						<img src='img/startup2photo3.jpg' alt='' />
						<p className={style.text}>
							The VH-80A is designed for global use and is compatible with both imperial and metric
							systems. The device's unit preferences are applied to all calculations and functions, and
							can easily be switched between units directly on the device or the app.
							<br />
							We are proud to produce VH-80A in our own factory located in South Korea. Our team oversees
							the whole process from start to finish. We manufacture, test product quality and ship
							everything from right here.
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

export default Startup2;
