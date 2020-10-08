import React from 'react'
import './MenuButton.scss'

const ToggleDrawerButton = ({ showHide }) => {
	return (
		<button className='toggle-button' onClick={showHide}>
			<div className='toggle_button_line-1' />
			<div className='toggle_button_line-1' />
			<div className='toggle_button_line-1' />
		</button>
	)
}

export default ToggleDrawerButton
