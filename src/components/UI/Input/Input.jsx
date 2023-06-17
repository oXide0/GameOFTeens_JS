import style from './Input.module.css';

function Input({ title, placeholder, type = 'text' }) {
	return (
		<div className={style.input__block}>
			<label htmlFor={title} className={style.label}>
				{title}
			</label>
			<input type={type} placeholder={placeholder} name={title} className={style.input} />
		</div>
	);
}

export default Input;
