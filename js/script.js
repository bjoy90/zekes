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