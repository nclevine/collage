import React, { PropTypes } from 'react'
import ImageImportPanel from './ImageImportPanel'
import OrganizedImageList from '../../container/OrganizedImageList'

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
