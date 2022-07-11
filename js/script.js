// alert("Call JS");
let itemID = 0;
let todo = document.getElementById("todo");
let allList = document.getElementById("todoAllList");
const formSubmit = document.getElementById("toDoList");
formSubmit.addEventListener("submit", handlerSubmit);
function handlerSubmit(e) {
  itemID++;
  e.preventDefault();
  createItem();
  todo.value = "";
  // itemID++;
}
function createItem() {
  let todoItem = todo.value;
  if (todoItem != "") {
    allList.innerHTML +=
      '<div class="todo-list" id=div' +
      itemID +
      "><div class='txt'>" +
      todoItem +
      '</div><button class="btn edit">Edit</button><button class="btn deleteDiv" onclick="deleterow(' +
      itemID +
      ')">Delete</button></div>';
  }
}
function deleterow(ID) {
  document.getElementById("div" + ID).remove();
}

allList.addEventListener("click", function (e) {
  const target = e.target.classList.contains("edit");
  update = e.target.classList.contains("update");

  if (target) {
    let val = e.target.parentElement.firstChild.innerHTML;
    //alert(val);
    e.target.parentElement.innerHTML = `
       <input type="text" name="todo" autocomplete="off" class="intext" value="${val}">
       <button class="btn update">Update</button><button class="btn edit">Delete</button>
       `;
  }
  if (update) {
    let updatedValue = e.target.previousElementSibling.value;
    e.target.parentElement.innerHTML = `
    <div class="txt">${updatedValue}</div><button class="btn edit">edit</button><button class="btn" onclick="deleterow(${itemID})">delete</button>
    `;
  }
  console.log(target + "==== ");
});
