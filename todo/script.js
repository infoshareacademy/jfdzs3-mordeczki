function ToDoApp() {
    this.tasksToDo = []; // lista zadan do zrobienia
    this.tasksDone = []; // lista zadań zrobionych
    this.inputNode = (() => {
        const input = document.createElement('input');
        input.type = 'text';
        return input;
    })() // wywołanie funkcji natychmiastowej - tworzymy znacznik <input> który będziemy trzymać w tym polu w celu optymalizacji i łatwego dostępu
    this.listNode = document.createElement('ul');
    this.buttonNode = (() => {
        const button = document.createElement('button');
        button.innerText = 'add task';
        return button;
    })() // wywołanie funkcji natychmiastowej
};
ToDoApp.prototype.renderUI = function() {
    const appContainer = document.querySelector('#toDoAppContainer');
    appContainer.appendChild(this.inputNode);
    appContainer.appendChild(this.buttonNode);
    appContainer.appendChild(this.listNode);
    this.buttonNode.addEventListener('click', this.addTaskToDo);
}
ToDoApp.prototype.addTaskToDo = function() {
    const inputValue = this.inputNode.value;
    const newTask = new Task(inputValue);
    this.tasksToDo.push(newTask);
    const newListElement = this.createNewListElement(newTask.text)
    this.listNode.appendChild(newListElement);
    this.inputNode.value = '';
}
ToDoApp.prototype.createNewListElement = function(text) {
    const newListItem = document.createElement('li');
    const createRemoveIconElement = this.createRemoveIcon();
    newListItem.appendChild(createRemoveIconElement);
    console.log(createRemoveIconElement);
    newListItem.innerText = text;
    return newListItem;
}

ToDoApp.prototype.createRemoveIcon = function() {
    const createRemoveIconElement = document.createElement('span');
    createRemoveIconElement.inneText = 'X';
    createRemoveIconElement.style.fontSize = '20px';
    createRemoveIconElement.style.color = 'red';
    createRemoveIconElement.addEventListener('click', this.removeTaskToDo);
    return createRemoveIconElement;
}

function Task(text) {
    this.text = text;
}
const ToDoListApp = new ToDoApp();
ToDoListApp.addTaskToDo = ToDoApp.prototype.addTaskToDo.bind(ToDoListApp)
ToDoListApp.renderUI();