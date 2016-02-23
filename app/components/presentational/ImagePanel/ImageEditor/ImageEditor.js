import React, { PropTypes } from 'react'
import ImageEditorCanvas from './ImageEditorCanvas'
import ImageEditorToolBox from './ImageEditorToolBox'

const ImageEditor = ({ open, tool, image }) => {
	return (
		<div
			className='image-editor'
			style{{
				display: open ? block : none
			}}
		>
			<ImageEditorCanvas tool={tool} image={image} />
			<ImageEditorToolBox tool={tool} />
		</div>
	)
}

ImageEditor.propTypes = {
	open: PropTypes.string.isRequired,
	tool: PropTypes.string.isRequired,
	image: Proptypes.object.isRequired
}

export default ImageEditor
