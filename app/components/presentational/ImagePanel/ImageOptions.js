import React, { PropTypes } from 'react'
import ImageOptionsButton from '../../mixed/ImageOptionsButton'

let ImageOptions = ({ listId, image }) => {
	let rawButtons = image.url ?
		[
			<ImageOptionsButton method='EDIT' listId={listId} image={image}>Edit</ImageOptionsButton>,
			<ImageOptionsButton method='BACKGROUND' listId={listId} image={image}>Set Background</ImageOptionsButton>
		] :
		null

	return (
		<div className='image-options'>
			<ImageOptionsButton method='ADD_TO_COLLAGE' listId={listId} image={image}>Add to Collage</ImageOptionsButton>
			<ImageOptionsButton method='DELETE' listId={listId} image={image}>Delete from List</ImageOptionsButton>
			{rawButtons}
		</div>
	)
}

ImageOptions.propTypes = {
	image: PropTypes.object.isRequired
}

export default ImageOptions