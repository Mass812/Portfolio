import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Resume.scss';
import Icon from '../ContactBar/Icon';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const ResumeCard = ({ onClickMore, endDate, startDate, duration, company, position, icon, p1, p2, textWhenMore, safe, addendum, addendum2, resp1, resp2, resp3, resp4 }) => {
	let marker = useRef(null);
	let body = useRef(null);
	let arrow = useRef(null);
	let arrow2 = useRef(null);

	useEffect(() => {
		window.gsap
			.timeline({ duration: 0.5 })
			// .fromTo(title, 0.25, { scale: 1.1 }, { scale: 1, ease: 'Power1.easeOut' })
			.fromTo(arrow2, { opacity: 0, ease: 'Back.easeOut', scale: 1.1 }, { delay: 0.5, duration: 0.5, opacity: 1, ease: 'Back.easeOut', scale: 1 })
			.fromTo(
				[
					marker,
					body
				],
				1,
				{ scale: 0, visibility: 'hidden' },
				{ visibility: 'visible', scale: 1 }
			)
			.fromTo(arrow, { opacity: 0, ease: 'Back.easeOut', scale: 1.1 }, { delay: 0.3, duration: 0.3, opacity: 1, ease: 'Back.easeOut', scale: 1 });
	}, []);

	return (
		<div className='edge-down'>
			<li className='timeline-item'>
				<div className='timeline-info'>
					<span className='dateOf' ref={(cr) => (arrow = cr)}>
					

						<FontAwesomeIcon className='arrow' icon={ faLongArrowAltRight } color={ 'white' } size={ 'lg' } />{ ' ' }
						<span className='arrow-text'>

						{endDate}
						</span>
				
						<span className='duration'>{duration}</span>
					</span>
				</div>
				<div className='timeline-marker' ref={(cr) => (marker = cr)} />
				<div className='timeline-content' ref={(cr) => (body = cr)}>
					<div className='timeline-title'>{company}</div>

					<div className='position'>
						{position}
						<br />
					</div>

					<div className='why'>
						<div className='p-bodies'>{p1}</div>
					</div>

					{p2 ? <div className='why'>
						<div className='p-bodies'>{p2}</div>
					</div>: null}
					

					{textWhenMore ? (
						<span id={!safe ? 'safe' : 'no-safe'} onClick={onClickMore}>
							...continue reading
						</span>
					) : null}
					<br />

					{safe ? (
						<div className='why'>
							<div className='p-bodies'>{textWhenMore}</div>
						</div>
					) : null}

					<div className='key-responsibility-title'>Key Responsibilities {addendum}</div>

					<ul className='innerList'>
						<div className='addendum-two'> {addendum2}</div>
						{resp1 ? (
							<Icon size={'sm'} icon={icon} color={'red'}>
								{resp1}
							</Icon>
						) : null}
						{resp2 ? (
							<Icon size={'sm'} icon={icon}>
								{resp2}
							</Icon>
						) : null}
						{resp3 ? (
							<Icon size={'sm'} icon={icon}>
								{resp3}
							</Icon>
						) : null}
						{resp4 ? (
							<Icon size={'sm'} icon={icon}>
								{resp4}
							</Icon>
						) : null}
					</ul>
					<div className='sep' />
				</div>
			</li>
			<li className='timeline-item' style={{ boxShadow: 'none', border: 'none' }} ref={(cr) => (arrow2 = cr)}>
				<div className='timeline-item-bottom' style={{ boxShadow: 'none', border: 'none' }}>
					<span className='dateOf'>
						<FontAwesomeIcon className='arrow' icon={ faLongArrowAltLeft } color={ 'white' } size={ 'lg' } />{ ' ' }
						<span className='arrow-text'>
							
						{startDate}
							</span>
					</span>
				</div>
				<div className='timeline-marker' />
			</li>

			<div className='sep' />
		</div>
	);
};
export default ResumeCard;
