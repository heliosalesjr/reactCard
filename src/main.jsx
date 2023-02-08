import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './about'
import App from './App'
import Footer from './footer'
import './index.css'
import Info from './info'
import Interests from './interests'
import Button from './buttons'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Info /> <Button /><About/><Interests /><Footer/>
  </React.StrictMode>,
)
