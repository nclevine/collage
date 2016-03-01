import React, { PropTypes } from 'react'
import RawImage from './RawImage'
import ImageImportButton from '../../mixed/ImageImportButton'

const ImageSearchResult = ({ url }) => {
	return (
		<div className='image-search-result'>
			<RawImage url={url} />
			<ImageImportButton url={url} />
		</div>
	)
}

export default ImageSearchResult
