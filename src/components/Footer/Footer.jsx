import style from './Footer.module.css';
import { Link, NavLink } from 'react-router-dom';
import StartupButton from '../UI/StartupButton/StartupButton';

function Footer() {
	return (
		<footer className={style.footer}>
			<div className={style.footer__row}>
				<Link to='/' className={style.footer__logo}>
					<img src='img/logo.svg' alt='footer_logo' />
				</Link>
				<div className={style.footer__media}>
					<Link className={style.media__block} to='https://www.instagram.com/'>
						<img src='img/inst_icon.svg' alt='media_icon' />
					</Link>
					<Link className={style.media__block} to='facebook.com'>
						<img src='img/fac_icon.svg' alt='media_icon' />
					</Link>
					<Link className={style.media__block} to='https://www.linkedin.com/in/nazar-korchevskyi/'>
						<img src='img/link_icon.svg' alt='media_icon' />
					</Link>
				</div>
			</div>
			<div className={style.footer__row_2}>
				<nav className={style.footer__menu}>
					<h2 className={style.menu__title}>Menu</h2>
					<div className={style.border}></div>
					<div className={style.media__row}>
						<div className={style.media_col}>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? `${style.footer__link} ${style.active}` : style.footer__link
								}
							>
								Home
							</NavLink>
							<NavLink
								to='/startups'
								className={({ isActive }) =>
									isActive ? `${style.footer__link} ${style.active}` : style.footer__link
								}
							>
								STARTUPS
							</NavLink>
						</div>
						<div className={style.media_col}>
							<NavLink
								to='/events'
								className={({ isActive }) =>
									isActive ? `${style.footer__link} ${style.active}` : style.footer__link
								}
							>
								EVENTS
							</NavLink>
							<NavLink
								to='/contacts'
								className={({ isActive }) =>
									isActive ? `${style.footer__link} ${style.active}` : style.footer__link
								}
							>
								CONTACTS
							</NavLink>
						</div>
					</div>
				</nav>
				<div className={style.footer__block}>
					<h2 className={style.block__title}>Place a startup</h2>
					<p className={style.block__text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer{' '}
					</p>
					<div className={style.footer__btn}>
						<StartupButton>Place a startup</StartupButton>
					</div>
				</div>
			</div>
			<div className={style.footer__border}></div>
			<p className={style.footer__slogan}>All rights reserved</p>
		</footer>
	);
}

export default Footer;
