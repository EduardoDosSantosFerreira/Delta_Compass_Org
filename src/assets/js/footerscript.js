// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
  var div = document.createElement("div");
  div.innerHTML = `
  <footer class="footer">
    <br>
    <div class="container">
      <div class="text-center">
        <img id="logo" src="src/assets/img/logo-white.png" alt="logo" />
        <h3>Delta Compass</h3>
      </div>
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="help">
            <h4>Help</h4>
            <ul class="list-inline">
              <li class="list-inline-item"><a href="#">Support</a></li>
              <li class="list-inline-item"><a href="#">FAQS</a></li>
              <li class="list-inline-item"><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <div class="help">
            <h4>Policies</h4>
            <ul class="list-inline">
              <li class="list-inline-item"><a href="#">Terms</a></li>
              <li class="list-inline-item"><a href="#">Privacy</a></li>
              <li class="list-inline-item"><a href="#">Cookies Settings</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="thicker-hr my-4">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="social">
            <h4>Redes Sociais</h4>
            <ul>
              <a href="#" id="linksftr"><img src="src/assets/img/instagram.png" id="fticon" alt="instagram"></a>
              <a href="#" id="linksftr"><img src="src/assets/img/facebook.png" id="fticon" alt="facebook"></i></a>
              <a href="#" id="linksftr"><img src="src/assets/img/twitter.png" id="fticon" alt="X"></i></a>
              <a href="#" id="linksftr"><img src="src/assets/img/github.png" id="fticon" alt="Github"></i></a>
            </ul>
          </div>
        </div>
        <div class="col-md-6 text-center text-md-right">
          <p>&copy; 2024 Delta Compass. Todos os direitos reservados.</p>
        </div>
      </div>
  </footer>
    `;

  document.body.appendChild(div);
}

adicionarLoginAoDOM();