'use strict'

import React, { Component, PropTypes } from 'react'

export default class ImageUI extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<div className='image-ui'>
				implement image tools depending on this.props.type
			</div>
		)
	}
}