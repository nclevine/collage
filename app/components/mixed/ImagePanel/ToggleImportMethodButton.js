import React from 'react'
import { connect } from 'react-redux'
import { setImageImportMethod } from '../../../actions'

let ToggleImportMethodButton = ({ currentMethod, method, dispatch }) => {
	let text = method === 'BY_SEARCH' ?
		'By Search' :
		'By URL'

	return (
		<button
			className='toggle-import-method-btn'
			onClick={() => {
				dispatch(setImageImportMethod(method))
			}}
			disabled={currentMethod === method}
		>
			{text}
		</button>
	)
}

ToggleImportMethodButton = connect()(ToggleImportMethodButton)

export default ToggleImportMethodButton
