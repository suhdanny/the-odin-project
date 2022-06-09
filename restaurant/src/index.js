import {loadHome, makeHeader} from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function initialize() {
    const contentElement = document.getElementById('content');
    contentElement.append(makeHeader());
    contentElement.append(loadHome());
    addTabEvent(contentElement);
}

function addTabEvent(contentElement) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            switch(e.target.innerText) {
                case "Home":
                    resetTab(contentElement);
                    contentElement.append(loadHome());
                    break;
                case "Menu":
                    resetTab(contentElement);
                    contentElement.append(loadMenu());
                    break;
                case "Contact Us":
                    console.log(e.target.innerText);
                    resetTab(contentElement);
                    contentElement.append(loadContact());
                    break;
                default:
                    return;
            }
        })
    })
}

function resetTab(contentElement) {
    contentElement.removeChild(contentElement.lastElementChild);
}

initialize();