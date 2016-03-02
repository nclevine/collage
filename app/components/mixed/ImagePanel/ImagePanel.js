import React from 'react'
import { connect } from 'react-redux'
import ImageImporterContainer from '../../container/ImageImporterContainer'
import CombinedImageListContainer from '../../container/CombinedImageListContainer'
import ImageEditorContainer from '../../container/ImageEditorContainer'
import ToggleImporterButton from './ToggleImporterButton'

let ImagePanel = ({ open }) => {
	return (
		<div
			className='image-panel'
			style={{
				display: open ? 'block' : 'none'
			}}
		>
			<ImageImporterContainer />
			<ToggleImporterButton />
			<ImageEditorContainer />
			<CombinedImageListContainer />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		open: state.imagePanel.open
	}
}

ImagePanel = connect(mapStateToProps)(ImagePanel)

export default ImagePanel
