import { connect } from 'react-redux'
import ImageImporter from '../presentational/ImagePanel/ImageImporter'

const mapStateToProps = (state) => {
	
}

const mapDispatchToProps = (dispatch) => {

}

const ImageImporterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ImageImporter)

export default ImageImporterContainer
