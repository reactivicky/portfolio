import React from 'react'
import classes from './Projects.module.css'
import Card from './Card/Card'

const Projects = () => {
	const imageArr = [
		{
			name: 'Rental Management System',
			src: 'rental.jpg',
			url: 'https://vickysonata94.github.io/crownstack/',
		},
		{
			name: 'Todo App',
			src: 'Todoapp.png',
			url: 'https://todo-app-vickysonata.netlify.com/',
		},
		{
			name: 'Notes App',
			src: 'notesapp.png',
			url: 'https://notes-app-vickysonata.netlify.com/',
		},
		{
			name: 'Task Manager',
			src: 'taskmanager.png',
			url: 'https://indecision-app-vickysonata.netlify.com/',
		},
		{
			name: 'Axelerant',
			src: 'axelerant.png',
			url: 'https://vickysonata94.github.io/Axelerant-assignment/',
		},
		{
			name: 'Tutor Match',
			src: 'tutormatch.png',
			url: 'https://vickysonata94.github.io/betProtocol-front-end-assignment/',
		},
		{
			name: 'StackOverflow Clone',
			src: 'stackoverflowclone.png',
			url: 'https://vickysonata94.github.io/iqm-front-end-assignment/',
		},
	]
	return (
		<div className={classes.Projects}>
			<div className={`${classes.ProjectsContainer} container`}>
				<h2 className={classes.Heading}>Explore All Projects</h2>
				<div className={classes.CardContainer}>
					{imageArr.map((img) => (
						<Card key={img.name} image={img} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Projects
