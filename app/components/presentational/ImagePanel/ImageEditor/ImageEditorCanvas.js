import React, { Component, PropTypes } from 'react'
import { EditProject, CropPath, ImportedImage, DefaultStyle, instantiateProject, clearProject, importImage } from './PaperGlobalVariables'
import EditTools from './PaperEditTools'

class ImageEditorCanvas extends Component({
	componentDidMount () {
		instantiateProject()

		if (this.props.image) {
			importImage(this.props.image.url)
		}
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.image !== this.props.image) {
			importImage(this.props.image.url)
		}
	}

	shouldComponentUpdate (nextProps, nextState) {
		nextProps.image !== this.props.image || nextProps.open !== this.props.open
	}

	render () {
		return (
			<canvas id='editor-canvas' className='image-editor-canvas'></canvas>
		)
	}
})

export default ImageEditorCanvas
