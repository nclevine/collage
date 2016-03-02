import React, { Component, PropTypes } from 'react'
import RawImage from './RawImage'
import ImageImportButton from '../../mixed/ImageImportButton'

class ImageSearchResult extends Component {
	componentDidMount () {
		let dimensionsInterval
		let computedStyle
		dimensionsInterval = setInterval(() => {
			computedStyle = getComputedStyle(this.imageEl)
			this.imageWidth = parseInt(computedStyle.width)
			this.imageHeight = parseInt(computedStyle.height)
			if (this.imageWidth && this.imageHeight) {
				this.forceUpdate()
				clearInterval(dimensionsInterval)
			}
		}, 200)
	}

	render () {
		return (
			<div className='image-search-result'>
				<img
					src={this.props.url}
					ref={node => {
						this.imageEl = node
					}}
				/>
				<ImageImportButton
					url={this.props.url}
					width={this.imageWidth}
					height={this.imageHeight}
				/>
			</div>
		)
	}
}

ImageSearchResult.propTypes = {
	url: PropTypes.string.isRequired
}

export default ImageSearchResult
