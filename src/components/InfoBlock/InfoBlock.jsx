import style from './InfoBlock.module.css';

function InfoBlock({ title, imgName }) {
	return (
		<div className={style.block}>
			<div>
				<img src={'img/' + imgName + '_icon.png'} alt='send_icon' />
			</div>
			<h1 className={style.block__title}>{title}</h1>
			<p className={style.text}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
			</p>
		</div>
	);
}

export default InfoBlock;
