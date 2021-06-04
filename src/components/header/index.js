import React from 'react';
import {Image} from './styles'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";



function Header() {
  return (

    <header>
      <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <span className="icon-menu"></span>
              <span className="icon-menu"></span>
              <span className="icon-menu"></span>
            </button>
            <a href="" className="navbar-brand" >

              <div class ="logo"> 

              <a className="nav-link" href="#hero-area">
                <Image

                 src="/assets/img/logo.png" height='40' 
                 
                 />

              </a>
              </div>
              
            </a>
          </div>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mr-auto w-100 justify-content-left clearfix">
              <li className="nav-item active">
                <a className="nav-link" href="#hero-area">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Serviços
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#history">
                  História
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#clients">
                  Clientes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contato
                </a>
              </li>
            </ul>
            <div className="btn-sing float-right">
              
            </div>
          </div>
        </div>

        <ul className="mobile-menu navbar-nav">
          <li>
            <a className="page-scroll" href="#heroarea">
              Início
            </a>
          </li>
          <li>
            <a className="page-scroll" href="#services">
              Serviços
            </a>
          </li>
           <li>
            <a className="page-scroll" href="#history">
              História
            </a>
          </li> 
          <li>
            <a className="page-scroll" href="#clients">
              Clientes
            </a>
          </li>
          <li>
            <a className="page-scroll" href="#contact">
              Contato
            </a>
          </li>
        </ul>
        
      </nav>

      <div>
        <div id="hero-area" class="hero-area-bg">
          <div className="overlay"></div>
          <div className="container">
            <div style={{height:'32rem'}} className="row">
              <div className="col-md-12 col-sm-12">
                <AliceCarousel 
                  autoPlayInterval={3000}
                  autoPlay={true}
                  fadeOutAnimation={true}
                  mouseTrackingEnabled={true}
                  disableAutoPlayOnAction={true}>
                    <img src="../../assets/img/slide/img1.jpg" style={{height:440}} className="sliderimg" alt=""/>
                    <img src="../../assets/img/slide/img2.jpg" style={{height:440}} className="sliderimg" alt=""/>
                    <img src="../../assets/img/slide/img3.jpg" style={{height:440}} className="sliderimg" alt=""/>
                </AliceCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  )


}

export default Header;