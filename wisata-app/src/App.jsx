import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrameMain from './components/Main/FrameMain';
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<FrameMain/>}/>
      </Routes>
    </Router>
  )
}

export default App
