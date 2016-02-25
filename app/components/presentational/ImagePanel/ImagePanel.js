import React from 'react'
import ImageImporterContainer from '../../container/ImageImporterContainer'
import CombinedImageListContainer from '../../container/CombinedImageListContainer'
import ImageEditorContainer from '../../container/ImageEditorContainer'

const ImagePanel = () => {
	return (
		<div>
			<ImageImporterContainer />
			<ImageEditorContainer />
			<CombinedImageListContainer />
		</div>
	)
}

export default ImagePanel
