document.addEventListener("DOMContentLoaded", function(event){
  //create button node
  event.preventDefault();
  addPix();
})

function addPix(){
  var alb1 = document.getElementById("alb1");
  var alb2 = document.getElementById("alb2");
  var alb3 = document.getElementById("alb3");

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4) {
      if(xhr.status < 400){
        var results = JSON.parse(xhr.responseText);
        var arr = results.results;
        var img1 = arr[Math.floor(Math.random()*arr.length)].cover_art;
        var img2 = arr[Math.floor(Math.random()*arr.length)].cover_art;
        var img3 = arr[Math.floor(Math.random()*arr.length)].cover_art;
        for(var i = 0; i < 28; i++){
          if(img1 === img2){
            img2 = arr[Math.floor(Math.random()*arr.length)].cover_art;
          }
          if(img3 === img1 ||  img3 === img2){
            img3 = arr[Math.floor(Math.random()*arr.length)].cover_art;
          }
        }
          alb1.innerHTML = "<img src=\'images/" + img1 + "\'/>";
          alb2.innerHTML = "<img src=\'images/" + img2 + "\'/>";
          alb3.innerHTML = "<img src=\'images/" + img3 + "\'/>";

          // head.appendChild(inner1)
          console.log(alb3);
      }
    }
  }
  xhr.open("GET", "https://lit-fortress-6467.herokuapp.com/object");
  xhr.send();
}
