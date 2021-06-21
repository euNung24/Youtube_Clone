document.getElementById("menu").onclick = function(){
  if(document.getElementById("simpleSide").style.display == "none" & document.getElementById("wideSide").style.display == "block") {
    document.getElementById("simpleSide").style.display = "block";
    document.getElementById("wideSide").style.display = "none";
    }
  else if(document.getElementById("simpleSide").style.display == "block" & document.getElementById("wideSide").style.display == "none") {
    document.getElementById("simpleSide").style.display = "none";
    document.getElementById("wideSide").style.display = "block";
  }
  else {
    document.getElementById("simpleSide").style.display = "block";
    document.getElementById("wideSide").style.display = "none";
  }
}