const list = document.getElementById("my-UL");


// untuk checklist
list.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  }
});

//untuk menghapus
const close = document.querySelector(".close");
close.onclick = function () {
  let div = this.parentElement;
  div.style.display = "none";
};

//untuk menambahkan
function addTodo() {
  const myInput = document.getElementById("my-input");
  const value = myInput.value;

  if (value == "") {
    alert("you must write something");
    return;
  }

  const todo = document.createElement("li");
  todo.textContent = value;

  const close = document.createElement("span");
  close.className = "close";
  close.innerHTML = "X";

  todo.appendChild(close);
  list.appendChild(todo);
  myInput.value = "";

  //menghapus todo
  close.onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

function search() {
  const search = document.querySelector("#search").value.toLowerCase();
  const lists = document.querySelectorAll("ul li");

  lists.forEach((list) => {
    if (!list.firstChild.nodeValue.toLowerCase().includes(search)) {
      list.style.display = "none";
    } else {
      list.style.display = "block";
    }
  });
}




