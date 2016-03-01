import { connect } from 'react-redux'
import ImageImporter from '../presentational/ImagePanel/ImageImporter'
import { addImageSearchResult, clearImageSearchResults } from '../../actions'

const mapStateToProps = (state) => {
	let { open, method, source, results } = state.imagePanel.importPanel
	return {
		open: open,
		importMethod: method,
		searchSource: source,
		searchResults: results,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchSubmit: (url) => {
			dispatch(clearImageSearchResults())
			dispatch(addImageSearchResult(url))
		}
	}
}

const ImageImporterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ImageImporter)

export default ImageImporterContainer
