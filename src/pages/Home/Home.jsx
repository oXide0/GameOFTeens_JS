import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from './Home.module.css';
import StartupButton from '../../components/UI/StartupButton/StartupButton';
import InfoBlock from '../../components/InfoBlock/InfoBlock';

function Home() {
	return (
		<div className='wrapper'>
			<Header />
			<main className='main'>
				<section className={style.start}>
					<div className={style.start__row}>
						<div className={style.start__col}>
							<h1 className={style.start__title}>GoITeens Lab</h1>
							<p className={style.start__text}>
								A platform where teenagers can post their startups and look for investors to finance and
								implement their ideas
							</p>
							<div className={style.start__btn}>
								<StartupButton>Place your startup</StartupButton>
							</div>
						</div>
						<div className={style.start__img}>
							<img src='img/start_rocket.png' alt='start_rocket' />
						</div>
					</div>
					<div className={style.start__row_2}>
						<div className={style.start__col_2}>
							<h2 className={style.start__number}>500+</h2>
							<p className={style.number__text}>of hosted startups</p>
						</div>
						<div className={style.start__col_2}>
							<h2 className={style.start__number}>over 100.000$</h2>
							<p className={style.number__text}>investment</p>
						</div>
						<div className={style.start__col_2}>
							<h2 className={style.start__number}>150+</h2>
							<p className={style.number__text}>successful startups</p>
						</div>
					</div>
				</section>
				<section className={style.startup}>
					<div className={style.startup__row}>
						<h2 className={style.startup__title}>Build your startup</h2>
						<p className={style.startup__desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p className={style.startup__desc}>Feugiat nulla suspendisse tortor aene.</p>
					</div>
					<div className={style.startup__row_2}>
						<div className={style.startup__col}>
							<InfoBlock title='Send & Receive' imgName='send' />
							<InfoBlock title='100% Secure Wallet' imgName='purse' />
						</div>
						<div className={style.startup__img}>
							<img src='img/IOS.png' alt='' />
						</div>
						<div className={style.startup__col}>
							<InfoBlock title='Trading Charts' imgName='stat' />
							<InfoBlock title='Real Time Trading' imgName='trade' />
						</div>
					</div>
					<div className={style.startup__row_3}>
						<StartupButton>Place a startup</StartupButton>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default Home;
