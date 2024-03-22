(function ($) {
    // Selecionar elementos
    const newsList = $(".noticias ul");
    const newsItems = $(".noticias ul li");
  
    // Função para rolar suavemente para um item de notícia
    function scrollToNewsItem(item) {
      const itemOffset = item.offset().top;
      $("html, body").animate({
        scrollTop: itemOffset - 100, // Ajustar para compensar o cabeçalho
      }, 800, "swing"); // Duração e tipo de easing personalizáveis
    }
  
    // Adicionar evento de clique aos links das notícias
    newsItems.find("a").on("click", function (e) {
      e.preventDefault();
      const targetItem = $(this).parent();
      scrollToNewsItem(targetItem);
    });
  
  })(jQuery);
  