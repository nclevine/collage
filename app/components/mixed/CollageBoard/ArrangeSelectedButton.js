import React from 'react'
import { connect } from 'react-redux'
import SendBackwardIcon from '../../icons/SendBackwardIcon'
import SendForwardIcon from '../../icons/SendForwardIcon'

let ArrangeSelectedButton = ({ elements, direction }) => {
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
				elements.forEach((el) => {
					let $el = $('#collage-element-' + el)
					let zIndex = parseInt($el.css('z-index'))
					if (direction === 'BACK') {
						if (zIndex === 0) { return }
						$el.css('z-index', zIndex - 1)
					} else {
						$el.css('z-index', zIndex + 1)
					}
				})
			}}
			disabled={!elements.length}
		>
			{icon}
			<p>{text}</p>
		</button>
	)
}

const mapStateToProps = (state) => {
	return {
		elements: state.collageBoard.selectedElements
	}
}

ArrangeSelectedButton = connect(mapStateToProps)(ArrangeSelectedButton)

export default ArrangeSelectedButton
