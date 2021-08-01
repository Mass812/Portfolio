import React from 'react';
import './Bio.scss';

const Intro = () => {
	return (
		<div className='bio-subtitle'>
			<div className='inner-bio'>
				{/* <div className='bio-image-block'>
					<img className='bio-image' src={require('../../Assets/massymass1.png')} alt={'face'} />
				</div> */}
				<div className='bio-text-block'>
					<div className='proof-is-the-pudding'>This is who I am...</div>
					<div className='weakness'>Being self taught, against a myriad of competitors, in order to obtain my position as a Fabletics Software Engineer, I literally learned their tech stack (Dynamodb, graphql, Urql and Typescript) AND built the Fabletics FIT app from scratch in a month.</div>
					<br />
					<div className='proof-is-the-pudding' style={{fontSize: 25}}>Drive, Discipline and Determination</div>
					<br />
				</div>
			</div>
		</div>
	);
};
export default Intro;
