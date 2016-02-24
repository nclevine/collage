import React, { PropTypes } from 'react'
import ImageList from './ImageList'

const CombinedImageList = ({ imageLists, onListClick }) => {
	return (
		<div className='combined-image-list'>
			{imageLists.map(imageList => 
				<ImageList
					 key={imageList.id}
					 {...imageList}
					 onNameClick={() => onListClick(imageList.id)}
				/>
			)}
		</div>
	)
}

export default CombinedImageList
