import Footer from '../../component/Footer/footer.js'
import Navbar from '../../component/Header/Navbar/navbar.js'
import Topnavbar from '../../component/Header/Topnavbar/topnavbar.js'
import React from 'react'
import './about.css'

const about = () => {
  return (
    <>
      <Topnavbar/>
      <Navbar/>

      <div className='container-main-about'>
        <h1>Title</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quae quo veritatis inventore veniam! Porro laborum atque ab eos culpa consectetur in modi, omnis necessitatibus ratione nihil, earum illo impedit tempora perferendis assumenda natus fugiat laudantium harum nesciunt cumque odio.</p>
        <div className='container-about-both'>

          <div className='container-about-crankybicycle'>
            <h2>Title2</h2>
            <div>
              <p>small text</p>
              <img className='container-about-crankybicycle-image' src="https://c02.purpledshub.com/uploads/sites/39/2022/10/Fox-DHX-Factory-rear-mountain-bike-shock-2-3e0ee7f.jpg?w=1029&webp=1" alt="" />
              <p className='container-about-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni excepturi molestias maxime expedita sed dolore incidunt laudantium similique quod mollitia dignissimos nesciunt fugit voluptatibus assumenda, sequi aliquam veniam distinctio itaque commodi est hic consectetur animi reprehenderit quia? Quo ea laudantium modi numquam soluta. Explicabo reiciendis, culpa ex voluptate corrupti labore!</p>

            </div>
            <div>
              <p className='container-about-p'>small text</p>
              <img className='container-about-crankybicycle-bike' src="https://c02.purpledshub.com/uploads/sites/39/2022/10/Fox-DHX-Factory-rear-mountain-bike-shock-2-3e0ee7f.jpg?w=1029&webp=1" alt="" />
              <p className='container-about-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni excepturi molestias maxime expedita sed dolore incidunt laudantium similique quod mollitia dignissimos nesciunt fugit voluptatibus assumenda, sequi aliquam veniam distinctio itaque commodi est hic consectetur animi reprehenderit quia? Quo ea laudantium modi numquam soluta. Explicabo reiciendis, culpa ex voluptate corrupti labore!</p>
              
            </div>
          </div>

          <div className='container-about-programing'>
            <h2>Title3</h2>
            <p className='container-about-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas laborum nam quis, placeat doloremque voluptatibus ipsa. Temporibus quis dolore nulla! Hic sint, rerum voluptatum maiores magni delectus eligendi, veniam architecto similique in voluptates dolorum soluta error cum excepturi? Nihil illo distinctio culpa ex! Facere debitis incidunt voluptate, eaque facilis minus at eveniet delectus repudiandae, dolor molestias aliquid corrupti voluptatibus veniam praesentium laborum tenetur soluta assumenda vitae dignissimos, cupiditate maxime sapiente. Expedita illum corrupti odio sunt ea vitae error labore tenetur, deleniti necessitatibus ducimus, vero explicabo nisi modi amet quam cupiditate tempore obcaecati quasi. Voluptatibus est consequatur labore enim accusamus hic.</p>

          </div>

        </div>
      </div>

      <Footer/>
    </>
  )
}

export default about