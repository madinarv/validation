let search = document.querySelector("#searchbtn")

search.onclick = function Search(e){
    e.preventDefault();
    var inp=document.querySelector(".search");
    var inputsetting=inp.classList;
    inputsetting.toggle("d-none")
}


let icon = document.querySelector("#icon")
  icon.onclick = function CloseInput(e) {
  e.preventDefault();
  var inp=document.querySelector(".search");
  var inputsetting=inp.classList;
  inputsetting.add("d-none")
}