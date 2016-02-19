'use strict'

import React, { Component, PropTypes } from 'react'
import ImageUI from './image-ui'
import RawImage from './raw-image'
import CutoutImage from './cutout-image'

export default class ImageItem extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		const imageComponent = this.props.type === 'cutout' ? 
			<CutoutImage SVGString={this.props.SVGString} /> : 
			<RawImage url={this.props.url} />
		return (
			<div className='image-item'>
				{imageComponent}
				<ImageUI type={this.props.type} />
			</div>
		)
	}
}