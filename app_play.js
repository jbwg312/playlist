document.addEventListener("DOMContentLoaded", function(event){
  //create button node
  event.preventDefault();
  addPix();

})

//accessed them through arr = results
//have 6 made buttons

function addPix(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4) {
      if(xhr.status < 400){
        var results = JSON.parse(xhr.responseText);
        arr = results.results;
        var container = document.getElementById("container2")
          addAll(arr, container);

          var btn1 = document.getElementById('0');
          var btn2 = document.getElementById('1');
          var btn3 = document.getElementById('2');
          var btn4 = document.getElementById('3');
          var btn5 = document.getElementById('4');
          var text = document.getElementById('text')

          btn1.addEventListener("click", function(event){
            var p = document.createElement("p");
            p.innerHTML = arr[0].artist + ": " + arr[0].title;
            text.appendChild(p);
            btn1.remove();
          })
          btn2.addEventListener("click", function(event){
            var p = document.createElement("p");
            p.innerHTML = arr[1].artist + ": " + arr[1].title;
            text.appendChild(p);
            btn2.remove();
          })
          btn3.addEventListener("click", function(event){
            var p = document.createElement("p");
            p.innerHTML = arr[2].artist + ": " + arr[2].title;
            text.appendChild(p);
            btn3.remove();
          })
          btn4.addEventListener("click", function(event){
            var p = document.createElement("p");
            p.innerHTML = arr[3].artist + ": " + arr[3].title;
            text.appendChild(p);
            btn4.remove();
          })
          btn5.addEventListener("click", function(event){
            var p = document.createElement("p");
            p.innerHTML = arr[4].artist + ": " + arr[4].title;
            text.appendChild(p);
            btn5.remove();
          })
      }
    }
  }
  xhr.open("GET", "https://lit-fortress-6467.herokuapp.com/object");
  xhr.send();
}

function clear(){
  var clear = document.getElementById("butt1");
  clear.addEventListener("click", function(){
      
  })
}

function addAll(arr, container){
  arr.forEach(function(alb ,i){
    var div = document.createElement("div");
    var butt = document.createElement("button")
    div.className = "pics";
    div.innerHTML = "<img class=\'img\' src=\'images/" + alb.cover_art + "\'/>";
    butt.id = i;
    console.log(butt);
    butt.appendChild(div);
    container.appendChild(butt);
  })
}
