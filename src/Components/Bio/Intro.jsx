import React from 'react';
import './Bio.scss';

const Intro = () => {
	return (
		<div>
			<div className='bio-subtitle'>
				Overview
				<div className='weakness'>
					I began truly developing with libraries and frameworks beginning in 2018, although I was language proficient in JavaScript well beforehand--as I wrote a lot of scripts to add functionality to spreadsheets in past. I have worked on numerous projects this year and I plan on
					working as a freelance developer for some duration as well as dabbling in other modern JS frameworks.
				</div>
				<div className='weakness'>
					I am Ecma Script 6 & 7 efficient on the Javascript side of things. I use current practices in React (and React-Native) such as Hooks, useContext, useReducer, etc. I am efficient in Redux and its middleware Thunk and Persist. I have done MERN projects but by far prefer serverless
					options such as Firebase as as a backend. I am adept in both Node & Express. 
					<br />
				</div>
				<div className='weakness'>
					I am good at parsing API docs and am familiar with react-helmet, Gsap animations, react-router-dom, uuid, react-calender to name a few, point being I can utilize any third-party api that has documentation. I am always excited by challenges and continually try to learn new ways of doing things because it adds to my ability of being able to approach issues from different perspectives and tackle problems at
					different angles. I still have a lot to learn but that is what this journey is about.
					<br />
				</div>
			</div>
		</div>
	);
};
export default Intro;
