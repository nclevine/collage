import React, { PropTypes } from 'react'
import CollageBoardMenu from './CollageBoardMenu'
import CollageElement from './CollageElement'

const CollageBoard = ({ active, menuOpen, background, elements, selectedElements, onBoardClick, onElementClick }) => {
	let container
	let backgroundString = background ?
		'url("' + background + '")' :
		''
	return (
		<div 
			className='collage-board'
			ref={(node) => {
				container = node
			}}
			onClick={(e) => {
				if (e.target !== container) return
				onBoardClick()
			}}
			style={{
				background: backgroundString
			}}
		>
			<CollageBoardMenu open={menuOpen} />
			{elements.map(element => {
				let isSelected = selectedElements.includes(element.id)
				return (
					<CollageElement
						key={element.id}
						id={element.id}
						image={element.image}
						dimensions={element.dimensions}
						position={element.position}
						onClick={onElementClick}
						isSelected={isSelected}
					/>
				)
			})}
		</div>
	)
}

CollageBoard.propTypes = {
	active: PropTypes.bool.isRequired,
	menuOpen: PropTypes.bool.isRequired,
	elements: PropTypes.array.isRequired,
	selectedElements: PropTypes.array.isRequired
}

export default CollageBoard
