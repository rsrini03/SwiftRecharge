import './input.css'
import Home from './Components/Home'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
