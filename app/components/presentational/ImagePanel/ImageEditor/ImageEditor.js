import React, { Component, PropTypes } from 'react'
import ImageEditorCanvas from './ImageEditorCanvas'
import ImageEditorControls from './ImageEditorControls'
import { EditorProject, CropPath, ImportedImage, DefaultStyle, instantiateProject, clearProject, importImage } from './PaperGlobalVariables'
import EditorTools from './PaperEditorTools'
const { LASSO } = EditorTools

class ImageEditor extends Component {
	componentDidMount () {
		instantiateProject()

		if (this.props.image) {
			importImage(this.props.image.url)
			LASSO.activate()
		}
	}

	componentDidUpdate (prevProps) {
		instantiateProject()

		if (this.props.image && this.props.image !== prevProps.image) {
			importImage(this.props.image.url)
			LASSO.activate()
		}
	}

	render () {
		let imageWidth = this.props.image ? this.props.image.width : 0
		let imageHeight = this.props.image ? this.props.image.height : 0
		return (
			<div
				className='image-editor'
				style={{
					display: this.props.open ? 'block' : 'none'
				}}
			>
				<div className='image-editor-background-overlay'></div>
				<div 
					className='image-editor-container'
					style={{
						top: 'calc(45% - ' + (imageHeight / 2) + 'px)',
						left: 'calc(100% - ' + (imageWidth / 2) + 'px)'
					}}
				>
					<ImageEditorCanvas imageWidth={imageWidth} imageHeight={imageHeight} />
					<ImageEditorControls />
				</div>
			</div>
		)
	}
}

export default ImageEditor
