import React from 'react';
import MenuButton from './MenuButton';

import './NavBar.scss';
import SpreadNav from './SpreadNav';

const NavBar = ({ pushShowHide }) => {
	return (
		<div className='navbar-parent'>
			<nav className='navbar'>
				<div className='site_name'>Mw</div>
				<SpreadNav/>
				<div className='toggle-block'>
					<MenuButton showHide={pushShowHide} />
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
