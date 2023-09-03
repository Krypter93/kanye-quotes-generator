let button = document.querySelector("button");
let text = document.querySelector(".textspace");


let getQuote = ()=>{
   button.addEventListener("click", ()=>{

     fetch('https://api.kanye.rest/')
    .then(response => response.json())
     .then(data => text.textContent = data.quote);
   }) 
}

getQuote();
