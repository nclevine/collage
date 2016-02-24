const EditorTools = {
	LASSO: new paper.Tool(),
	POLYGON_LASSO: new paper.Tool(),
	MARQUEE: new paper.Tool(),
	ELLIPSE: new paper.Tool()
}

let lassoPath

// LASSO
const lassoInit = (e) => {
	lassoPath = new paper.Path()
	lassoPath.add(e.point)
}
const lassoDrag = (e) => {
	lassoPath.add(e.point)
}
const lassoFinish = (e) => {
	lassoPath.closed = true
	lassoPath.simplify(1.3)
}
EditorTools.LASSO.onMouseDown = lassoInit
EditorTools.LASSO.onMouseDrag = lassoDrag
EditorTools.LASSO.onMouseUp = lassoFinish


// POLYGON_LASSO
let polygonProgress = false
const polygonLassoAddPoint = (e) => {
	if (!polygonProgress) {
		lassoPath = new paper.Path()
		polygonProgress = true
		lassoPath.add(e.point)
	}
	lassoPath.add(e.point)
}
const polygonLassoFindPoint = (e) => {
	if (polygonProgress) {
		lassoPath.lastSegment.point = e.point
	}
}
const polygonLassoFinish = (e) => {
	if (polygonProgress && e.key === 'q') {
		lassoPath.closed = true
		polygonProgress = false
	}
}
EditorTools.POLYGON_LASSO.onMouseUp = polygonLassoAddPoint
EditorTools.POLYGON_LASSO.onMouseMove = polygonLassoFindPoint
EditorTools.POLYGON_LASSO.onKeyDown = polygonLassoFinish


export default EditorTools
