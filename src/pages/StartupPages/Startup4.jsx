import style from './Startup.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StartupButton from '../../components/UI/StartupButton/StartupButton';

function Startup4() {
	return (
		<div className='wrapper'>
			<Header />
			<main>
				<section>
					<div className={style.startup__main__info}>
						<img src='img/startup4photo.png' alt='' style={{ zIndex: 999 }} />
						<div className={style.rightside}>
							<h1 className={style.startup__title}>
								SHARGE Disk丨The ultimate storage solution for EDC device
							</h1>
							<p className={style.startup__description}>
								SHARGE Disk is an ultra-lightweight and small portable M.2 NVMe SSD with Active Heat
								Dissipation System, with 2TB (Maximum) capacity and high read/write speeds of up to 1000
								MB/s. It features an aluminum shell and a silicone case for any unpredictable
								circumstances.
							</p>
							<p className={style.startup__money__count}>
								0/30.000$ earned <button>Donate</button>
							</p>
						</div>
					</div>
					<div className={style.startup__info}>
						<p className={style.text}>
							For MacBook Pro users, external drive helps reduce wear and tear than internal one, and this
							is what SHARGE Disk is here for. It will help reduce wear and tear on the original MacBook
							Pro SSD and save you tons of money! With 2TB capacity and 1000MB/s transfer speed, SHARGE
							Disk meets most of your daily needs. Silky smooth for playing AAA games. Lightning
							efficiency for doing video editing.
						</p>
						<img src='img/startup4photo2.png' alt='' />
					</div>
					<div className={style.startup__info}>
						<img src='img/startup4photo3.png' alt='' />
						<p className={style.text}>
							Sometimes you have to connect your SSD to a public computer, and if you unfortunately
							connect to a computer with virus, all your files will be in great danger. To protect your
							files, we have added hardware write protection to SHARGE Disk.
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

export default Startup4;
