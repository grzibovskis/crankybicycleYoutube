import './bicycles.css'

import Navbar from '../../component/Header/Navbar/navbar.js'
import Topnavbar from '../../component/Header/Topnavbar/topnavbar.js'
import Footer from '../../component/Footer/footer.js'
import ImageGallery from "react-image-gallery";
import './image-gallery.css'
import { SteelBike, Gazelle, Guci, Ural, Zil } from '../../database/image.js'

const bicycles = () => {
  return (
    <>
      <Topnavbar/>
      <Navbar/>
      <div className='container-main-bicycles'>
        <h1>Title</h1>
        <div className='container-main-bicycles-desc'>
          <h2>Title</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ea natus est assumenda asperiores commodi at, alias sunt magnam repellendus.</p>
        </div>
        <ImageGallery items={SteelBike} showPlayButton={false} showFullscreenButton={false} />
        <div className='container-main-bicycles-desc'>
          <h2>Title</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ea natus est assumenda asperiores commodi at, alias sunt magnam repellendus.</p>
        </div>
        <ImageGallery items={Gazelle} showPlayButton={false} showFullscreenButton={false} />
        <div className='container-main-bicycles-desc'>
          <h2>Title</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ea natus est assumenda asperiores commodi at, alias sunt magnam repellendus.</p>
        </div>
        <ImageGallery items={Guci} showPlayButton={false} showFullscreenButton={false} />
        <div className='container-main-bicycles-desc'>
          <h2>Title</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ea natus est assumenda asperiores commodi at, alias sunt magnam repellendus.</p>
        </div>
        <ImageGallery items={Ural} showPlayButton={false} showFullscreenButton={false} />
        <div className='container-main-bicycles-desc'>
          <h2>Title</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ea natus est assumenda asperiores commodi at, alias sunt magnam repellendus.</p>
        </div>
        <ImageGallery items={Zil} showPlayButton={false} showFullscreenButton={false} />
      </div>
      <Footer/>
    </>
  )
}

export default bicycles