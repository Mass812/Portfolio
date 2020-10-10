import React from 'react';
import './FoggedGlass.scss';

const FoggedGlass = ({ unFogGlass }) => {
	return <div className='fogged-glass' onClick={unFogGlass} />;
};

export default FoggedGlass;
