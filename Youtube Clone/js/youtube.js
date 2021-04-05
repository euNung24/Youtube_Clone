var count = 0;
document.getElementById("closeSide").style.display = "none";
function showSide(){
  if(count==1) {
    document.getElementById("openSide").style.display = "block";
    document.getElementById("closeSide").style.display = "none";
    count = 0;
    }
  else {
    document.getElementById("openSide").style.display = "none";
    document.getElementById("closeSide").style.display = "block";
    count = 1;
  }
}
