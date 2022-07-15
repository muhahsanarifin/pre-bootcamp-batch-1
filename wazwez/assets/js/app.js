const btn = document.getElementById("btnCREATETASK").addEventListener("click", btnCREATETASK);
const dropDown = document.querySelectorAll(".accordion-button");

let index;

// Accordion
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

// Insert Task
function btnCREATETASK() {
  document.querySelector("#createTASK").classList.remove("display-task");
}

// Dropdown
const dropDownBtn = document.getElementById("dropdownBTN").addEventListener("click", ddBTN);
const contentShow = document.querySelector("#showddCONTENT");

function ddBTN() {
  contentShow.classList.toggle("dropdown-content-show");
}
