import React, { PropTypes } from 'react'
import ImageImportForm from './ImageImportForm'
import ImageSearchResultsList from './ImageSearchResultsList'

const ImageImporter = ({ open, importMethod, searchSource, searchResults, onSearchSubmit }) => {
	return (
		<div
			className='image-import-panel'
			style={{
				display: open ? 'block' : 'none'
			}}
		>
			<ImageImportForm importMethod={importMethod} searchSource={searchSource} onSubmit={onSearchSubmit} />
			<ImageSearchResultsList imageList={searchResults} />
		</div>
	)
}

ImageImporter.propTypes = {
	open: PropTypes.bool.isRequired,
	importMethod: PropTypes.string.isRequired,
	searchSource: PropTypes.string.isRequired,
	searchResults: PropTypes.array.isRequired,
	onSearchSubmit: PropTypes.func.isRequired
}

export default ImageImporter
