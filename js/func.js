// cresce o card
function crescercard(botao) {
  const card = botao.closest('.card');
  card.classList.toggle('expanded');
  botao.textContent = card.classList.contains('expanded') ? 'Menos' : 'Mais';
}

// mostra o formulário
document.addEventListener('DOMContentLoaded', () => {
    const botaoSugerir = document.querySelector('.botaosugerir');
    const formSugestao = document.getElementById('formSugestao');
    const fundoEscuro = document.getElementById('fundoEscuro')
    botaoSugerir.addEventListener('click', () => {
        formSugestao.style.display = 'flex';
        fundoEscuro.style.display = 'block';
    });
});

// parte da pesquisa
document.addEventListener("DOMContentLoaded", function () {
    const inputPesquisa = document.getElementById("pesquisa");
    const cards = document.querySelectorAll(".card");

    inputPesquisa.addEventListener("input", function () {
        const termo = inputPesquisa.value.toLowerCase();

        cards.forEach(card => {
            const titulo = card.querySelector(".cardtitulo").textContent.toLowerCase();
            const descricao = card.querySelector(".carddescricao").textContent.toLowerCase();

            if (titulo.includes(termo) || descricao.includes(termo)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// parte botão voltar
  const btn = document.getElementById("linkvtopojs");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });