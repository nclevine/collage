import React from 'react'
import ImagePanel from './mixed/ImagePanel/ImagePanel'
import CollageBoardContainer from './container/CollageBoardContainer'
import ToggleImagePanelButton from './mixed/ImagePanel/ToggleImagePanelButton'
import ImagePanelSectionControls from './mixed/ImagePanel/ImagePanelSectionControls'
import ImageEditorContainer from './container/ImageEditorContainer'

const App = () => (
  <div className='app'>
    <CollageBoardContainer />
    <ImagePanel />
  	<ToggleImagePanelButton />
	<ImagePanelSectionControls />
	<ImageEditorContainer />
  </div>
)

export default App
