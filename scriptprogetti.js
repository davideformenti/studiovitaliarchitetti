




$(document).ready(function() {
    document.getElementById("mySidenav").style.width = "0";
    var min = Math.ceil(0);
    var max = Math.floor(4);
    var rndCol = Math.floor(Math.random() * (max - min +1)) + min;
    const coloriBg = ["#f5997e", "#ebcbc8", "#8010c0",  "#155e95", "#a0707d"];
    const coloriTxt = ["#a80030", "#195c64", "#ff01c1", "#abeeff", "#99121b"];
    
    $("body").css("background-color",coloriBg[rndCol]);
    $(".colTxt").css("color",coloriTxt[rndCol]);
    $(".myModal").css("color",coloriTxt[rndCol]);
    $(".modal-content").css("background-color",coloriBg[rndCol]);
    $(".barra").css("background-color",coloriBg[rndCol]);
    $(".sidenav").css("background-color",coloriTxt[rndCol]);
    $(".bottoncino").css("background-color",coloriBg[rndCol]);
    $(".sidenav").css("color",coloriBg[rndCol]);
    $(".sidenav a").css("color",coloriBg[rndCol]);
    $(".bottoncino").css("color",coloriTxt[rndCol]);
    $(".spegni").css("color",coloriTxt[rndCol]);
    $(".sinistro").css("color",coloriTxt[rndCol]);
    $(".carousel-control-next-icon").css("color",coloriTxt[rndCol]);
    $(".st0").css("stroke",coloriTxt[rndCol]);
     $(".st1").css("stroke",coloriTxt[rndCol]);
    $(".st3").css("stroke",coloriTxt[rndCol]);
     $(".st4").css("stroke",coloriTxt[rndCol]);
    
    
    
    
    function getBrowserSize(){
       var w, h;

         if(typeof window.innerWidth != 'undefined')
         {
          w = window.innerWidth; //other browsers
          h = window.innerHeight;
         } 
         else if(typeof document.documentElement != 'undefined' && typeof      document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) 
         {
          w =  document.documentElement.clientWidth; //IE
          h = document.documentElement.clientHeight;
         }
         else{
          w = document.body.clientWidth; //IE
          h = document.body.clientHeight;
         }
       return {'width':w, 'height': h};
}


    

    });



// EXAMPLE json da cambiare //
const petsData = [
    {
       "Num": 1,
   "Name": "Progetto1",
   "Date": "10.2.09",
   "Cliente": "Cliente01",
   "Description": "LoremIpsum",
   "Image1": "assets/01.jpg",
   "Image2": "assets/02.jpg",
   "Image3": "assets/03.jpg",
    "Image4": "assets/04.jpg",
   "Image5": "assets/05.jpg",
   "Image6": "assets/06.jpg",
    "Image7": "assets/07.jpg",
   "Image8": "assets/08.jpg",
   "Image9": "assets/09.jpg"
 },
 {
   "Num": 2,
   "Name": "Titolo Prova 2",
   "Date": "6.12.09",
   "Cliente": "Cliente02",
   "Description": "LoremIpsum",
   "Image1": "assets/5.png",
   "Image2": "assets/7.png",
   "Image3": "assets/9.png"
 },
 {
   "Num": 3,
   "Name": "Titolo di prova 3",
   "Date": "5.3.10",
   "Cliente": "Cliente03",
   "Description": "LoremIpsum",
   "Image": "assets/3.png"
 },
 {
   "Num": 4,
   "Name": "Titolo di prova 4",
   "Date": "5.3.11",
   "Cliente": "Cliente04",
   "Description": "LoremIpsum",
   "Image": "assets/4.png"
 },
 {
   "Num": 5,
   "Name": "Titolo di prova 5",
   "Date": "5.3.12",
   "Cliente": "Cliente05",
   "Description": "LoremIpsum",
   "Image": "assets/5.png"
 },
 {
   "Num": 6,
   "Name": "Titolo di prova 6",
   "Date": "5.3.13",
   "Cliente": "Cliente06",
   "Description": "LoremIpsum",
   "Image": "assets/6.png"
 },
 {
   "Num": 7,
   "Name": "Titolo di prova 7",
   "Date": "5.3.14",
   "Cliente": "Cliente07",
   "Description": "LoremIpsum",
   "Image": "assets/7.png"
 },
 {
   "Num": 8,
   "Name": "Titolo di prova 8",
   "Date": "5.3.15",
   "Cliente": "Cliente08",
   "Description": "LoremIpsum",
   "Image": "assets/8.png"
 },
 {
   "Num": 9,
   "Name": "Titolo di prova 9",
   "Date": "5.3.16",
   "Cliente": "Cliente09",
   "Description": "LoremIpsum",
   "Image": "assets/9.png"
 },
 {
   "Num": 10,
   "Name": "Titolo di prova 10",
   "Date": "5.3.17",
   "Cliente": "Cliente10",
   "Description": "LoremIpsum",
   "Image": "assets/10.png"
 },
 {
   "Num": 11,
   "Name": "Titolo di prova 11",
   "Date": "5.3.18",
   "Cliente": "Cliente11",
   "Description": "LoremIpsum",
   "Image": "assets/11.png"
 },
 {
   "Num": 12,
   "Name": "Titolo di prova 12",
   "Date": "5.3.19",
   "Cliente": "Cliente12",
   "Description": "LoremIpsum",
   "Image": "assets/12.png"
 },
 {
   "Num": 13,
   "Name": "Titolo di prova 13",
   "Date": "5.3.20",
   "Cliente": "Cliente13",
   "Description": "LoremIpsum",
   "Image": "assets/13.png"
 },
 {
   "Num": 14,
   "Name": "Titolo di prova 14",
   "Date": "5.3.21",
   "Cliente": "Cliente14",
   "Description": "LoremIpsum",
   "Image": "assets/14.png"
 },
 {
   "Num": 15,
   "Name": "Titolo di prova 15",
   "Date": "5.3.22",
   "Cliente": "Cliente15",
   "Description": "LoremIpsum",
   "Image": "assets/15.png"
 },
 {
   "Num": 16,
   "Name": "Titolo di prova 16",
   "Date": "5.3.23",
   "Cliente": "Cliente16",
   "Description": "LoremIpsum",
   "Image": "assets/16.png"
 },
 {
   "Num": 17,
   "Name": "Titolo di prova 17",
   "Date": "5.3.24",
   "Cliente": "Cliente17",
   "Description": "LoremIpsum",
   "Image": "assets/17.png"
 } 
    ]


