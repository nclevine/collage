import React, { PropTypes } from 'react'

const ImageSearchResults = ({ imageList }) => {
	return (
		<div
			className='image-search-results'
			style={{
				display: imageList.length > 0 ? 'block' : 'none'
			}}
		>
			Search Results
		</div>
	)
}

export default ImageSearchResults
