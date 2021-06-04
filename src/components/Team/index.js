import React from 'react';

import Image from 'next/image';


function Team() {
  return (
    <section id="team" class="section-padding text-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-header text-center">
              <h2 class="section-title wow fadeInDown" data-wow-delay="0.1s">Nosso Time</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="team-item text-center">
              <div class="team-img">
                <Image
                  class="img-fluid"
                  src="/assets/img/team/team-01.jpg"
                  alt="team"
                  width={350}
                  height={350}
                  // layout= "fill"
                />
                {/* <img  src="../../img/team/team-01.jpg" alt=""/> */}
                <div class="team-overlay">
                  <div class="overlay-social-icon text-center">
                    <ul class="social-icons">
                      <li><a href="https://github.com/francis-cantarin"><i class="lni-github" aria-hidden="true"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/francis-cantarin-b9466212b/"><i class="lni-linkedin-filled" aria-hidden="true"></i></a></li>
                      <li><a href="https://www.instagram.com/franciscantarin/"><i class="lni-instagram-filled" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="info-text">
                <h3><a href="#">Francis Cantarin</a></h3>
                <p>CEO, Ecosistemas Computação</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="team-item text-center">
              <div class="team-img">
                {/* <img class="img-fluid" src="../../img/team/team-01.jpg" alt=""/> */}
                <Image
                  class="img-fluid"
                  src="/assets/img/team/team-02.jpg"
                  alt="team"
                  width={350}
                  height={350}
                  // layout= "fill"
                />
                <div class="team-overlay">
                  <div class="overlay-social-icon text-center">
                    <ul class="social-icons">
                      <li><a href="#"><i class="lni-github" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i class="lni-linkedin-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i class="lni-instagram-filled" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="info-text">
                <h3><a href="#">Anderson</a></h3>
                <p>Gerente, Ecosistemas Computação</p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="team-item text-center">
              <div class="team-img">
                {/* <img class="img-fluid" src="../../img/team/team-01.jpg" alt=""/> */}
                <Image
                  class="img-fluid"
                  src="/assets/img/team/team-03.jpg"
                  alt="team"
                  width={350}
                  height={350}
                  // layout= "fill"
                />
                <div class="team-overlay">
                  <div class="overlay-social-icon text-center">
                    <ul class="social-icons">
                      <li><a href="#"><i class="lni-github" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i class="lni-linkedin-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i class="lni-instagram-filled" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="info-text">
                <h3><a href="#">Paul Kowalsy</a></h3>
                <p>Lead Designer, TNW</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Team;