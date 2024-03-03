import './signin.css'

import Navbar from '../../component/Header/Navbar/navbar.js'
import Topnavbar from '../../component/Header/Topnavbar/topnavbar.js'
import Footer from '../../component/Footer/footer.js'

const signin = () => {
  return (
    <>
      <Topnavbar/>
      <Navbar/>
      <div className='container-main-signin'>
        <div className='container-main-circle'>
          <p><b>Signin page</b>: some text</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default signin