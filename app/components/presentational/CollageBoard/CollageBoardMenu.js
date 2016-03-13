import React, { PropTypes } from 'react'
import ClearBoardButton from '../../mixed/CollageBoard/ClearBoardButton'
import DeleteSelectedElementsButton from './DeleteSelectedElementsButton'
import ArrangeSelectedButton from './ArrangeSelectedButton'
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
				<ArrangeSelectedButton selectedElements={selectedElements} direction='BACK' />
				<ArrangeSelectedButton selectedElements={selectedElements} direction='FORWARD' />
				<DeleteSelectedElementsButton selectedElements={selectedElements} />
			</div>
		</div>
	)
}

CollageBoardMenu.propTypes = {
	open: PropTypes.bool.isRequired
}

export default CollageBoardMenu
