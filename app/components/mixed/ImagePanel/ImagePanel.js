import React from 'react'
import { connect } from 'react-redux'
import ImagePanelSections from '../../presentational/ImagePanel/ImagePanelSections'
import { setImagePanelExpansion, closeAllImagePanelSections } from '../../../actions'

let ImagePanel = ({ expansion, imageLists, onOverlayClick }) => {
	let panelClass = 'image-panel '
	let overlayClass = 'image-panel-overlay '

	if (expansion === 'BUTTONS' || expansion === 'COLLAPSED') {
		panelClass += 'collapsed'
		overlayClass += 'collapsed'
	}

	return (
		<div className={panelClass}>
			<div
				className={overlayClass}
				onClick={() => {
					onOverlayClick()
				}}
			></div>
			<ImagePanelSections imageLists={imageLists} expansion={expansion} />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		expansion: state.imagePanel.expansion,
		imageLists: state.imagePanel.imageLists
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onOverlayClick: () => {
			dispatch(setImagePanelExpansion('BUTTONS'))
			dispatch(closeAllImagePanelSections())
		}
	}
}

ImagePanel = connect(
	mapStateToProps,
	mapDispatchToProps
)(ImagePanel)

export default ImagePanel
