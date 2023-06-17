import style from './StartupButton.module.css';
import { Link } from 'react-router-dom';

function StartupButton({ children }) {
	return (
		<Link to='/contacts'>
			<button className={style.startup_btn}>{children}</button>
		</Link>
	);
}

export default StartupButton;
