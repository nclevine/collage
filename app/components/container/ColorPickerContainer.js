import { connect } from 'react-redux'
import ColorPicker from '../presentational/ImagePanel/ColorPicker/ColorPicker'
import { toggleColorPickerOpen, setRedChannel, setGreenChannel, setBlueChannel, setAlphaChannel } from '../../actions'

const mapStateToProps = (state) => {
	let { open, red, green, blue, alpha } = state.imagePanel.colorPicker
	return {
		open,
		red,
		green,
		blue,
		alpha
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onHeaderClick: () => {
			dispatch(toggleColorPickerOpen())
		},
		onInputChange: (channel, value) => {
			switch (channel) {
				case 'red':
					dispatch(setRedChannel(value))
					return
				case 'green':
					dispatch(setGreenChannel(value))
					return
				case 'blue':
					dispatch(setBlueChannel(value))
					return
				case 'alpha':
					dispatch(setAlphaChannel(value))
					return
			}
		}
	}
}

const ColorPickerContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ColorPicker)

export default ColorPickerContainer
