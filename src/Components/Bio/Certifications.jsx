import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareRight } from '@fortawesome/free-regular-svg-icons';
import './Bio.scss';

const Certifications = () => {
	const cert = [
		{
			id    : 1,
			title : 'Libraries',
			items : [
				' React',
				' React-Native'
			]
		},
		{
			id    : 2,
			title : 'BackEnd',
			items : [
				' Express',
				' Node',
				' MongoDb',
				' Google Firebase Firestore and Cloud Functions',
				' AWS Beanstalk, S3 & DynamoDb',
				' GraphQl',
				' Apollo Server',
				' NoSQL'
			]
		},
		{
			id    : 3,
			title : 'Languages',
			items : [
				' ES6 destructuring, async await, try/catch, arrow Fx, ...all the rest',
				' the above was a spread operator pun',
				' JSX',
				' Typescript',
				' familiar with python and C++'
			]
		},

		{
			id    : 4,
			title : 'FrontEnd',
			items : [
				' CSS, SASS, Styled Components, Inline Styles & Stylesheet',
				' React Navigation (React Native)',
				' React-Router-Dom (React Web)',
				' Urql',
				' React Helmet',
				' Moment, DayJs',
				' GSAP (GreenSock Animations)',
				' Really?! just any Api with docs.'
			]
		},
		{
			id    : 5,
			title : 'State Management',
			items : [
				' Redux, Thunk & Redux-Persist,',
				' React useContext, useReducer, useState, useMemo, useEffect.'
			]
		}
	];

	const certifications = cert.map((el, idx) => (
		<div key={el.id} style={{ paddingTop: 25 }}>
			<span style={{ fontStyle: 'italic', color: `#219cb${9 - idx}` }}> {el.title}</span>
			<ul className='business-characteristic-ul'>
				{el.items.map((n, idx) => (
					<div key={el.id}>
						<FontAwesomeIcon icon={faCaretSquareRight} size='sm' style={{ color: 'gold' }} />

						<span style={{ color: 'lightgrey' }}>{n}</span>
					</div>
				))}
			</ul>
		</div>
	));

	return (
		<div>
			<div className='bio-subtitle'>
				Knowledge
				<div className='business-characteristic-parent'>{certifications}</div>
			</div>
		</div>
	);
};
export default Certifications;
