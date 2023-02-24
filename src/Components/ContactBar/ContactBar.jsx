import React, { useEffect, useState, useRef, Fragment } from 'react';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ContactBar.scss';

const FontAwesome = () => {
	gsap.registerPlugin(CSSPlugin);
	let phone = useRef(null);
	let info = useRef(null);
	const [
		showNumber,
		setShowNumber
	] = useState(null);

	useEffect(
		() => {
			const animateContactBar = () => {
				if (showNumber === null) {
					return;
				} else if (!showNumber) {
					gsap.fromTo(info, 1, { opacity: 1, x: 167 }, { x: 0, zIndex: 0 });
				} else if (showNumber) {
					gsap.fromTo(info, 1, { opacity: 0 }, { x: 167, opacity: 1, zIndex: 20 });
					gsap.fromTo(phone, 1, { zIndex: 10 }, { zIndex: 25 });
				}
			};
			animateContactBar();
		}, // eslint-disable-next-line
		[
			showNumber
		]
	);

	return (
		<Fragment>
			<section className='contactBlockContainer' ref={(cr) => (phone = cr)}>
				<div className='contactBlockIconBlock'>
					<ul className='IconBar'>
						<a href='https://www.linkedin.com/in/matt-wellman-154301a3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmRw6jTXHSQCdaLMn1XAr7A%3D%3D'>
							<FontAwesomeIcon icon={faLinkedin} className='IconBarLi' size='lg' />
						</a>
						<a href='mailto:williamwellman98@gmail.com?subject=Touchbase'>
							<FontAwesomeIcon icon={faEnvelopeSquare} className='IconBarLi' size='lg' />
						</a>

						<a href='https://github.com/Mass812'>
							<FontAwesomeIcon icon={faGithub} className='IconBarLi' size='lg' />
						</a>
						<div>
							<FontAwesomeIcon icon={faPhoneAlt} color={'goldenrod'} className='IconBarLi' size='lg' onClick={() => setShowNumber(!showNumber)} />
						</div>
					</ul>
				</div>
			</section>
      <section className='contactBlockContainer' style={{zIndex: 0} } ref={(cr) => (info = cr)}>
				<div className='contactBlockIconBlockMirror'>
					<ul className='IconBar-info'>
						{' '}
						<FontAwesomeIcon icon={faPhoneAlt} color={'green'} style={{ paddingLeft: '7px' }} /> <a href='tel:+15022320232'>(502) 232-0232</a>
					</ul>
				</div>
			</section>
		</Fragment>
	);
};

// render to #root
export default FontAwesome;
