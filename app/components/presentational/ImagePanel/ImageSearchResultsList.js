import React, { PropTypes } from 'react'
import ImageSearchResult from './ImageSearchResult'

const ImageSearchResultsList = ({ imageList }) => {
	return (
		<div
			className='image-search-results'
			style={{
				display: imageList.length > 0 ? 'block' : 'none'
			}}
		>
			Search Results
			{imageList.map(image =>
				<ImageSearchResult key={image.id} url={image.url} />
			)}
		</div>
	)
}

export default ImageSearchResultsList
