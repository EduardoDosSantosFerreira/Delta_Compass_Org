// Dark Mode
const darkModeSwitch = document.getElementById('darkModeSwitch');
const body = document.body;
darkModeSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});
function toggleDarkMode() {
    var darkModeSwitch = document.getElementById('darkModeSwitch');
    document.body.classList.toggle('dark-mode', darkModeSwitch.checked);
  }
// Dark Mode End

// Categoria

const categoriaLinks = document.querySelectorAll('.categoria-link');
const projetos = document.querySelectorAll('#projetos > div');

categoriaLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const categoria = link.getAttribute('data-categoria');

        projetos.forEach(projeto => {
            if (projeto.id === `projetos-${categoria}`) {
                projeto.style.opacity = '0';
                projeto.style.transition = 'opacity 0.5s';
                setTimeout(() => {
                    projeto.style.display = 'block';
                    setTimeout(() => {
                        projeto.style.opacity = '1';
                    }, 50);
                }, 500);
            } else {
                projeto.style.opacity = '0';
                setTimeout(() => {
                    projeto.style.display = 'none';
                }, 500);
            }
        });
    });
});