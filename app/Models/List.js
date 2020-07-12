import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name
    this.todo = data.todo || []
  }

  get Template() {
    let template = /*html*/ `
    <div class="col-12 col-md-3">
        <div class="card shadow border-rounded bg-color p-2">
        <button onclick="app.listController.removeList('${this.id}')" type="button" class="close text-right mx-2">
  <span class="" aria-hidden="true">&times;</span>
</button>
        <h2 class=" text-center"><u>${this.name}</u></h2>
          <form class="" onsubmit="app.listController.addTodo(event, '${this.id}')">
            <div class="form-group">
              <label for="todos"></label>
              <div class="input-group mb-3">
  <input type="text" name="todos" class="form-control" placeholder="Enter Todo...">
  <div class="input-group-append">
    <button class="btn btn-dark" type="submit"><b>+</b></button>
  </div>
</div>
              
              
            </div>
          </form>
          `
    this.todo.forEach(todo => template += `<h4><button onclick="app.listController.removeTodo('${this.id}')" type="button" class="btn btn-outline-danger mx-2 px-1 py-0">
X</button>${todo}</h4>`)
    template += `</div> </div>`



    return template
  }

  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
