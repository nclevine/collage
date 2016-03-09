import React, { PropTypes } from 'react'

const RawImage = ({ url, imageHeight }) => {
	let style = imageHeight < 135 ?
		{position: 'absolute', top: 'calc(50% - ' + (imageHeight / 2) + 'px)'} :
		{}

	return (
		<img
			className='raw-image'
			style={style}
			src={url}
		/>
	)
}

RawImage.propTypes = {
	url: PropTypes.string.isRequired
}

export default RawImage
