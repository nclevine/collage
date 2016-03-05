import React from 'react'
import { connect } from 'react-redux'

let ArrangeSelectedButton = ({ elements, direction }) => {
	return (
		<button
			className='arrange-selected-button'
			onClick={() => {
				elements.forEach((el) => {
					let $el = $('#collage-element-' + el)
					let zIndex = parseInt($el.css('z-index'))
					if (direction === 'BACK') {
						$el.css('z-index', zIndex - 1)
					} else {
						$el.css('z-index', zIndex + 1)
					}
				})
			}}
			disabled={!elements.length}
		>
			{'Send ' + direction}
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
