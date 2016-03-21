let numRawImages = 0
let numCutouts = 0
let numCollageElements = 0
let maxZIndex = 0

if (window.localStorage.redux) {
	const { collageBoard, imagePanel } = JSON.parse(window.localStorage.redux)
	numRawImages = imagePanel.imageLists[0].images.length
	numCutouts = imagePanel.imageLists[1].images.length
	numCollageElements = collageBoard.elements.length
}

export const TOGGLE_HELP_WINDOW_OPEN = 'TOGGLE_HELP_WINDOW_OPEN'
export const toggleHelpWindowOpen = () => {
	return {
		type: TOGGLE_HELP_WINDOW_OPEN
	}
}

export const SET_IMAGE_PANEL_EXPANSION = 'SET_IMAGE_PANEL_EXPANSION'
export const setImagePanelExpansion = (expansion) => {
	return {
		type: SET_IMAGE_PANEL_EXPANSION,
		expansion
	}
}

export const CLOSE_ALL_IMAGE_PANEL_SECTIONS = 'CLOSE_ALL_IMAGE_PANEL_SECTIONS'
export const closeAllImagePanelSections = () => {
	return {
		type: CLOSE_ALL_IMAGE_PANEL_SECTIONS
	}
}

export const TOGGLE_IMAGE_IMPORTER_OPEN = 'TOGGLE_IMAGE_IMPORTER_OPEN'
export const toggleImageImporterOpen = () => {
	return {
		type: TOGGLE_IMAGE_IMPORTER_OPEN
	}
}

export const ImportMethods = {
	BY_URL: 'BY_URL',
	BY_SEARCH: 'BY_SEARCH'
} 
export const SET_IMAGE_IMPORT_METHOD = 'SET_IMAGE_IMPORT_METHOD'
export const setImageImportMethod = (method) => {
	return {
		type: SET_IMAGE_IMPORT_METHOD,
		method
	}
}

export const REQUEST_SEARCH_IMAGES = 'REQUEST_SEARCH_IMAGES'
export const requestSearchImages = () => {
	return {
		type: REQUEST_SEARCH_IMAGES
	}
}

export const RECEIVE_SEARCH_IMAGES = 'RECEIVE_SEARCH_IMAGES'
export const receiveSearchImages = () => {
	return {
		type: RECEIVE_SEARCH_IMAGES
	}
}


let nextSearchImageId = 0
export const ADD_IMAGE_SEARCH_RESULT = 'ADD_IMAGE_SEARCH_RESULT'
export const addImageSearchResult = (url) => {
	return {
		type: ADD_IMAGE_SEARCH_RESULT,
		id: nextSearchImageId++,
		url
	}
}

export const fetchSearchImages = (query) => {
	return function (dispatch) {
		dispatch(requestSearchImages())

		$.ajax({
			dataType: 'json',
			url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyA6YsyAibry_HPXD8zykvkfNiKZMXuv360&cx=011542181941797942738:nfzizxqapw0&searchType=image&q=' + query
		}).done(json => {
			dispatch(receiveSearchImages())
			json.items.forEach(item => {
				dispatch(addImageSearchResult(item.link))
			})
		})
	}
}

export const CLEAR_IMAGE_SEARCH_RESULTS = 'CLEAR_IMAGE_SEARCH_RESULTS'
export const clearImageSearchResults = () => {
	return {
		type: CLEAR_IMAGE_SEARCH_RESULTS
	}
}

export const TOGGLE_COLOR_PICKER_OPEN = 'TOGGLE_COLOR_PICKER_OPEN'
export const toggleColorPickerOpen = () => {
	return {
		type: TOGGLE_COLOR_PICKER_OPEN
	}
}

export const SET_RED_CHANNEL = 'SET_RED_CHANNEL'
export const setRedChannel = (value) => {
	return {
		type: SET_RED_CHANNEL,
		value
	}
}

export const SET_GREEN_CHANNEL = 'SET_GREEN_CHANNEL'
export const setGreenChannel = (value) => {
	return {
		type: SET_GREEN_CHANNEL,
		value
	}
}

export const SET_BLUE_CHANNEL = 'SET_BLUE_CHANNEL'
export const setBlueChannel = (value) => {
	return {
		type: SET_BLUE_CHANNEL,
		value
	}
}

export const SET_ALPHA_CHANNEL = 'SET_ALPHA_CHANNEL'
export const setAlphaChannel = (value) => {
	return {
		type: SET_ALPHA_CHANNEL,
		value
	}
}

export const TOGGLE_IMAGE_EDITOR_OPEN = 'TOGGLE_IMAGE_EDITOR_OPEN'
export const toggleImageEditorOpen = () => {
	return {
		type: TOGGLE_IMAGE_EDITOR_OPEN
	}
}

export const IMPORT_IMAGE_TO_EDITOR = 'IMPORT_IMAGE_TO_EDITOR'
export const importImageToEditor = (image) => {
	return {
		type: IMPORT_IMAGE_TO_EDITOR,
		image
	}
}

