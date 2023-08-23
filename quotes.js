let button = document.querySelector("button");
let text = document.querySelector(".textspace");


let getQuote = ()=>{
   button.addEventListener("click", ()=>{

     fetch('https://api.kanye.rest/')
    .then(response => response.json())
     .then(data => text.textContent = data.quote);

    /* let xhr = new XMLHttpRequest;
     xhr.open("GET", "https://api.kanye.rest/", true);
     xhr.onload = ()=>{
         if(xhr.status === 200){
             text.textContent = xhr.responseText;
         }else{
             console.error(xhr.statusText);
         }
     };
    xhr.send();*/

    //alert("Kanye Loves You");
   }) 
}

getQuote();