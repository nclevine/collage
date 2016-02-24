import React, { Component, PropTypes } from 'react'
import ImageEditorCanvas from './ImageEditorCanvas'
import ImageEditorControls from './ImageEditorControls'
import { EditorProject, CropPath, ImportedImage, DefaultStyle, instantiateProject, clearProject, importImage } from './PaperGlobalVariables'
import EditorTools from './PaperEditorTools'
const { LASSO } = EditorTools

class ImageEditor extends Component {
	componentDidMount () {
		instantiateProject()

		if (this.props.url) {
			importImage(this.props.url)
			LASSO.activate()
		}
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.url !== this.props.url) {
			importImage(nextProps.url)
			LASSO.activate()
		}
	}

	shouldComponentUpdate (nextProps, nextState) {
		return nextProps.open !== this.props.open
	}

	render () {
		return (
			<div
				className='image-editor'
				style={{
					display: this.props.open ? 'block' : 'none'
				}}
			>
				<ImageEditorCanvas />
				<ImageEditorControls />
			</div>
		)
	}
}

export default ImageEditor
