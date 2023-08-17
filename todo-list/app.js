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

//Untuk mencari todo
function search() {
  const search = document.querySelector("#search");
  const lists = document.querySelectorAll("ul li");

  search.addEventListener("keyup", (e) => {
    lists.forEach((list) => {
      let listValue = list.textContent.slice(0, -1).toLowerCase();
      if (listValue.includes(e.target.value.toLowerCase())) {
        list.style.display = "block";
      } else {
        list.style.display = "none";
      }
    });
  });
}

search();

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

  search();
}

// menambahkan todo dengan tombol Enter
const input = document.getElementById("my-input");
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
