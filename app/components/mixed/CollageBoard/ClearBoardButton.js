import React from 'react'
import { connect } from 'react-redux'
import { clearAllElements, deselectAllElements } from '../../../actions'

let ClearBoardButton = ({ dispatch }) => {
	return (
		<button
			className='clear-board-btn'
			onClick={() => {
				dispatch(deselectAllElements())
				dispatch(clearAllElements())
			}}
		>
			Clear Board
		</button>
	)
}

ClearBoardButton = connect()(ClearBoardButton)

export default ClearBoardButton
