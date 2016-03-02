import React, { PropTypes } from 'react'
import CollageBoardMenuButton from './CollageBoardMenuButton'

const CollageBoardMenu = ({ open }) => {
	return (
		<div
			className='collage-board-menu'
			style={{
				display: open ? 'block' : 'none'
			}}
		>
			Collage Board Menu
		</div>
	)
}

CollageBoardMenu.propTypes = {
	open: PropTypes.bool.isRequired
}

export default CollageBoardMenu
