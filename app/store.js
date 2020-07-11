import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: []
};

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.lists = data.lists.map(l => new List(l));
    _state = data;
  }
}
_loadState();

class Store {
  removeTodo(todoId) {
    let removeTodoIndex = _state.todo.findIndex(t => t.id == todoId)
    _state.todo.splice(removeTodoIndex, 1)
  }
  removeList(listId) {
    let removeIndex = _state.lists.findIndex(l => l.id == listId)
    _state.lists.splice(removeIndex, 1)
  }
  addTodo(listIndex, todoData) {
    _state.lists[listIndex].todo.push(todoData)
  }
  addList(newList) {
    _state.lists.push(newList)
  }
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;