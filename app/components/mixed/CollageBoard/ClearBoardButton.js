import React from 'react'
import { connect } from 'react-redux'
import { clearAllElements, deselectAllElements } from '../../../actions'
import DeleteIcon from '../../icons/DeleteIcon'

let ClearBoardButton = ({ dispatch }) => {
	return (
		<button
			className='clear-board-btn'
			onClick={() => {
				dispatch(deselectAllElements())
				dispatch(clearAllElements())
			}}
		>
			<DeleteIcon />
			<p>Clear Board</p>
		</button>
	)
}

ClearBoardButton = connect()(ClearBoardButton)

export default ClearBoardButton
