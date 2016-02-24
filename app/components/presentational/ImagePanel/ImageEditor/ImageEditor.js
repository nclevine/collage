import React, { Component, PropTypes } from 'react'
import ImageEditorCanvas from './ImageEditorCanvas'
import ImageEditorControls from './ImageEditorControls'
import { EditorProject, CropPath, ImportedImage, DefaultStyle, instantiateProject, clearProject, importImage } from './PaperGlobalVariables'
import EditorTools from './PaperEditorTools'
const { POLYGON_LASSO } = EditorTools

class ImageEditor extends Component {
	componentDidMount () {
		instantiateProject()

		if (this.props.image) {
			importImage(this.props.image.url)
			POLYGON_LASSO.activate()
		}
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.image !== this.props.image) {
			importImage(this.props.image.url)
			POLYGON_LASSO.activate()
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
