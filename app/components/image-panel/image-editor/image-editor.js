'use strict'

import React, { Component, PropTypes } from 'react'
import EditorCanvasUI from './editor-canvas-ui'
import EditorCanvas from './editor-canvas'

export default class ImageEditor extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<div className='image-editor'>
				<EditorCanvas
					url={this.props.url}
					width={this.props.width}
					height={this.props.height}
				/>
				<EditorCanvasUI />
			</div>
		)
	}
}