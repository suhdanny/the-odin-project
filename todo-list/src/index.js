import { toDo, createToDoElement, createElement, createInput } from "./todo";
import { toDoManager } from "./home";
import {format} from 'date-fns';

const openModalButton = document.querySelector('.btn-add');
const closeModalButton = document.querySelector('.close-button');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const toDoForm = document.getElementById('todo-input');
const tabs = document.querySelectorAll('.tab');
const main = document.querySelector('#main');

openModalButton.addEventListener('click', () => {
    openModal(modal);
})

closeModalButton.addEventListener('click', () => {
    closeModal(modal);
})

function openModal(modal) {
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

toDoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const toDoInput = getInputData();
    console.log(toDoInput.date);
    console.log(parseDate(toDoInput.date));
    const newToDo = new toDo(toDoInput.title, parseDate(toDoInput.date), toDoInput.priority);
    const newToDoElement = createToDoElement(newToDo);
    toDoManager.addToDoItem(newToDoElement);
    toDoManager.renderToDo(main, newToDoElement);
    toDoForm.reset();
    closeModal(modal);
})

function getInputData() {
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const priority = document.querySelector('input[name="priority"]:checked').value
    
    return {title, date, priority};
}

function parseDate(date) {
    let dateArr = date.split('-');
    console.log(dateArr);
    let parsedDate = format(new Date(dateArr[0], dateArr[1] - '01', dateArr[2]), 'LLLL do');
    return parsedDate;
}