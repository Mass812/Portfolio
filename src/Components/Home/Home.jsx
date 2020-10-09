import React, { useRef, useEffect } from 'react';
import './Home.scss';
import FontAwesome from '../ContactBar/ContactBar';
import HelmetMeta from '../HelemetMeta/HelmetMeta';

const Home = () => {
	const matt = require('../../Assets/mw_black.jpg');
	const mattWebP = require('../../Assets/mw_black.webp');
	let img = useRef(null);
	let name = useRef(null);
	let statement = useRef(null);
	let frame = useRef(null);

	useEffect(() => {
		const headline2 = statement.children[1];

		window.gsap
			.timeline(frame, { opacity: 0, duration: 3, delay: 0 })
			.fromTo(
				img,
				{
					y        : 10,
					duration : 2,
					height   : 330,
					ease     : 'Power0'
				},
				{
					y           : 0,
					delay       : 1.5,
					duration    : 1.5,
					height      : 150,
					borderWidth : 2,
					ease        : 'Power1.easeOut',
					rotate      : 540
				}
			)
			.from(
				[
					name,
					headline2
				],
				{
					stagger  : 0.5,
					delay    : 0.51,
					opacity  : 0,
					height   : 0,
					fontSize : 3,
					ease     : 'Power1.easeIn',
					color    : 'rgb(210,181,113)'
				}
			);

		return () => {
			console.log('cleaned');
		};
	}, []);

	(() => {
		let windowWidth = window.innerWidth;
		console.log(windowWidth);
	})();
	console.log();

	return (
		<div>
			<HelmetMeta
				titleString={'Matt Wellman Louisville React & React Native Developer'}
				quoteString={'Making life easier one app at a time.'}
				bodyString={
					'I began truly developing in the beginning of 2018, although I was language proficient in JavaScript and Python well beforehand as I wrote a lot of scripts to add functionality to spreadsheets in past. Beginning this year (2020) I plan on building out larger scale projects, beyond simple demos to further increase my proficiency in React as well as other modern JS frameworks. I am Ecma Script 6 & 7 efficient on the Javascript side of things. I use current practices in React (and React-Native) such as Hooks, useContext, useReducer, etc. I am efficient in Redux and its middleware Thunk and Persist, Firebase, Node & Express. I am always excited by challenges and continually try to learn new ways of doing things because it adds to my ability of being able to approach issues from different perspectives and tackle problems at different angles. I still have a lot to learn but that is what this journey is about.'
				}
			/>
			<div className='home-container'>
				<div className='home-top'>
					<div className='home-frame' ref={(cr) => (frame = cr)}>
		
					{<img src={mattWebP} type='image/webp' alt='mw_logo' className='home-icon' ref={(cr) => (img = cr)}/> || 	<img src={matt} alt={''} className='home-icon' ref={(cr) => (img = cr)} />}
					
					</div>
					<div className='home-bottom'>
						<div className='home-name' ref={(cr) => (name = cr)} style={{ fontSize: 50 }}>
							Matt Wellman
						</div>
						<div ref={(cr) => (statement = cr)}>
							<div className='home-subtitle'>JavaScript Enthusiast &</div>
							<div className='home-subTitle2'>React & React-Native Developer</div>
						</div>
					</div>
				</div>
			</div>

			<FontAwesome />
		</div>
	);
};

export default Home;
