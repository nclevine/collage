import React, { Component, PropTypes } from 'react'
import ImageEditorCanvas from './ImageEditorCanvas'
import ImageEditorControls from './ImageEditorControls'
import { EditorProject, CropPath, ImportedImage, DefaultStyle, instantiateProject, clearProject, importImage, importColor, EditorUtilities } from './PaperGlobalVariables'
import EditorTools from './PaperEditorTools'
const { LASSO } = EditorTools
const clearPaths = EditorUtilities.CLEAR_PATHS

class ImageEditor extends Component {
	componentWillMount () {
		this.imageWidth = 0
		this.imageHeight = 0
	}

	componentDidMount () {
		instantiateProject()

		let size = [this.imageWidth, this.imageHeight]

		if (this.props.image) {
			importImage(this.props.image.url, size)
			LASSO.activate()
		} else if (this.props.color) {
			importColor(this.props.color)
			LASSO.activate()
			clearPaths()
		}
	}

	componentDidUpdate (prevProps) {
		instantiateProject()

		let size = [this.imageWidth, this.imageHeight]

		if (this.props.image && this.props.image !== prevProps.image) {
			importImage(this.props.image.url, size)
			LASSO.activate()
		} else if (this.props.color && this.props.color !== prevProps.color) {
			importColor(this.props.color)
			LASSO.activate()
			clearPaths()
		}
	}

	render () {
		this.imageHeight = this.props.image ?
			this.props.image.height :
			(this.props.color ? 500 : 0 )
		this.imageWidth = this.props.image ? 
			this.props.image.width :
			(this.props.color ? 700 : 0 )
		
		let windowHeight = window.innerHeight
		if (this.imageHeight > windowHeight - 250) {
			this.imageWidth = this.imageWidth * (windowHeight - 250) / this.imageHeight
			this.imageHeight = windowHeight - 250
		}

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
						top: 'calc(45% - ' + (this.imageHeight / 2) + 'px)',
						left: 'calc(100% - ' + (this.imageWidth / 2) + 'px)'
					}}
				>
					<ImageEditorCanvas imageWidth={this.imageWidth} imageHeight={this.imageHeight} />
					<ImageEditorControls />
				</div>
			</div>
		)
	}
}

export default ImageEditor
