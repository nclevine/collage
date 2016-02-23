import React, { Component, PropTypes } from 'react'

class ImageEditorCanvas extends Component({
	componentDidMount () {
		let editProject = new paper.Project('editor-canvas');
		editProject.currentStyle = {
			strokeColor: 'rgb(0,0,0)',
			strokeWidth: 2
		};
	}

	componentWillReceiveProps (nextProps) {

	}

	shouldComponentUpdate (nextProps, nextState) {
		false
	}

	render () {
		return (
			<canvas id='editor-canvas' className='image-editor-canvas'></canvas>
		)
	}
})

export default ImageEditorCanvas