export const IMPORT_COLOR_TO_EDITOR = 'IMPORT_COLOR_TO_EDITOR'
export const importColorToEditor = (color) => {
	return {
		type: IMPORT_COLOR_TO_EDITOR,
		color
	}
}

export const SET_EDITOR_TOOL = 'SET_EDITOR_TOOL'
export const setEditorTool = (tool) => {
	return {
		type: SET_EDITOR_TOOL,
		tool
	}
}

export const TOGGLE_CROPPED = 'TOGGLE_CROPPED'
export const toggleCropped = () => {
	return {
		type: TOGGLE_CROPPED
	}
}

let nextImageList = 2
export const ADD_IMAGE_LIST = 'ADD_IMAGE_LIST'
export const addImageList = (listName) => {
	return {
		type: ADD_IMAGE_LIST,
		id: nextImageList++,
		listName
	}
}

export const REMOVE_IMAGE_LIST = 'REMOVE_IMAGE_LIST'
export const removeImageList = (listId) => {
	return {
		type: REMOVE_IMAGE_LIST,
		listId
	}
}

export const TOGGLE_IMAGE_LIST_EXPANDED = 'TOGGLE_IMAGE_LIST_EXPANDED'
export const toggleImageListExpanded = (listId) => {
	return {
		type: TOGGLE_IMAGE_LIST_EXPANDED,
		listId
	}
}

let nextRawImageId = numRawImages
export const ADD_RAW_IMAGE = 'ADD_RAW_IMAGE'
export const addRawImage = (listId, url, width, height) => {
	return {
		type: ADD_RAW_IMAGE,
		id: nextRawImageId++,
		listId,
		url,
		width,
		height
	}
}

let nextCutoutImageId = numCutouts
export const ADD_CUTOUT_IMAGE = 'ADD_CUTOUT_IMAGE'
export const addCutoutImage = (listId, SVGString, width, height) => {
	return {
		type: ADD_CUTOUT_IMAGE,
		id: nextCutoutImageId++,
		listId,
		SVGString,
		width,
		height
	}
}

export const REMOVE_IMAGE = 'REMOVE_IMAGE'
export const removeImage = (listId, imageId) => {
	return {
		type: REMOVE_IMAGE,
		listId,
		imageId
	}
}

export const TOGGLE_COLLAGE_BOARD_ACTIVE = 'TOGGLE_COLLAGE_BOARD_ACTIVE'
export const toggleCollageBoardActive = () => {
	return {
		type: TOGGLE_COLLAGE_BOARD_ACTIVE
	}
}

export const TOGGLE_COLLAGE_BOARD_MENU_OPEN = 'TOGGLE_COLLAGE_BOARD_MENU_OPEN'
export const toggleCollageBoardMenuOpen = () => {
	return {
		type: TOGGLE_COLLAGE_BOARD_MENU_OPEN
	}
}

export const SET_COLLAGE_BACKGROUND = 'SET_COLLAGE_BACKGROUND'
export const setCollageBackground = (background) => {
	return {
		type: SET_COLLAGE_BACKGROUND,
		background
	}
}

let nextCollageElement = numCollageElements
export const ADD_COLLAGE_ELEMENT = 'ADD_COLLAGE_ELEMENT'
export const addCollageElement = (image) => {
	return {
		type: ADD_COLLAGE_ELEMENT,
		id: nextCollageElement++,
		image,
		zIndex: nextCollageElement
	}
}

export const REMOVE_COLLAGE_ELEMENT = 'REMOVE_COLLAGE_ELEMENT'
export const removeCollageElement = (id) => {
	return {
		type: REMOVE_COLLAGE_ELEMENT,
		id
	}
}

export const UPDATE_COLLAGE_ELEMENT = 'UPDATE_COLLAGE_ELEMENT'
export const updateCollageElement = (id, dimensions, position) => {
	return {
		type: UPDATE_COLLAGE_ELEMENT,
		id,
		dimensions,
		position
	}
}

export const CLEAR_ALL_ELEMENTS = 'CLEAR_ALL_ELEMENTS'
export const clearAllElements = () => {
	return {
		type: CLEAR_ALL_ELEMENTS
	}
}

export const TOGGLE_SELECTED_ELEMENT = 'TOGGLE_SELECTED_ELEMENT'
export const toggleSelectedElement = (element) => {
	return {
		type: TOGGLE_SELECTED_ELEMENT,
		element
	}
}

export const DESELECT_ALL_ELEMENTS = 'DESELECT_ALL_ELEMENTS'
export const deselectAllElements = () => {
	return {
		type: DESELECT_ALL_ELEMENTS
	}
}

export const UPDATE_SELECTED_ELEMENT = 'UPDATE_SELECTED_ELEMENT'
export const updateSelectedElement = (element) => {
	return {
		type: UPDATE_SELECTED_ELEMENT,
		element
	}
}
