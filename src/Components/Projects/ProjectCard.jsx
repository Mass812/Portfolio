import React from 'react';
import './Projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ status, stack, body, title, to, src, alt, highlightOne, highlightTwo, highlightThree, details }) => {
	const sendTo = () => {
		window.open(to);
	};

	return (
		<div className='parent'>
			<div className='project-card-parent'>
				<div className='mini-project-title'>
					{title} <br />
				</div>
				<div className='mini-project-body'>
					<div className='site-status'>
						{' '}
						<b>Type:</b> <i>{status ? status : null} </i>
					</div>{' '}
					<br />
					<span className='project-details'>Why this Project: </span>
					<hr /> <i>{body ? body : null}</i>
					<br />
					<br />
					<span className='project-details'>Site Details: </span>
					<hr />
					<i> {details ? details : null} </i>
				</div>
				<div className='mini-project-picture'> 
					{src ? <>	<img className='project-pic' src={src} alt={alt} onClick={() => sendTo(to)} />
					<p style={{ color: 'whiteSmoke', fontSize: '10px' }}>Click to Explore Project</p> </> : null}
					
				</div>
				<div className='mini-project-highlights'>
					<div className='highlight-body'>Highlights</div>
					<ul>
						{highlightOne ? (
							<div>
								<FontAwesomeIcon icon={faCaretRight} size='sm' /> <span> {highlightOne} </span>{' '}
							</div>
						) : null}
						{highlightTwo ? (
							<div>
								<FontAwesomeIcon icon={faCaretRight} size='sm' /> <span> {highlightTwo} </span>{' '}
							</div>
						) : null}
						{highlightThree ? (
							<div>
								<FontAwesomeIcon icon={faCaretRight} size='sm' /> <span> {highlightThree} </span>{' '}
							</div>
						) : null}
					</ul>
				</div>
				<div className='mini-project-stack'>
					<div className='highlight-body'>Tech Stack</div>
					<ul>
						{stack ? (
							<div>
								<FontAwesomeIcon icon={faCaretRight} size='sm' /> <span> {stack} </span>{' '}
							</div>
						) : null}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default ProjectCard;
