var modal = document.getElementById("picModal");

var img = document.getElementById("ImgSource");
var modalImg = document.getElementById("imgModal");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
