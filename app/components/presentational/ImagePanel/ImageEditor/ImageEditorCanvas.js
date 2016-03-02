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

ImageEditorCanvas.propTypes = {
	imageWidth: PropTypes.number.isRequired,
	imageHeight: PropTypes.number.isRequired
}

export default ImageEditorCanvas
