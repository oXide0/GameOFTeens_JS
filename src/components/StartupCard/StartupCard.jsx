import style from './StartupCard.module.css';
import { useState } from 'react';

function StartupCard({ imgNum, title, desc, setActive }) {
	const [investment, setInvestment] = useState(0);

	return (
		<div className={style.card}>
			<div>
				<img src={'img/startup' + imgNum + '.avif'} alt='startup' className={style.card__img} />
			</div>
			<div className={style.card__main}>
				<h1 className={style.card__title}>{title}</h1>
				<p className={style.card__desc}>{desc}</p>
			</div>
			<p className={style.card__invest}>{investment}/30.000$</p>
			<div className={style.card__buttons}>
				<button className={style.card__btn}>View</button>
				<button className={style.card__btn} onClick={() => setActive(true)}>
					Donate
				</button>
			</div>
		</div>
	);
}

export default StartupCard;
