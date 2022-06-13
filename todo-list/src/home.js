let toDoManager = (function() {
    let toDoItems = [];

    const addToDoItem = (toDo) => {
        toDoItems.push(toDo);
    }

    const removeToDoItem = (toDo) => {
        for (const toDoElement of toDoItems) {
            if (toDoElement.children[1].innerText == toDo.title) {
                const index = toDoItems.indexOf(toDoElement);
                toDoItems.splice(index, 1);
            }
        }
    }

    // render Home Page
    const renderHome = (main) => {
        removeAllChildNodes(main);
        for (const toDo of toDoItems) {
            main.appendChild(toDo);
        }
    }

    // Add additional to-do in home page
    const renderToDo = (main, toDo) => {
        main.appendChild(toDo)
    }

    return {
        addToDoItem,
        renderToDo
    }
})();

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export {toDoManager, removeAllChildNodes};