'use strict'

import React, { Component, PropTypes } from 'react'

export default class RawImage extends Component{
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<div className='image raw-image'>
				<img src={this.props.url} />
			</div> 
		)
	}
}