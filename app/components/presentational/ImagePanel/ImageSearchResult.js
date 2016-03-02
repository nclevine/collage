import React, { Component, PropTypes } from 'react'
import RawImage from './RawImage'
import ImageImportButton from '../../mixed/ImageImportButton'

class ImageSearchResult extends Component {
	// getImageDimensions (url) {
	// 	let img = new Image()
	//     img.onload = () => {
	//         width = this.width
	//         height = this.height
	//     }
	//     img.src = url
	// }

	componentDidMount () {
		let width, height
		let dimensionsInterval
		let img = new Image()
	    img.onload = function () {
	        width = this.width
	        height = this.height
	    }
	    img.src = this.props.url
		// let computedStyle
		// this.getImageDimensions(this.props.url)
		dimensionsInterval = setInterval(() => {
			this.imageWidth = width
			this.imageHeight = height
			console.log(this.imageWidth)
			console.log(this.imageHeight)
			// computedStyle = getComputedStyle(this.imageEl)
			// this.imageWidth = parseInt(computedStyle.width)
			// this.imageHeight = parseInt(computedStyle.height)
			if (this.imageWidth > 0 && this.imageHeight > 0) {
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
					disabled={!this.imageWidth}
				/>
			</div>
		)
	}
}

ImageSearchResult.propTypes = {
	url: PropTypes.string.isRequired
}

export default ImageSearchResult
