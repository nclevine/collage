import React, { PropTypes } from 'react'
import ImageList from './ImageList'
import ColorPickerContainer from '../../container/ColorPickerContainer'
import ImageImporterContainer from '../../container/ImageImporterContainer'

const ImagePanelSections = ({ imageLists, expansion }) => {
	let className = expansion === 'FULL' ?
		'image-panel-sections' :
		'image-panel-sections collapsed'

	return (
		<div className={className}>
			<ColorPickerContainer />
			<ImageImporterContainer />
			{imageLists.map(imageList => 
				<ImageList
					 key={imageList.id}
					 {...imageList}
				/>
			)}
		</div>
	)
}

ImagePanelSections.propTypes = {
	imageLists: PropTypes.array.isRequired,
}

export default ImagePanelSections
