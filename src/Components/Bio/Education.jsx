import React from 'react';
import './Bio.scss';

const SCHOOLS = [
	{
		school : 'University of Kentucky',
		major  : 'Chemistry & Biology',
		years  : '2005 — 2007'
	},
	{
		school : 'Indiana University',
		major  : 'Biochemistry',
		years  : '2004 — 2005'
	},
	{
		school : 'Ivy Tech Community College',
		major  : 'Prerequisites',
		years  : '2003 — 2004'
	}
];

const Education = () => {
	return (
		<section className='bio-section'>
			<h2 className='bio-section-title'>Education</h2>
			<ul className='edu-list'>
				{SCHOOLS.map((s) => (
					<li className='edu-item' key={s.school}>
						<div className='edu-years'>{s.years}</div>
						<div className='edu-body'>
							<div className='edu-school'>{s.school}</div>
							<div className='edu-major'>{s.major}</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};
export default Education;
