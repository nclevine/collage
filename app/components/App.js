import React from 'react'
import ImagePanel from './mixed/ImagePanel/ImagePanel'
import CollageBoardContainer from './container/CollageBoardContainer'
import ToggleImagePanelButton from './mixed/ImagePanel/ToggleImagePanelButton'
import ImagePanelSectionControls from './mixed/ImagePanel/ImagePanelSectionControls'

const App = () => (
  <div className='app'>
    <CollageBoardContainer />
    <ImagePanel />
  	<ToggleImagePanelButton />
	<ImagePanelSectionControls />
  </div>
)

export default App
