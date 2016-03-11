import React from 'react'
import ImagePanel from './mixed/ImagePanel/ImagePanel'
import CollageBoardContainer from './container/CollageBoardContainer'
import ToggleImagePanelButton from './mixed/ImagePanel/ToggleImagePanelButton'
import ImagePanelSectionControls from './mixed/ImagePanel/ImagePanelSectionControls'
import ImageEditorContainer from './container/ImageEditorContainer'
import HelpWindow from './mixed/HelpWindow'
import ToggleHelpWindowButton from './mixed/ToggleHelpWindowButton'

const App = () => (
  <div className='app'>
    <CollageBoardContainer />
    <ImagePanel />
  	<ToggleImagePanelButton />
	<ImagePanelSectionControls />
	<ImageEditorContainer />
	<HelpWindow />
	<ToggleHelpWindowButton />
  </div>
)

export default App
