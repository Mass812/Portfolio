import React, { useEffect, useState, useRef, Fragment } from 'react';
import { gsap } from 'gsap';

// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ContactBar.scss';

const FontAwesome = () => {
	const phone = useRef(null);
	const info = useRef(null);
	const [
		showNumber,
		setShowNumber
	] = useState(null);

	useEffect(
		() => {
			if (showNumber === null) {
				return;
			}

			const ctx = gsap.context(() => {
				if (!showNumber) {
					gsap.fromTo(info.current, { opacity: 1, x: 167 }, { duration: 1, x: 0, zIndex: 0 });
				} else {
					gsap.fromTo(info.current, { opacity: 0 }, { duration: 1, x: 167, opacity: 1, zIndex: 20 });
					gsap.fromTo(phone.current, { zIndex: 10 }, { duration: 1, zIndex: 25 });
				}
			});

			return () => ctx.revert();
		},
		[
			showNumber
		]
	);

	return (
		<Fragment>
			<section className='contactBlockContainer' ref={phone}>
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
							<FontAwesomeIcon icon={faPhone} className='IconBarLi' size='lg' onClick={() => setShowNumber(!showNumber)} />
						</div>
					</ul>
				</div>
			</section>
      <section className='contactBlockContainer' style={{zIndex: 0} } ref={info}>
				<div className='contactBlockIconBlockMirror'>
					<ul className='IconBar-info'>
						{' '}
						<FontAwesomeIcon icon={faPhone} color={'goldenrod'} style={{ paddingLeft: '7px' }} /> <a href='tel:+15023311825'>(502) 331-1825</a>
					</ul>
				</div>
			</section>
		</Fragment>
	);
};

// render to #root
export default FontAwesome;
