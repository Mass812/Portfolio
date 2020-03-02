import React from 'react';
import './Projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = (props) => {
	const sendTo = () => {
		window.open(props.to);
	};

	return (
		<div className='project-card-parent'>
			<div className='mini-project-title'>
				{props.title} <br />
			</div>
			<div className='mini-project-body'>
				<div style={{ color: 'oliveDrab', fontSize: '16px' }}>
					{' '}
					<b>Current Site Status:</b>{' '}
					<i>{props.status ? props.status : null} </i>
				</div>{' '}
				<br />
				<span style={{ color: '#CFB46F', textShadow: '.7px .7px black' }}>Why this Project: </span>
				<hr /> <i>{props.body ? props.body : null}</i>
				<br />
				<br />
				<span style={{ color: '#CFB46F', textShadow: '.7px .7px black' }}>Site Details: </span>
				<hr />
				<i> {props.details ? props.details : null} </i>
			</div>
			<div className='mini-project-picture'>
				<img
					className='project-pic'
					src={props.src}
					alt={props.alt}
					onClick={() => sendTo(props.to)}
				/>
			</div>
			<div className='mini-project-highlights'>
				<h3 style={{ color: '#CFB46F',textShadow: '.5px .5px black' }}>Highlights</h3>
				<ul>
					{props.highlightOne ? (
						<div>
							<FontAwesomeIcon icon={faCaretRight} size='sm' />{' '}
							<span> {props.highlightOne} </span>{' '}
						</div>
					) : null}
					{props.highlightTwo ? (
						<div>
							<FontAwesomeIcon icon={faCaretRight} size='sm' />{' '}
							<span> {props.highlightTwo} </span>{' '}
						</div>
					) : null}
					{props.highlightThree ? (
						<div>
							<FontAwesomeIcon icon={faCaretRight} size='sm' />{' '}
							<span> {props.highlightThree} </span>{' '}
						</div>
					) : null}
				</ul>
			</div>
			<div className='mini-project-stack'>
				<h3 style={{ color: '#CFB46F',textShadow: '.5px .5px black' }}>Tech Stack</h3>
				<ul>
					{props.stack ? (
						<div>
							<FontAwesomeIcon icon={faCaretRight} size='sm' />{' '}
							<span> {props.stack} </span>{' '}
						</div>
					) : null}
				</ul>
			</div>
		</div>
	);
};
export default ProjectCard;
