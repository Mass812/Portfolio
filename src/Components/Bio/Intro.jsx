import React from 'react';
import './Bio.scss';

const Intro = () => {
	return (
		<div>
			<div className='bio-subtitle'>
				About Me
				<div className='weakness'>
					I began truly developing in the beginning of 2018, although I was language proficient in JavaScript well beforehand as I wrote a lot of scripts to add functionality to spreadsheets in past. Beginning this year (2020) I plan on building out larger scale projects, beyond simple
					demos to further increase my proficiency in React as well as other modern JS frameworks.
				</div>
				<div className='weakness'>
					I am Ecma Script 6 & 7 efficient on the Javascript side of things. I use current practices in React (and React-Native) such as Hooks, useContext, useReducer, etc. I am efficient in Redux and its middleware Thunk and Persist. I have done MERN projects but by far prefer serverless
					options such as Firebase as as a backend. I am adept in both Node & Express. I am always excited by challenges and continually try to learn new ways of doing things because it adds to my ability of being able to approach issues from different perspectives and tackle problems at
					different angles. I still have a lot to learn but that is what this journey is about.
					<br />
				</div>
			</div>
		</div>
	);
};
export default Intro;
