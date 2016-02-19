const IMAGE_TYPES = {
	RAW: 'RAW',
	CUTOUT: 'CUTOUT'
}

const { RAW, CUTOUT } = IMAGE_TYPES

const EDITOR_TOOLS = {
	LASSO: 'LASSO',
	POLYGON_LASSO: 'POLYGON_LASSO',
	MARQUEE: 'MARQUEE',
	ELLIPSE: 'ELLIPSE'
}

const { LASSO, POLYGON_LASSO, MARQUEE, ELLIPSE } = EDITOR_TOOLS

const IMPORT_METHODS = {
	BY_URL: 'BY_URL',
	BY_SEARCH: 'BY_SEARCH'
}

const { BY_URL, BY_SEARCH } = IMPORT_METHODS

const IMPORT_SEARCH_SOURCES = {
	ARTSY: 'ARTSY',
	TUMBLR: 'TUMBLR'
}

const sampleState = {
	imagePanelVisibility: true,
	imageImportPanelVisiblity: true,
	imageImportMethod: BY_SEARCH,
	imageSearchSource: ARTSY,
	imageSearchResults: [
		{
			id: 1,
			url: 'http://images.com/image.jpg',
			width: 500,
			height: 500
		}
	]
	images: [
		{
			id: 1,
			type: RAW,
			url: 'http://images.com/anotherimage.jpg',
			SVGString: null,
			width: 200,
			height: 400

		},
		{
			id: 2,
			type: CUTOUT,
			url: null,
			SVGString: '<svg>...</svg>',
			width: 350,
			height: 100
		}
	],
	imageEditorVisibility: true,
	imageEditorTool: POLYGON_LASSO,
	imageEditorContentId: 1 // id of the raw image
	collageBoardActive: false,
	collageBoardBackground: 
	collageBoardElements: [
		{
			id: 1,
			imageListId: 2,
			dimensions: {
				width: 700,
				height: 200
			},
			position: {
				x: 400,
				y: 30
			}
		},
		{
			id: 2,
			imageListId: 2, // note that the first two collage elements are both derived from the same cutout
			dimensions: {
				width: 350,
				height: 100
			},
			position: {
				x: 20,
				y: 300
			}
		}
	]
	collageBoardSelectionId: 2, // id of the collage element or null
	collageBoardMenuVisibility: true
}