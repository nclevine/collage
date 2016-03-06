import React, { PropTypes } from 'react'
import Image from './Image'

const ImageList = ({ id, name, expanded, images, onNameClick }) => {
	return (
		<div className='image-list'>
			<h1 onClick={onNameClick}>{name}</h1>
			<div
				className='image-list-inner'
				style={{
					height: expanded ? 'auto' : 0,
					overflow: 'hidden'
				}}
			>
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
	images: PropTypes.array.isRequired,
	onNameClick: PropTypes.func.isRequired
}

export default ImageList
