import React from 'react';
import Button from '../../Assets/Button';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const SpreadNav = ({ onClick, mobile = false, isHome = false }) => {
	// Deliberately not sharing header-drawer-parent/-ul on the mobile variant:
	// those classes pick up the min-width:1120px desktop rule below, which
	// would make this row double up with the desktop SpreadNav instead of
	// staying hidden above that breakpoint.
	const parentClass = mobile ? 'home-mobile-nav' : 'header-drawer-parent';
	const listClass = mobile ? 'home-mobile-nav-ul' : 'header-drawer-ul';
	return (
		<nav className={parentClass}>
			<ul className={listClass} onClick={onClick}>
				{/* Home is redundant on Home itself (the mark already links back
				    there) but every other page needs a way to get back. */}
				{isHome ? null : (
					<Link to='/' style={{ textDecoration: 'none' }}>
						<Button>Home</Button>
					</Link>
				)}
				<Link to='/about' style={{ textDecoration: 'none' }}>
					<Button>Education</Button>
				</Link>
				<Link to='/resume' style={{ textDecoration: 'none' }}>
					<Button>Career</Button>
				</Link>
				<Link to='/references' style={{ textDecoration: 'none' }}>
					<Button>Accolades</Button>
				</Link>
			</ul>
		</nav>
	);
};
export default SpreadNav;
