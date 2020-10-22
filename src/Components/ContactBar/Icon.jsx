import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Icon.css';

const Icon = ({ children, icon, size = 'sm', color = 'goldenrod' }) => {
	return (
		<div className='icon-parent'>
			<FontAwesomeIcon icon={icon} size={size} className='res' /> <div className='bullet-point-text'>{children}</div>
		</div>
	);
};

export default Icon;
