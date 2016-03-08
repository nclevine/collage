import React, { PropTypes } from 'react'
import ImageEditorToolButton from './ImageEditorToolButton'
import ImageEditorUtilityButton from './ImageEditorUtilityButton'
import ExportCropButton from '../../../mixed/ImagePanel/ExportCropButton'
import ExitEditorButton from '../../../mixed/ImagePanel/ExitEditorButton'
import EditorTools from './PaperEditorTools'
import { EditorUtilities } from './PaperGlobalVariables'

const ImageEditorControls = ({ imageWidth, imageHeight }) => {
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
					return <ImageEditorToolButton key={index} tool={t} />
				})}
			</div>
			<div className='utility-buttons'>
				{Object.keys(EditorUtilities).map((u, index) => {
					return <ImageEditorUtilityButton key={index} utility={u} />
				})}
			</div>
			<div className='finish-buttons'>
				<ExportCropButton />
				<ExitEditorButton />
			</div>
		</div>
	)
}

export default ImageEditorControls
