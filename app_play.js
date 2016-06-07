document.addEventListener("DOMContentLoaded", function(event){
  //create button node
  event.preventDefault();
  var count = {};
  count.results = [];

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
          window.location.reload();
        }
      }
    }
    xhr1.open("POST", "https://lit-fortress-6467.herokuapp.com/post");
    // xhr1.setRequestHeader('Content-type', 'application/json');
    xhr1.send(count);
  })
})


function clear(){
  $('#butt1').click(function(){
      window.location.reload();
  })
}


var input;
$(document).ready(function(){
  $('#artb').click(function(){
    input = $('#art').val();

  $.ajax({
    method: "GET",
    url: "https://api.spotify.com/v1/search?q=" + input + "&type=album&market=US",
    success: function(results){
      var arr = results.albums.items;
      console.log(arr[0].name);
      for (var i = 0; i < arr.length; i++){
        var add = $(`<button><div class="pics"><img src="${arr[i].images[0].url}" id="${arr[i].name}"/></div></button>`)
        $("#container2").append(add);
          }
          $('img').click(function(){
            $('#text').append(`<p>${this.id}</p>`);
              $(this).remove();
          })
        }
      })
  })
})
