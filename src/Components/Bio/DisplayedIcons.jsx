import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faJsSquare, faReact, faHtml5, faLess, faNode, faPython, faSass, faMicrosoft, faMdb, faNpm, faGithubSquare, faAppStore, faGoogle, faApple, faAndroid, faAws, faBitbucket, faCcStripe } from '@fortawesome/free-brands-svg-icons';
import { faTowerBroadcast, faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons';

// Rendered in DOM order. FontAwesome ships no Kafka or RabbitMQ brand mark, so
// those two borrow solid icons that read as "event stream" and "message queue";
// the `label` is what identifies them to a reader or a screen reader.
const ICONS = [
	{ icon: faAndroid, label: 'Android' },
	{ icon: faBitbucket, label: 'Bitbucket' },
	{ icon: faApple, label: 'Apple / iOS' },
	{ icon: faAppStore, label: 'App Store' },
	{ icon: faJsSquare, label: 'JavaScript' },
	{ icon: faGit, label: 'Git' },
	{ icon: faReact, label: 'React & React Native' },
	{ icon: faHtml5, label: 'HTML5' },
	{ icon: faNode, label: 'Node.js' },
	{ icon: faPython, label: 'Python' },
	{ icon: faSass, label: 'Sass' },
	{ icon: faLess, label: 'Less' },
	{ icon: faMdb, label: 'MDB' },
	{ icon: faGithubSquare, label: 'GitHub' },
	{ icon: faNpm, label: 'npm' },
	{ icon: faTowerBroadcast, label: 'Apache Kafka' },
	{ icon: faEnvelopesBulk, label: 'RabbitMQ' },
	{ icon: faAws, label: 'AWS' },
	{ icon: faGoogle, label: 'Google' },
	{ icon: faMicrosoft, label: 'Microsoft' },
	{ icon: faCcStripe, label: 'Stripe' }
];

const DisplayedIcons = () => {
	const iconList = useRef(null);

	// useLayoutEffect, not useEffect: the tween's starting state has to be in
	// place before the browser paints, otherwise the icons flash at full size
	// for a frame and then snap back to scale 0 to animate in.
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(iconList.current.children, {
				scale      : 0,
				opacity    : 0,
				duration   : 0.4,
				stagger    : 0.045,
				ease       : 'back.out(1.7)',
				clearProps : 'scale,opacity'
			});
		}, iconList);

		return () => ctx.revert();
	}, []);

	return (
		<div>
			<div className='bio-title-area'>
				<div>
					<ul className='icon-splay' ref={iconList}>
						{ICONS.map(({ icon, label }) => (
							<li className='icon-splay-item' key={label} title={label}>
								<FontAwesomeIcon icon={icon} className='icon-bar-li-bio' />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DisplayedIcons;
