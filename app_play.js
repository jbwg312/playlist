
document.addEventListener("DOMContentLoaded", function(event){
  //create button node
  event.preventDefault();
  var count = {};
  count.results = [];

  addPix(count);
  clear();

  var btn_sub = document.getElementById("butt2");

  btn_sub.addEventListener("click", function(){
    var xhr1 = new XMLHttpRequest();
    xhr1.onreadystatechange = function (){
      if(xhr1.readyState === 4){
        if(xhr1.status < 400){
          console.log(xhr1.status);
          console.log(xhr1.readyState);

          alert(xhr1.responseText);
        }
      }
    }
    xhr1.open("POST", "https://lit-fortress-6467.herokuapp.com/post");
    // xhr1.setRequestHeader('Content-type', 'application/json');
    xhr1.send(count);
  })
})

//accessed them through arr = results
//have 6 made buttons

function addPix(count){
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
          var text = document.getElementById('text');



          btn1.addEventListener("click", function(event){
            var p = document.createElement("p");
            p.innerHTML = arr[0].artist + ": " + arr[0].title;
            count.results.push(arr[0]);
            text.appendChild(p);
            btn1.remove();

          })
          btn2.addEventListener("click", function(event){
            var p = document.createElement("p");
            p.innerHTML = arr[1].artist + ": " + arr[1].title;
            count.results.push(arr[1]);
            text.appendChild(p);
            btn2.remove();
          })
          btn3.addEventListener("click", function(event){
            var p = document.createElement("p");
            p.innerHTML = arr[2].artist + ": " + arr[2].title;
            count.results.push(arr[2]);
            text.appendChild(p);
            btn3.remove();
          })
          btn4.addEventListener("click", function(event){
            var p = document.createElement("p");
            p.innerHTML = arr[3].artist + ": " + arr[3].title;
            count.results.push(arr[3]);
            text.appendChild(p);
            btn4.remove();
          })
          btn5.addEventListener("click", function(event){
            var p = document.createElement("p");
            p.innerHTML = arr[4].artist + ": " + arr[4].title;
            count.results.push(arr[4]);
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
      window.location.reload();
  })
}

function addAll(arr, container){
  container.innerHTML = "";
  arr.forEach(function(alb ,i){
    var div = document.createElement("div");
    var butt = document.createElement("button")
    div.className = "pics";
    div.innerHTML = "<img class=\'img\' src=\'images/" + alb.cover_art + "\'/>";
    butt.id = i;
    butt.appendChild(div);
    container.appendChild(butt);
  })
}
