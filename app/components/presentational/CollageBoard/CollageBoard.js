import React, { PropTypes } from 'react'
import CollageBoardMenu from './CollageBoardMenu'
import CollageElement from './CollageElement'

const CollageBoard = ({ active, menuOpen, background, elements, selectedElement }) => {
	return (
		<div className='collage-board'>
			<CollageBoardMenu open={menuOpen} />
			{elements.map(element =>
				<CollageElement
					key={element.id}
					image={element.image}
					dimensions={element.dimensions}
					position={element.position}
				/>
			)}
		</div>
	)
}

CollageBoard.propTypes = {
	active: PropTypes.bool.isRequired,
	menuOpen: PropTypes.bool.isRequired,
	elements: PropTypes.array.isRequired,
}

export default CollageBoard
