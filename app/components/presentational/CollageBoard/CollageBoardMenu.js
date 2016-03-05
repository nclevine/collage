import React, { PropTypes } from 'react'
import ClearBoardButton from '../../mixed/CollageBoard/ClearBoardButton'
import DeleteSelectedElementsButton from '../../mixed/CollageBoard/DeleteSelectedElementsButton'

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
		</div>
	)
}

CollageBoardMenu.propTypes = {
	open: PropTypes.bool.isRequired
}

export default CollageBoardMenu
