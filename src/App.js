import React from 'react'
import './App.css';
import NavbarContainer from './components/NavbarContainer/NavbarContainer'
import WebView from './components/WebView/WebView'
import MobileView from './components/MobileView/MobileView'

const App=()=>(
  <div>
      <NavbarContainer />
      <WebView />
      <MobileView />
  </div>
)

export default App;
