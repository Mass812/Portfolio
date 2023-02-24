import React, { useState } from 'react';
import './Resume.scss';

import { faUps, faReact } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import ResumeCard from './ResumeCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Resume = () => {
	const [
		moreAboutUPS,
		setMoreAboutUPS
	] = useState(false);
	const [
		moreAboutFIT,
		setMoreAboutFIT
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

	const moreAboutFit = () => {
		setMoreAboutFIT(!moreAboutFIT);
	};
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
	const openHardResume = () => {
		window.open('https://drive.google.com/file/d/1eK2vuzQTNN4ZCmWqjts4ieJAy8FY4HCa/view?usp=sharing');
	};


	return (
		<div className='parent'>
			<div className='hard-resume-block' onClick={openHardResume}>
				<FontAwesomeIcon icon={faFileAlt} size={'xs'} className='hard-resume-text' /> <div className='hard-resume-text'>Hard Copy Resume</div>
			</div>
			<ResumeCard
				company={'Fabletics Retail'}
				startDate={'November 9, 2022'}
				endDate={'Present'}
				duration={''}
				position={'FullStack Software Engineer'}
				icon={faAngleRight}
			
				p1={
					"In addition to my role as a Full Stack Software Engineer on Fabletics Fit I am also a Full Stack Software Engineer on Fabletics Retail. I am currently working on monotizing the backend into private npm packages."
				}
				resp1={'My first project was to create a monorepo for the Fabletics Retail Backend, with the bells and whistles, generating new repo scaffolding, Jest, TSC, and CI-CD pipeline deployments (canary & stable). All operating under the modus operandi of change some code, then run one line of code, in the terminal and done!'}

		
			/>
			<ResumeCard
				company={'Fabletics Fit Mobile App'}
				startDate={'March 22, 2021'}
				endDate={'Present'}
				duration={''}
				position={'FullStack Software Engineer'}
				icon={faAngleRight}
				p1={
					"I am currently the primary full stack mobile developer on the Fabletics FIT app (Kate Hudson's Fitness Apparel Company). I work specifically in a react-native typescript environment alongside many services such as Segment, SailThru, Emarsys and Firebase Analytics on the front end. The backend stack consists of DynamoDb, Strapi, Postgress, Terraform, GraphQl. Currently, I am responsible for for every aspect of the Fabletics Fit app for iOS and Android."
				}
				highlight1={'A cool Badge of Honor I get to wear is that I am currently the only full stack developer at Techstyle Fashion Group.'}
				highlight2={'Neat Fact: In order to get this position I Learned DynamoDb, Graphql, Apollo Server, Typescript and Urql and built the Fitness App in their app stack before the interview. Its on the example page of this site.'}
				safe={moreAboutFIT}
				textWhenMore={
					"Fabletics is a part of Techstyle Fashion Group which also possesses Savage X Fenty (Rihanna's Lingerie Company), Shoedazzle, JustFab and FabKids. Although Fabletics FIT is by far the smallest in scale and scope in Techstyle Mobile catalogs it still curries a solid 60,000 active user base and plays a heavy roll in membership engagement, retention and company analytics. On the other side of Fabletics FIT being the smallest mobile implementation, the FIT App has conferred the omnipotent boon of implementing new and desired application design patterns and processes. Ahead of the other mobile frameworks it spearheads its implementations through TechStyle Fashion Group's mobile family. FIT was the first mobile app to provide Android Play Store availability."
				}
				resp1={
					'A lot of Tech Planning & Development'
				}
				resp2={'Work with production, graphic design, & marketing teams to successfully reach desired company outcomes.'}
				resp3={'Solely responsible (Ground up development: feature creation => app store deployments) for writing all backend and front end changes.'}
				resp4={''}
				onClickMore={moreAboutFit}
				milestones
			/>
			<ResumeCard
				company={'Full Stack React and React-Native Developer'}
				startDate={'September 1,2020'}
				endDate={'March 21, 2021'}
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
				position={'Safety Committee Member'}
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
					" I was fortunate in being granted a position a great remote team at ParsedIO. I worked on both large and small scale React-Native projects, ranging from 'internationalizing' using i18n libraries in currently existing applications . . . to creating video streaming applications from scratch. I worked as a remote developer on a team managed by a Scrum / Project Manager; interacted with the team via daily stand-ups and zoom; was assigned and completed sprints through storybook. "
				}
				p2={'I loved the freedom of this work environment but felt that in order to develop in a less manic, learn-as-I-go approach, I needed to take a step back to constitute a solid learning period for myself.'}
				safe={moreAboutParsedIO}
				resp1={'Developed React-Native Applications for iOS and Android to client specs'}
				resp2={' Resolve Merge Conflicts and Testing Failures'}
				resp3={' Work with 3rd party Back-end Companies to validate / resolve / create endpoints'}
				resp4={'Worked exclusively in React Native.'}
				textWhenMore={'In the duration of this employment and afterwards I studied React to such a point that building anything in this library became intuitive and there is no pressure in development or trouble shooting.'}
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
					"Directly regarding development: in my duration there I developed Google Sheet dashboards, Google forms that automated work order requests, tracked 100's of devices, logged all inbound & outbound trailers, and transformed security's workflow that did a great deal to increase operational oversight and decrease operational manpower / hours to save the company thousands a year in resource expenditures. "
				}
				safe={moreAboutTechstyle}
				addendum={'(Pertinent to Development)'}
				addendum2={' Fully developing Web Technologies that leveraged entire workflows which:'}
				resp1={' Watered-down operational complexities (Lessened Skill Set requirements)'}
				resp2={' Markedly decreased training & development time (Better On-Boarding)'}
				resp3={' Automated security reporting and auditing (Modernized Security)'}
				resp4={' Immeasurably increased oversight (Operational Control)'}
				textWhenMore={
					'After maturing at Techstyle I wanted to delve further into coding, not just to expand on my knowledge of the javascript language and to better understand the technology perspectives of operational workflows (i.e., its struggles and possibilities) but to learn of the javascript libraries and frameworks used to develop entire projects from the ground up. This choice to journey into Javascript Libraries certainly broadened my overall knowledge-base, I am glad I began this endeavour.'
				}
				onClickMore={moreTechstyle}
			/>
		</div>
	);
};

export default Resume;
