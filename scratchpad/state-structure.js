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
	imagePanel: {
		open: true,
		importPanel: {
			open: true,
			importMethod: BY_SEARCH,
			searchSource: ARTSY,
			searchResults: [
				{
					id: 1,
					url: 'http://images.com/image.jpg'
				}
			]
		},
		imageList: {
			raw: [
				{
					id: 1,
					url: 'http://images.com/anotherimage.jpg',
				}
			],
			cutout: [
				{
					id: 1,
					SVGString: '<svg>...</svg>'
				}
			]
		},
		editor: {
			open: true,
			tool: POLYGON_LASSO,
			image: {imageType: RAW, id: 1}
		}
	}
	collageBoard: {
		active: false,
		menuOpen: true,
		background: 1, // id from raw image list
		elements: [
			{
				id: 1,
				imageType: RAW,
				imageListId: 1,
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
				imageType: CUTOUT,
				imageListId: 1,
				dimensions: {
					width: 350,
					height: 100
				},
				position: {
					x: 20,
					y: 300
				}
			}
		],
		selectedElement: 1
	}
}


/*

old state structure:

imageImportPanelVisiblity: true,
imageImportMethod: BY_SEARCH,
imageSearchSource: ARTSY,
imageSearchResults: [
	{
		id: 1,
		url: 'http://images.com/image.jpg'
	}
]
imageList: {
	rawImages: [
		{
			id: 1,
			url: 'http://images.com/anotherimage.jpg',
		}
	],
	cutoutImages: [
		{
			id: 1,
			SVGString: '<svg>...</svg>'
		}
	]
},
imageEditorVisibility: true,
imageEditorTool: POLYGON_LASSO,
imageEditorContentId: 1 // id of the raw image
collageBoardActive: false,
collageBoardBackground: 1 // id of a raw image
collageBoardElements: [
	{
		id: 1,
		imageType: RAW,
		imageListId: 1,
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
		imageType: CUTOUT,
		imageListId: 1,
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
*/
