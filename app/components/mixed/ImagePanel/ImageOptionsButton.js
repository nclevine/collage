import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addCollageElement, removeImage, importImageToEditor, toggleImageEditorOpen, setCollageBackground } from '../../../actions'
import AddElementIcon from '../../icons/AddElementIcon'
import DeleteIcon from '../../icons/DeleteIcon'
import MakeCutoutIcon from '../../icons/MakeCutoutIcon'
import BackgroundIcon from '../../icons/BackgroundIcon'

let ImageOptionsButton = ({ method, listId, image, children, dispatch }) => {
	let icon
	let text

	switch (method) {
		case 'ADD_TO_COLLAGE':
			icon = <AddElementIcon />
			text = 'Add to Collage'
			break
		case 'DELETE':
			icon = <DeleteIcon />
			text = 'Delete'
			break
		case 'EDIT':
			icon = <MakeCutoutIcon />
			text = 'Make Cutout'
			break
		case 'BACKGROUND':
			icon = <BackgroundIcon />
			text = 'Set Background'
			break
	}

	return (
		<button
			className='image-options-btn'
			onClick={() => {
				switch (method) {
					case 'ADD_TO_COLLAGE':
						dispatch(addCollageElement(image))
						return
					case 'DELETE':
						dispatch(removeImage(listId, image.id))
						return
					case 'EDIT':
						dispatch(importImageToEditor(image))
						dispatch(toggleImageEditorOpen())
						return
					case 'BACKGROUND':
						dispatch(setCollageBackground('url("' + image.url + '")'))
						return
				}
			}}
		>
			{icon}
			<p>{text}</p>
		</button>
	)
}

ImageOptionsButton.propTypes = {
	method: PropTypes.string.isRequired,
	image: PropTypes.object.isRequired
}

ImageOptionsButton = connect()(ImageOptionsButton)

export default ImageOptionsButton
