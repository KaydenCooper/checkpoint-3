import _listService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ""
  _store.State.lists.forEach(l => template += l.Template)
  document.getElementById("list").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    console.log("controller");
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  addList(event) {
    event.preventDefault()
    let listData = {
      name: event.target.addList.value
    }
    _listService.addList(listData)
    event.target.reset()
    _drawLists()
  }

  addTodo(event, listId) {
    event.preventDefault()
    let todoData = event.target.todos.value
    _listService.addTodo(todoData, listId)
    event.target.reset();
    _drawLists();
  }

  removeList(listId) {

    _listService.removeList(listId)
    _drawLists();


  }

  removeTodo(todoId) {

    _listService.removeTodo(todoId)
    _drawLists();


  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
