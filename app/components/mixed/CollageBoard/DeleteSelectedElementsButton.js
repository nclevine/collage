import React from 'react'
import { connect } from 'react-redux'
import { removeCollageElement, deselectAllElements } from '../../../actions'

let DeleteSelectedElementsButton = ({ selectedElements, dispatch }) => {
	let numSelected = selectedElements.length

	return (
		<button
			className='delete-elements-btn'
			onClick={() => {
				selectedElements.forEach((el) => {
					dispatch(removeCollageElement(el))
				})
				dispatch(deselectAllElements())
			}}
			disabled={!numSelected}
		>
			Delete Selected
		</button>
	)
}

const mapStateToProps = (state) => {
	return {
		selectedElements: state.collageBoard.selectedElements
	}
}

DeleteSelectedElementsButton = connect(mapStateToProps)(DeleteSelectedElementsButton)

export default DeleteSelectedElementsButton
