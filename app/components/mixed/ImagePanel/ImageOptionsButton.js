import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addCollageElement, removeImage, importImageToEditor, toggleImageEditorOpen, setCollageBackground } from '../../../actions'

let ImageOptionsButton = ({ method, listId, image, children, dispatch }) => {
	return (
		<button
			className='image-options-btn'
			onClick={() => {
				if (method === 'ADD_TO_COLLAGE') {
					dispatch(addCollageElement(image))
				} else if (method === 'DELETE') {
					dispatch(removeImage(listId, image.id))
				} else if (method === 'EDIT') {
					dispatch(importImageToEditor(image))
					dispatch(toggleImageEditorOpen())
				} else if (method === 'BACKGROUND') {
					dispatch(setCollageBackground('url("' + image.url + '")'))
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
