import React from 'react';
import DisplayedIcons from './DisplayedIcons';
import Education from './Education';
import Certifications from './Certifications';
import './Bio.scss';

const Bio = () => {
	return (
		<div className='parent'>
			<div className='bio-wrapper'>
				<div className='bio-parent'>
					<p className='bio-intro'>
						Self-taught engineer with a science background. My strength is
						system design and infrastructure &mdash; real-time event
						platforms, inventory systems, and the developer tooling that
						makes the hard work easier for everyone else.
					</p>

					<section className='bio-section'>
						<h2 className='bio-section-title'>Proficiencies</h2>
						<DisplayedIcons />
					</section>

					<Education />
					<Certifications />
				</div>
			</div>
		</div>
	);
};

export default Bio;
