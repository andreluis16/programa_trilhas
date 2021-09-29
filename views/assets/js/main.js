
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


 function darkTheme(value) {
    
  

    const darkBody = document.getElementById(value) 
    if(darkBody){
        darkBody.classList.toggle('dark-mode')
    }
    
}
 
const aux = document.querySelector('.teste')
aux.addEventListener('click', ()=>{
    darkTheme('body')
    darkTheme('header')
    darkTheme('contact')
    darkTheme('navbar')
})