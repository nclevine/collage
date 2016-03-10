import React, { PropTypes } from 'react'
import ImagePanelSectionButton from '../../mixed/ImagePanel/ImagePanelSectionButton'

const ImagePanelSectionControls = ({ expansion }) => {
	let className = 'image-panel-section-controls '

	switch (expansion) {
		case 'FULL':
			className += 'full'
			break
		case 'BUTTONS':
			className += 'buttons'
			break
		case 'COLLAPSED':
			className += 'collapsed'
			break
	}

	return (
		<div className={className}>
			<ImagePanelSectionButton panel='COLOR_PICKER' />
			<ImagePanelSectionButton panel='RAW_IMAGES' />
			<ImagePanelSectionButton panel='CUTOUT_IMAGES' />
			<ImagePanelSectionButton panel='IMAGE_IMPORTER' />
		</div>
	)
}

export default ImagePanelSectionControls
