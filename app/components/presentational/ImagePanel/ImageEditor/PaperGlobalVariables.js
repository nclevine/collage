export let EditorProject = undefined
export let CropPath = undefined
export let ImportedImage = undefined
export let ImportedColor = undefined

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
	ImportedColor = undefined
}

export const importImage = (url, size) => {
	clearProject()
	ImportedImage = new paper.Raster({
		source: url,
		position: EditorProject.view.center,
	})
	ImportedImage.on('load', () => {
		ImportedImage.size = size
	})
	updateProject()
	// checkContents()
}

export const importColor = (color) => {
	clearProject()
	ImportedColor = new paper.Path.Rectangle({
		point: [0,0],
		size: [700, 500],
		strokeWidth: 0,
		fillColor: color
	})
	ImportedColor.rasterize()
	updateProject()
}


// Editor utility button functions

let cropped = false

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
	cropped = true
}

const unmakeCrop = () => {
	if (!CropPath) { return }
	CropPath.clipMask = false
	EditorProject.activeLayer.getItems({class: paper.Path})
		.forEach((path) => {
			path.style = EditorProject.currentStyle
		})
	updateProject()
	cropped = false
}

const toggleCrop = () => {
	if (!cropped) {
		makeCrop()
	} else {
		unmakeCrop()
	}
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
	cropped = false
}

export const EditorUtilities = {
	TOGGLE_CROP: toggleCrop,
	CLEAR_PATHS: clearPaths
}

const nodeToString = (node) => {
	let temp = document.createElement('div')
	temp.appendChild(node)
	return temp.innerHTML
}

export const exportCrop = () => {
	if (!CropPath || !CropPath.clipMask) {
		return undefined
	}
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

	cropped = false

	return {
		SVGString: nodeToString(SVG),
		width: bounds.width,
		height: bounds.height
	}
}

export const exitEditor = () => {
	cropped = false
}
