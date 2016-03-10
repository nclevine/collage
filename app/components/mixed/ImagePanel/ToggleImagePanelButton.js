import React from 'react'
import { connect } from 'react-redux'
import { setImagePanelExpansion, toggleColorPickerOpen, toggleImageImporterOpen, toggleImageListExpanded } from '../../../actions'
import ArrowIcon from '../../icons/ArrowIcon'

let ToggleImagePanelButton = ({ panelExpansion, colorPickerOpen, rawImagesOpen, cutoutImagesOpen, imageImporterOpen, dispatch }) => {
	let className = 'image-panel-expansion-btn '
	let nextExpansion

	switch (panelExpansion) {
		case 'FULL':
			className += 'full'
			nextExpansion = 'BUTTONS'
			break
		case 'BUTTONS':
			className += 'buttons'
			nextExpansion = 'COLLAPSED'
			break
		case 'COLLAPSED':
			className += 'collapsed'
			nextExpansion = 'BUTTONS'
			break
	}

	return (
		<button
			className={className}
			onClick={() => {
				dispatch(setImagePanelExpansion(nextExpansion))
				if (nextExpansion === 'BUTTONS') {
					if (colorPickerOpen) {
						dispatch(toggleColorPickerOpen())
					} else if (rawImagesOpen) {
						dispatch(toggleImageListExpanded(1))
					} else if (cutoutImagesOpen) {
						dispatch(toggleImageListExpanded(2))
					} else if (imageImporterOpen) {
						dispatch(toggleImageImporterOpen())
					}
				}
			}}
		>
			<ArrowIcon />
		</button>
	)
}

const mapStateToProps = (state) => {
	return {
		panelExpansion: state.imagePanel.expansion,
		colorPickerOpen: state.imagePanel.colorPicker.open,
		rawImagesOpen: state.imagePanel.imageLists[0].expanded,
		cutoutImagesOpen: state.imagePanel.imageLists[1].expanded,
		imageImporterOpen: state.imagePanel.importPanel.open
	}
}

ToggleImagePanelButton = connect(mapStateToProps)(ToggleImagePanelButton)

export default ToggleImagePanelButton
