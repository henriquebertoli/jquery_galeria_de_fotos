$(document).ready(function () { /*jquery inicio*/
  $('header button').click(function () {/*jquery seleciona botão do header, no evento click abre o form*/
    $('form').slideDown(); /* ao clicar o form abre para baixo*/
  });

  $('#botao-cancelar').click(function () {/*jquery acessa botao cancelar evento click*/
    /*Ao clicar, jquery acessa 'e fecha o form'*/
    $('form').slideUp();
  });
/*acessa o form ,ao enviar previne o reset default */
  $('form').on('submit', function (e) {
    e.preventDefault();

    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
    const novoItem = $('<li style = "display:none"></li>');
/**/

    $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
    $(`
              <div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
            </a>
        `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(2000);
    $('#endereco-imagem-nova').val('');
  });
});
