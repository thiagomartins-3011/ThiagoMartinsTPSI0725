/* ================================
   SoundStore — JavaScript
   ================================ */


/* ================================
   1. MENU HAMBURGER (mobile)
   ================================ */

const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');

// abre menu hamburguer
if (hamburger) {
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('aberto');
    navMobile.classList.toggle('aberto');
  });
}

// fecha
document.querySelectorAll('.nav-mobile a').forEach(function (link) {
  link.addEventListener('click', function () {
    hamburger.classList.remove('aberto');
    navMobile.classList.remove('aberto');
  });
});


/* ================================
   2. link navbar
   ================================ */

// marca o link da pagina na navbar
const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (link) {
  const hrefPagina = link.getAttribute('href').split('/').pop();
  if (hrefPagina === paginaAtual) {
    link.classList.add('ativo');
  }
});


/* ================================
   3. lightbox (galeria.html)
   ================================ */

const lightbox = document.getElementById('lightbox');
const lbImagem = document.getElementById('lbImagem');
const lbTitulo = document.getElementById('lbTitulo');
const lbDescricao = document.getElementById('lbDescricao');
const lbFechar = document.getElementById('lbFechar');

// lightbox click
document.querySelectorAll('.galeria-item').forEach(function (item) {
  item.addEventListener('click', function () {
    lbImagem.innerHTML = `<img src="${item.dataset.imagem}" alt="${item.dataset.titulo}">`;
    lbTitulo.textContent = item.dataset.titulo;
    lbDescricao.textContent = item.dataset.descricao;

    lightbox.classList.add('aberto');
    document.body.style.overflow = 'hidden'; // impede scroll
  });
});

// fechar no X
if (lbFechar) {
  lbFechar.addEventListener('click', fecharLightbox);
}

// fechar fora
if (lightbox) {
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) fecharLightbox();
  });
}

// fechar no esc
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && lightbox && lightbox.classList.contains('aberto')) {
    fecharLightbox();
  }
});

function fecharLightbox() {
  lightbox.classList.remove('aberto');
  document.body.style.overflow = ''; // restaura o scroll
}


/* ================================
   4. validacao (contato.html)
   ================================ */

const formulario = document.getElementById('formulario');
const sucessoForm = document.getElementById('sucessoForm');

if (formulario) {
  formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // impede o envio real da página

    let valido = true;

    // campos contato
    const campos = [
      { id: 'nome', erroId: 'erroNome', msg: 'Por favor, insere o teu nome.' },
      { id: 'email', erroId: 'erroEmail', msg: 'Por favor, insere um email válido.' },
      { id: 'assunto', erroId: 'erroAssunto', msg: 'Por favor, seleciona um assunto.' },
      { id: 'mensagem', erroId: 'erroMensagem', msg: 'Por favor, escreve a tua mensagem.' },
    ];

    campos.forEach(function (campo) {
      const input = document.getElementById(campo.id);
      const erro = document.getElementById(campo.erroId);

      // limpa erros
      input.classList.remove('erro-input');
      erro.classList.remove('visivel');

      // verifica vazio
      if (!input.value.trim()) {
        input.classList.add('erro-input');
        erro.textContent = campo.msg;
        erro.classList.add('visivel');
        valido = false;
        return;
      }

      // regex
      if (campo.id === 'email') {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(input.value.trim())) {
          input.classList.add('erro-input');
          erro.textContent = 'Insere um endereço de email válido (ex: nome@email.com).';
          erro.classList.add('visivel');
          valido = false;
        }
      }
    });

    // mensagem envio
    if (valido) {
      formulario.style.display = 'none';
      sucessoForm.classList.add('visivel');
    }
  });

  // Remove o erro visual quando o utilizador começa a escrever no campo
  formulario.querySelectorAll('input, select, textarea').forEach(function (input) {
    input.addEventListener('input', function () {
      input.classList.remove('erro-input');
      const erro = document.getElementById(input.id.replace(input.id[0], 'erro' + input.id[0].toUpperCase()));
      if (erro) erro.classList.remove('visivel');
    });
  });
}
