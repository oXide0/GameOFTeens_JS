import style from './Startups.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StartupCard from '../../components/StartupCard/StartupCard';
import Modal from '../../components/UI/Modal/Modal';
import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const PUBLI_KEY =
	'pk_test_51NJjW7FAXVjnHjm6INqF2LXeBj7X9PSWuQh67pHKYetaBKDOgkoXv9anjjMwyTXOiJdN2cOCw1H7OWm3L8APIYYD00SzHjmVlI';
const stripeTestPromise = loadStripe(PUBLI_KEY);

function Startups() {
	const [modalActive, setModalActive] = useState(false);

	return (
		<div className='wrapper'>
			<Header />
			<main className='main'>
				<section className={style.startups}>
					<Elements stripe={stripeTestPromise}>
						<Modal active={modalActive} setActive={setModalActive} />
					</Elements>

					<h1 className={style.startups__title}>Startups</h1>
					<div className={style.startups__blocks}>
						<div className={style.blocks__row}>
							<StartupCard
								imgNum={1}
								title='AirCard'
								desc='Apple Find My worldwide tracking - RFID Blocker - Digital Business Card - 2.2mm thin - 105dB loud - 2.5 years battery life.'
								setActive={setModalActive}
								path='/startup1'
							/>
							<StartupCard
								imgNum={2}
								title='Dual Laser Distance'
								desc='New Era of Distance Measurement | Highest Accuracy with Auto-Calibration Feature | 9 Times Faster Project Speed.'
								setActive={setModalActive}
								path='/startup2'
							/>
							<StartupCard
								imgNum={3}
								title='UNIT 1 AURA'
								desc='Elevate your safety with integrated lights, turn signals, brake lights, Mips & Crash detection. E-bike certified.'
								setActive={setModalActive}
								path='/startup3'
							/>
						</div>
						<div className={style.blocks__row}>
							<StartupCard
								imgNum={4}
								title='SHARGE Disk'
								desc='Two-bottle-cap size丨Cool down your SSD by 20°C丨Cable-free丨The ultimate storage solution for EDC device <2min.'
								setActive={setModalActive}
								path='/startup4'
							/>
							<StartupCard
								imgNum={5}
								title='Philips x Kokoon Sleep Headphones'
								desc='The ultimate sleep earbuds are here - start your journey to better sleep.'
								setActive={setModalActive}
								path='/startup5'
							/>
							<StartupCard
								imgNum={6}
								title='Euhomy: The Electric Cooler'
								desc='12L Fully Automated Ice maker | 33L Refrigerator | High-capacity & Removable Battery.'
								setActive={setModalActive}
								path='/startup6'
							/>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default Startups;
