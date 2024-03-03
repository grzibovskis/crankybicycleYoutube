import './events.css'

import Navbar from '../../component/Header/Navbar/navbar.js'
import Topnavbar from '../../component/Header/Topnavbar/topnavbar.js'
import Footer from '../../component/Footer/footer.js'

const events = () => {
  return (
    <>
    <Topnavbar/>
    <Navbar/>
    <div className='container-main-events'>
      <div className='container-main-circle'>
        <p><b>Event page</b>: some text</p>
      </div>
    </div>
    <Footer/>
  </>
  )
}

export default events