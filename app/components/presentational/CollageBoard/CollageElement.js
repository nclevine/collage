import React, { Component, PropTypes } from 'react'
import RawImage from '../ImagePanel/RawImage'
import CutoutImage from '../ImagePanel/CutoutImage'

class CollageElement extends Component {
	componentDidMount () {
		$(this.container)
			.resizable({
				handles: 'nw, ne, sw, se'
			})
			.draggable()
	}

	render () {
		let { top, left } = this.props.position
		let { width, height } = this.props.dimensions
		let outline = this.props.isSelected ?
			'2px dashed #111' :
			'none'
		let element = this.props.image.url ?
			<RawImage url={this.props.image.url} /> :
			<CutoutImage SVGString={this.props.image.SVGString} />
		return (
			<div
				id= {'collage-element-' + this.props.id}
				className='collage-element'
				ref={(node) => {
					this.container = node
				}}
				style={{
					top: top,
					left: left,
					width: width,
					height: height,
					outline: outline,
					zIndex: 1
				}}
				onClick={() => {
					this.props.onClick(this.props.id)
				}}
			>
				{element}
			</div>
		)
	}
}

export default CollageElement
