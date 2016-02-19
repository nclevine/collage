'use strict'

import React, { Component, PropTypes } from 'react'
import ImageImportForm from './image-import-form'
import ImageList from './image-list'

export default class ImagePanel extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<div className='image-panel'>
				<ImageImportForm />
				<ImageList images={this.props.imageData} />
			</div>
		)
	}
}
