import React from 'react';


function Services() {
  return (
    <section id="services" class="section-padding">
       <div class="container">
        <div class="section-header text-center">
        < div class=" wow fadeInDown" data-wow-delay="0.1s"></div>
          <h2 class="section-title"><br/>Serviços</h2>
        </div>


        <div class="row">
          <div class="col-md-6 col-lg-4 col-xs-12">
            <div class="services-item wow fadeInRight" data-wow-delay="0.3s">
              <div class="icon">
                <i class="lni-cog"></i>
              </div>
              <div class="services-content">
                <h3>Desenvolvimento Web </h3>                
                <p>
                Oferecemos Websites inovadores, atrativos e, acima de tudo, 
                funcionais. Adequado a diversos dispositivos, afim de trazer 
                melhor experiência ao usuário. Sites práticos, desenvolvidos 
                baseados no conceito de responsividade.

                </p>
                
              </div>
            </div>
          </div>


          <div class="col-md-6 col-lg-4 col-xs-12">
            <div class="services-item wow fadeInRight" data-wow-delay="0.6s">
              <div class="icon">
                <i class="lni-bar-chart"></i>
              </div>
              <div class="services-content">
                <h3>Desenvolvimento de Sistemas  </h3>
                <p>
                Desenvolvimento de sistemas personalizado, conforme as 
                necessidades da sua empresa. Assim, você não precisará 
                se adaptar para usar um pacote pronto, o sistema será 
                ajustado de acordo com suas necessidades.</p>
              </div>
            </div>
          </div>


          <div class="col-md-6 col-lg-4 col-xs-12">
            <div class="services-item wow fadeInRight" data-wow-delay="0.1s">
              <div class="icon">
                <i class="lni-mobile"></i>
              </div>
              <div class="services-content">
                <h3>Aplicativos Mobile </h3>
                <p> Trabalhamos para melhor te atender durante todo o desenvolvimento do seu app 
                 </p>
                 <p>
                  Na sugestão de ajustes de processos de negócio, elaboração de estratégias de controle, 
                  criação dos indicadores de performance e previsão  de retorno esperado ao investir em um aplicativo.
                  Tudo o que você precisar à alguns cliques de distância.</p>
              </div>
            </div>
          </div>

        


        </div>
      </div>
    </section>
  )
}

export default Services;