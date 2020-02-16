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
			title: 'Movie WatchTower',
			src: `${greenLantern}`,
			alt: 'project',
			to: 'https://matt-wellman-imbd.netlify.com/',
			details:
				'Get a great overview of the Cinematic World from the Movie WatchTower. From this site you can see details of Upcoming & Trending Movies and Shows. You can see what is currently in Theatres and also look up movies that you are interested in.',
			body:
				'I had to choose a project that would allow for dynamic rendering and settled on this imbd project. As I am very fond of hooks, this site was constructed on both react hooks as well as v.5 react router doms newly implemented useParams, useLocation and useHistory hooks. Enjoy the demo.',
			highlightOne:
				'Utilized card displays for movie details rather than full webpage layout design.',
			stack: 'React, React-Router-Dom, GSap & Font Awesome',
			status: '(On-Going / As-Needed)'
		},
		{
			id: 2,
			title: 'TouchBase Social Network',
			src: `${TBProject}`,
			alt: 'project',
			to: 'https://touch-base-29dce.firebaseapp.com/',
			body:
				'This project builds on the first projects use of dynamic routing and fetch methods but it also extends on fetch methods to include authorized routes, posting and site usage. This site utilizes Firebase as a backend. This site adds authentication and manages local state in redux and synchronizes local state with backend state with firebase-redux. ',
			details:
				'Its a Big World and journeys often take us far from home. Home is where the heart is, and this social network platform allows you to TouchBase whenever you need to. ',
			highlightOne:
				'I ordered the most recent post responses in an ascending order and sticky positioned the original post body because it seemed more fluid to see the most recent post first.',
			stack:
				'React, Redux, Redux-Thunk, Firebase-Redux, Node, Express, Firebase (Cloud Functions, Firestore, Auth)',
			status: '( In-Development )'
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
			details={el.details}
			highlightOne={el.highlightOne}
			highlightTwo={el.highlightTwo}
			highlightThree={el.highlightThree}
			stack={el.stack}
			to={el.to}
			status={el.status}
		/>
	));

	return <div className='project.wrapper'>{displayProjects}</div>;
};

export default Projects;
