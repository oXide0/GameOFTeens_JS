import style from './Events.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Events() {
	return (
		<div className='wrapper'>
			<Header />
			<h2 className={style.title}>Events</h2>
			<div className={style.event__preview}>
				<img className={style.event__photo} src='img/1.png' alt='' />
				<div className={style.event__info}>
					<h3>Startup Essentials: Startup 101</h3>
					<p>
						<img className={style.event__info__icon} src='img/time.png' alt='' />
						Tuesday • 2:30 AM GMT+3
					</p>
					<p>
						<img className={style.event__info__icon} src='img/location.png' alt='' />
						Online
					</p>
					<p>
						<img className={style.event__info__icon} src='img/price.png' alt='' />
						11.99$
					</p>
				</div>
			</div>
			<div className={`${style.event__preview} ${style.right}`}>
				<img className={style.event__photo} src='img/2.png' alt='' />
				<div className={style.event__info}>
					<h3>Startup Pitch Workshop</h3>
					<p>
						<img className={style.event__info__icon} src='img/time.png' alt='' />
						Thu, Jun 29 • 5:00 AM GMT+3
					</p>
					<p>
						<img className={style.event__info__icon} src='img/location.png' alt='' />
						Kyiv, Kharkivske Shosse 19
					</p>
					<p>
						<img className={style.event__info__icon} src='img/price.png' alt='' />
						Free
					</p>
				</div>
			</div>
			<div className={style.event__preview}>
				<img className={style.event__photo} src='img/3.png' alt='' />
				<div className={style.event__info}>
					<h3>Startup Essentials: Startup 101</h3>
					<p>
						<img className={style.event__info__icon} src='img/time.png' alt='' />
						Thu, Jun 29 • 7:30 PM GMT+3
					</p>
					<p>
						<img className={style.event__info__icon} src='img/location.png' alt='' />
						Online
					</p>
					<p>
						<img className={style.event__info__icon} src='img/price.png' alt='' />
						Free
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Events;
