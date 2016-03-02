import React, { PropTypes } from 'react'
import ImageEditorToolButton from './ImageEditorToolButton'
import ImageEditorUtilityButton from './ImageEditorUtilityButton'
import ExportCropButton from '../../../mixed/ImagePanel/ExportCropButton'
import ExitEditorButton from '../../../mixed/ImagePanel/ExitEditorButton'
import EditorTools from './PaperEditorTools'
import { EditorUtilities } from './PaperGlobalVariables'

const ImageEditorControls = () => {
	return (
		<div className='image-editor-toolbox'>
			{Object.keys(EditorTools).map((t, index) => {
				return <ImageEditorToolButton key={index} tool={t} />
			})}
			{Object.keys(EditorUtilities).map((u, index) => {
				return <ImageEditorUtilityButton key={index} utility={u} />
			})}
			<ExportCropButton />
			<ExitEditorButton />
		</div>
	)
}

export default ImageEditorControls
