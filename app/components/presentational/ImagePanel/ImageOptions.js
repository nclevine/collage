import React, { PropTypes } from 'react'
import ImageOptionsButton from '../../mixed/ImageOptionsButton'

let ImageOptions = ({ image }) => {
	let rawButtons = image.url ?
		[
			<ImageOptionsButton method='EDIT' image={image}>Edit</ImageOptionsButton>,
			<ImageOptionsButton method='BACKGROUND' image={image}>Set Background</ImageOptionsButton>
		] :
		null

	return (
		<div className='image-options'>
			<ImageOptionsButton method='ADD' image={image}>Add</ImageOptionsButton>
			{rawButtons}
		</div>
	)
}

ImageOptions.propTypes = {
	image: PropTypes.object.isRequired
}

export default ImageOptions
