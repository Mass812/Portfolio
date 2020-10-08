import React, { useState, useRef, useEffect } from 'react';
import './Resume.scss';
import Icon from '../ContactBar/Icon';
import { faUps, faReact } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
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
			<div className='resume-title'>RESUME</div>
			<ResumeCard
				company={'Full Stack React and React-Native Developer'}
				startDate={'October 8, 2020'}
				endDate={'Present'}
				duration={''}
				position={'React Developer'}
				icon={faUps}
				p1={
					'I currently develop in Vue and React, but am particular to React as I love the library and it is still one of the most desired libraries utilized today. I have done work in MERN as well but am fond of Google\'s Firestore and other cloud services.'
				}
				textWhenMore={'I enjoy developing a lot. It is the sole reason I have focused relentlessly on it for the past few years.'}
				safe={moreAboutFreeLance}
				resp1={'Build Client Web Applications to Requested Standards'}
				resp2={'Work with clients to mediate their wants with best / practical approaches.'}
				resp3={'Operate at a very cost effective rate.'}
				resp4={'Guarantee site issue resolutions for 2 years of sites finished development'}
				onClickMore={moreFreeLance}
			/>
			<ResumeCard
				company={'UPS Worldport'}
				startDate={'June 28, 2019'}
				endDate={'August 28, 2020'}
				duration={'1.5 years'}
				position={'Safety Commitee'}
				icon={faUps}
				p1={
					'Training is the cornerstone of safety at UPS, and management training is the logical precursor to an informed and safe workforce. UPS invests $175 million pe year on safety training. UPS employees receive nearly 3.8 million hours of safety training annually, including Safe Work Methods. UPS Safe Work Methods have been developed to help address the major sources of known risk to our employees. I am glad to be part of this process. '
				}
				safe={moreAboutUPS}
				resp1={'Safety Compliance Training / New Hire Training'}
				resp2={'Facility, Equipment & Employee audits'}
				resp3={'Root Cause Analysis Reporting'}
				resp4={'Developed a Web Application for their Operations'}
				textWhenMore={'I developed  safety auditing platform'}
				onClickMore={moreUPS}
			/>
			<ResumeCard
				company={'Parse IO'}
				startDate={'March 28, 2018'}
				endDate={'September 16, 2019'}
				duration={'6 months'}
				position={'Internship of Sorts'}
				icon={faReact}
				p1={" I was fortunate in being granted a position on such a great team. I worked on both large and small scale projects, ranging from 'internationalizing' currently existing applications . . . to creating video streaming applications from scratch. "}
				safe={moreAboutParsedIO}
				resp1={'Developed React-Native Applications for iOS and Android to client specs'}
				resp2={' Resolve Merge Conflicts and Testing Failures'}
				resp3={' Work with 3rd party Back-end Companies to validate / resolve / create endpoints'}
				resp4={'Worked exclusively in React Native.'}
				textWhenMore={
					' I love technology and for many years I swore I would take the time to learn it! I have always had more than a natural aptitude towards the Internet of Things, apparently that term is a real thing (smh). I learned SQL inadvertently through google sheets while at Techstyle Fashion Group. One of my best friends is the Chief Mobile Software Engineer and Developer at Techstyle Fashion Group. I expressed a desire to learn how to develop web and mobile applications. At that time he knew of a company needing some contract work done so he secured me a position on a development team for a while so that I could experince the life-of-coding first hand.'
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
				p1={'  Working alongside three staffing agencies and seven internal operational departments, for a company consisting of 1000+ employees. I effectively coordinated a 40+ member security team.'}
				safe={moreAboutTechstyle}
				addendum={'(Pertinent to Development)'}
				addendum2={' Fully developing Web Technologies that leveraged complete workflows which:'}
				resp1={' watered-down operational complexities (Lessened Skill Set requirements)'}
				resp2={' markedly decreased training & development time (Better On-Boarding)'}
				resp3={' automated security reporting and auditing (Modernized Security)'}
				resp4={' immeasurably increased oversight (Operational Control)'}
				textWhenMore={
					"After maturing at Techstyle I wanted to delve further into coding, not just to expand on knowledge of frameworks, languages and API's but to better understand the technology side of the operational workflow (i.e., its struggles and possibilities). This choice certainly broadened my overall knowledge-base being all companies heavily leverage technology into their work models."
				}
				onClickMore={moreTechstyle}
			/>
		</div>
	);
};

export default Resume;
