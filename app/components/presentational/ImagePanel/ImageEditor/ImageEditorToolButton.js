import React, { PropTypes } from 'react'
import { EditorProject } from './PaperGlobalVariables'
import EditorTools from './PaperEditorTools'
import LassoIcon from '../../../icons/LassoIcon'
import PolygonLassoIcon from '../../../icons/PolygonLassoIcon'
import MarqueeIcon from '../../../icons/MarqueeIcon'
import EllipseIcon from '../../../icons/EllipseIcon'

const ImageEditorToolButton = ({ tool }) => {
	let toolActivate = (tool) => {
		if (EditorProject) {
			EditorTools[tool].activate()
		}
	}

	let toolIcon

	switch (tool) {
		case 'LASSO':
			toolIcon = <LassoIcon />
			break
		case 'POLYGON_LASSO':
			toolIcon = <PolygonLassoIcon />
			break
		case 'MARQUEE':
			toolIcon = <MarqueeIcon />
			break
		case 'ELLIPSE':
			toolIcon = <EllipseIcon />
			break
	}

	return (
		<button
			className='image-editor-btn'
			onClick={() => {
				toolActivate(tool)
			}}
		>
			{toolIcon}
		</button>
	)
}

ImageEditorToolButton.propTypes = {
	tool: PropTypes.string.isRequired
}

export default ImageEditorToolButton
