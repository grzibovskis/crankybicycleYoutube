import './register.css'

import Navbar from '../../component/Header/Navbar/navbar.js'
import Topnavbar from '../../component/Header/Topnavbar/topnavbar.js'
import Footer from '../../component/Footer/footer.js'

const register = () => {
  return (
    <>
      <Topnavbar/>
      <Navbar/>
      <div className='container-main-register'>
        <div className='container-main-circle'>
          <p><b>Register page</b>: some text</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default register