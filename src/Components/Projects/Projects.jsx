import React from 'react';
import './Projects.scss';
import ProjectCard from './ProjectCard';

//import "../../Assets/bhm.png";

const Projects = () => {
	const greenLantern = require('../../Assets/imbdThumb.PNG');

	const upsProject = require('../../Assets/upsProject.PNG');

	const projectArray = [
		{
			id           : 1,
			title        : 'Topflight Security Plus',
			src          : `https://topflightsecurityplus.com/static/media/tf_main_plus.2f8fcf8f.png`,
			alt          : 'project',
			to           : 'https://topflightsecurityplus.com',
			body         : "This site was built for a new and growing Security Company in Louisville Kentucky. Color schema, look and general layout were generated to TFSP's wants. ",
			details      :
				'The site itself is simple with contact channels, basic company selling points and testimonials. The site does give visitors the ability to apply for a position within the company. But the brunt of the functionality is actually the business site that exists behind this client website. ',
			highlightOne :
				'The business site gives the ability of the owner to track assets via google maps, post professional posts to Facebook and Twitter, Give or rescind privileges to app users and allows them to view applicant submissions within the app, although they submitted applications are sent in a professional format via sendGrid upon submission.',
			stack        : 'React, Redux, Redux-Thunk, Redux-persist, React-Helmet, Node, Express, Firebase (Cloud Functions, Firestore, Auth & Storage)',
			status       : ' Completed'
		},

		{
			id           : 2,
			title        : 'Ups',
			src          : `${upsProject}`,
			alt          : 'project',
			to           : 'https://upssafety-f8d4d.web.app/',
			body         :
				'UPS Worldport: Safety Efficiency Platform is an auditing platform used by Ramp D, UPS Worldport Safety! The audits are conducted through Team monitoring. Counting incidents per event. As such multiple counters were implemented to directly mirror operational paperwork. When I joined the safety committee I saw a great opportunity for react to modernize the old process: paperwork, illegibility and filling out the same paperwork three times per audit seemed really outdated. So I created this web application to handle a brunt of that workload, and allowed for the data  to be more readily available, readable, and useful through the monthly reports. I feel accomplished in that I saw a problem and used my development skills to make the process better; easier; modern.',
			details      :
				'The application utilizes React, Redux, Redux-Persist, Firebase Auth and Firestore. Per request I am presenting only the earliest version of this app, to display the demo of the apps functionality. The full site generates emails with document information, creates new rows to spreadsheets, and tracks supervisors safety efficiency over time. Every data value is stored in redux and handled through action generators. The colleted data points show trends and recommend safety outreach and focuses for UPS CHSP and CERT teams. ',

			highlightOne :
				'Added admin console that allows for easier schedule access to ramp supervisors. Ramp Crews can be dynamic, excel sheets were printed prior to start of shift. This application now handles that dynamic schedule. The TEAMS layout was designed with their usage and utility in mind',
			stack        : 'React, React-Router-Dom, Redux, Persist, GSap, SendGrid & FontAwesome',
			status       : 'First Build, version 1.0.0 Beta'
		},
		{
			id           : 3,
			title        : 'Movie WatchTower',
			src          : `${greenLantern}`,
			alt          : 'project',
			to           : 'https://matt-wellman-imbd.netlify.com/',
			details      : 'Get a great overview of the Cinematic World from the Movie WatchTower. From this site you can see details of Upcoming & Trending Movies and Shows. You can see what is currently in Theatres and also look up movies that you are interested in.',
			body         :
				'I wanted to choose a project that would allow for dynamic rendering and settled on this IMBD project. As I am very fond of hooks, this site was constructed on both react hooks as well as v.5 react router doms newly implemented useParams, useLocation and useHistory hooks. Enjoy the demo.',
			highlightOne : 'Utilized card displays for movie details rather than full webpage layout design.',
			stack        : 'React, React-Router-Dom, GSap & Font Awesome',
			status       : ': Completed'
		}

		// {
		// 	id           : 4,
		// 	title        : 'My Bio',
		// 	src          : `${MWBio}`,
		// 	alt          : 'project',
		// 	to           : 'https://mattwellman.dev',
		// 	details      : 'To state the obvious: this is my bio site. It is a repository of my personal projects and information.',
		// 	body         :
		// 		"This site is hard coded, meaning I did not use any bootstrap, materialUI.etc . . . and deliberately limited my use third-party libraries in this project, in fact I only utilized four libraries: React (by necessity), FontAwesome (for Icons), React-Router-Dom (for routing) and Gsap (for animation). Libraries are awesome but I believe in learning things at their core, first, so later on when utilizing libraries for all their amazing properties, their possible breaking changes don't leave me at an extreme disadvantage. I chose to do a side-drawer navigation rather than a single page approach specifically to utilize react-router-dom",

		// 	highlightOne : 'Hosts projects as well as Work History and Recommendations',
		// 	stack        : 'React, React-Router-Dom, GSap & FontAwesome',
		// 	status       : ' On-Going, As-Needed'
		// }
	];

	const displayProjects = projectArray.map((el, idx) => (
		<ProjectCard key={el.id} title={el.title} src={el.src} alt={el.alt} body={el.body} details={el.details} highlightOne={el.highlightOne} highlightTwo={el.highlightTwo} highlightThree={el.highlightThree} stack={el.stack} to={el.to} status={el.status} />
	));

	return <div className='project.wrapper'>{displayProjects}</div>;
};

export default Projects;
