import React from 'react'
import { connect } from 'react-redux'
import ImagePanelSections from '../../presentational/ImagePanel/ImagePanelSections'

let ImagePanel = ({ expansion, imageLists }) => {
	let panelClass = 'image-panel '
	let overlayClass = 'image-panel-overlay '

	if (expansion === 'BUTTONS' || expansion === 'COLLAPSED') {
		panelClass += 'collapsed'
		overlayClass += 'collapsed'
	}

	return (
		<div className={panelClass}>
			<div className={overlayClass}></div>
			<ImagePanelSections imageLists={imageLists} expansion={expansion} />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		expansion: state.imagePanel.expansion,
		imageLists: state.imagePanel.imageLists
	}
}

ImagePanel = connect(mapStateToProps)(ImagePanel)

export default ImagePanel
