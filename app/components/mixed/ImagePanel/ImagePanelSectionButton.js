import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { setImagePanelExpansion, toggleColorPickerOpen, toggleImageImporterOpen, toggleImageListExpanded } from '../../../actions'
import ColorPickerIcon from '../../icons/ColorPickerIcon'
import ImagesIcon from '../../icons/ImagesIcon'
import CutoutsIcon from '../../icons/CutoutsIcon'
import ImportImageIcon from '../../icons/ImportImageIcon'

let ImagePanelSectionButton = ({ panel, panelExpansion, colorPickerOpen, rawImagesOpen, cutoutImagesOpen, imageImporterOpen, dispatch }) => {
	let disabled = ((panel === 'COLOR_PICKER' && colorPickerOpen) ||
		(panel === 'RAW_IMAGES' && rawImagesOpen) ||
		(panel === 'CUTOUT_IMAGES' && cutoutImagesOpen) ||
		(panel === 'IMAGE_IMPORTER' && imageImporterOpen))
	
	let buttonIcon
	let buttonText

	switch (panel) {
		case 'COLOR_PICKER':
			buttonIcon = <ColorPickerIcon />
			buttonText = 'Color Picker'
			break
		case 'RAW_IMAGES':
			buttonIcon = <ImagesIcon />
			buttonText = 'Images'
			break
		case 'CUTOUT_IMAGES':
			buttonIcon = <CutoutsIcon />
			buttonText = 'Cutouts'
			break
		case 'IMAGE_IMPORTER':
			buttonIcon = <ImportImageIcon />
			buttonText = 'Import Image'
			break
	}

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
						break
					case 'IMAGE_IMPORTER':
						if (colorPickerOpen) {
							dispatch(toggleColorPickerOpen())
						} else if (rawImagesOpen) {
							dispatch(toggleImageListExpanded(1))
						} else if (cutoutImagesOpen) {
							dispatch(toggleImageListExpanded(2))
						}
						dispatch(toggleImageImporterOpen())
						break
					case 'RAW_IMAGES':
						if (imageImporterOpen) {
							dispatch(toggleImageImporterOpen())
						} else if (colorPickerOpen) {
							dispatch(toggleColorPickerOpen())
						} else if (cutoutImagesOpen) {
							dispatch(toggleImageListExpanded(2))
						}
						dispatch(toggleImageListExpanded(1))
						break
					case 'CUTOUT_IMAGES':
						if (imageImporterOpen) {
							dispatch(toggleImageImporterOpen())
						} else if (rawImagesOpen) {
							dispatch(toggleImageListExpanded(1))
						} else if (colorPickerOpen) {
							dispatch(toggleColorPickerOpen())
						}
						dispatch(toggleImageListExpanded(2))
						break
				}
				if (panelExpansion !== 'FULL') {
					dispatch(setImagePanelExpansion('FULL'))
				}
			}}
			disabled={disabled}
		>
			{buttonIcon}
			<p>{buttonText}</p>
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

ImagePanelSectionButton = connect(mapStateToProps)(ImagePanelSectionButton)

export default ImagePanelSectionButton
