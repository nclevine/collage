import { connect } from 'react-redux'
import ImageImporter from '../presentational/ImagePanel/ImageImporter'
import { fetchSearchImages, addImageSearchResult, clearImageSearchResults } from '../../actions'

const mapStateToProps = (state) => {
	let { open, method, isFetching, results } = state.imagePanel.importPanel
	return {
		open: open,
		importMethod: method,
		isFetching: isFetching,
		searchResults: results
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onURLSubmit: (url) => {
			dispatch(clearImageSearchResults())
			dispatch(addImageSearchResult(url))
		},
		onSearchSubmit: (query) => {
			dispatch(clearImageSearchResults())
			dispatch(fetchSearchImages(query))
		}
	}
}

const ImageImporterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ImageImporter)

export default ImageImporterContainer
