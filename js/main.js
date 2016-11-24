$(document).ready(function (){
  // var name = document.getElementById("name").value;
  // var comparar = document.getElementById("comprob");

  var imgArray =  [{img: "img-alumn/Crista.jpg", name:"Crista"},
                   {img: "img-alumn/lili.jpg", name: "Liliana"},
                   {img: "img-alumn/Paola.jpg", name: "Paola"},
                   {img: "img-alumn/shan.jpg", name: "Shantal"},
                   {img: "img-alumn/yare.jpg", name: "Yaredi"}];



  randomNumber = Math.floor((Math.random() * imgArray.length));
      baseUrl = "url('" + imgArray[randomNumber].img + "')";

    $(".slider").css('background-image', baseUrl);

});


 var hola;
   $("#crista").change(function(){
     hola = $(this).val();
     if (hola == "mx") {
       alert("Estoy en mexico");
     }
   });


