import React, { PropTypes } from 'react'
import ClearBoardButton from '../../mixed/CollageBoard/ClearBoardButton'
import DeleteSelectedElementsButton from '../../mixed/CollageBoard/DeleteSelectedElementsButton'
import ArrangeSelectedButton from '../../mixed/CollageBoard/ArrangeSelectedButton'
import ClearBackgroundButton from '../../mixed/CollageBoard/ClearBackgroundButton'

const CollageBoardMenu = ({ open }) => {
	return (
		<div
			className='collage-board-menu'
			style={{
				display: open ? 'block' : 'none'
			}}
		>
			<ClearBoardButton />
			<DeleteSelectedElementsButton />
			<ArrangeSelectedButton direction='BACK' />
			<ArrangeSelectedButton direction='FORWARD' />
			<ClearBackgroundButton />
		</div>
	)
}

CollageBoardMenu.propTypes = {
	open: PropTypes.bool.isRequired
}

export default CollageBoardMenu
