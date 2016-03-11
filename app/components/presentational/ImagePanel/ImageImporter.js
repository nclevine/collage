import React, { PropTypes } from 'react'
import ImageImportForm from './ImageImportForm'
import ImageSearchResultsList from './ImageSearchResultsList'
import ToggleImportMethodButton from '../../mixed/ImagePanel/ToggleImportMethodButton'

const ImageImporter = ({ open, importMethod, searchResults, onURLSubmit, onSearchSubmit }) => {
	return (
		<div
			className='image-importer'
			style={{
				display: open ? 'block' : 'none'
			}}
		>
			<h1>Import Images</h1>
			<div className='import-method-toggler'>
				<ToggleImportMethodButton currentMethod={importMethod} method='BY_SEARCH' />
				<ToggleImportMethodButton currentMethod={importMethod} method='BY_URL' />
			</div>
			<ImageImportForm
				importMethod={importMethod}
				onURLSubmit={onURLSubmit}
				onSearchSubmit={onSearchSubmit}
			/>
			<ImageSearchResultsList imageList={searchResults} />
		</div>
	)
}

ImageImporter.propTypes = {
	open: PropTypes.bool.isRequired,
	importMethod: PropTypes.string.isRequired,
	searchResults: PropTypes.array.isRequired,
	onURLSubmit: PropTypes.func.isRequired,
	onSearchSubmit: PropTypes.func.isRequired
}

export default ImageImporter
