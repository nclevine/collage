'use strict'

import React, { PropTypes } from 'react'

const CutoutImage (props) => {
	return (
		<div
			className='image cutout-image'
			dangerouslySetInnerHTML={{__html: this.props.SVGString}}
		/>
	)
}

export default CutoutImage