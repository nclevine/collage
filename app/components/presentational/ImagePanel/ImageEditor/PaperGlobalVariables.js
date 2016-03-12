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

let taintedImageInfo = null

export const importImage = (url, size) => {
	clearProject()
	ImportedImage = new paper.Raster({
		source: url,
		position: EditorProject.view.center,
	})
	ImportedImage.on('load', () => {
		ImportedImage.size = size
		try {
			ImportedImage.source
		} catch (e) {
			console.log('tainted image in canvas, will be replaced by string upon export')
			taintedImageInfo = {
				url: url,
				size:size
			}
		}
	})
	updateProject()
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

let lastClipPathId = 0

if (window.localStorage.redux) {
	let { imagePanel } = JSON.parse(window.localStorage.redux)
	lastClipPathId = imagePanel.imageLists[1].images.length
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

	if (taintedImageInfo) {
		layer.getItems({ class: paper.Raster })[0].remove()
	}
	let SVG = layer.exportSVG({ embedImages: false })
	
	SVG.setAttribute('viewBox', viewBoxString)
	SVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
	SVG.setAttribute('width', bounds.width)
	SVG.setAttribute('height', bounds.height)

	lastClipPathId++
	let nextClipPathId = 'clip-number-' + lastClipPathId
	let SVGString = nodeToString(SVG)
	SVGString = SVGString.replace(/clip-1/g, nextClipPathId)
	if (taintedImageInfo) {
		let imageString = '<image x="0" y="0" width="' + taintedImageInfo.size[0] + 
			'" height="' + taintedImageInfo.size[1] +
			'" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + taintedImageInfo.url +
			'"></image>'

		let endIndex = SVGString.indexOf('</g></svg>')

		SVGString = SVGString.slice(0, endIndex) + imageString + SVGString.slice(endIndex)
	}

	taintedImageInfo = null
	cropped = false

	return {
		SVGString: SVGString,
		width: bounds.width,
		height: bounds.height
	}
}

export const exitEditor = () => {
	cropped = false
}
