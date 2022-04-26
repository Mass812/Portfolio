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
				bodyString={'I am currently a full stack mobile software engineer @ Fabletics. I am responsible for for every aspect of the Fabletics Fit app for iOS and Android. '}
			/>
			<div className='home-container'>
				<div className='home-top'>
					<div className='home-frame' ref={(cr) => (frame = cr)}>
						{<img src={mattWebP} type='image/webp' alt='mw_logo' className='home-icon' ref={(cr) => (img = cr)} /> || <img src={matt} alt={''} className='home-icon' ref={(cr) => (img = cr)} />}
					</div>
					<div className='home-bottom'>
						<div className='home-name' ref={(cr) => (name = cr)} style={{ fontSize: 50 }}>
							Matt Wellman
						</div>
						<div ref={(cr) => (statement = cr)}>
							<div className='home-subtitle'>Software Engineer  @ Fabletics</div>
							<div className='home-subTitle2'>Mobile Developer on Fabletics FIT</div>
						</div>
					</div>
				</div>
			</div>

			<FontAwesome />
		</div>
	);
};

export default Home;
