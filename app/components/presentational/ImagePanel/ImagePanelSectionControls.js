import React, { PropTypes } from 'react'
import ImagePanelSectionButton from '../../mixed/ImagePanel/ImagePanelSectionButton'

const ImagePanelSectionControls = () => {
	return (
		<div className='image-panel-section-controls'>
			<ImagePanelSectionButton panel='COLOR_PICKER' />
			<ImagePanelSectionButton panel='RAW_IMAGES' />
			<ImagePanelSectionButton panel='CUTOUT_IMAGES' />
			<ImagePanelSectionButton panel='IMAGE_IMPORTER' />
		</div>
	)
}

export default ImagePanelSectionControls
