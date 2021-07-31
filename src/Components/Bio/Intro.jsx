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
					<div className='weakness'>Although Fabletics FIT is by far the smallest in scale and scope in Techstyle Mobile catalogs, it still curries a solid 220,000 active user base and plays a heavy roll in membership engagement, retention and company analytics.</div>
					<br />
					<div className='weakness'>
						On the other side of Fabletics FIT being the smallest mobile implementation, the FIT App has conferred the omnipotent boon of implementing application design patterns and processes. ahead of the other mobile frameworks it spearheads its implementations through in TechStyle
						Fashion Group mobile family. FIT was the first mobile app to provide Android Play Store availability.
						<br />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Intro;
