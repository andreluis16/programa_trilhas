
//Controla o Tamanho da fonte.
var fontSize = 16
function fontBigger(){
    fontSize += 2;
    divs = document.getElementsByTagName("div")
    for (let div of divs) {
        div.style.fontSize = fontSize+"px"
    }

}
function fontLower(){
    fontSize -= 2;
    divs = document.getElementsByTagName("div")
    for (let div of divs) {
        div.style.fontSize = fontSize+"px"
    }

}


function darkTheme() {
    var body = document.body
   console.log(body);
    body.classList.toggle("dark-mode-body")
    
  }

  function header() {
    var header = document.getElementById("header")
    console.log(header)
    header.classList.toggle("dark-mode-header");
  }
