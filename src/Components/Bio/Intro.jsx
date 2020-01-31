import React from 'react';
import './Bio.scss';

const Intro = () => {
	return (
		<div>
			<div className='bio-subtitle'>
				About Me
				<p className='weakness'>
					<q>
						I began truly developing in the beginning of 2019, although I was
						language proficient in JavaScript and Python well beforehand. I
						wrote a lot of scripts to add functionality to spreadsheets while
						I was at Techstyle Fashion Group. Beginning this year of 2020 I
						plan on building out larger scale projects beyond simple demos
						further increase my proficiency in React as well as other modern
						JS frameworks.
					</q>
				</p>
				<p className='weakness'>
					<q>
						I am Ecma Script 6 & 7 efficient on the Javascript side of things.
						I use all current practices in React (and React-Native) such as
						Hooks, useContext, useReducer, etc. I am always excited by
						challenges and continually try to learn new ways of doing things
						because it adds to my ability of being able to approach issues
						from different perspectives and tackle problems at different
						angles. I still have a lot to learn but that is what this journey
						is about.
					</q>

					<br />
					<br />
				</p>
			</div>
		</div>
	);
};
export default Intro;
