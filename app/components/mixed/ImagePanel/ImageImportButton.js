import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addRawImage, toggleImageImporterOpen, toggleImageListExpanded } from '../../../actions'
import AddElementIcon from '../../icons/AddElementIcon'

let ImageImportButton = ({ url, width, height, disabled, dispatch }) => {
	return (
		<button
			disabled={disabled}
			className='image-import-btn'
			onClick={() => {
				dispatch(addRawImage(1, url, width, height))
				dispatch(toggleImageImporterOpen())
				dispatch(toggleImageListExpanded(1))
			}}
		>
			<AddElementIcon />
			<p>Add to List</p>
		</button>
	)
}

ImageImportButton.propTypes = {
	url: PropTypes.string.isRequired
}

ImageImportButton = connect()(ImageImportButton)

export default ImageImportButton
