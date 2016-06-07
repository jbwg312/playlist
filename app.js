$(document).ready(function(){
  $.ajax({
    method: "GET",
    url: "https://api.spotify.com/v1/search?q=adele&type=album&market=US",
    success: function(results){
      var arr = results.albums.items;

      var img1 = arr[Math.floor(Math.random()*arr.length)].images[0].url;
      var img2 = arr[Math.floor(Math.random()*arr.length)].images[0].url;
      var img3 = arr[Math.floor(Math.random()*arr.length)].images[0].url;
      for(var i = 0; i < 28; i++){
        if(img1 === img2){
          img2 = arr[Math.floor(Math.random()*arr.length)].images[0].url;
        }
        if(img3 === img1 ||  img3 === img2){
          img3 = arr[Math.floor(Math.random()*arr.length)].images[0].url;
        }
      }
      $('#alb1').html("<img src=\'" + img1 + "\'/>");
      $('#alb2').html("<img src=\'" + img2 + "\'/>");
      $('#alb3').html("<img src=\'" + img3 + "\'/>");

    }
  })
})
