import React, { useState } from 'react';
import './Resume.scss';

import { faUps, faReact } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ResumeCard from './ResumeCard';

const Resume = () => {
	const [
		moreAboutUPS,
		setMoreAboutUPS
	] = useState(false);
	const [
		moreAboutTechstyle,
		setMoreAboutTechstyle
	] = useState(false);
	const [
		moreAboutParsedIO,
		setMoreAboutParsedIO
	] = useState(false);
	const [
		moreAboutFreeLance,
		setMoreAboutFreeLance
	] = useState(false);

	const moreFreeLance = () => {
		setMoreAboutFreeLance(!moreAboutFreeLance);
	};
	const moreUPS = () => {
		setMoreAboutUPS((prevState) => setMoreAboutUPS(!prevState));
	};

	const moreParsedIO = () => {
		setMoreAboutParsedIO((prevState) => setMoreAboutParsedIO(!prevState));
	};

	const moreTechstyle = () => {
		setMoreAboutTechstyle(!moreAboutTechstyle);
	};

	return (
		<div className='parent'>
			<div className='resume-title'>WORK HISTORY</div>
			<ResumeCard
				company={'Full Stack React and React-Native Developer'}
				startDate={'October 8, 2020'}
				endDate={'Present'}
				duration={''}
				position={'React Developer'}
				icon={faAngleRight}
				p1={
					"I have developed in many javascript libraries but I am highly efficient in React. I love the library and it just fits me. I have worked solidly in React for over two years --and react-native sporadically in the same duration as well. I am glad for it, as React is still one of the most desired libraries utilized today. I have done work in MERN as well but am fond of Google's Firestore and other cloud services."
				}
				safe={moreAboutFreeLance}
				resp1={'Build Client Web Applications to Requested Standards'}
				resp2={'Work with clients to mediate their wants with best / practical approaches.'}
				resp3={'Create the most cost effective methods in building out sites.'}
				resp4={'Guarantee site issue resolutions for 2 years of sites finished development'}
				onClickMore={moreFreeLance}
			/>
			<ResumeCard
				company={'UPS Worldport'}
				startDate={'June 28, 2019'}
				endDate={'August 28, 2020'}
				duration={'1.5 years'}
				position={'Safety Committee'}
				icon={faUps}
				textWhenMore={
					'Training is the cornerstone of safety at UPS, and management training is the logical precursor to an informed and safe workforce. UPS invests $175 million pe year on safety training. UPS employees receive nearly 3.8 million hours of safety training annually, including Safe Work Methods. UPS Safe Work Methods have been developed to help address the major sources of known risk to our employees. I was glad to be part of that process.'
				}
				safe={moreAboutUPS}
				resp1={'Safety Compliance Training / New Hire Training'}
				resp2={'Facility, Equipment & Employee audits'}
				resp3={'Root Cause Analysis Reporting'}
				resp4={'Developed a Web Application for their Operations'}
				p1={
					"I developed  safety auditing platform for the Comprehensive Health and Safety Committee (CHSP). Although the application was utilized after development for a short period, after being approved by Wing D's Building Managers and the Safety Committee Chairman, the project was unfortunately brought to a halt by upper echelons--only for the reason that I was not hired in as a developer and I was essentially a third-party. I however did repo over the codebase so that they could use it (there is no reason to reinvent a wheel). Prior to my notice the parties involved were in meetings working to develop this platform. I wanted nothing in return for this project just to help their operation. I did get a lot of accolades on the great idea and application itself."
				}
				onClickMore={moreUPS}
			/>
			<ResumeCard
				company={'Parse IO'}
				startDate={'March 28, 2018'}
				endDate={'September 16, 2019'}
				duration={'6 months'}
				position={'Internship of Sorts'}
				icon={faReact}
				p1={
					" I was fortunate in being granted a position a great remote team at ParsedIO. I worked on both large and small scale projects, ranging from 'internationalizing' using i18n libraries in currently existing applications . . . to creating video streaming applications from scratch. I worked as a remote developer on a team managed by a Scrum / Project Manager; interacted with the team via daily stand-ups and zoom; was assigned and completed sprints through storybook. I loved the freedom of this work environment but desired to take a step back to constitute a solid learning period for myself."
				}
				safe={moreAboutParsedIO}
				resp1={'Developed React-Native Applications for iOS and Android to client specs'}
				resp2={' Resolve Merge Conflicts and Testing Failures'}
				resp3={' Work with 3rd party Back-end Companies to validate / resolve / create endpoints'}
				resp4={'Worked exclusively in React Native.'}
				textWhenMore={
					'I love technology and for many years I swore I would take the time to learn it! I learned SQL inadvertently through Google Sheets while at Techstyle Fashion Group. One of my best friends is the Chief Mobile Software Engineer and Developer at Techstyle Fashion Group. I expressed a desire to learn how to develop web and mobile applications. At that time he knew of a company needing some contract work done so he secured me a position on a development team for a while so that I could experience the life-of-coding first hand. '
				}
				onClickMore={moreParsedIO}
			/>
			<ResumeCard
				company={'Techstyle Fashion Group'}
				startDate={'February 28, 2012'}
				endDate={'October 02, 2018'}
				duration={'6.5 years'}
				position={'Director of Security Operations'}
				icon={faAngleRight}
				p1={
					'  Working alongside three staffing agencies and seven internal operational departments, for a company consisting of 1000+ employees. I effectively coordinated a 40+ member security team. Directly regarding development: in my duration there I developed a web-based security platform that did a great deal to decrease operational manpower and hours / save the company thousands a year in resource expenditures. '
				}
				safe={moreAboutTechstyle}
				addendum={'(Pertinent to Development)'}
				addendum2={' Fully developing Web Technologies that leveraged entire workflows which:'}
				resp1={' Watered-down operational complexities (Lessened Skill Set requirements)'}
				resp2={' Markedly decreased training & development time (Better On-Boarding)'}
				resp3={' Automated security reporting and auditing (Modernized Security)'}
				resp4={' Immeasurably increased oversight (Operational Control)'}
				textWhenMore={
					"After maturing at Techstyle I wanted to delve further into coding, not just to expand on knowledge of frameworks, languages and API's but to better understand the technology perspectives of operational workflows (i.e., its struggles and possibilities). This choice to journey into Javascript Libraries certainly broadened my overall knowledge-base of technologies capabilities, I am glad I began this endeavour."
				}
				onClickMore={moreTechstyle}
			/>
		</div>
	);
};

export default Resume;
