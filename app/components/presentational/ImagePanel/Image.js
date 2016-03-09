import React, { PropTypes } from 'react'
import RawImage from './RawImage'
import CutoutImage from './CutoutImage'
import ImageOptions from './ImageOptions'

const Image = ({ listId, image }) => {
	let imageComponent = image.url ?
		<RawImage url={image.url} imageHeight={image.height} /> :
		<CutoutImage SVGString={image.SVGString} imageHeight={image.height} />

	return (
		<div className='image'>
			{imageComponent}
			<div className='image-overlay'></div>
			<ImageOptions listId={listId} image={image} />
		</div>
	)
}

Image.propTypes = {
	listId: PropTypes.number.isRequired,
	image: PropTypes.object.isRequired
}

export default Image
