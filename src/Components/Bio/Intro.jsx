import React from 'react';
import './Bio.scss';

const Intro = () => {
	return (
		<div className='bio-subtitle'>
			<div className='inner-bio'>
				<div className='bio-image-block'>
					<img className='bio-image' src={require('../../Assets/massymass1.png')} alt={'face'} />
				</div>
				<div className='bio-text-block'>
					<div className='weakness'>
						I am currently a full stack mobile software engineer at Fabletics (Kate Hudson Fitness Apparel Company) which is a part of Techstyle Fashion Group. Techstyle Fashion Group also has Savage X Fenty (Rihanna's Lingerie Company), Shoedazzle, JustFab and FabKids.
					</div>
					<div className='weakness'>
						Currently I work specifically in a react-native environment with DynamoDb, Strapi, Postgress, Terraform, GraphQl and Urql. Alongside many services such as Segment, SailThru, Emarsys and Firebase Analytics. I am responsible for for every aspect of the Fabletics Fit app for iOS
						and Android.
						<br />
					</div>
					<div className='weakness'>
						Cool Badge of Honor: I am currently the only full stack developer at Techstyle Fashion Group.
						<br />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Intro;
