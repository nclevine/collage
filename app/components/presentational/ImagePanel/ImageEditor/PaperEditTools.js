const EditTools = {
	LASSO: new paper.Tool(),
	POLYGON_LASSO: new paper.Tool(),
	MARQUEE: new paper.Tool(),
	ELLIPSE: new paper.Tool()
}

let lassoPath

// LASSO
EditTools.lasso.onMouseDown = lassoInit;
EditTools.lasso.onMouseDrag = lassoDrag;
EditTools.lasso.onMouseUp = lassoFinish;

const lassoInit = (e) => {
	lassoPath = new paper.Path();
	lassoPath.add(e.point);
}
const lassoDrag = (e) => {
	lassoPath.add(e.point);
}
const lassoFinish = (e) => {
	lassoPath.closed = true;
}

// POLYGON_LASSO
EditTools.polygonLasso.onMouseUp = polygonLassoAddPoint;
EditTools.polygonLasso.onMouseMove = polygonLassoFindPoint;
EditTools.polygonLasso.onKeyDown = polygonLassoFinish;

let polygonProgress = false;

const polygonLassoAddPoint = (e) => {
	if (!polygonProgress) {
		lassoPath = new paper.Path();
		polygonProgress = true;
		lassoPath.add(e.point);
	}
	lassoPath.add(e.point);
}
const polygonLassoFindPoint = (e) => {
	if (polygonProgress) {
		lassoPath.lastSegment.point = e.point;
	}
}
const polygonLassoFinish = (e) => {
	if (polygonProgress && e.key === 'q') {
		polygonProgress = false;
	}
}

export default EditTools
