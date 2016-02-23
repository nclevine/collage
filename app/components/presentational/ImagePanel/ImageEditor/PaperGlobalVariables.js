export let EditProject = undefined
export let CropPath = undefined
export let ImportedImage = undefined

export const DefaultStyle = {
	strokeColor: 'rgb(0,0,0)',
	strokeWidth: 2,
	dashArray: [10, 2]
}
export const ToolNames = {
	LASSO: 'LASSO',
	POLYGON_LASSO: 'POLYGON_LASSO',
	MARQUEE: 'MARQUEE',
	ELLIPSE: 'ELLIPSE'
}


export const instantiateProject = () => {
	EditProject = new paper.Project('editor-canvas')
	EditProject.currentStyle = DefaultStyle
}

export const clearProject = () => {
	EditProject.clear()
}

export const importImage = (url) => {
	clearProject()
	ImportedImage = new paper.Raster({
		source: url,
		position: EditProject.view.center
	})
}

export const makeCrop = () => {
	let paths = EditProject.getItems({ class: paper.Path })
	CropPath = new paper.CompoundPath({
		children: paths,
		clipMask: true
	})
}

export const unmakeCrop = () => {
	CropPath.remove()
}

const nodeToString = (node) => {
	let temp = document.createElement('div')
	temp.appendChild(node)
	return temp.innerHTML
}

export const exportCrop = () => {
	let bounds = CropPath.bounds
	let viewBoxString = bounds.topLeft.x + ' ' + 
		bounds.topLeft.y + ' ' + 
		bounds.width + ' ' + 
		bounds.height
	let layer = EditProject.activeLayer
	let SVG = layer.exportSVG({ embedImages: false })
	
	SVG.setAttribute('viewBox', viewBoxString)
	SVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
	SVG.setAttribute('width', bounds.width)
	SVG.setAttribute('height', bounds.height)

	return nodeToString(SVG)
}

export const clearPaths = () => {
	if (CropPath) { CropPath.remove() }
	let paths = EditProject.getItems({ class: paper.Path })
	paths.forEach(path => path.remove())
	EditProject.view.update()
}

