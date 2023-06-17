import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import StartupButton from '../UI/StartupButton/StartupButton';
import { useState } from 'react';

function Header() {
	const [menuActive, setMenuActive] = useState(false);

	return (
		<header className={style.header}>
			<NavLink to='/' className={style.header__logo}>
				<img src='img/logo.png' alt='header_logo' className='logo' />
			</NavLink>
			<nav className={menuActive ? `${style.header__menu} ${style.active}` : style.header__menu}>
				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? `${style.header__link} ${style.active}` : style.header__link
					}
				>
					Home
				</NavLink>
				<NavLink
					to='/startups'
					className={({ isActive }) =>
						isActive ? `${style.header__link} ${style.active}` : style.header__link
					}
				>
					Startups
				</NavLink>
				<NavLink
					to='/events'
					className={({ isActive }) =>
						isActive ? `${style.header__link} ${style.active}` : style.header__link
					}
				>
					Events
				</NavLink>
				<NavLink
					to='/contacts'
					className={({ isActive }) =>
						isActive ? `${style.header__link} ${style.active}` : style.header__link
					}
				>
					Contacts
				</NavLink>
			</nav>
			<div className={style.header__btn}>
				<StartupButton>Place a startup</StartupButton>
			</div>
			<div className={style.header__btn_sm}>
				<button className={style.menu__button} onClick={() => setMenuActive(!menuActive)}>
					{menuActive ? (
						<img src='img/close_icon.svg' alt='close_icon' />
					) : (
						<img src='img/menu_icon.svg' alt='menu_icon' />
					)}{' '}
				</button>
			</div>
		</header>
	);
}

export default Header;
