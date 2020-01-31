import React from 'react';
import ToggleDrawerButton from '../ToggleDrawer/ToggleDrawer';
import './ToolBar.scss';
import SpreadNav from './SpreadNav';

const Toolbar = (props) => {

		
		

	return (
		<div>
			<header className='header_bar'>
      <SpreadNav />
	
  <nav className='drawer_parent'>
    <div>
      <ToggleDrawerButton showHide={props.pushShowHide} />
    </div>
    <div className='site_name'>
      M<span id='W'>W</span>
    </div>
  </nav>
      
      
      
      
      </header>
		</div>
	);
};

export default Toolbar;
