import React, { PropTypes } from 'react'
import ImageImportForm from './ImageImportForm'
import ImageSearchResults from './ImageSearchResults'

const ImageImporter = ({ open, importMethod, searchSource, searchResults, onSearchSubmit }) => {
	return (
		<div
			className='image-import-panel'
			style={{
				display: this.props.open ? 'block' : 'none'
			}}
		>
			<ImageImportForm importMethod={importMethod} searchSource={searchSource} onSubmit={onSearchSubmit} />
			<ImageSearchResults />
		</div>
	)
}

export default ImageImporter
