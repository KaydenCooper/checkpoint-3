import List from "../Models/List.js";
import _store from "../store.js"
//Public
class ListService {
  constructor() {
    console.log("service");
  }
  removeTodo(listId, todoIndex) {
    _store.removeTodo(listId, todoIndex)
    _store.saveState()
  }
  removeList(listId) {
    _store.removeList(listId)
    _store.saveState()
  }
  addTodo(todoData, listId) {
    let listIndex = _store.State.lists.findIndex(list => list.id == listId)
    _store.addTodo(listIndex, todoData)
    _store.saveState()
  }

  addList(listData) {
    let newList = new List(listData)
    _store.addList(newList)
    _store.saveState()
  }

  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
