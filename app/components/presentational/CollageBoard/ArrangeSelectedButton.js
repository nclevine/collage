import React from 'react'
import { connect } from 'react-redux'
import { updateCollageElement } from '../../../actions'
import SendBackwardIcon from '../../icons/SendBackwardIcon'
import SendForwardIcon from '../../icons/SendForwardIcon'

const determineZIndex = (direction, curIndex) => {
	if (direction === 'BACK' && 
		curIndex > -1) {
		return curIndex - 1
	} else if (direction === 'FORWARD' && 
		curIndex < JSON.parse(window.localStorage.redux).collageBoard.elements.length) {
		return curIndex + 1
	} else {
		return curIndex
	}
}

let ArrangeSelectedButton = ({ selectedElements, direction, dispatch }) => {
	let icon
	let text

	if (direction === 'BACK') {
		icon = <SendBackwardIcon />
		text = 'Send Backward'
	} else {
		icon = <SendForwardIcon />
		text = 'Send Forward'
	}

	return (
		<button
			className='arrange-selected-btn'
			onClick={() => {
				selectedElements.forEach(el => {
					let zIndex = determineZIndex(direction, el.position.zIndex)
					dispatch(updateCollageElement(
						el.id,
						el.dimensions,
						{
							top: el.position.top,
							left: el.position.left,
							zIndex: zIndex
						}
					))
				})
			}}
			disabled={!selectedElements.length}
		>
			{icon}
			<p>{text}</p>
		</button>
	)
}

ArrangeSelectedButton = connect()(ArrangeSelectedButton)

export default ArrangeSelectedButton
