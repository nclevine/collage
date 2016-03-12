import React from 'react'
import { connect } from 'react-redux'

let HelpWindow = ({ open, dispatch }) => {
	let windowClass = open ?
		'help-window open' :
		'help-window'

	return (
		<div className={windowClass}>
			<div className='help-window-inner'>
				<h1>Make a Collage!</h1>

				<p>Use the controls on the left to picks colors and images.</p>
				<p>Colors and Images can be used to make cutouts or  to set the background of the collage.</p>
				<p>Saved Cutouts are available in the Cutouts list, ready to be added to the collage.</p>
				<p>The Importer lets you search Google for images or add any image by URL.</p>
				<p>Use the arrows to close and hide the controls.</p>

				<h2>Help:</h2>

				<h3>Editor Panel:</h3>
				<ul>
				<li>The tool buttons up top correspond to a Lasso, Polygon Lasso, Marquee, and Ellipse.</li>
				<li>Once you've drawn a path, you can click the crop button to toggle the crop on and off, or you can click the eraser to clear all paths.</li>
				<li>Overlap paths to create interesting intersections!</li>
				<li>Once you have created a crop, click the save button at the bottom to export the crop to the cutouts list.</li>
				</ul>

				<h3>Collage Board Panel:</h3>
				<ul>
				<li>Elements can be selected and deselected with a simple click. You can select multiple elements at once this way.</li>
				<li>The Selected Elements menu will appear, allowing you to delete individual elements, or control stacking.</li>
				<li>If you are having trouble selecting an element to move or resize it, try sending the other elements behind it, making it easier to select.</li>
				</ul>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		open: state.helpWindowOpen
	}
}

HelpWindow = connect(mapStateToProps)(HelpWindow)

export default HelpWindow
