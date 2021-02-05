import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faJsSquare, faReact, faHtml5, faLess, faNode, faPython, faSass, faMicrosoft, faMdb, faNpm, faGithubSquare, faDochub, faGoogle, faApple, faAndroid, faAws, faBitbucket, faCcStripe } from '@fortawesome/free-brands-svg-icons';

const DisplayedIcons = () => {
	let titleArea,
		icon,
		js,
		git,
		react,
		html5,
		node,
		py,
		sass,
		mdb,
		excel,
		github,
		npm,
		ms,
		gdrive,
		word,
		powerpoint,
		pie,
		google,
		dochub,
		less = useRef();

	useEffect(() => {
		window.gsap.fromTo(
			[
				word,
				js,
				github,
				git,
				less,
				react,
				excel,
				node,
				py,
				dochub,
				sass,
				mdb,
				npm,
				html5,
				google,
				ms,
				gdrive,
				powerpoint,
				pie
			],
			{
				scale    : 0,
				delay    : 10,
				duration : 0.3,
				ease     : 'Sine.easeIn',
				display  : 'inline-block',
				stagger  : 0.2,
				color    : '#566b75'
			},
			{
				scale    : 1.4,
				stagger  : 0.1,
				duration : 0.3,
				color    : '#566b75'
			}
		);
		window.gsap
			.timeline([
				icon,
				{ duration: 0.3, delay: 5 }
			])
			.staggerTo(
				[
					excel,
					word,
					powerpoint,
					dochub,
					js,
					git,
					react,
					html5,
					node,
					py,
					github,
					sass,
					less,
					mdb,
					npm,
					google,
					ms,
					gdrive,
					pie
				],
				{},
				{
					delay    : 2.2,
					duration : 1.8,
					scale    : 1.4,
					stagger  : 0.03,
					color    : '#219CB4',
					display  : 'inline-block',
					ease     : 'Power0.easeInOut'
				}
			);

		// eslint-disable-next-line
	}, []); /* eslint-disable-line no-alert, quotes, semi */

	return (
		<div>
			<div className='bio-title-area' ref={(cr) => titleArea}>
				<div>
					<ul className='icon-splay' ref={(cr) => (icon = cr)}>
						<div ref={(cr) => (excel = cr)}>
							<FontAwesomeIcon icon={faAndroid} className='icon-bar-li-bio' size='lg' />
						</div>
						<div ref={(cr) => (word = cr)}>
							<FontAwesomeIcon icon={faBitbucket} className='icon-bar-li-bio' size='lg' />
						</div>
						<div ref={(cr) => (powerpoint = cr)}>
							<FontAwesomeIcon icon={faApple} className='icon-bar-li-bio' size='lg' />
						</div>

						<div ref={(cr) => (dochub = cr)}>
							<FontAwesomeIcon icon={faDochub} className='icon-bar-li-bio' size='lg' />
						</div>
						<div ref={(cr) => (js = cr)}>
							<FontAwesomeIcon icon={faJsSquare} className='icon-bar-li-bio' size='lg' />
						</div>

						<div ref={(cr) => (git = cr)}>
							<FontAwesomeIcon icon={faGit} className='icon-bar-li-bio' size='lg' />
						</div>
						<div ref={(cr) => (react = cr)}>
							<FontAwesomeIcon icon={faReact} className='icon-bar-li-bio' size='lg' />
						</div>
						<div ref={(cr) => (html5 = cr)}>
							<FontAwesomeIcon icon={faHtml5} className='icon-bar-li-bio' size='lg' />
						</div>

						<div ref={(cr) => (node = cr)}>
							<FontAwesomeIcon icon={faNode} className='icon-bar-li-bio' size='lg' />
						</div>
						<div ref={(cr) => (py = cr)}>
							<FontAwesomeIcon icon={faPython} className='icon-bar-li-bio' size='lg' />
						</div>
						<div ref={(cr) => (sass = cr)}>
							<FontAwesomeIcon icon={faSass} className='icon-bar-li-bio' size='lg' />
						</div>

						<div ref={(cr) => (less = cr)}>
							<FontAwesomeIcon icon={faLess} className='icon-bar-li-bio' size='lg' />
						</div>
						<div ref={(cr) => (mdb = cr)}>
							<FontAwesomeIcon icon={faMdb} className='icon-bar-li-bio' size='lg' />
						</div>
						<div ref={(cr) => (github = cr)}>
							<FontAwesomeIcon icon={faGithubSquare} className='icon-bar-li-bio' size='lg' />
						</div>
						<div ref={(cr) => (npm = cr)}>
							<FontAwesomeIcon icon={faNpm} className='icon-bar-li-bio' size='lg' />
						</div>
						<div ref={(cr) => (pie = cr)}>
							<FontAwesomeIcon icon={faAws} className='icon-bar-li-bio' size='lg' />
						</div>
						<div ref={(cr) => (google = cr)}>
							<FontAwesomeIcon icon={faGoogle} className='icon-bar-li-bio' size='lg' />
						</div>
						<div ref={(cr) => (ms = cr)}>
							<FontAwesomeIcon icon={faMicrosoft} className='icon-bar-li-bio' size='lg' />
						</div>
						<div ref={(cr) => (gdrive = cr)}>
							<FontAwesomeIcon icon={faCcStripe} className='icon-bar-li-bio' size='lg' />
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DisplayedIcons;
