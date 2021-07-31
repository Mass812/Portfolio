import React, { Fragment } from 'react';
import BusinessCharacteristics from './BusinessCharacteristics';
import DisplayedIcons from './DisplayedIcons';
import Education from './Education';
// import Intro from './Intro';
import Strengths from './Strengths';
import Certifications from './Certifications';
import './Bio.scss';

const Bio = () => {
	return (
		<div className='parent'>
			<div className='bio-wrapper'>
				<div className='bio-parent'>
					<div className='bio-subtitle'>
						<div> Proficiencies </div>
					</div>
					<Fragment>
						<DisplayedIcons />
					</Fragment>

					<Fragment>
						{/* <Intro /> */}

						<BusinessCharacteristics />
						<Strengths />
						<Education />
						<Certifications />
					</Fragment>
				</div>
			</div>
		</div>
	);
};

export default Bio;
