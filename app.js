document.addEventListener("DOMContentLoaded", function(event){
  //create button node
  addButton();
  var btn1 = document.getElementById("btn");
  btn1.addEventListener("click", function(){
    addUl()
  })
})


function addButton(){
  var btn = document.getElementById("btn");
  var button = document.createElement("button")
  button.innerHTML = "Click Me";
  console.log(button);
  btn.appendChild(button);
}

function addUl(){
  var ul = document.getElementById("this");
  var head = document.createElement("ul");
  var inner1 = document.createElement("li");
  var inner2 = document.createElement("li");
  var inner3 = document.createElement("li");

  inner1.innerHTML = "One"
  inner2.innerHTML = "Two"
  inner3.innerHTML = "Three"

  head.appendChild(inner1)
  head.appendChild(inner2)
  head.appendChild(inner3)

  ul.appendChild(head);
  console.log(ul);
}
