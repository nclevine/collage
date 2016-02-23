import React, { PropTypes } from 'react'

const RawImage = ({ url }) => {
	return (
		<img
			className='raw-image'
			src={url}
		/>
	)
}

RawImage.propTypes = {
	url: Proptypes.string.isRequired
}

export default RawImage
