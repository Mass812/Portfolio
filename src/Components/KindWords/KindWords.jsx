import React, { useEffect } from 'react';
import './KindWords.scss';

function ReviewerPhoto() {
	useEffect(() => {
		setTimeout(() => {
			return <h1>Loading</h1>;
		}, 0.2);
	}, []);

	const TJ = require('../../Assets/TJ.jpg');
	const MS = require('../../Assets/MS.jfif');
	const JM = require('../../Assets/JM.jfif');
	const AW = require('../../Assets/AW.jfif');
	const SB = require('../../Assets/SB.jfif');
	const JW = require('../../Assets/JW.jfif');
	const MW = require('../../Assets/novich.jpeg');

	const urlArray = [
		{
			id: 12,
			name: 'Matt Novich',
			title: 'Product Manager, Fabletics FIT.',
			link: `${MW}`,
			content:
				"I had the pleasure of working with Matt at Fabletics and have only good things to say about our experiences together. In 9 months and as the sole software engineer, Matt helped the team expand across the EU and Oceania, create new ways for customers to shop, and attain industry standard app stability.These achievements would not have been possible without Matt's unrelenting work ethic and dedication to the team, product, and customers. Matt constructively challenges project approaches, provides well-designed alternatives, and communicates his ideas using detailed wireframes and functional prototypes. He also independently researches product improvements; on multiple occasions, Matt influenced the product roadmap by identifying opportunities to automate manual processes within the team and enhance the customer experience.Matt is an asset to any team. I highly recommend bringing him into your organization and hope to have the opportunity to work with him again soon."
		},
		{
			id: 11,
			name: 'Taryn Jang',
			title: 'Senior Director, Fabletics FIT.',
			link: `${TJ}`,
			content:
				'It’s been such a pleasure working with you over the past six months to develop and grow the Fabletics FIT app. Your dedication to the project and commitment to doing whatever it takes to meet deadlines, with quality work, has enabled our marketing and product teams meet their business objectives successfully. In addition to work ethic, you have exceeded expectations in your technical and problem-solving skills. You have not only been able to identify and solve the roadblocks we faced in a structured and methodical approach, but you also have gone above and beyond by frequently making recommendations to the team for how we can improve on the overall structure and functionality of the app. I wish you the best of luck in the future and have every confidence that you will be able to excel in your career as a developer.'
		},
		{
			id: 1,
			name: 'Monica Shammel',
			title: 'Human Resource @ Prologistix',
			link: `${MS}`,
			content:
				'Matt and I worked alongside for the same client but for two separate companies and different lines of business. I was able to witness his amazing leadership skills, how detailed and organized he was, and his ability to adjust his company’s protocols in order to meet the clients ever changing demands, while still following his company’s policy’s. Matt started as a one man show and was the driving force behind his company’s growth into a full operation in multiple locations because of his determination, training and development skills, likeable personality, and client centered mindset. I would highly recommend him for any position because I know whatever task or challenge he’s faced with he’s guaranteed to succeed.'
		},
		{
			id: 2,
			name: 'Angel West',
			title: 'Senior Function Manager @ Techstyle',
			link: `${AW}`,
			content:
				"I have worked closely with Matt over the last 6 years. He is hard working, independent, driven and motivated. I have worked with Matt on various projects. He's very knowledgeable with various programs including but not limited to Microsoft Word, PowerPoint, Excel and Quick Books. He manages his team very well. He doesn't crack under pressure and always gets the job done no matter how big or small."
		},
		{
			id: 3,
			name: 'Samantha Barron',
			title: 'Director of Sales @ Kin Slips',

			link: `${SB}`,
			content:
				'Matt and I have partnered together at the same facility for the past 3 years and my experience with him has been nothing short of exemplary. Our company staffs up to 350 associates during busy season, on top of any full time associates, which means security can get hectic. With having such high volume, I don’t always expect an immediate resolution to any safety concerns or issues we may have, but Matt always surprises me and is quick to find a resolution to any concern, or change processes to resolve issues moving forward. His communication and how he runs the operation are clear and concise and always has the next step on how to better the business in mind. I look forward to continuing to grow our partnership! '
		},
		{
			id: 4,
			name: 'Justin Martin',
			title: 'Human Resources @ Borden',
			link: `${JM}`,
			content: 'I worked with Matt and he provided excellent security for Just Fab and all the employees. He is one of the best and I would recommend for any job. He is very professional and does great work!'
		},
		{
			id: 5,
			name: 'Josh Whittington',
			title: 'Techstyle IT Support',
			link: `${JW}`,
			content:
				'I worked under Matt for a little under two years with Special Security Services and then G4S at the Just Fab fulfillment centers in Louisville (now Techstyle Fashion Group). Matt was a great director, who was completely hands on and available at all times to all of his employees. He implemented several systems to improve the quality of life in the security positions, and streamline day to day operations. He wrote the security policies for the buildings himself from the ground up, worked alongside us every day and was on call 100% of the time when not at the site. If any issues ever arose, Matt was quick to be on location to help resolve them immediately. Matt is a talented individual that would be a great asset to any company he worked for. He cares for his employees and is always available to them if they need anything.'
		}
	];

	//name= name, link, content
	const copy = urlArray.map((n) => (
		<div className='bio-card-block' key={n.id}>
			<div className='bio-card'>
				<div className='bio-card-top'>
					<img src={n.link} className='picture' alt={'This data failed to pull correctly'} key={n.id} />
					<div className='ref-details'>
						<div className='name'>{n.name}</div>
						<div className='title'> {n.title} </div>
					</div>
				</div>
				<div className='bio-card-bottom'>{n.content}</div>
			</div>
		</div>
	));

	return (
		<div className='parent'>
			<div className='header'>References</div>

			{copy}
		</div>
	);
}

export default ReviewerPhoto;
