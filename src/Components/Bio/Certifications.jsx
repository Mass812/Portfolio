import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareRight } from '@fortawesome/free-regular-svg-icons';
import './Bio.scss';

const Certifications = () => {
	const cert = [
		[
			'React-Native,',
			' Redux,',
			' JavaScript'
		],
		[
			' Express',
			' Node.js',
			'MongoDb',
			'Sql',
			'NoSql'
		],
		[
			'AED',
			' CPR',
			' BBP'
		]
	];

	const certifications = cert.map((el, idx) => (
		<ul className='business-characteristic-ul' key={idx}>
			<div key={idx}>
				<FontAwesomeIcon icon={faCaretSquareRight} size='sm' style={{ color: 'goldenrod' }} />
				<span className='bullet-pint-description'> {el}</span>
			</div>
		</ul>
	));

	return (
		<div>
			<div className='bio-subtitle'>
				Certifications
				<div className='business-characteristic-parent'>{certifications}</div>
			</div>
		</div>
	);
};
export default Certifications;
