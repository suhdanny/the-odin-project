import { toDoManager } from "./home";

class toDo {
    constructor(title, date, priority) {
        this.title = title;
        this.date = date;
        this.priority = priority;
    }
}

function createToDoElement(toDo) {
    const toDoElement = createElement('div', ['todo']);

    const complete = createElement('div', ['complete']);
    const checkBox = createInput('checkbox', 'check');
    complete.append(checkBox);

    const title = createElement('div', ['title'], toDo.title);
    const priority = createElement('div', ['priority', toDo.priority], toDo.priority); // add low, medium or high class
    const due = createElement('div', ['due'], toDo.date);
    const bin = createElement('img', ['bin-icon']);
    bin.src = "images/delete.png";
    addRemoveEvent(bin, toDo);

    toDoElement.append(complete, title, priority, due, bin);

    return toDoElement;
}

function createElement(tag, classArr, text="") {
    const element = document.createElement(tag);
    for (const className of classArr) {
        element.classList.add(className);
    }
    if (text != "") {
        element.innerText = text;
    }
    return element;
}

function createInput(type, id) {
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    return input;
}

function addRemoveEvent(bin, toDo) {
    bin.addEventListener('click', () => {
        bin.parentElement.remove();
    })
}

export {
    toDo,
    createToDoElement,
    createElement,
    createInput
}