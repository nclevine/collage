import React, { Component, PropTypes } from 'react'
import RawImage from './RawImage'
import ImageImportButton from '../../mixed/ImagePanel/ImageImportButton'

class ImageSearchResult extends Component {
	componentDidMount () {
		let width, height
		let dimensionsInterval
		let img = new Image()
	    img.onload = function () {
	        width = this.width
	        height = this.height
	    }
	    img.src = this.props.url
		dimensionsInterval = setInterval(() => {
			this.imageWidth = width
			this.imageHeight = height
			if (this.imageWidth > 0 && this.imageHeight > 0) {
				this.forceUpdate()
				clearInterval(dimensionsInterval)
			}
		}, 300)
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
				<div className='image-overlay'>
					<div className='btn-container'>
						<ImageImportButton
							url={this.props.url}
							width={this.imageWidth}
							height={this.imageHeight}
							disabled={!this.imageWidth}
						/>
					</div>
				</div>
			</div>
		)
	}
}

ImageSearchResult.propTypes = {
	url: PropTypes.string.isRequired
}

export default ImageSearchResult
