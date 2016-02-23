import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addCollageElement, importImageToEditor, setCollageBackground } from '../../actions'

let ImageOptionsButton = ({ method, image, dispatch }) => {
	return (
		<button
			className="image-options-btn"
			onClick={() => {
				if (method === 'ADD') {
					dispatch(addCollageElement(image))
				} else if (method === 'EDIT') {
					dispatch(importImageToEditor(image))
				} else if (method === 'BACKGROUND') {
					dispatch(setCollageBackground(image))
				}
			}}
		>
			{children}
		</button>
	)
}

ImageOptionsButton.propTypes = {
	method: PropTypes.string.isRequired,
	image: PropTypes.object.isRequired
}

ImageOptionsButton = connect()(ImageOptionsButton)

export default ImageOptionsButton
