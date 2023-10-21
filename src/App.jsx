import { useState } from 'react'

import './App.css'
import UnsplashGallery from './Components/UnsplashGallery'

function App() {

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-semibold mb-4">Unsplash Photo Gallery</h1>
      <UnsplashGallery initialQuery="nature" />
    </div>
  )
}

export default App
