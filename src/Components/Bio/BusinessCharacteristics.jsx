import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareRight } from '@fortawesome/free-regular-svg-icons';
import './Bio.scss';

const BusinessCharacteristics = () => {
	const businessCharacteristicsArray = [
		'Keen Inductive & Deductive Logic',
		'High Business Acumen',
		'Amazing Ability to Learn Fast',
		'Affable and Well Spoken',
		'Embrace & Endorse Change',
		'Very Strong Work Ethic'
	];

	const skillset = businessCharacteristicsArray.map((el, idx) => (
		<ul className='business-characteristic-ul' key={idx}>
			<div key={idx}>
				<FontAwesomeIcon icon={faCaretSquareRight} size='sm' style={{ color: 'goldenrod' }} />
				<span className='bullet-pint-description'> {el}</span>
			</div>
		</ul>
	));

	return (
		<div className='bio-subtitle'>
			Business Characteristics
			<div className='business-characteristic-parent'>{skillset}</div>
		</div>
	);
};
export default BusinessCharacteristics;
