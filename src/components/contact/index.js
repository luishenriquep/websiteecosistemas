import React, {useState} from 'react';


import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmailmsg', 'template_ox11z7r', e.target, 'user_LYaxFL15JPM988Eojqvwn')
    .then((result) => {
        alert('Email enviado com sucesso!');
    }, (error) => {
      alert('Erro ao enviar!');
    });

    e.target.reset();
}








function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  return (
    <section id="contact" class="section-padding">    
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-header text-center">
            < div class="wow fadeInDown" data-wow-delay="0.1s"></div>
              <h2 class="section-title ">Contato</h2>
            </div>
          </div>
        </div>
        <div class="row contact-form-area wow fadeInUp" data-wow-delay="0.1s">          
          <div class="col-md-6 col-lg-6 col-sm-12">
            <div class="contact-block">
              <h2>Formulário de Contato</h2>
              <form id="contactForm" onSubmit={sendEmail}  >
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" 
                      value={name} onChange={()=>setName()}
                       id="name" name="name" placeholder="Nome" 
                       required data-error="Por favor, insira seu nome"/>
                      <div class="help-block with-errors"></div>
                    </div>                                 
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="email" placeholder="Email" 
                      value={email} onChange={()=>setEmail()}
                      id="email" class="form-control" name="email" required data-error="Por favor, insira seu email"/>
                      <div class="help-block with-errors"></div>
                    </div> 
                  </div>
                   <div class="col-md-12">
                    <div class="form-group">
                      <input type="text" placeholder="Assunto" name="subject"
                      value={subject} onChange={()=>setSubject()}
                      id="subject" class="form-control" required data-error="Por favor, insira o assunto"/>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group"> 
                      <textarea class="form-control" id="message" name="message"
                      value={message} onChange={()=>setMessage()}
                      placeholder="Sua Mensagem" rows="5" data-error="Escreva sua mensagem" required></textarea>
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="submit-button">
                      <button class="btn btn-common" id="form-submit" type="submit">Enviar</button>
                      <div id="msgSubmit" class="h3 text-center hidden"></div> 
                      <div class="clearfix"></div> 
                    </div>
                  </div>
                </div>            
              </form>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-12" id="#contact">
            <div class="contact-right-area wow fadeIn">
              
              <h2>Entrar em Contato</h2>
              <div class="contact-right">
                <div class="single-contact">
                  <div class="contact-icon">
                    <i class="lni-map-marker"></i>
                  </div>
                  <p>
                   R. Ten. Bernardes n° 790 - Centro, Jardim - Mato Grosso do Sul - Brasil, 79240-000
                   </p>
                </div>
                <div class="single-contact">
                  <div class="contact-icon">
                    <i class="lni-envelope"></i>
                  </div>
                  <p>ecosistemas.computacao@gmail.com</p>
                </div>
                <div class="single-contact">
                  <div class="contact-icon">
                    <i class="lni-phone-handset"></i>
                  </div>
                  <p>(67) 3251 3146</p>
                  <p>(67) 98448 5377</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  )
    

}

export default Contact;