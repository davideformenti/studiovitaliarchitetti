




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
   "Name": "Titolo di Prova",
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
   "Num": 3,
   "Name": "Titolo di prova 3",
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
   "Num": 4,
   "Name": "Titolo di prova 4",
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
   "Num": 5,
   "Name": "Titolo di prova 5",
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
   "Num": 6,
   "Name": "Titolo di prova 6",
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
   "Num": 7,
   "Name": "Titolo di prova 7",
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
   "Num": 8,
   "Name": "Titolo di prova 8",
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
   "Num": 9,
   "Name": "Titolo di prova 9",
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
   "Num": 10,
   "Name": "Titolo di prova 10",
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
   "Num": 11,
   "Name": "Titolo di prova 11",
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
   "Num": 12,
   "Name": "Titolo di prova 12",
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
   "Num": 13,
   "Name": "Titolo di prova 13",
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
   "Num": 14,
   "Name": "Titolo di prova 14",
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
   "Num": 15,
   "Name": "Titolo di prova 15",
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
   "Num": 16,
   "Name": "Titolo di prova 16",
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
   "Num": 17,
   "Name": "Titolo di prova 17",
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
   "Num": 18,
   "Name": "Titolo di prova 18",
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
   "Num": 19,
   "Name": "Titolo di prova 19",
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
   "Num": 20,
   "Name": "Titolo di prova 20",
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
   "Num": 21,
   "Name": "Titolo di prova 21",
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
   "Num": 22,
   "Name": "Titolo di prova 22",
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
   "Num": 23,
   "Name": "Titolo di prova 23",
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
   "Num": 24,
   "Name": "Titolo di prova 24",
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
   "Num": 25,
   "Name": "Titolo di prova 25",
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
   "Num": 26,
   "Name": "Titolo di prova 26",
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
   "Num": 27,
   "Name": "Titolo di prova 27",
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
   "Num": 28,
   "Name": "Titolo di prova 28",
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
   "Num": 29,
   "Name": "Titolo di prova 29",
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
   "Num": 30,
   "Name": "Titolo di prova 30",
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
   "Num": 31,
   "Name": "Titolo di prova 31",
   "Image1": "assets/01.jpg",
   "Image2": "assets/02.jpg",
   "Image3": "assets/03.jpg",
   "Image4": "assets/04.jpg",
   "Image5": "assets/05.jpg",
   "Image6": "assets/06.jpg",
   "Image7": "assets/07.jpg",
   "Image8": "assets/08.jpg",
   "Image9": "assets/09.jpg"
 }
]

///////////////////
// GRID TEMPLATE //
function memeTemplate(pet) {
    return `
<div class="animal" name="${pet.Num}">
<p class="pet-name" data-name="${pet.Name}" id="${pet.Num}" data-image1="${pet.Image1}" data-image2="${pet.Image2}" data-image3="${pet.Image3}" data-image4="${pet.Image4}" data-image5="${pet.Image5}" data-image6="${pet.Image6}" data-image7="${pet.Image7}" data-image8="${pet.Image8}" data-image9="${pet.Image9}" onclick="funzione()" data-cliente="${pet.Cliente}" data-propaganda="${pet.Date}" data-spiegazione="${pet.Description}" data-template="${pet.Template}">${pet.Name}
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
 immagine4 = document.getElementById(ribolla).getAttribute("data-image4");
 immagine5 = document.getElementById(ribolla).getAttribute("data-image5");
 immagine6 = document.getElementById(ribolla).getAttribute("data-image6");
 immagine7 = document.getElementById(ribolla).getAttribute("data-image7");
 immagine8 = document.getElementById(ribolla).getAttribute("data-image8");
 immagine9 = document.getElementById(ribolla).getAttribute("data-image9");

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
 
 var img4 = document.createElement("img");
 img4.src = immagine3;
 img4.setAttribute('class', 'normale');
 var src = document.getElementById("immagine4");
 src.appendChild(img4);
 
 var img5 = document.createElement("img");
 img5.src = immagine5;
 img5.setAttribute('class', 'normale');
 var src = document.getElementById("immagine5");
 src.appendChild(img5);
 
 var img6 = document.createElement("img");
 img6.src = immagine6;
 img6.setAttribute('class', 'normale');
 var src = document.getElementById("immagine6");
 src.appendChild(img6);
 
 var img7 = document.createElement("img");
 img7.src = immagine3;
 img7.setAttribute('class', 'normale');
 var src = document.getElementById("immagine7");
 src.appendChild(img7);
 
 var img8 = document.createElement("img");
 img8.src = immagine8;
 img8.setAttribute('class', 'normale');
 var src = document.getElementById("immagine8");
 src.appendChild(img8);
 
 var img9 = document.createElement("img");
 img9.src = immagine9;
 img9.setAttribute('class', 'normale');
 var src = document.getElementById("immagine9");
 src.appendChild(img9);
 

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
    var imgRemover4 = document.getElementById("immagine4")
        imgRemover4.removeChild(imgRemover4.childNodes[1]);
    var imgRemover5 = document.getElementById("immagine5")
        imgRemover5.removeChild(imgRemover5.childNodes[1]);
    var imgRemover6 = document.getElementById("immagine6")
        imgRemover6.removeChild(imgRemover6.childNodes[1]);
    var imgRemover7 = document.getElementById("immagine7")
        imgRemover7.removeChild(imgRemover7.childNodes[1]);
    var imgRemover8 = document.getElementById("immagine8")
        imgRemover8.removeChild(imgRemover8.childNodes[1]);
    var imgRemover9 = document.getElementById("immagine9")
        imgRemover9.removeChild(imgRemover9.childNodes[1]);    
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
    var imgRemover4 = document.getElementById("immagine4")
        imgRemover4.removeChild(imgRemover4.childNodes[1]);
    var imgRemover5 = document.getElementById("immagine5")
        imgRemover5.removeChild(imgRemover5.childNodes[1]);
    var imgRemover6 = document.getElementById("immagine6")
        imgRemover6.removeChild(imgRemover6.childNodes[1]);
    var imgRemover7 = document.getElementById("immagine7")
        imgRemover7.removeChild(imgRemover7.childNodes[1]);
    var imgRemover8 = document.getElementById("immagine8")
        imgRemover8.removeChild(imgRemover8.childNodes[1]);
    var imgRemover9 = document.getElementById("immagine9")
        imgRemover9.removeChild(imgRemover9.childNodes[1]);  
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





