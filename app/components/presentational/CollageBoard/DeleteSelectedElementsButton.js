import React from 'react'
import { connect } from 'react-redux'
import { removeCollageElement, deselectAllElements } from '../../../actions'
import DeleteElementIcon from '../../icons/DeleteElementIcon'

const DeleteSelectedElementsButton = ({ selectedElements, dispatch }) => {
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
			<DeleteElementIcon />
			<p>Delete Selected</p>
		</button>
	)
}

export default DeleteSelectedElementsButton
