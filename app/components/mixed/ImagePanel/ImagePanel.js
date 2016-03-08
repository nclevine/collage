import React from 'react'
import { connect } from 'react-redux'
import ImagePanelSectionControls from '../../presentational/ImagePanel/ImagePanelSectionControls'
import ImagePanelSections from '../../presentational/ImagePanel/ImagePanelSections'
import ImageEditorContainer from '../../container/ImageEditorContainer'

let ImagePanel = ({ open, imageLists }) => {
	return (
		<div
			className='image-panel'
			style={{
				display: open ? 'block' : 'none'
			}}
		>
			<div className='image-panel-overlay'></div>
			<ImagePanelSectionControls />
			<ImageEditorContainer />
			<ImagePanelSections imageLists={imageLists} />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		open: state.imagePanel.open,
		imageLists: state.imagePanel.imageLists
	}
}

ImagePanel = connect(mapStateToProps)(ImagePanel)

export default ImagePanel
