import React, { PropTypes } from 'react'
import Image from './Image'

const ImageList = ({ id, name, expanded, images, onNameClick }) => {
	return (
		<div className='imageList'>
			<h1 onClick={onNameClick}>{name}</h1>
			<div style={{
				height: expanded ? auto : 0,
				overflow: hidden
			}}>
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
