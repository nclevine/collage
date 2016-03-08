import React, { Component, PropTypes } from 'react'
import ImageEditorCanvas from './ImageEditorCanvas'
import ImageEditorControls from '../../../mixed/ImagePanel/ImageEditorControls'
import { EditorProject, CropPath, ImportedImage, DefaultStyle, instantiateProject, clearProject, importImage, importColor, EditorUtilities } from './PaperGlobalVariables'
import EditorTools from './PaperEditorTools'
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
			EditorTools[this.props.activeTool].activate()
		} else if (this.props.color) {
			importColor(this.props.color)
			EditorTools[this.props.activeTool].activate()
			clearPaths()
		}
	}

	shouldComponentUpdate (nextProps, nextState) {
		return (this.props.activeTool === nextProps.activeTool)
	}

	componentDidUpdate (prevProps) {
		instantiateProject()

		let size = [this.imageWidth, this.imageHeight]

		if (this.props.image && this.props.image !== prevProps.image) {
			importImage(this.props.image.url, size)
			EditorTools[this.props.activeTool].activate()
		} else if (this.props.color && this.props.color !== prevProps.color) {
			importColor(this.props.color)
			EditorTools[this.props.activeTool].activate()
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
						top: 'calc(50% - ' + (this.imageHeight / 2) + 'px)',
						left: 'calc(50% - ' + (this.imageWidth / 2) + 'px)'
					}}
				>
					<ImageEditorControls	
						imageWidth={this.imageWidth}
						imageHeight={this.imageHeight}
					/>
					<ImageEditorCanvas
						imageWidth={this.imageWidth}
						imageHeight={this.imageHeight}
					/>
				</div>
			</div>
		)
	}
}

export default ImageEditor
