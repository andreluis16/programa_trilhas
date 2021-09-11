var slideIndex = 0;

function showSlides(n) {

  slideIndex = n;
  if (slideIndex >= $(".mySlides").length) {
    slideIndex = 0;
  }
  //Esconde todos os slides
  $(".mySlides").hide();

  //Tira o active do demo
  $(".demo").removeClass("active");

  //Mostra o slide atual
  $($(".mySlides")[slideIndex]).show(); 

  //Colocando o demo atual como ativo
  $($(".demo")[slideIndex]).addClass("active");

  //Pega o texto  do alt e joga no banner
  $("#caption").html($($(".demo")[slideIndex]).attr("alt"));

}
//essa funcão é executada quando o mySlides ja foi processado pelo browser 

$( ".mySlides" ).ready(function() {
    showSlides(0);

    $(".demo").on("click", function(event){
      clicked = $(event.target)[0];
      $(".demo").each(function(index, element){
        if(element === clicked){
          showSlides(index);
        }
      })
    })

    setInterval(function() {
      slideIndex += 1; 
      showSlides(slideIndex);
    }, 2000);
});

