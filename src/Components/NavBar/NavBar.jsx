import React from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';

import './NavBar.scss';
import SpreadNav from './SpreadNav';

const NavBar = ({ pushShowHide, isHome }) => {
	return (
		<div className={isHome ? 'navbar-parent navbar-parent-home' : 'navbar-parent'}>
			<nav className='navbar'>
				<Link
					to='/'
					className={isHome ? 'site_name site_name-home' : 'site_name'}
					style={{ textDecoration: 'none' }}
				>
					Mw
				</Link>
				<SpreadNav isHome={isHome} />
				<div className={isHome ? 'toggle-block toggle-block-home' : 'toggle-block'}>
					<MenuButton showHide={pushShowHide} />
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
