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

const { ARTSY, TUMBLR } = IMPORT_SEARCH_SOURCES

const initialState = {
	imagePanel: {
		open: true,
		importPanel: {
			open: false,
			method: BY_URL,
			source: ARTSY,
			results: [
				// {
				// 	id: 1,
				// 	url: 'http://images.com/image.jpg'
				// }
			]
		},
		imageLists: [
			{
				id: 1,
				name: 'Imports',
				expanded: true,
				images: [
					{
						id: 1,
						url: 'http://41.media.tumblr.com/86a94b309e87329c6d815cebe05b4462/tumblr_o1xzaeRnuN1qfdys9o1_500.jpg',
						width: 500,
						height: 385
					},
					{
						id: 2,
						url: 'http://36.media.tumblr.com/502b55ce226934abda882ddeec1effa2/tumblr_mu9zkn51g61rhhuhgo1_400.png',
						width: 400,
						height: 382
					}
				]
			},
			{
				id: 2,
				name: 'Cutouts',
				expanded: false, 
				images: [
					// {
					// 	id: 1,
					// 	SVGString: '<svg>...</svg>'
					// }
				]
			}
		],
		editor: {
			open: false,
			image: null
		}
	},
	collageBoard: {
		active: false,
		menuOpen: true,
		background: null,
		elements: [
			// {
			// 	id: 1,
			// 	image: {
			// 		id: 1,
			// 		url: 'http://www.blah.com/image.jpg'
			// 	}
			// 	dimensions: {
			// 		width: 700,
			// 		height: 200
			// 	},
			// 	position: {
			// 		top: 30
			// 		left: 400,
			// 	}
			// },
			// {
			// 	id: 2,
			// 	image: {
			// 		id: 5,
			// 		SVGString: '<svg>...</svg>'
			// 	}
			// 	dimensions: {
			// 		width: 350,
			// 		height: 100
			// 	},
			// 	position: {
			// 		top: 300
			// 		left: 20,
			// 	}
			// }
		],
		selectedElements: []
	}
}

export default initialState

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
