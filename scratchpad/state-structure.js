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
			open: true,
			method: BY_SEARCH,
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
					// {
					// 	id: 2,
					// 	url: 'http://40.media.tumblr.com/fbe21e47846c52360b40b0f480dc6344/tumblr_o15m8wRPBj1u2evjjo1_500.jpg'
					// },
					// {
					// 	id: 3,
					// 	url: 'http://40.media.tumblr.com/13452739e5e2dbc3e8a403e2e490a730/tumblr_o1ofqzYWzi1qfdys9o1_500.jpg'
					// },
					// {
					// 	id: 4,
					// 	url: 'http://40.media.tumblr.com/b0985b0f616a530eaf282008ed1802ff/tumblr_o1coqo8Chi1ul634to1_500.jpg'
					// },
					{
						id: 5,
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
			// 	imageType: RAW,
			// 	imageListId: 1,
			// 	dimensions: {
			// 		width: 700,
			// 		height: 200
			// 	},
			// 	position: {
			// 		x: 400,
			// 		y: 30
			// 	}
			// },
			// {
			// 	id: 2,
			// 	imageType: CUTOUT,
			// 	imageListId: 1,
			// 	dimensions: {
			// 		width: 350,
			// 		height: 100
			// 	},
			// 	position: {
			// 		x: 20,
			// 		y: 300
			// 	}
			// }
		],
		selectedElement: null
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
