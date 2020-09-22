import React from 'react'
import classes from './Card.module.css'

const Card = ({ image }) => {
	return (
		<a
			href={image.url}
			className={classes.CardLink}
			target='_blank'
			rel='noopener noreferrer'
		>
			<div className={classes.Card}>
				<img
					src={require(`../../../assets/${image.src}`)}
					alt='about'
					className={classes.CardImage}
				/>
				<div className={classes.TitleContainer}>
					<p className={classes.Title}>{image.name}</p>
				</div>
			</div>
		</a>
	)
}

export default Card
