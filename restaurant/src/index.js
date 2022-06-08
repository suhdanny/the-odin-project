import {loadHome, makeHeader} from './home.js';
import loadMenu from './menu.js';

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
                    // resetTab();
                    // contentElement.append(loadContact());
                default:
                    return;
            }
        })
    })
}

function resetTab(contentElement) {
    console.log(contentElement.lastElementChild);
    contentElement.removeChild(contentElement.lastElementChild);
}

initialize();