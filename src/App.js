import React, { Component } from 'react'
import './App.css'
import Playlist from './components/Playlist'
import Filter from './components/Filter'

class App extends Component {
  render() {
    return (
      <div className="inline_block">
        <Playlist />
        <Filter />
      </div>
    )
  }
}

export default App
