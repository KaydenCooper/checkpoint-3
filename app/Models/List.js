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
    <div class="col-3">
        <div class="card p-2">
        <button onclick="app.listController.removeList('${this.id}')" type="button" class="close text-right mx-2">
  <span class="" aria-hidden="true">&times;</span>
</button>
        
          <form class="p-2" onsubmit="app.listController.addTodo(event, '${this.id}')">
            <div class="form-group">
              <label for="todos"></label>
              <input type="text" name="todos" class="form-control" placeholder="Enter Todo...">
              <button type="submit" class="btn btn-secondary btn-block">Add</button>
              <h2 class="p-2 text-center">${this.name}</h2>
            </div>
          </form>`
    this.todo.forEach(l => template += `<h4><button onclick="app.listController.removeTodo('${this.id}')" type="button" class="btn btn-danger mx-4 px-2 py-0">
X</button>${l}</h4>`)
    template += `</div> </div>`



    return template
  }

  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
