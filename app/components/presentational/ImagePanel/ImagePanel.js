import React from 'react'
import ImageImportPanel from './ImageImportPanel'
import CombinedImageListContainer from '../../container/CombinedImageListContainer'
import ImageEditorContainer from '../../container/ImageEditorContainer'

const ImagePanel = () => {
	return (
		<div>	
			<ImageImportPanel />
			<ImageEditorContainer />
		</div>
	)
}

export default ImagePanel
