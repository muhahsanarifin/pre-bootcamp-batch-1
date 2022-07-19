document.getElementById("btnCREATETASK").addEventListener("click", btnCREATETASK);

// Add Task
function btnCREATETASK() {
  document.querySelector("#addTASK").classList.remove("display-task");
}

// Dropdown
document.getElementById("dropdownBTN").addEventListener("click", ddBTN);
const contentShow = document.querySelector("#showddCONTENT");

function ddBTN() {
  contentShow.classList.toggle("dropdown-content-show");
}

// Insert Task
const taskLIST = document.getElementById("taskLIST");

document.getElementById("insertTASK").addEventListener("input",handleCHANGE);

function handleCHANGE () {
	// console.log(this.value);
}

document.getElementById("insertTASK").addEventListener("change", handleENTER);

function handleENTER () {
	taskLIST.insertAdjacentHTML(
    "afterbegin",
    ` <li class=" do-lists" id="">
					<div class="frame-result-task">
						<div class="sub-frame-result-task">
							<input type="checkbox" id=""> <!--Temp Issue-->
							<label><p class="title-task">${this.value}</p></label>
							<span class="badge" id=""><p>Badge</p></span>
							<i class="more" id=""><img src="./assets/icons/more-vertical-black.svg" alt=""></i>
						</div>
						<p class="decs" id="">Description</p>
					</div>
					<div class="accordion-button"> <!--ACCORDION SECTION-->
						<i><img src="./assets/icons/Arrow - Down 2.svg" alt="Icon"></i>
					</div>
					<div class="accordion-content"> 
						<ul class="sub-task-list">
							<div class="frame-sub-task-list">
								<p>Subtask</p>
								<div class="botton-two">
									<i><img src="./assets/icons/Plus - 2.svg" alt="Tambah tugas"></i>	
									<p>Tambah</p>
								</div>
							</div>
							<li class="sub-do-list">
								<input type="checkbox"> <!--Temp Issue-->
								<label><p class="title-sub-task">Title</p></label>
								<i class="deleted-sub-do-list" id=""><img src="./assets/icons/trash.svg" alt="Icon"></i>
							</li>
						</ul>
					</div>
			</li>
		`
  );

	this.value ="";
}

// const dropDown = document.querySelectorAll(".accordion-button");

// console.log(dropDown)

// Accordion
// let index;

/*for (index = 0; index < dropDown.length; index++) {
  dropDown[index].addEventListener("click", function () {
    this.classList.toggle("to-open");
    const subTASKLIST = this.nextElementSibling;
    if (subTASKLIST.style.maxHeight) {
      subTASKLIST.style.maxHeight = null;
    } else {
      subTASKLIST.style.maxHeight = subTASKLIST.scrollHeight + "px";
    }
  });
}*/