import React from 'react';
import MenuButton from './MenuButton';
import './NavBar.scss';


const NavBar = ({ pushShowHide }) => {
	return (
		<div className='navbar-parent'>
			<nav className='navbar'>
				<div className='toggle-block'>
					<MenuButton showHide={pushShowHide} />
				</div>
				<div className='site_name'>Mw</div>
			</nav>
		</div>
	);
};

export default NavBar;
