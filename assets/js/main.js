/* Spinplus — LP Tratamento de Ar Comprimido
   Menu mobile, filtro da vitrine, animação de entrada e ano do rodapé. */

(function () {
  'use strict';

  /* ------------------------------------------------------ menu mobile -- */
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var aberto = nav.classList.toggle('is-aberto');
      toggle.setAttribute('aria-expanded', String(aberto));
      toggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-aberto');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu');
      }
    });
  }

  /* ------------------------------------------- sombra do header fixo --- */
  var header = document.querySelector('.header');
  if (header) {
    var sombra = function () {
      header.classList.toggle('is-fixo', window.scrollY > 10);
    };
    sombra();
    window.addEventListener('scroll', sombra, { passive: true });
  }

  /* -------------------------------------------- filtro da vitrine ------ */
  var botoes = Array.prototype.slice.call(document.querySelectorAll('.filtro'));
  var produtos = Array.prototype.slice.call(document.querySelectorAll('.produto'));
  var vazio = document.getElementById('vitrine-vazia');

  function aplicarFiltro(familia) {
    var visiveis = 0;

    produtos.forEach(function (p) {
      var mostra = familia === 'todos' || p.dataset.familia === familia;
      p.hidden = !mostra;
      if (mostra) visiveis++;
    });

    if (vazio) vazio.hidden = visiveis > 0;

    botoes.forEach(function (b) {
      var ativo = b.dataset.filtro === familia;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
  }

  botoes.forEach(function (b) {
    b.addEventListener('click', function () {
      aplicarFiltro(b.dataset.filtro);
    });
  });

  /* Links "Ver modelos" dos cards de família filtram a vitrine ao rolar */
  document.querySelectorAll('.familia-link[data-filtro]').forEach(function (link) {
    link.addEventListener('click', function () {
      aplicarFiltro(link.dataset.filtro);
    });
  });

  /* ------------------------------------------- animação de entrada ----- */
  var alvos = document.querySelectorAll('.revelar');

  if (!('IntersectionObserver' in window)) {
    alvos.forEach(function (el) { el.classList.add('is-visivel'); });
  } else {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-visivel');
          obs.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    alvos.forEach(function (el) { obs.observe(el); });
  }

  /* ------------------------------------------------ ano do rodapé ------ */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = String(new Date().getFullYear());

  /* ----------------------------------------------------- formulário ---- */
  /* Placeholder: ao publicar, o <form> é substituído pelo shortcode do
     plugin. Enquanto isso, evita o submit vazio e sinaliza a pendência. */
  var form = document.getElementById('form-orcamento');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      alert('Formulário de demonstração. Substituir pelo shortcode do plugin antes de publicar (ver docs/PENDENCIAS.md).');
    });
  }
})();