///////////////////
// GRID TEMPLATE //
function memeTemplate(pet) {
    return `
<div class="animal" name="${pet.Num}">
<p class="pet-name" data-name="${pet.Name}" id="${pet.Num}" data-image1="${pet.Image1}" data-image2="${pet.Image2}" data-image3="${pet.Image3}" onclick="funzione()" data-cliente="${pet.Cliente}" data-propaganda="${pet.Date}" data-spiegazione="${pet.Description}" data-template="${pet.Template}">${pet.Name}
</p>
</div>
`
}



document.getElementById("app").innerHTML = `
${petsData.map(memeTemplate).join('')}
`


////// MODALS ////////
//pronz

var i = document.getElementsByName("${pet.Num}");

// Modal open and fill //
//var nome = document.getElementsByClassName("pet-name")[prova].getAttribute("data-name");

// Get the modal //
var modal = document.getElementById("myModal");

// Get the button that opens the modal //
var btn = document.getElementsByClassName("pet-name");


// Get the <span> element that closes the modal //
var span = document.getElementsByClassName("spegni")[0];


var prova;
var ribolla;
function theFunction(gigi)
{prova = gigi.target.id ;
 ribolla = String(prova);
 nome = document.getElementById(ribolla).getAttribute("data-Name");
 immagine1 = document.getElementById(ribolla).getAttribute("data-image1");
 immagine2 = document.getElementById(ribolla).getAttribute("data-image2");
 immagine3 = document.getElementById(ribolla).getAttribute("data-image3");

 console.log(gigi)
 console.log(gigi.target.id -1)


 var img1 = document.createElement("img");
 img1.src = immagine1;
 img1.setAttribute('class', 'normale');
 var src = document.getElementById("immagine1");
 src.appendChild(img1); 
 
 
 var img2 = document.createElement("img");
 img2.src = immagine2;
 img2.setAttribute('class', 'normale');
 var src = document.getElementById("immagine2");
 src.appendChild(img2); 
 
 
 var img3 = document.createElement("img");
 img3.src = immagine3;
 img3.setAttribute('class', 'normale');
 var src = document.getElementById("immagine3");
 src.appendChild(img3); 
 

}

function funzione() {
    modal.style.display = "block";
    theFunction(event);

    console.log(event)
}


// When the user clicks on the button, open the modal //
btn.onclick = function() {
    modal.style.display = "block";
    // console.log(nome);
}


// When the user clicks on <span> (x), close the modal //
span.onclick = function() {
    modal.style.display = "none";
    //codice per ripulire il modal dall'immagine
    var imgRemover1 = document.getElementById("immagine1")
        imgRemover1.removeChild(imgRemover1.childNodes[1]);
        var imgRemover2 = document.getElementById("immagine2")
        imgRemover2.removeChild(imgRemover2.childNodes[1]);
        var imgRemover3 = document.getElementById("immagine3")
        imgRemover3.removeChild(imgRemover3.childNodes[1]);
     $(".pet-name").removeClass("grassetto");
    
    //FINE codice per ripulire il modal dall'immagine

}

// When the user clicks anywhere outside of the modal, close it //

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        var imgRemover1 = document.getElementById("immagine1")
        imgRemover1.removeChild(imgRemover1.childNodes[1]);
        var imgRemover2 = document.getElementById("immagine2")
        imgRemover2.removeChild(imgRemover2.childNodes[1]);
        var imgRemover3 = document.getElementById("immagine3")
        imgRemover3.removeChild(imgRemover3.childNodes[1]);
         $(".pet-name").removeClass("grassetto");
    }});


//---------------------//
// Draggable //



///////////////////////////////////
////////MOUSE OVER SU HK///////////

function sparisci() {
    document.getElementById("demo").style.display = "none";
} 

$(function(){
   $(".pet-name").click(function () {
       if  ($(".pet-name").hasClass("grassetto"))
            $(".pet-name").removeClass("grassetto");
       
      $(this).addClass("grassetto");
      
   });
})






////////////////SIDEBAR///////////////

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "17rem";
}





