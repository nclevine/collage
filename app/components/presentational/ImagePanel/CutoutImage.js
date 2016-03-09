import React, { PropTypes } from 'react'

const CutoutImage = ({ SVGString, imageHeight }) => {
	let style = imageHeight < 135 ?
		{position: 'absolute', top: 'calc(50% - ' + (imageHeight / 2) + 'px)'} :
		{}

	return (
		<div
			className='cutout-image'
			style={style}
			dangerouslySetInnerHTML={{__html: SVGString}}
		/>
	)
}

CutoutImage.propTypes = {
	SVGString: PropTypes.string.isRequired
}

export default CutoutImage
