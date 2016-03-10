import React from 'react'
import { connect } from 'react-redux'
import ImagePanelSectionControls from '../../presentational/ImagePanel/ImagePanelSectionControls'
import ImagePanelSections from '../../presentational/ImagePanel/ImagePanelSections'
import ImageEditorContainer from '../../container/ImageEditorContainer'

let ImagePanel = ({ expansion, imageLists }) => {
	let overlayClass = (expansion === 'BUTTONS' || expansion === 'COLLAPSED') ?
		'image-panel-overlay collapsed' :
		'image-panel-overlay'

	return (
		<div className='image-panel'>
			<div className={overlayClass}></div>
			<ImagePanelSectionControls expansion={expansion} />
			<ImageEditorContainer />
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

ImagePanel = connect(mapStateToProps)(ImagePanel)

export default ImagePanel
