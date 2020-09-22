import React from 'react'
import classes from './Hero.module.css'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa'
import { IoIosCodeWorking } from 'react-icons/io'
import { BsDownload } from 'react-icons/bs'
import profileImg from '../../assets/cover-pic.jpg'

const Hero = () => {
	return (
		<section className={classes.Hero}>
			<div className={`${classes.HeroGrid} container`}>
				<div className={classes.RoundImg}></div>
				<div className={classes.TextSection}>
					<p className={classes.SubHeading}>Hello, I'm</p>
					<h1 className={classes.Heading}>Vignesh Kumar L</h1>
					<p className={classes.SubHeading}>
						React Developer
						<IoIosCodeWorking size='1.5em' color='rgb(52, 68, 241)' />
					</p>
					<p>
						My passion is to develop next generation apps using tools like
						ReactJS.
					</p>
					<div className={classes.Icons}>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/vickysonata94'
						>
							<FaGithub />
						</a>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.facebook.com/vickysonata94/'
						>
							<FaFacebookF />
						</a>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.instagram.com/vickysonata94/?hl=en'
						>
							<FaInstagram />
						</a>
						<div className={classes.ResumeBtnContainer}>
							<Link to='./files/Vignesh-react.pdf' target='_blank' download>
								Download Resume <BsDownload />
							</Link>
						</div>
					</div>
				</div>
				<div className={classes.ImageSection}>
					<img src={profileImg} alt='profile' className={classes.ProfilePic} />
				</div>
			</div>
		</section>
	)
}

export default Hero
