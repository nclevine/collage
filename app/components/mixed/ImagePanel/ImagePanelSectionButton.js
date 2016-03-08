import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleColorPickerOpen, toggleImageImporterOpen, toggleImageListExpanded } from '../../../actions'

let ImagePanelSectionButton = ({ panel, colorPickerOpen, rawImagesOpen, cutoutImagesOpen, imageImporterOpen, dispatch }) => {
	let disabled = ((panel === 'COLOR_PICKER' && colorPickerOpen) ||
		(panel === 'RAW_IMAGES' && rawImagesOpen) ||
		(panel === 'CUTOUT_IMAGES' && cutoutImagesOpen) ||
		(panel === 'IMAGE_IMPORTER' && imageImporterOpen))
	return (
		<button
			className='image-panel-section-btn'
			onClick={() => {
				switch (panel) {
					case 'COLOR_PICKER':
						if (imageImporterOpen) {
							dispatch(toggleImageImporterOpen())
						} else if (rawImagesOpen) {
							dispatch(toggleImageListExpanded(1))
						} else if (cutoutImagesOpen) {
							dispatch(toggleImageListExpanded(2))
						}
						dispatch(toggleColorPickerOpen())
						return
					case 'IMAGE_IMPORTER':
						if (colorPickerOpen) {
							dispatch(toggleColorPickerOpen())
						} else if (rawImagesOpen) {
							dispatch(toggleImageListExpanded(1))
						} else if (cutoutImagesOpen) {
							dispatch(toggleImageListExpanded(2))
						}
						dispatch(toggleImageImporterOpen())
						return
					case 'RAW_IMAGES':
						if (imageImporterOpen) {
							dispatch(toggleImageImporterOpen())
						} else if (colorPickerOpen) {
							dispatch(toggleColorPickerOpen())
						} else if (cutoutImagesOpen) {
							dispatch(toggleImageListExpanded(2))
						}
						dispatch(toggleImageListExpanded(1))
						return
					case 'CUTOUT_IMAGES':
						if (imageImporterOpen) {
							dispatch(toggleImageImporterOpen())
						} else if (rawImagesOpen) {
							dispatch(toggleImageListExpanded(1))
						} else if (colorPickerOpen) {
							dispatch(toggleColorPickerOpen())
						}
						dispatch(toggleImageListExpanded(2))
						return
				}
			}}
			disabled={disabled}
		>
			{panel}
		</button>
	)
}

const mapStateToProps = (state) => {
	return {
		colorPickerOpen: state.imagePanel.colorPicker.open,
		rawImagesOpen: state.imagePanel.imageLists[0].expanded,
		cutoutImagesOpen: state.imagePanel.imageLists[1].expanded,
		imageImporterOpen: state.imagePanel.importPanel.open
	}
}

ImagePanelSectionButton = connect(mapStateToProps)(ImagePanelSectionButton)

export default ImagePanelSectionButton
