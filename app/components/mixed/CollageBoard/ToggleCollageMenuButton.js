import React from 'react'
import { connect } from 'react-redux'
import { toggleCollageBoardMenuOpen } from '../../../actions'
import ArrowIcon from '../../icons/ArrowIcon'

let ToggleCollageMenuButton = ({ menuOpen, dispatch }) => {
	let className = menuOpen ?
		'toggle-collage-menu-btn open' :
		'toggle-collage-menu-btn'

	return (
		<button
			className={className}
			onClick={() => {
				dispatch(toggleCollageBoardMenuOpen())
			}}
		>
			<ArrowIcon />
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
