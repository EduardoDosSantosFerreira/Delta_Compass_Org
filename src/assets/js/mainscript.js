// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement("div");
    div.innerHTML = `
    <main>
    <div class="container-fluid" style="background: linear-gradient(to right, #2E2BC2, #16145C); color: white;">
      <br>
      <br>
      <div class="row align-items-center justify-content-center">
        <div class="col-md-6" style="padding-left: 100px;">
          <h1>Delta-Compass</h1>
          <hr>
          <h4>Software de conversão de sensibilidade e automatização.</h4>
          <br>
          <button class="comic-button">Saiba mais</button>
        </div>
        <div class="col-md-6">
          <img src="src/assets/img/6491983-removebg-preview 1.png" style="width: 500px;" class="img-fluid" alt="Bem-Vindo">
        </div>
      </div>
      <br>
      <br>
    </div>
    <div class="container">
      <br>
      <br>
      <h1 class="title">Introdução</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium repellendus sit saepe vero
        necessitatibus! Iusto ab aut, obcaecati corporis doloremque laudantium quis sit officiis odit magni eius inventore
        velit!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, iusto maxime! Et dolorum voluptate hic nesciunt
        minus? Est impedit nulla minima consequuntur dignissimos deserunt facere sequi sint reiciendis. Fuga, quis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium repellendus sit saepe vero
        necessitatibus! Iusto ab aut, obcaecati corporis doloremque laudantium quis sit officiis odit magni eius inventore
        velit!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, iusto maxime! Et dolorum voluptate hic nesciunt
        minus? Est impedit nulla minima consequuntur dignissimos deserunt facere sequi sint reiciendis. Fuga, quis?
      </p>
    </div>
    <main class="container mt-5">
      <div id="categoria" class="container-fluid" style="align-items: center; text-align: center;" data-aos="fade-down">
        <h1 class="title">Equipe de desenvolvedores</h1>
        <br>
        <br>
        <div class="row">
          <div class="col-lg" data-aos="fade-top">
            <a href="#" class="categoria-link" data-categoria="arduinos">
              <img src="src/assets/img/4115337-removebg-preview 1.png" id="icones" alt="Arduinos" title="Arduinos" />
            </a>
            <h2 class="fw-normal">Design</h2>
          </div>
          <div class="col-lg" data-aos="fade-top">
            <a href="#" class="categoria-link" data-categoria="aplicativos">
              <img src="src/assets/img/3896509-Photoroom 1.png" id="icones" alt="Aplicativos" title="Aplicativos" />
            </a>
            <h2 class="fw-normal">Front-End</h2>
          </div>
          <div class="col-lg" data-aos="fade-top">
            <a href="#" class="categoria-link" data-categoria="games">
              <img src="src/assets/img/6087298-Photoroom 1.png" id="icones" alt="Games" title="Games">
            </a>
            <h2 class="fw-normal">Back-End</h2>
          </div>
          <div class="col-lg" data-aos="fade-top">
            <a href="#" class="categoria-link" data-categoria="sites">
              <img src="src/assets/img/7016010-removebg-preview 1.png" id="icones" alt="Web-Sites" title="Web-Sites">
            </a>
            <h2 class="fw-normal">CEO</h2>
          </div>
        </div>
      </div>
      <div id="projetos">
        <div id="projetos-arduinos" style="display: none;">
          <h2 style="text-align: center;">Equipe de Projeto Design</h2>
        </div>
        <div id="projetos-aplicativos" style="display: none;">
          <h2 style="text-align: center;">Equipe de Projeto Front-End </h2>
        </div>
        <div id="projetos-games" style="display: none;">
          <h2 style="text-align: center;">Equipe de Projeto Back-End </h2>
        </div>
        <div id="projetos-sites" style="display: none;">
          <h2 style="text-align: center;">Equipe de Projeto CEO </h2>
          <section id="projects" class="projects sec-pad">
            <div class="main-container" data-aos="fade-down">
              <div class="projects__content">
                <div class="projects__row" data-aos="fade-top">
                  <div class="projects__row-img-cont">
                    <img src="../assets/img/sites/etec.png" alt="Software Screenshot" class="projects__row-img"
                      loading="lazy" />
                  </div>
                  <div class="projects__row-content" data-aos="fade-top">
                    <h3 class="projects__row-content-title">Etec de Itanhaém</h3>
                    <p class="projects__row-content-desc">
                      Site alternativo destinado a Escola Técnica Estadual de Itanhaém.
                    </p>
                    <a href="https://eduardodossantosferreira.github.io/project-etec/" class="comic-button" id="btnico"
                      target="_blank">Clique e Veja !</a>
                  </div>
                </div>
                <div class="projects__row" data-aos="fade-down">
                  <div class="projects__row-img-cont">
                    <img src="../assets/img/sites/delmes.png" alt="Software Screenshot" class="projects__row-img"
                      loading="lazy" />
                  </div>
                  <div class="projects__row-content">
                    <h3 class="projects__row-content-title">Destiny Monterrey</h3>
                    <p class="projects__row-content-desc">
                      Site de reserva de Viagens e Hoteis
                    </p>
                    <a href="https://eduardodossantosferreira.github.io/destino-del-mes/" class="comic-button" id="btnico"
                      target="_blank">Faça sua reserva !</a>
                  </div>
                </div>
                <div class="projects__row" data-aos="fade-down">
                  <div class="projects__row-img-cont">
                    <img id="img3" src="../assets/img/sites/barber.png" alt="Software Screenshot"
                      class="projects__row-img" loading="lazy" />
                  </div>
                  <div class="projects__row-content">
                    <h3 class="projects__row-content-title">Barber Shop</h3>
                    <p class="projects__row-content-desc">
                      Site para homens dar um tapa no visual, agende seu horário e venha fazer "o corte"
                    </p>
                    <a href="https://eduardodossantosferreira.github.io/project-barber/" class="comic-button" id="btnico"
                      target="_blank">Acesse Já !</a>
                  </div>
                </div>
              </div>
              <br>
              <div id="btn" class="container" data-aos="fade-down">
                <a href="./arduino.html">
                  <button class="comic-button">Veja mais Projetos!</button>
                </a>
              </div>
              <br>
          </section>
        </div>
      </div>
    </main>
  </main>
      `;
  
    document.body.appendChild(div);
  }
  
  adicionarLoginAoDOM();