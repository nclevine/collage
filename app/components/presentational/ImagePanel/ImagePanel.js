import React, { PropTypes } from 'react'
import ImageImportPanel from './ImageImportPanel'
import OrganizedImageList from '../../container/OrganizedImageList'
import ImageEditor from './ImageEditor/ImageEditor'

const ImagePanel = () => {
	return (
		<div>	
			<ImageImportPanel />
			<OrganizedImageList />
			<ImageEditor />
		</div>
	)
}

export default ImagePanel
