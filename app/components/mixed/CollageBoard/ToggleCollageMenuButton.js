import React from 'react'
import { connect } from 'react-redux'
import { toggleCollageBoardMenuOpen } from '../../../actions'

let ToggleCollageMenuButton = ({ menuOpen, dispatch }) => {
	let text = menuOpen ?
		'Close Menu' :
		'Open Menu'
	return (
		<button
			className='toggle-collage-menu-btn'
			onClick={() => {
				dispatch(toggleCollageBoardMenuOpen())
			}}
		>
			{text}
		</button>
	)
}

const mapStateToProps = (state) => {
	return {
		menuOpen: state.collageBoard.menuOpen
	}
}

ToggleCollageMenuButton = connect(mapStateToProps)(ToggleCollageMenuButton)

export default ToggleCollageMenuButton
