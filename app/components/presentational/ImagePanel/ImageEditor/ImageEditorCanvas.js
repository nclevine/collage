import React, { PropTypes } from 'react'

const ImageEditorCanvas = () => {
	return (
		<canvas
			id='editor-canvas'
			className='image-editor-canvas'
			width={'1000'}
			height={'1000'}
			style={{
				width: '100%',
				height: '100%'
			}}
		></canvas>
	)
}

export default ImageEditorCanvas
