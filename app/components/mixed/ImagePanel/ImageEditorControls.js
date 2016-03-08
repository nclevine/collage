import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ImageEditorToolButton from '../../presentational/ImagePanel/ImageEditor/ImageEditorToolButton'
import ImageEditorUtilityButton from '../../presentational/ImagePanel/ImageEditor/ImageEditorUtilityButton'
import ExportCropButton from './ExportCropButton'
import ExitEditorButton from './ExitEditorButton'
import EditorTools from '../../presentational/ImagePanel/ImageEditor/PaperEditorTools'
import { EditorUtilities } from '../../presentational/ImagePanel/ImageEditor/PaperGlobalVariables'
import { setEditorTool, toggleCropped } from '../../../actions'

let ImageEditorControls = ({ imageWidth, imageHeight, activeTool, cropped, onToolButtonClick, onCropButtonClick }) => {
	return (
		<div
			className='image-editor-toolbox'
			style={{
				width: imageWidth,
				height: imageHeight
			}}
		>
			<div className='tool-buttons'>
				{Object.keys(EditorTools).map((t, index) => {
					let isActive = activeTool === t
					return (
						<ImageEditorToolButton
							key={index}
							tool={t}
							isActive={isActive}
							onClick={() => {
								onToolButtonClick(t)
							}}
						/>
					)
				})}
				{Object.keys(EditorUtilities).map((u, index) => {
					return <ImageEditorUtilityButton key={index} utility={u} cropped={cropped} onCropClick={onCropButtonClick} />
				})}
			</div>
			<div className='finish-buttons'>
				<ExportCropButton cropped={cropped} />
				<ExitEditorButton />
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		activeTool: state.imagePanel.editor.activeTool,
		cropped: state.imagePanel.editor.cropped
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onToolButtonClick: (tool) => {
			dispatch(setEditorTool(tool))
		},
		onCropButtonClick: () => {
			dispatch(toggleCropped())
		}
	}
}

ImageEditorControls = connect(
	mapStateToProps,
	mapDispatchToProps
)(ImageEditorControls)

export default ImageEditorControls
