import React, { PropTypes } from 'react'
import RawImage from './RawImage'
import CutoutImage from './CutoutImage'
import ImageOptions from './ImageOptions'

const Image = ({ image }) => {
	let imageComponent = image.url ?
		<RawImage url={image.url} /> :
		<CutoutImage SVGString={image.SVGString} />

	return (
		<div className='image'>
			{imageComponent}
			<ImageOptions image={image} />
		</div>
	)
}

Image.propTypes = {
	image: PropTypes.object.isRequired
}

export default Image
