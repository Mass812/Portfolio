import React from 'react';
import Button from '../../Assets/Button';
import { Link } from 'react-router-dom';

const SpreadNav = ({ onClick }) => {
	return (
		<nav className='header-drawer-parent'>
			<ul className='header-drawer-ul' onClick={onClick}>
				<Link to='/' exact='true' style={{ textDecoration: 'none' }}>
					<Button>Home</Button>
				</Link>
				<Link to='/about' style={{ textDecoration: 'none' }}>
					<Button>About Me</Button>
				</Link>
				<Link to='/resume' style={{ textDecoration: 'none' }}>
					<Button>Resume</Button>
				</Link>
				<Link to='/references' style={{ textDecoration: 'none' }}>
					<Button>Refs</Button>
				</Link>
				<Link to='/projects' style={{ textDecoration: 'none' }}>
					<Button>Projects</Button>
				</Link>
			</ul>
		</nav>
	);
};
export default SpreadNav;
