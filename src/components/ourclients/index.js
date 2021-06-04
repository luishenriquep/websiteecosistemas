import React from 'react';

import {Image} from './styles'

function Clients() {
  return (

    <div id="clients" class="section-padding">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title wow fadeInDown" data-wow-delay="0.1s">Clientes</h2>
        </div>

        <div class="row text-align-">
          <div class="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.1s">
            <div class="client-item-wrapper">
              <Image
                  class="img-fluid"
                  src="../../assets/img/clients/img5.jpg"
                  alt="Peçai"
                  
                />
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.1s">
            <div class="client-item-wrapper">
              <Image
                class="img-fluid"
                src="../../assets/img/clients/img6.jpg"
                alt="Absoluta"
           
               
                // layout= "fill"
              />
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.1s">
            <div class="client-item-wrapper">
              <Image
                class="img-fluid"
                src="../../assets/img/clients/img7.jpg"
                alt="Loja Magnata"
                // layout= "fill"
              />
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.1s">
            <div class="client-item-wrapper">
              <Image
                class="img-fluid"
                
                src="../../assets/img/clients/img8.jpg"
                alt="Meu amigo Pet"
                // layout= "fill"
              />
            </div>
          </div>
        </div>





       <div class="row text-align-">
          <div class="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.1s">
            <div class="client-item-wrapper">
              <Image
                  class="img-fluid"
                  src="../../assets/img/clients/img4.jpg"
                  alt="Cinderela Móveis"
                  // layout= "fill"
                />
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.1s">
            <div class="client-item-wrapper">
              <Image
                class="img-fluid"
                src="../../assets/img/clients/img3.jpg"
                alt="Loja Desafio"
                // layout= "fill"
              />
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.1s">
            <div class="client-item-wrapper">
              <Image
                class="img-fluid"
                src="../../assets/img/clients/img2.jpg"
                alt="Sepaja"
                // layout= "fill"
              />
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.1s">
            <div class="client-item-wrapper">
              <Image
                class="img-fluid"
                
                src="../../assets/img/clients/img1.jpg"
                alt="Cimencal Construções"
                // layout= "fill"
              />
            </div>
          </div>
        </div>


        <div class="row text-align-">
          <div class="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.1s">
            <div class="client-item-wrapper">
              <Image
                  class="img-fluid"
                  src="../../assets/img/clients/img9.jpg"
                  alt="Pax Universal"
                  // layout= "fill"
                />
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.1s">
            <div class="client-item-wrapper">
              <Image
                class="img-fluid"
                src="../../assets/img/clients/img10.jpg"
                alt="Restaurante Vó Mariazinha"
                // layout= "fill"
              />
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.1s">
            <div class="client-item-wrapper">
              <Image
                class="img-fluid"
                src="../../assets/img/clients/img11.jpg"
                alt="Imóveis Palhano"
                // layout= "fill"
              />
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.1s">
            <div class="client-item-wrapper">
              <Image
                class="img-fluid"
                src="../../assets/img/clients/img12.jpg"
                alt="Mercado Toniolli"
                width={250}
                // layout= "fill"
              />
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Clients;