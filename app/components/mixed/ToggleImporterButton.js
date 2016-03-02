import React from 'react'
import { connect } from 'react-redux'
import { toggleImageImportPanelOpen } from '../../actions'

let ToggleImporterButton = ({ importerOpen, dispatch }) => {
	let text = importerOpen ? 'Hide Importer' : 'Show Importer'
	
	return (
		<button
			className='editor-exit-btn'
			onClick={() => {
				dispatch(toggleImageImportPanelOpen())
			}}
		>
			{text}
		</button>
	)
}

const mapStateToProps = (state) => {
	return {
		importerOpen: state.imagePanel.importPanel.open
	}
}

ToggleImporterButton = connect(mapStateToProps)(ToggleImporterButton)

export default ToggleImporterButton
