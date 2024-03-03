import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './page/About/about.js'
import Bicycles from './page/Bicycles/bicycles.js'
import Events from './page/Events/events.js'
import Home from './page/Home/home.js'
import Signin from './page/Signin/signin.js'
import Register from './page/Register/register.js'


const App = () => {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="bicycles" element={<Bicycles />} />
            <Route path="about" element={<About />} />
            <Route path="events" element={<Events />} />
            <Route path="signin" element={<Signin />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App