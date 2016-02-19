'use strict'

import React, { Component, PropTypes } from 'react'

export default class ImageImportForm extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<div className='image-import-form'>
				<form>
					<input type='url' placeholder='image url' />
				</form>
			</div>
		)
	}
}