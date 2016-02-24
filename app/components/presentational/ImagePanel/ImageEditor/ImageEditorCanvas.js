import React, { PropTypes } from 'react'

const ImageEditorCanvas = ({ imageWidth, imageHeight }) => {
	return (
		<canvas
			id='editor-canvas'
			className='image-editor-canvas'
			width={imageWidth}
			height={imageHeight}
			style={{
				width: imageWidth,
				height: imageHeight
			}}
		></canvas>
	)
}

export default ImageEditorCanvas
