'use strict'

import React, { Component, PropTypes } from 'react'

export default class EditorCanvas extends Component {
	constructor (props) {
		super(props)
	}

	componentDidMount () {
		const editor = new paper.Project(this.canvas)
		const image = new paper.Raster({
			source: {this.props.url},
			position: editor.view.center
		})
	}

	render () {
		return (
			<canvas
				className='editor-canvas'
				ref={(c) => this.canvas = c}
				width={this.props.width}
				height={this.props.height}
			/>
		)
	}
}