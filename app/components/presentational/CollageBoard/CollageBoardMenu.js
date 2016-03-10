import React, { PropTypes } from 'react'
import ClearBoardButton from '../../mixed/CollageBoard/ClearBoardButton'
import DeleteSelectedElementsButton from '../../mixed/CollageBoard/DeleteSelectedElementsButton'
import ArrangeSelectedButton from '../../mixed/CollageBoard/ArrangeSelectedButton'
import ClearBackgroundButton from '../../mixed/CollageBoard/ClearBackgroundButton'

const CollageBoardMenu = ({ open, selectedElements }) => {
	let className = open ?
		'collage-board-menu open' :
		'collage-board-menu'

	let selectedClass = selectedElements.length ?
		'selected-items-menu selected' :
		'selected-items-menu'

	return (
		<div className={className}>
			<div className='main-menu'>
				<ClearBoardButton />
				<ClearBackgroundButton />
			</div>
			<div className={selectedClass}>
				<ArrangeSelectedButton direction='BACK' />
				<ArrangeSelectedButton direction='FORWARD' />
				<DeleteSelectedElementsButton />
			</div>
		</div>
	)
}

CollageBoardMenu.propTypes = {
	open: PropTypes.bool.isRequired
}

export default CollageBoardMenu
