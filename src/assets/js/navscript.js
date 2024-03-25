// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement("div");
    div.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" style="margin-right: 500px; margin-left: 50px;">
        <img id="logo" src="src/assets/img/logo-dark.png" alt="Delta Compass Logo" title="Delta Logo"
          class="d-inline-block align-text-top" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Parcerias</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projeto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Suporte</a>
          </li>
        </ul>
        <div class="form-check form-switch align-self-center mt-12">
          <input class="form-check-input" type="checkbox" id="darkModeSwitch" />
          <label class="form-check-label" for="darkModeSwitch">Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
      `;
  
    document.body.appendChild(div);
  }
  
  adicionarLoginAoDOM();