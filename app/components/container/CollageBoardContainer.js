import { connect } from 'react-redux'
import CollageBoard from '../presentational/CollageBoard/CollageBoard'
import { updateCollageElement, toggleSelectedElement, deselectAllElements } from '../../actions'

const mapStateToProps = (state) => {
	let { active, menuOpen, background, elements, selectedElements } = state.collageBoard
	
	return {
		active: active,
		menuOpen: menuOpen,
		background: background,
		elements: elements,
		selectedElements: selectedElements
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onBoardClick: () => {
			dispatch(deselectAllElements())
		},
		onElementClick: (element) => {
			dispatch(toggleSelectedElement(element))
		}
	}
}

const CollageBoardContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CollageBoard)

export default CollageBoardContainer
