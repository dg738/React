import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard, Home, Profile } from './pages'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/dashboard" element={<Dashboard />} />     
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
