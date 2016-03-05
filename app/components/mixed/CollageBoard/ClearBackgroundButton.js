import React from 'react'
import { connect } from 'react-redux'
import { setCollageBackground } from '../../../actions'

let ClearBackgroundButton = ({ background, dispatch }) => {
	return (
		<button
			className='clear-background-btn'
			onClick={() => {
				dispatch(setCollageBackground('none'))
			}}
			disabled={background === 'none'}
		>
			Clear Background
		</button>
	)
}

const mapStateToProps = (state) => {
	return {
		background: state.collageBoard.background
	}
}

ClearBackgroundButton = connect(mapStateToProps)(ClearBackgroundButton)

export default ClearBackgroundButton
