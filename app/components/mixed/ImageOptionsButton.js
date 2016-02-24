import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addCollageElement, importImageToEditor, toggleImageEditorOpen, setCollageBackground } from '../../actions'

let ImageOptionsButton = ({ method, image, children, dispatch }) => {
	return (
		<button
			className="image-options-btn"
			onClick={() => {
				if (method === 'ADD_TO_COLLAGE') {
					dispatch(addCollageElement(image))
				} else if (method === 'DELETE') {
					dispatch(removeImage(listId, image))
				} else if (method === 'EDIT') {
					console.log(image.url)
					dispatch(toggleImageEditorOpen())
					dispatch(importImageToEditor(image.url))
				} else if (method === 'BACKGROUND') {
					dispatch(setCollageBackground(image.url))
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
