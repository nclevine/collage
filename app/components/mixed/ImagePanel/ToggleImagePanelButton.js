import React from 'react'
import { connect } from 'react-redux'
import { toggleImagePanelOpen } from '../../../actions'

let ToggleImagePanelButton = ({ panelOpen, dispatch }) => {
	let className = panelOpen ?
		'toggle-image-panel-btn open' :
		'toggle-image-panel-btn closed'

	let text = panelOpen ?
		'Close' :
		'Open Image Panel'

	return (
		<button
			className={className}
			onClick={() => {
				dispatch(toggleImagePanelOpen())
			}}
		>
			{text}
		</button>
	)
}

const mapStateToProps = (state) => {
	return {
		panelOpen: state.imagePanel.open
	}
}

ToggleImagePanelButton = connect(mapStateToProps)(ToggleImagePanelButton)

export default ToggleImagePanelButton
