'use strict'

import React, { Component, PropTypes } from 'react'
import ImageItem from './image-item'

export default class ImageList extends Component {
	constructor (props) {

	}

	render () {
		var images = this.props.images.map(imageData => {
			<ImageItem {...imageData} />
		})
		return (
			<div className='image-list'>
				{images}
			</div>
		)
	}
}