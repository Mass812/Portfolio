import React from 'react'
import './Projects.scss'
import ProjectCard from './ProjectCard'

//import "../../Assets/bhm.png";

const Projects = () => {
	const greenLantern = require('../../Assets/imbdThumb.PNG')
	const TBProject = require('../../Assets/TBScreenShot.PNG')
	const MWBio = require('../../Assets/MWlogo1.jpg')

	const projectArray = [
		{
			id: 1,
			title: 'My Bio',
			src: `${MWBio}`,
			alt: 'project',
			to: 'https://mattwellman.dev',
			details:
				'To state the obvious: this is my bio site. It is a repository of my personal projects and information.',
			body:
				"This site is hard coded, meaning I did not use any bootstrap, materialUI.etc . . . and deliberately limited my use third-party libraries in this project, in fact I only utilized four libraries: React (by necessity), FontAwesome (for Icons), React-Router-Dom (for routing) and Gsap (for animation). Libraries are awesome but I believe in learning things at their core, first, so later on when utilizing libraries for all their amazing properties, their possible breaking changes don't leave me at an extreme disadvantage. I chose to do a side-drawer navigation rather than a single page approach specifically to utilize react-router-dom",

			highlightOne: 'Hosts projects as well as Work History and Recommendations',
			stack: 'React, React-Router-Dom, GSap & FontAwesome',
			status: ' On-Going, As-Needed'
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
				'I wanted to choose a project that would allow for dynamic rendering and settled on this IMBD project. As I am very fond of hooks, this site was constructed on both react hooks as well as v.5 react router doms newly implemented useParams, useLocation and useHistory hooks. Enjoy the demo.',
			highlightOne:
				'Utilized card displays for movie details rather than full webpage layout design.',
			stack: 'React, React-Router-Dom, GSap & Font Awesome',
			status: ': Completed'
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
				"This social network platform allows you to create a profile with photo, hobbies, location and work information. Create, edit a/o delete posts you've created. Like and comment on other users posts. User likes and Comments are counted and displayed on the main post card.",
			highlightOne: 'No Bootstrap, MaterialUI',
			stack:
				'React, Redux, Redux-Thunk, Redux-persist, Node, Express, Firebase (Cloud Functions, Firestore, Auth & Storage)',
			status: ' Near Completion'
		}
	]

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
	))

	return <div className='project.wrapper'>{displayProjects}</div>
}

export default Projects
