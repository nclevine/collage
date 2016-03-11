import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ImagePanelSectionButton from './ImagePanelSectionButton'
import SaveLocallyButton from './SaveLocallyButton'

let ImagePanelSectionControls = ({ expansion }) => {
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
			<SaveLocallyButton />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		expansion: state.imagePanel.expansion
	}
}

ImagePanelSectionControls = connect(mapStateToProps)(ImagePanelSectionControls)

export default ImagePanelSectionControls
