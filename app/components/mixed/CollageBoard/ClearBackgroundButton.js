import React from 'react'
import { connect } from 'react-redux'
import { setCollageBackground } from '../../../actions'
import ClearBackgroundIcon from '../../icons/ClearBackgroundIcon'

let ClearBackgroundButton = ({ background, dispatch }) => {
	return (
		<button
			className='clear-background-btn'
			onClick={() => {
				dispatch(setCollageBackground('none'))
			}}
			disabled={background === 'none'}
		>
			<ClearBackgroundIcon />
			<p>Clear Background</p>
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
