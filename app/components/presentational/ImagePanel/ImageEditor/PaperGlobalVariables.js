export let EditorProject = undefined
export let CropPath = undefined
export let ImportedImage = undefined

export const DefaultStyle = {
	strokeColor: 'rgb(0,0,0)',
	strokeWidth: 2,
	dashArray: [10, 2]
}

const checkContents = () => {
	console.log(EditorProject.activeLayer.children)
}

const updateProject = () => {
	EditorProject.view.update()
}

export const instantiateProject = () => {
	EditorProject = new paper.Project('editor-canvas')
	EditorProject.currentStyle = DefaultStyle
}

export const clearProject = () => {
	EditorProject.clear()
	CropPath = undefined
	ImportedImage = undefined
}

export const importImage = (url) => {
	clearProject()
	ImportedImage = new paper.Raster({
		source: url,
		position: EditorProject.view.center
	})
	updateProject()
	// checkContents()
}


// Editor utility button functions

const makeCrop = () => {
	if (CropPath && CropPath.clipMask) { return }
	let paths = EditorProject.activeLayer.getItems({
		class: paper.Path,
		visible: true
	})
	if (paths.length === 0) { return }
	CropPath = new paper.CompoundPath({
		children: paths,
		clipMask: true
	})
	updateProject()
}

const unmakeCrop = () => {
	if (!CropPath) { return }
	CropPath.clipMask = false
	updateProject()
}

const clearPaths = () => {
	let items = EditorProject.activeLayer.getItems({})
	items.forEach(item => {
		if (item.className !== 'Raster') {
			item.remove()
		}
	})
	CropPath = undefined
	updateProject()
	// checkContents()
}

export const EditorUtilities = {
	MAKE_CROP: makeCrop,
	UNMAKE_CROP: unmakeCrop,
	CLEAR_PATHS: clearPaths
}

const nodeToString = (node) => {
	let temp = document.createElement('div')
	temp.appendChild(node)
	return temp.innerHTML
}

export const exportCrop = () => {
	if (!CropPath) { return }
	let bounds = CropPath.bounds
	let viewBoxString = bounds.topLeft.x + ' ' + 
		bounds.topLeft.y + ' ' + 
		bounds.width + ' ' + 
		bounds.height
	let layer = EditorProject.activeLayer
	let SVG = layer.exportSVG({ embedImages: false })
	
	SVG.setAttribute('viewBox', viewBoxString)
	SVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
	SVG.setAttribute('width', bounds.width)
	SVG.setAttribute('height', bounds.height)

	return nodeToString(SVG)
}
