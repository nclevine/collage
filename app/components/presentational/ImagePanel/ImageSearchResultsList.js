import React, { PropTypes } from 'react'
import ImageSearchResult from './ImageSearchResult'

const ImageSearchResultsList = ({ imageList }) => {
	return (
		<div
			className='image-search-results-list'
			style={{
				display: imageList.length > 0 ? 'block' : 'none'
			}}
		>
			<p>Search Results</p>
			{imageList.map(image =>
				<ImageSearchResult key={image.id} url={image.url} />
			)}
		</div>
	)
}

ImageSearchResultsList.propTypes = {
	imageList: PropTypes.array.isRequired
}

export default ImageSearchResultsList
