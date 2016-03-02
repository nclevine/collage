import React from 'react'
import { connect } from 'react-redux'
import { toggleImageImporterOpen } from '../../../actions'

let ToggleImporterButton = ({ importerOpen, dispatch }) => {
	let text = importerOpen ?
		'Hide Importer' :
		'Show Importer'
	
	return (
		<button
			className='toggle-importer-btn'
			onClick={() => {
				dispatch(toggleImageImporterOpen())
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
