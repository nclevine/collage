import { connect } from 'react-redux'
import CollageBoard from '../presentational/CollageBoard/CollageBoard'

const mapStateToProps = (state) => {
	let { active, menuOpen, background, elements, selectedElement } = state.collageBoard
	
	return {
		active: active,
		menuOpen: menuOpen,
		background: background,
		elements: elements,
		selectedElement: selectedElement
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

const CollageBoardContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CollageBoard)

export default CollageBoardContainer
