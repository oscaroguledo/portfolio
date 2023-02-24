var data_items= document.getElementById('typed').dataset.typedItems;
data_items=data_items.split(',');
console.log(data_items);

var typed = new Typed(".typed",{
    strings: data_items ,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,

    })
//==================copying link====================
function copied(){
    var copyText=document.getElementById("refer");
    copyText.select();
    copyText.setSelectionRange(0,99999999);//for mobile devices
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: "+copyText.value)
}

//===================back-to-top button=========================
//Get the button:
mybutton = document.getElementById("back-to-top");
mybutton.style.display = "none";

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

