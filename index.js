
let slideIndex = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;

document.addEventListener("DOMContentLoaded", function(event) {
    showSlides(slideIndex);
    showSlides2(slideIndex2);
    showSlides3(slideIndex3);
});


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";  
    // dots[slideIndex-1].className += " active";
}

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    // let dots2 = document.getElementsByClassName("dot2");
    if (n > slides2.length) {slideIndex2 = 1}    
    if (n < 1) {slideIndex2 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
    }
    // for (i = 0; i < dots2.length; i++) {
    //   dots2[i].className = dots2[i].className.replace(" active", "");
    // }
    slides2[slideIndex2-1].style.display = "block";  
    // dots2[slideIndex2-1].className += " active";
}

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    let i;
    let slides3 = document.getElementsByClassName("mySlides3");
    // let dots3 = document.getElementsByClassName("dot3");
    if (n > slides3.length) {slideIndex3 = 1}    
    if (n < 1) {slideIndex3 = slides3.length}
    for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";  
    }
    // for (i = 0; i < dots3.length; i++) {
    //   dots3[i].className = dots3[i].className.replace(" active", "");
    // }
    slides3[slideIndex3-1].style.display = "block";  
    // dots3[slideIndex3-1].className += " active";
}
  
function addAnimation() {
    let About = document.getElementById("about");
    About.className += " fade";
    setTimeout(() => {
        About.className = " section2-AboutMe";
    }, 2000);
    
}

function DownloadFile(fileName) {
  //Set the File URL.
  var url = "Assets/Files/" + fileName;
  //Create XMLHTTP Request.
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.responseType = "blob";
  req.onload = function () {
      //Convert the Byte Data to BLOB object.
      var blob = new Blob([req.response], { type: "application/octetstream" });

      //Check the Browser type and download the File.
      var isIE = false || !!document.documentMode;
      if (isIE) {
          window.navigator.msSaveBlob(blob, fileName);
      } else {
          var url = window.URL || window.webkitURL;
          link = url.createObjectURL(blob);
          var a = document.createElement("a");
          a.setAttribute("download", fileName);
          a.setAttribute("href", link);
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
      }
  };
  req.send();
};

function sendTextMessage() {

  var messageValue = $("#message").val();

  var accountSid = 'ACOUNTSID';
  var authToken = 'AUTHTOKEN';

  var client = require('twilio')(accountSid, authToken);
  client.messages.create({ 
    to: '+917508707697',
    from: "+19171234567",
    body: messageValue,
  }, function(err, message) {
    console.log(message.sid);
  }); 

}