import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'

function App() {
	return (
		<div>
			<Navbar />
			<div>
				<Switch>
					<Route exact path='/' component={Hero} />
					<Route path='/projects' component={Projects} />
					<Route path='*' component={Hero} />
				</Switch>
			</div>
		</div>
	)
}

export default App
