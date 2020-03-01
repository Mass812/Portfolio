import React from 'react';
import './Projects.scss';
import ProjectCard from './ProjectCard';

//import "../../Assets/bhm.png";

const Projects = () => {
	const greenLantern = require('../../Assets/imbdThumb.PNG');
	const TBProject = require('../../Assets/TBScreenShot.PNG');
	const MWBio = require('../../Assets/MWlogo.PNG');

	const projectArray = [
		{
			id: 1,
			title: 'My Bio',
			src: `${greenLantern}`,
			alt: 'project',
			to: 'https://mattwellman.dev/',
			details:
				'This site is hard coded, meaning I did not use any bootstrap, materialUI.etc . . . in fact I only utilized four libraries React (by necessity), FontAwesome (for Icons), React-Router-Dom (for routing) and Gsap (for animation). I wrote this entire site line-by-line. I chose to do a side-drawer navigation rather than a single page approach specifically to utilize react-router-dom',
			body:
				'This site is all about me. I have always been a erudite; my life is a constant journey of learning everything I possibly can. I believe that I love programming because it seems that running out of learning new things will never be in short supply',

			highlightOne: 'Hosts projects as well as Work History and Recommendations',
			stack: 'React, React-Router-Dom, GSap & FontAwesome',
			status: '(On-Going / As-Needed)'
		},
		{
			id: 2,
			title: 'Movie WatchTower',
			src: `${greenLantern}`,
			alt: 'project',
			to: 'https://matt-wellman-imbd.netlify.com/',
			details:
				'Get a great overview of the Cinematic World from the Movie WatchTower. From this site you can see details of Upcoming & Trending Movies and Shows. You can see what is currently in Theatres and also look up movies that you are interested in.',
			body:
				'I wanted to choose a project that would allow for dynamic rendering and settled on this imbd project. As I am very fond of hooks, this site was constructed on both react hooks as well as v.5 react router doms newly implemented useParams, useLocation and useHistory hooks. Enjoy the demo.',
			highlightOne:
				'Utilized card displays for movie details rather than full webpage layout design.',
			stack: 'React, React-Router-Dom, GSap & Font Awesome',
			status: '(On-Going / As-Needed)'
		},
		{
			id: 3,
			title: 'TouchBase Social Network',
			src: `${TBProject}`,
			alt: 'project',
			to: 'https://touch-base-29dce.firebaseapp.com/',
			body:
				'This project uses dynamic routing via fetch methods and utilizes Firebase as a backend {Cloud Functions, FireStore and Firebase Auth}. User authentication comes in way of email and password. All local state is managed by redux { && redux-persist, redux-thunk} ',
			details:
				'Its a Big World and journeys often take us far from home. Home is where the heart is, and this social network platform allows you to TouchBase whenever you want. ',
			highlightOne: 'No Bootstrap, MaterialUI',
			stack:
				'React, Redux, Redux-Thunk, Redux-persist, Node, Express, Firebase (Cloud Functions, Firestore, Auth), Gsap {for animations}',
			status: '( Currently-In-Development )'
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
