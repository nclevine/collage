import React, { PropTypes } from 'react'
import { EditorProject } from './PaperGlobalVariables'
import EditorTools from './PaperEditorTools'
import LassoIcon from '../../../icons/LassoIcon'
import PolygonLassoIcon from '../../../icons/PolygonLassoIcon'
import MarqueeIcon from '../../../icons/MarqueeIcon'
import EllipseIcon from '../../../icons/EllipseIcon'

const ImageEditorToolButton = ({ tool, isActive, onClick }) => {
	let toolActivate = (tool) => {
		if (EditorProject) {
			EditorTools[tool].activate()
		}
		onClick(tool)
	}

	let toolIcon
	let toolText

	switch (tool) {
		case 'LASSO':
			toolIcon = <LassoIcon />
			toolText = 'Lasso'
			break
		case 'POLYGON_LASSO':
			toolIcon = <PolygonLassoIcon />
			toolText = 'Polygon Lasso'
			break
		case 'MARQUEE':
			toolIcon = <MarqueeIcon />
			toolText = 'Marquee'
			break
		case 'ELLIPSE':
			toolIcon = <EllipseIcon />
			toolText = 'Ellipse'
			break
	}

	return (
		<button
			className='image-editor-btn'
			onClick={() => {
				toolActivate(tool)
			}}
			disabled={isActive}
		>
			{toolIcon}
			<p>{toolText}</p>
		</button>
	)
}

ImageEditorToolButton.propTypes = {
	tool: PropTypes.string.isRequired
}

export default ImageEditorToolButton
