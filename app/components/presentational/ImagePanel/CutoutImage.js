import React, { PropTypes } from 'react'

const CutoutImage = ({ SVGString }) => {
	return (
		<div
			className='cutout-image'
			dangerouslySetInnerHTML={{__html: SVGString}}
		/>
	)
}

CutoutImage.proptypes = {
	SVGString: PropTypes.string.isRequired
}

export default CutoutImage