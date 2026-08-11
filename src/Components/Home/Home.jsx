import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Home.scss';
import FontAwesome from '../ContactBar/ContactBar';
import HelmetMeta from '../HelemetMeta/HelmetMeta';
import mattWebP from '../../Assets/mw_black.webp';

const Home = () => {
	const img = useRef(null);
	const name = useRef(null);
	const statement = useRef(null);
	const scale = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Identity layer (logo, name, brand wordmarks) is present from first
			// paint and never fades. The logo spin is the flourish; the title +
			// gold rule, then the SUPPORTING stats, rise in mid-spin.
			gsap
				.timeline()
				.fromTo(
					img.current,
					{
						y      : 10,
						height : 330
					},
					{
						y           : 0,
						delay       : 0.8,
						duration    : 1.5,
						height      : 210,
						borderWidth : 2,
						ease        : 'Power1.easeOut',
						rotate      : 540
					}
				)
				.from(
					statement.current,
					{
						opacity  : 0,
						y        : 14,
						duration : 0.6,
						ease     : 'Power2.easeOut'
					},
					1.4
				)
				.from(
					scale.current,
					{
						opacity  : 0,
						y        : 12,
						duration : 0.6,
						ease     : 'Power2.easeOut'
					},
					1.9
				);
		});

		return () => ctx.revert();
	}, []);

	return (
		<div>
			<HelmetMeta
				titleString={'Matt Wellman Louisville React & React Native Developer'}
				descriptionString={"Senior Software Engineer at Fabletics — architected the real-time inventory platform across 159 retail stores and built the Fabletics FIT app to 548k downloads worldwide."}
				path={'/'}
			/>
			<div className='home-container'>
				<div className='home-top'>
					<div className='home-frame'>
						<img src={mattWebP} alt='mw_logo' className='home-icon' ref={img} />
					</div>
					<div className='home-bottom'>
						{/* The site's only h1 belongs here, not on a secondary page — it's
						    the strongest single on-page signal for what this page (and
						    site) is about: this person's name. */}
						<h1 className='home-name' ref={name}>
							Matt Wellman
						</h1>

						{/* Identity lockup: name with the brand wordmarks tight beneath.
						    Typographic wordmarks rather than logo images — one muted tone
						    so the identities read as a set. Always present, never animated. */}
						<div className='home-brands'>
							<span className='home-brand home-brand--fabletics' title='Fabletics'>Fabletics</span>
							<span className='home-brand-dot'>&middot;</span>
							<span className='home-brand home-brand--sxf' title='Savage X Fenty'>Savage <em>X</em> Fenty</span>
						</div>
					</div>
				</div>

				<div className='home-stats'>
					{/* Role sits over the stats, separated by a short gold rule. */}
					<div ref={statement}>
						<div className='home-subtitle'>Senior Software Engineer</div>
						<div className='home-stats-sep' />
					</div>
					<div className='home-stats-core' ref={scale}>
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
			</div>

			<FontAwesome />
		</div>
	);
};

export default Home;
