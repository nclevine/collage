'use strict'

import React, { PropTypes } from 'react'

const RawImage = (props) => {
	return (
		<div className='image raw-image'>
			<img src={props.url} />
		</div> 
	)
}

export default RawImage