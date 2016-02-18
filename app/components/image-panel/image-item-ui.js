'use strict'

import React, { Component, PropTypes } from 'react'
import RawImage from './raw-image'

export default class RawImageUI extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<div className='image-ui raw-image-ui'>
				<RawImage url={this.props.url} />
			</div>
		)
	}
}