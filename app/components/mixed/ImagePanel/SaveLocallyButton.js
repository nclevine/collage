import React, { Component } from 'react'
import { connect } from 'react-redux'
import SaveIcon from '../../icons/SaveIcon'

class SaveLocallyButton extends Component {
	shouldComponentUpdate () {
		return false
	}

	render () {
		return (
			<button
				className='save-locally-btn'
				onClick={() => {
					console.log(this.props.state)
					window.localStorage.applicationState = JSON.stringify(this.props.state)
				}}
			>
				<SaveIcon />
				<p>Save</p>
			</button>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		state: state
	}
}

SaveLocallyButton = connect(mapStateToProps)(SaveLocallyButton)

export default SaveLocallyButton
