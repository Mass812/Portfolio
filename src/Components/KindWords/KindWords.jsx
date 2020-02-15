import React from 'react';
import './KindWords.scss';

function ReviewerPhoto() {
	const MS = require('../../Assets/MS.jfif');
	const JM = require('../../Assets/JM.jfif');
	const AW = require('../../Assets/AW.jfif');
	const SB = require('../../Assets/SB.jfif');
	const JW = require('../../Assets/JW.jfif');

	const urlArray = [
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
			content:
				'I worked with Matt and he provided excellent security for Just Fab and all the employees. He is one of the best and I would recommend for any job. He is very professional and does great work!'
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

	const navigate = (e) => {
		console.log(e.target.value);
	};

	//name= name, link, content
	const copy = urlArray.map((n) => (
		<div key={n.id}>
			<span className='bioCard' onClick={navigate}>
				<img
					src={n.link}
					className='picture'
					alt={'This data failed to pull correctly'}
					key={n.id}
				/>
				<div>
					<h3 id='name'>{n.name}</h3>
					<h4 id='title'> {n.title} </h4>
				</div>
				<hr />
				<span className='BioCard'>{n.content}</span>
			</span>
		</div>
	));

	return (
		<div>
			<div className='header'>References</div>
			<hr />
			{copy}
		</div>
	);
}

export default ReviewerPhoto;

// function RNote() {
//   return (
//     <span className="note">
//       <div>
//         <h1>Business is an Art</h1>
//         <h3>
//           I am very passionate about building lasting relationships. I believe
//           perseverance, dedication & hard work are a measure of reliability but
//           moreover are the Framework of Trust.
//         </h3>
//       </div>
//     </span>
//   );
// }

// export { RNote };
