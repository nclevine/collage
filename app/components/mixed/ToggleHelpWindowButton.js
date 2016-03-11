import React from 'react'
import { connect } from 'react-redux'
import { toggleHelpWindowOpen } from '../../actions'
import CloseIcon from '../icons/CloseIcon'
import HelpIcon from '../icons/HelpIcon'

let ToggleHelpWindowButton = ({ open, dispatch }) => {	
	let buttonClass = open ?
		'help-window-toggle-btn open' :
		'help-window-toggle-btn'

	let buttonIcon = open ?
		<CloseIcon /> :
		<HelpIcon />

	return (
		<button
			className={buttonClass}
			onClick={() => {
				dispatch(toggleHelpWindowOpen())
			}}
		>
			{buttonIcon}
		</button>
	)
}

const mapStateToProps = (state) => {
	return {
		open: state.helpWindowOpen
	}
}

ToggleHelpWindowButton = connect(mapStateToProps)(ToggleHelpWindowButton)

export default ToggleHelpWindowButton
