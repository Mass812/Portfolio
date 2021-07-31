import React from 'react';
import Button from '../../Assets/Button';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const SpreadNav = ({ onClick }) => {
	return (
		<nav className='header-drawer-parent'>
			<ul className='header-drawer-ul' onClick={onClick}>
				<Link to='/' exact='true' style={{ textDecoration: 'none' }}>
					<Button>Home</Button>
				</Link>
				<Link to='/about' style={{ textDecoration: 'none' }}>
					<Button>Education</Button>
				</Link>
				<Link to='/resume' style={{ textDecoration: 'none' }}>
					<Button>Career</Button>
				</Link>
				<Link to='/references' style={{ textDecoration: 'none' }}>
					<Button>Endorsements</Button>
				</Link>
				<Link to='/projects' style={{ textDecoration: 'none' }}>
					<Button>Examples</Button>
				</Link>
			</ul>
		</nav>
	);
};
export default SpreadNav;
