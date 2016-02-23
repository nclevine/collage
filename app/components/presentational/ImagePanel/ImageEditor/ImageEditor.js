import React, { PropTypes } from 'react'
import ImageEditorCanvas from './ImageEditorCanvas'
import ImageEditorToolBox from './ImageEditorToolBox'
import { ToolNames } from './PaperGlobalVariables'

let { LASSO, POLYGON_LASSO, MARQUEE, ELLIPSE } = ToolNames

const ImageEditor = ({ open, tool, image }) => {
	return (
		<div
			className='image-editor'
			style{{
				display: open ? block : none
			}}
		>
			<ImageEditorCanvas open={open} tool={tool} image={image} />
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
