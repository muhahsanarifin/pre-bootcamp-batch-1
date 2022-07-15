const btn = document.getElementById("btnCREATETASK").addEventListener("click", btnCREATETASK);
const dropDown = document.querySelectorAll(".accordion-button");

let index;

for (index = 0; index < dropDown.length; index++) {
  dropDown[index].addEventListener("click", function () {
    this.classList.toggle("to-open");
    const subTASKLIST = this.nextElementSibling;
    if (subTASKLIST.style.maxHeight) {
      subTASKLIST.style.maxHeight = null;
    } else {
      subTASKLIST.style.maxHeight = subTASKLIST.scrollHeight + "px";
    }
  });
}

function btnCREATETASK() {
  document.querySelector("#createTASK").classList.remove("display-task");
}
