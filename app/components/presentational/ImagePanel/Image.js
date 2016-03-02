import React, { PropTypes } from 'react'
import RawImage from './RawImage'
import CutoutImage from './CutoutImage'
import ImageOptions from './ImageOptions'

const Image = ({ listId, image }) => {
	let imageComponent = image.url ?
		<RawImage url={image.url} /> :
		<CutoutImage SVGString={image.SVGString} />

	return (
		<div className='image'>
			{imageComponent}
			<ImageOptions listId={listId} image={image} />
		</div>
	)
}

Image.propTypes = {
	listId: PropTypes.number.isRequired,
	image: PropTypes.object.isRequired
}

export default Image
