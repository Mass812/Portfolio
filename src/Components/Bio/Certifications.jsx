import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareRight } from '@fortawesome/free-regular-svg-icons';
import './Bio.scss';

const Certifications = () => {
	const cert = [
		[
			'Libraries / Frameworks: ',
			'React-Native,',
			'Vanilla Javascript, Html & css,',
			' React'
		],
		[
			' Backend Utils: ',
			' Express,',
			' Node,',
			' MongoDb,',
			' Google Firestore, Cloud Fx & S3,',
			' DynamoDb,',
			' GraphQl,',
			' Apollo Server',
			' NoSQL,'
		],
		[
			' Languages: ',
			'ES6 & ES5 Javascript',
			' JSX,',
			' Typescript,'
		],
		[
			' Frontend Proficiencies: ',
			' Css, Sass, Styled Components, Stylesheet,',
			' React Navigation (React Native),',
			' Rect-Router-Dom (React Web),',
			' Urql,',
			' State Management: Redux, thunk & persist,',
			' All React hooks: useContext, useReducer, useState, useMemo, useEffect,',
			' Any Api with docs.'
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
