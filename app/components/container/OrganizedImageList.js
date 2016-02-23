import { connect } from 'react-redux'
import CombinedImageList from '../presentational/CombinedImageList'
import { toggleImageListExpanded } from '../../actions'


const mapStateToProps = (state) => {
	imageLists: state.imageLists
}

const mapDispatchToProps = (dispatch) => {
	onListClick: (listId) => {
		dispatch(toggleImageListExpanded(listId))
	}
}

const OrganizedImageList = connect(
	mapStateToProps,
	mapDispatchToProps
)(CombinedImageList)

export default OrganizedImageList
