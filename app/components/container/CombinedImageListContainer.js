import { connect } from 'react-redux'
import CombinedImageList from '../presentational/ImagePanel/CombinedImageList'
import { toggleImageListExpanded } from '../../actions'


const mapStateToProps = (state) => {
	return {
		imageLists: state.imagePanel.imageLists
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onListClick: (listId) => {
			dispatch(toggleImageListExpanded(listId))
		}
	}
}

const CombinedImageListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CombinedImageList)

export default CombinedImageListContainer
