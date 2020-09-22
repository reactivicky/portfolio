import React from 'react'
import Logo from '../../assets/logo512.png'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={classes.Navbar}>
			<div className={`${classes.NavbarContainer} container`}>
				<div className={classes.LogoContainer}>
					<NavLink to='/'>
						<img src={Logo} alt='reactLogo' className={classes.Logo} />
					</NavLink>
				</div>
				<ul className={classes.NavItems}>
					<li className={classes.NavItem}>
						<NavLink to='/projects'>Projects</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
