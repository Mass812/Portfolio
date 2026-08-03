import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Home.scss';
import FontAwesome from '../ContactBar/ContactBar';
import HelmetMeta from '../HelemetMeta/HelmetMeta';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faAppStore } from '@fortawesome/free-brands-svg-icons';
import mattWebP from '../../Assets/mw_black.webp';

const Home = () => {
	const img = useRef(null);
	const name = useRef(null);
	const statement = useRef(null);
	const scale = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const headline2 = statement.current.children[1];

			gsap
				.timeline()
				.fromTo(
					img.current,
					{
						y      : 10,
						height : 330,
						ease   : 'Power0'
					},
					{
						y           : 0,
						delay       : 1.5,
						duration    : 1.5,
						height      : 210,
						borderWidth : 2,
						ease        : 'Power1.easeOut',
						rotate      : 540
					}
				)
				.addLabel('headlines')
				.from(
					[
						name.current,
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
					},
					'headlines'
				)
				// The name enters at headlines+0.51 and the FIT/Omni Retail line 0.5s
				// later at +1.01, so +1.51 keeps the store-count line on that same
				// half-second beat rather than guessing at an absolute delay.
				.from(
					scale.current,
					{
						opacity  : 0,
						y        : 10,
						duration : 0.6,
						ease     : 'Power2.easeOut'
					},
					'headlines+=1.51'
				);
		});

		return () => ctx.revert();
	}, []);

	return (
		<div>
			<HelmetMeta
				titleString={'Matt Wellman Louisville React & React Native Developer'}
				quoteString={'Making life easier one app at a time.'}
				bodyString={"Senior Software Engineer at Fabletics. Self-taught — I learned their stack and built the FIT app in a month, then led the RFID rollout across 159 retail stores."}
			/>
			<div className='home-container'>
				<div className='home-top'>
					<div className='home-frame'>
						<img src={mattWebP} alt='mw_logo' className='home-icon' ref={img} />
					</div>
					<div className='home-bottom'>
						<div className='home-name' ref={name}>
							Matt Wellman
						</div>
						<div ref={statement}>
							<div className='home-subtitle'>Sr. Software Engineer &middot; Fabletics</div>
							<div className='home-subTitle2'>Fabletics FIT App
							<FontAwesomeIcon icon={faAndroid} color={'wheat'} style={{ paddingLeft: '7px', opacity: 0.8 }} />
							<FontAwesomeIcon icon={faAppStore} color={'wheat'} style={{ paddingLeft: '7px' }} />
							<span className='home-role-sep'>&middot;</span>
							Omni Retail Backend
							</div>
						</div>
					</div>
				</div>

				<div className='home-stats' ref={scale}>
					<div className='home-stats-eyebrow'>Supporting</div>
					<div className='home-stats-row'>
						<div className='home-stat'>
							<span className='home-stat-figure'>134</span>
							<span className='home-stat-label'>Fabletics Stores &middot; US</span>
						</div>
						<div className='home-stat'>
							<span className='home-stat-figure'>10</span>
							<span className='home-stat-label'>Fabletics Stores &middot; EU</span>
						</div>
						<div className='home-stat'>
							<span className='home-stat-figure'>15</span>
							<span className='home-stat-label'>Savage X Fenty &middot; US</span>
						</div>
					</div>
				</div>
			</div>

			<FontAwesome />
		</div>
	);
};

export default Home;
