import React from "react";
import classes from "./Projects.module.css";
import Card from "./Card/Card";

const Projects = () => {
	const imageArr = [
		{
			name: "Visx Charts",
			src: "visx-charts.png",
			url: "https://visx-charts-reactivicky.vercel.app/",
		},
		{
			name: "Todo App",
			src: "Todoapp.png",
			url: "https://todo-app-vickysonata.netlify.com/",
		},
		{
			name: "Notes App",
			src: "notesapp.png",
			url: "https://notes-app-vickysonata.netlify.com/",
		},
		{
			name: "Task Manager",
			src: "taskmanager.png",
			url: "https://indecision-app-vickysonata.netlify.com/",
		},
		{
			name: "Landing Page",
			src: "axelerant.png",
			url: "https://landing-page-reactivicky.vercel.app/",
		},
		{
			name: "Tutor Match",
			src: "tutormatch.png",
			url: "https://blog-reactivicky.vercel.app/",
		},
		{
			name: "Admin Dashboard",
			src: "stackoverflowclone.png",
			url: "https://admin-dashboard-reactivicky.vercel.app/",
		},
		{
			name: "Rental Management System",
			src: "rental.jpg",
			url: "https://rental-management-reactivicky.vercel.app/",
		},
	];
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
	);
};

export default Projects;
