import React from 'react';


function Services() {
  return (
    <section id="services" class="section-padding">
       <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title wow fadeInDown" data-wow-delay="0.1s">Serviços</h2>
        </div>


        <div class="row">
          <div class="col-md-6 col-lg-4 col-xs-12">
            <div class="services-item wow fadeInRight" data-wow-delay="0.3s">
              <div class="icon">
                <i class="lni-cog"></i>
              </div>
              <div class="services-content">
                <h3><a >Desemvolvimento Web </a></h3>                
                <p>
                  Oferecemos Websites inovadores, atrativos e acima de tudo 
                  funcional adquado à diversos dispositivos 
                  afim de trazer à melhor experiência ao usuário.

                </p>
                <p>
                  Sites Fluidos desenvolvidos em cima do conceito de responsividade.

                  
                  

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
                <h3><a >Desenvolvimento de Sistemas  </a></h3>
                <p>
                Desenvolvimento de software baseada 
                nas melhores práticas de projeto
                aliada com estratégias de processos de 
                negócio adquada à capacidade de investimento 
                de cada empresa.</p>
              </div>
            </div>
          </div>


          <div class="col-md-6 col-lg-4 col-xs-12">
            <div class="services-item wow fadeInRight" data-wow-delay="0.1s">
              <div class="icon">
                <i class="lni-mobile"></i>
              </div>
              <div class="services-content">
                <h3><a >Aplicativos Mobile </a></h3>
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