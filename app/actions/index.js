export const TOGGLE_IMAGE_PANEL_OPEN = 'TOGGLE_IMAGE_PANEL_OPEN'

export const TOGGLE_IMAGE_IMPORT_PANEL_OPEN = 'TOGGLE_IMAGE_IMPORT_PANEL_OPEN'

export const SET_IMAGE_IMPORT_METHOD = 'SET_IMAGE_IMPORT_METHOD'
export const SET_IMAGE_SEARCH_SOURCE = 'SET_IMAGE_SEARCH_SOURCE'
export const ADD_IMAGE_SEARCH_RESULT = 'ADD_IMAGE_SEARCH_RESULT'

export const TOGGLE_IMAGE_EDITOR_OPEN = 'TOGGLE_IMAGE_EDITOR_OPEN'
export const IMPORT_IMAGE_TO_EDITOR = 'IMPORT_IMAGE_TO_EDITOR'

export const ADD_IMAGE_LIST = 'ADD_IMAGE_LIST'
export const REMOVE_IMAGE_LIST = 'REMOVE_IMAGE_LIST'
export const TOGGLE_IMAGE_LIST_EXPANDED = 'TOGGLE_IMAGE_LIST_EXPANDED'
export const ADD_RAW_IMAGE = 'ADD_RAW_IMAGE'
export const ADD_CUTOUT_IMAGE = 'ADD_CUTOUT_IMAGE'
export const REMOVE_IMAGE = 'REMOVE_IMAGE'

export const TOGGLE_COLLAGE_BOARD_ACTIVE = 'TOGGLE_COLLAGE_BOARD_ACTIVE'
export const TOGGLE_COLLAGE_BOARD_MENU_OPEN = 'TOGGLE_COLLAGE_BOARD_MENU_OPEN'
export const SET_COLLAGE_BACKGROUND = 'SET_COLLAGE_BACKGROUND'

export const ADD_COLLAGE_ELEMENT = 'ADD_COLLAGE_ELEMENT'
export const REMOVE_COLLAGE_ELEMENT = 'REMOVE_COLLAGE_ELEMENT'
export const UPDATE_COLLAGE_ELEMENT = 'UPDATE_COLLAGE_ELEMENT'
export const TOGGLE_SELECTED_ELEMENT = 'TOGGLE_SELECTED_ELEMENT'

export const toggleImagePanelOpen = () => {
	return {
		type: TOGGLE_IMAGE_PANEL_OPEN
	}
}

export const toggleImageImportPanelOpen = () => {
	return {
		type: TOGGLE_IMAGE_IMPORT_PANEL_OPEN
	}
}

export const ImportMethods = {
	BY_URL: 'BY_URL',
	BY_SEARCH: 'BY_SEARCH'
} 

export const setImageImportMethod = (method) => {
	return {
		type: SET_IMAGE_IMPORT_METHOD,
		method
	}
}

export const ImageSearchSources = {
	ARTSY: 'ARTSY',
	TUMBLR: 'TUMBLR'
}

export const setImageSearchSource = (source) => {
	return {
		type: SET_IMAGE_SEARCH_SOURCE,
		source
	}
}

let nextSearchImageId = 0
export const addImageSearchResult = (url) => {
	return {
		type: ADD_IMAGE_SEARCH_RESULT,
		id: nextSearchImageId++,
		url
	}
}

export const toggleImageEditorOpen = () => {
	return {
		type: TOGGLE_IMAGE_EDITOR_OPEN
	}
}

export const importImageToEditor = (url) => {
	return {
		type: IMPORT_IMAGE_TO_EDITOR,
		url
	}
}

let nextImageList = 2
export const addImageList = (listName) => {
	return {
		type: ADD_IMAGE_LIST,
		id: nextImageList++,
		listName
	}
}

export const removeImageList = (listId) => {
	return {
		type: REMOVE_IMAGE_LIST,
		listId
	}
}

export const toggleImageListExpanded = (listId) => {
	return {
		type: TOGGLE_IMAGE_LIST_EXPANDED,
		listId
	}
}

let nextRawImageId = 0
export const addRawImage = (listId, url) => {
	return {
		type: ADD_RAW_IMAGE,
		id: nextRawImageId++,
		listId,
		url
	}
}

let nextCutoutImageId = 0
export const addCutoutImage = (listId, SVGString) => {
	return {
		type: ADD_CUTOUT_IMAGE,
		id: nextCutoutImageId++,
		listId,
		SVGString
	}
}

export const removeImage = (listId, imageId) => {
	return {
		type: REMOVE_IMAGE,
		listId,
		imageId
	}
}

export const toggleCollageBoardActive = () => {
	return {
		type: TOGGLE_COLLAGE_BOARD_ACTIVE
	}
}

export const toggleCollageBoardMenuOpen = () => {
	return {
		type: TOGGLE_COLLAGE_BOARD_MENU_OPEN
	}
}

export const setCollageBackground = (url) => {
	return {
		type: SET_COLLAGE_BACKGROUND,
		url
	}
}

let nextCollageElementId = 0
export const addCollageElement = (image) => {
	return {
		type: ADD_COLLAGE_ELEMENT,
		id: nextCollageElementId++,
		image
	}
}

export const removeCollageElement = (id) => {
	return {
		type: REMOVE_COLLAGE_ELEMENT,
		id
	}
}

export const updateCollageElement = (id, dimensions, position) => {
	return {
		type: UPDATE_COLLAGE_ELEMENT,
		id,
		dimensions,
		position
	}
}

export const toggleSelectedElement = (id) => {
	return {
		type: TOGGLE_SELECTED_ELEMENT,
		id
	}
}
