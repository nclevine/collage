import React from 'react'
import ImageImporterContainer from '../../container/ImageImporterContainer'
import CombinedImageListContainer from '../../container/CombinedImageListContainer'
import ImageEditorContainer from '../../container/ImageEditorContainer'
import ToggleImporterButton from '../../mixed/ToggleImporterButton'

const ImagePanel = () => {
	return (
		<div>
			<ImageImporterContainer />
			<ToggleImporterButton />
			<ImageEditorContainer />
			<CombinedImageListContainer />
		</div>
	)
}

export default ImagePanel
