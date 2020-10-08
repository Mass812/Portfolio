import './Bio.scss';
import { useLocation } from 'react-router-dom';
import Intro from './Intro';
import Strengths from './Strengths';
import Education from './Education';
import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faJsSquare, faReact, faHtml5, faLess, faNode, faPython, faSass, faMicrosoft, faMdb, faNpm, faGithubSquare, faGoogleDrive, faDochub, faGoogle } from '@fortawesome/free-brands-svg-icons';

import { faCaretSquareRight } from '@fortawesome/free-regular-svg-icons';
import { faFilePowerpoint, faFileWord, faFileExcel, faChartPie } from '@fortawesome/free-solid-svg-icons';

const Bio = () => {
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

	const reload = useLocation();
	console.log(reload);

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
					color    : '#566b86',
					display  : 'inline-block',
					ease     : 'Power0.easeInOut'
				}
			);

		return () => {
			console.log('fired useEffect gsap effects');
		};
		// eslint-disable-next-line
	}, []); /* eslint-disable-line no-alert, quotes, semi */

	const skillsArray = [
		'6 Years Operations Management',
		'2 Years Area Management',
		'Keen Inductive & Deductive Logic',
		'High Business Acumen',
		'Amazing Ability to Learn Fast',
		'Affable and Well Spoken',
		'Embrace & Endorse Change',
		'Very Strong Work Ethic'
	];

	const cert = [
		[
			'React-Native',
			' Redux',
			' JavaScript'
		],
		[
			' Express',
			' Node.js'
		],
		[
			'AED',
			' CPR',
			' BBP'
		]
	];

	const skillset = skillsArray.map((el, idx) => (
		<ul className='business-characteristic-ul' key={idx}>
			<div key={idx}>
				<FontAwesomeIcon icon={faCaretSquareRight} size='sm' style={{ color: 'goldenrod' }} />
				<span className='bullet-pint-description'> {el}</span>
			</div>
		</ul>
	));

	const certifications = cert.map((el, idx) => (
		<ul className='business-characteristic-ul' key={idx}>
			<div key={idx}>
				<FontAwesomeIcon icon={faCaretSquareRight} size='sm' style={{ color: 'goldenrod' }} />
				<span className='bullet-pint-description'> {el}</span>
			</div>
		</ul>
	));

	return (
		<div className='parent'>
			<div className='bio-wrapper'>
				<div className='bio-parent'>
					<div className='bio-subtitle'>
						<div> Proficiencies </div>
					</div>
					<div>
						<div className='bio-title-area' ref={(cr) => titleArea}>
							<div>
								<ul className='icon-splay' ref={(cr) => (icon = cr)}>
									<div ref={(cr) => (excel = cr)}>
										<FontAwesomeIcon icon={faFileExcel} className='icon-bar-li-bio' size='lg' />
									</div>
									<div ref={(cr) => (word = cr)}>
										<FontAwesomeIcon icon={faFileWord} className='icon-bar-li-bio' size='lg' />
									</div>
									<div ref={(cr) => (powerpoint = cr)}>
										<FontAwesomeIcon icon={faFilePowerpoint} className='icon-bar-li-bio' size='lg' />
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
										<FontAwesomeIcon icon={faChartPie} className='icon-bar-li-bio' size='lg' />
									</div>
									<div ref={(cr) => (google = cr)}>
										<FontAwesomeIcon icon={faGoogle} className='icon-bar-li-bio' size='lg' />
									</div>
									<div ref={(cr) => (ms = cr)}>
										<FontAwesomeIcon icon={faMicrosoft} className='icon-bar-li-bio' size='lg' />
									</div>
									<div ref={(cr) => (gdrive = cr)}>
										<FontAwesomeIcon icon={faGoogleDrive} className='icon-bar-li-bio' size='lg' />
									</div>
								</ul>
							</div>
						</div>
					</div>

					<div>
						<Intro />

						<div className='bio-subtitle'>
							Business Characteristics
							<div className='business-characteristic-parent'>{skillset}</div>
						</div>

						<Strengths />
						<Education />

						<div>
							<div className='bio-subtitle'>
								Certifications
								<div className='business-characteristic-parent'>{certifications}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bio;
