function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function newFunction() {
    var x = document.getElementById("myDiv");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
x.style.display = "block";
}
}

function eggLink() {
  var x = document.getElementById("eggBreakfasts");
    if (x.style.display !== "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function pokeLink() {
  var div = document.getElementById("pokeBowls");
    if (div.style.display !== "block") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
}

function saladLink() {
  var div = document.getElementById("salads"); 
    if (div.style.display !== "block") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }

function pitaLink() {
  var div = document.getElementById("pitas");
    if (div.style.display !== "block") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
}

function sideLink() {
  var div = document.getElementById("sides");
    if (div.style.display !== "block") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
}