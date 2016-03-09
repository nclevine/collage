import React, { PropTypes } from 'react'
import ImageOptionsButton from '../../mixed/ImagePanel/ImageOptionsButton'

let ImageOptions = ({ listId, image }) => {
	let rawButtons = image.url ?
		[
			<ImageOptionsButton key={1} method='EDIT' listId={listId} image={image} />,
			<ImageOptionsButton key={2} method='BACKGROUND' listId={listId} image={image} />
		] :
		null

	return (
		<div className='image-options'>
			<ImageOptionsButton method='ADD_TO_COLLAGE' listId={listId} image={image} />
			<ImageOptionsButton method='DELETE' listId={listId} image={image} />
			{rawButtons}
		</div>
	)
}

ImageOptions.propTypes = {
	listId: PropTypes.number.isRequired,
	image: PropTypes.object.isRequired
}

export default ImageOptions
