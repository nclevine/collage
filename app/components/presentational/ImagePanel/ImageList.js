import React, { PropTypes } from 'react'
import Image from './Image'

const ImageList = ({ id, name, expanded, images }) => {
	let emptyMessage = images.length > 0 ? '' :
		<h2>No Images Yet!</h2>

	return (
		<div
			className='image-list'
			style={{
				display: expanded ? 'block' : 'none'
			}}
		>
			<h1>{name}</h1>
			<div className='image-list-inner'>
				{emptyMessage}
				{images.map(image =>
					<Image
						key={image.id}
						listId={id}
						image={image}
					/>
				)}
			</div>
		</div>
	)
}

ImageList.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	expanded: PropTypes.bool.isRequired,
	images: PropTypes.array.isRequired
}

export default ImageList
