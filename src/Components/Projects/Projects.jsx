import React from 'react';
import './Projects.scss';
import ProjectCard from './ProjectCard';

//import "../../Assets/bhm.png";

const Projects = () => {
	const greenLantern = require('../../Assets/imbdThumb.PNG');
	const TBProject = require('../../Assets/TBScreenShot.PNG');

	const projectArray = [
		{
			id: 1,
			title: 'Movie Warehouse',
			src: `${greenLantern}`,
			alt: 'project',
			to: 'https://matt-wellman-imbd.netlify.com/',
			body:
				'I started with this project to display fetch methods and returned API data manipulation. Alongside static routing in React Router Dom I wanted to explore dynamic routing',
			highlightOne: 'Utilized card displays for movie details rather than full webpage layout design.',
      stack: 'React, React-Router-Dom, GSap & Font Awesome'
		},
		{
			id: 2,
			title: 'TouchBase Social Network App (in progress)',
			src: `${TBProject}`,
			alt: 'project',
			to: 'https://touch-base-29dce.firebaseapp.com/',
			body:
				'This project builds on the first projects use of dynamic routing and fetch methods but it also extends on fetch methods to include authorized routes, posting and site usage. This site adds authentication and manages state in redux. ',
			highlightOne: 'Added gSap Animations to add to sites visual attractiveness',
      stack: 'React, Redux, Redux-Thunk, Firebase-Redux, Node, Express, Firebase (Cloud Functions, Firestore, Auth)'
		}
	];

	console.log(projectArray);

	const displayProjects = projectArray.map((el, idx) => (
		<ProjectCard
			key={el.id}
			title={el.title}
			src={el.src}
			alt={el.alt}
			body={el.body}
			highlightOne={el.highlightOne}
			highlightTwo={el.highlightTwo}
			highlightThree={el.highlightThree}
      stack={el.stack}
			to={el.to}
		/>
	));

	return <div className='project.wrapper'>{displayProjects}</div>;
};

export default Projects;
