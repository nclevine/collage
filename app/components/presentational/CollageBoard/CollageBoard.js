import React, { PropTypes } from 'react'
import CollageBoardMenu from './CollageBoardMenu'
import CollageElement from './CollageElement'

const CollageBoard = ({ active, menuOpen, background, elements, selectedElement, onElementClick }) => {
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
				onElementClick(null)
			}}
			style={{
				backgroundImage: backgroundString
			}}
		>
			<CollageBoardMenu open={menuOpen} />
			{elements.map(element => {
				let isSelected = (selectedElement === element.id)
				console.log(isSelected)
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
}

export default CollageBoard
