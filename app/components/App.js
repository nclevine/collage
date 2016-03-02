import React from 'react'
import ImagePanel from './mixed/ImagePanel/ImagePanel'
import CollageBoardContainer from './container/CollageBoardContainer'
import ToggleImagePanelButton from './mixed/ImagePanel/ToggleImagePanelButton'

const App = () => (
  <div className='app'>
    <CollageBoardContainer />
    <ImagePanel />
  	<ToggleImagePanelButton />
  </div>
)

export default App
