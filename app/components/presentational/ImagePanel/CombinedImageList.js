import React, { PropTypes } from 'react'
import ImageList from './ImageList'
import ColorPickerContainer from '../../container/ColorPickerContainer'

const CombinedImageList = ({ imageLists, onListClick }) => {
	return (
		<div className='combined-image-list'>
			<ColorPickerContainer />
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

CombinedImageList.propTypes = {
	imageLists: PropTypes.array.isRequired,
	onListClick: PropTypes.func.isRequired
}

export default CombinedImageList
