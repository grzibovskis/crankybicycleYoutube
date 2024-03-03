import './home.css'

import Navbar from '../../component/Header/Navbar/navbar.js'
import Topnavbar from '../../component/Header/Topnavbar/topnavbar.js'
import Footer from '../../component/Footer/footer.js'
import Carousel from '../../component/Carousel/carousel.js'
import Video from '../../asset/Video/introwix.mp4'
import Articles from '../../database/articles.js'


const home = () => {
  return (
    <>
    <Topnavbar/>
    <Navbar/>
    <div className='container-main-article1'>
        <div className='container-main-video'>
          <video src={Video} autoPlay loop/>
        </div>
        <div className='container-main-article1-desc'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus suscipit 
          voluptates adipisci saepe quia sapiente libero ducimus dolorem placeat excepturi,
          nulla, fuga iure voluptatibus culpa, natus modi. Blanditiis veritatis 
          illo aliquid eum. Asperiores, dolor fugit. Qui officiis earum vitae modi nemo fugit,
          voluptates dolorum eius tempore. Et provident doloribus quaerat possimus laborum, 
          porro quidem ex debitis voluptatum corporis cupiditate qui! Odio corporis est porro
          </p>
        </div>
    </div>
    <div className='container-info'>
      <p>quos consectetur perferendis in repellendus totam odio error dolor.</p>
    </div>
    <Carousel/>
    <div className='container-main-article2'>
      <h2>Title title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste facere debitis aliquam esse corrupti sunt alias consequatur adipisci vel rem voluptas deserunt vero corporis error velit minima, qui nisi reprehenderit, cumque quos temporibus mollitia incidunt tempora? Eaque alias id atque magni nemo vitae eius, assumenda nihil velit obcaecati nobis!</p>
    </div>
    <div className='container-article2-cards'>
      {Articles.map((value) => (
        <div className='card'>
          <div>
            <img className='image' src={value.img} alt="" />
          </div>
          <div className='desc'>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
  </>
  )
}

export default home