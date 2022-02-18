import React from 'react';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


//Components
import Carrousel from '../Carrousel/Carrousel';

//Estilos
import './Banners.css';

//Imagenes
import banner1 from '../../img/Banners/Banner1.jpeg';
import banner2 from '../../img/Banners/Banner2.jpeg';
import banner3 from '../../img/Banners/Banner3.jpeg';
import banner4 from '../../img/Banners/Banner4.jpeg';


function Banners() {
  return (
    <div className='ItemListContainer-wrap'>
      <Carrousel />
      <div className='Banners-superior'>
          <div className='Banner-1'>
            <div className="card text-white">
              <img src={banner3} className="card-img1" alt="banner1"/>
              <div className="card-img-overlay">
                <h5 className="card-title1">SUMMER SALE</h5>
              </div>
            </div>
          </div>
          <div className='Banner-2'>
            <div className="card text-white">
              <img src={banner2} className="card-img2" alt="banner1"/>
              <div className="card-img-overlay">
                <h5 className="card-title2">ROCK IT</h5>
              </div>
            </div>
          </div>
      </div>
      <div className='Banners-inferior'>
          <div className='Banner-3'>
            <div className="card text-white">
              <img src={banner1} className="card-img3" alt="banner1"/>
              <div className="card-img-overlay">
                <h5 className="card-title3">BE YOURSELF</h5>
              </div>
            </div>
          </div>
          <div className='Banner-4'>
            <div className="card text-white">
              <img src={banner4} className="card-img4" alt="banner1"/>
              <div className="card-img-overlay">
                <h5 className="card-title4">NEW IN</h5>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
};

export default Banners;


