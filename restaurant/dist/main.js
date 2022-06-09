/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const map = document.createElement('img');
    map.src = "images/map.png";
    map.id = 'map';
    contact.append(map);

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const h1 = document.createElement('h1');
    h1.innerText = 'Inquiries';
    const address = document.createElement('p');
    address.innerText = '1760 Marine Dr #113';
    const phone = document.createElement('p');
    phone.innerText = '604-926-0777';

    contactInfo.append(h1, address, phone);
    contactInfo.append(createForm());
    contact.append(contactInfo);
    
    return contact;
}

function createForm() {
    const form = document.createElement('form');
    form.innerHTML = `
    <div>
      <input type="text" id="name" placeholder=" ">
      <label for="name">Name</label>
    </div>
    <div>
      <input type="email" id="email" placeholder=" ">
      <label for="email">Email</label>
    </div>
    <div>
      <input type="phone" id="phone" placeholder=" ">
      <label for="phone">Phone</label>
    </div>
    <div>
      <input type="text" id="subject" placeholder=" ">
      <label for="subject">Subject</label>
    </div>
    <div>
      <textarea id="message" placeholder=" "></textarea>
      <label for="message">Type your message here ... </label>
    </div>
    `
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('btn');

    const button = document.createElement('a');
    button.innerText = "Submit";

    buttonContainer.append(button);
    form.append(buttonContainer);
    return form;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome),
/* harmony export */   "makeHeader": () => (/* binding */ makeHeader)
/* harmony export */ });
function loadHome() {
    const main = document.createElement('div');
    main.classList.add('main');
    const title = document.createElement('div');
    title.classList.add('title');
    
    const h2 = document.createElement('h2');
    h2.innerText = "Delicious Japanese Cuisine";
    const p = document.createElement('p');
    p.innerHTML = "Kin Sushi's bold and diverse menu is carefully curated <br/> to bring you an elevated culinary experience <br/> at every bite";
    const orderLink = document.createElement('div');
    orderLink.classList.add("order-link");
    const a = document.createElement('a')
    a.innerText = "Order Now";
    orderLink.appendChild(a);

    title.append(h2, p, orderLink);
    main.appendChild(title);

    return main;
}

function makeHeader() {
    const header = document.createElement('div');
    header.classList.add('header');    

    const h1 = document.createElement('h1');
    h1.innerText = "Kin Sushi";
    const logo = document.createElement('img');
    logo.id = 'logo';
    logo.src = 'images/logo_sushi.jpeg';
    const container = document.createElement('div');
    container.classList.add('container');
    container.append(logo, h1);


    const nav = document.createElement('nav')
    const ul = document.createElement('ul')

    const navArr = ['Home', 'Menu', 'Contact Us'];

    for (const tab of navArr) {
        const li = document.createElement('li');
        li.innerHTML = tab;
        li.classList.add('tab');
        ul.appendChild(li);
    }

    nav.appendChild(ul);
    header.append(container, nav);
    return header;
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


function loadMenu() {
    const menuMain = document.createElement('div');
    menuMain.classList.add('menu-main');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const h2 = document.createElement('h2');
    h2.innerText = 'Nigiri & Sashimi';
    menuContainer.appendChild(h2);

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('card-container');

    // append ten menu items
    
    gridContainer.appendChild(
        makeMenuCard(
            'Hom-maguro O-toro',
            'Belly part. O-toro is the fattiest part of the fish. (Japan)',
            '16',
            'images/hon-maguro.webp'
        )
    );
    
    gridContainer.appendChild(
        makeMenuCard(
            'Hon-maguro Chu-toro',
            'Medium fatty part. (Japan)',
            '14',
            'images/chu-toro.webp'
        )
    );

    gridContainer.appendChild(
        makeMenuCard(
            'Hon-maguro Akami',
            'Leaner part. (Japan)',
            '10',
            'images/akami.webp'
        )
    );

    gridContainer.appendChild(
        makeMenuCard(
            'Hamachi',
            'Yellowtail. (Japan)',
            '11',
            'images/hamachi.webp'
        )
    );

    gridContainer.appendChild(
        makeMenuCard(
            'Sake',
            'Atlantic Salmon. (Iceland)',
            '8',
            'images/sake.webp'
        )
    );

    gridContainer.appendChild(
        makeMenuCard(
            'Ika',
            'Squid (Japan)',
            '8',
            'images/ika.webp'
        )
    );

    gridContainer.appendChild(
        makeMenuCard(
            'Uni',
            'Sea urchin. (Boston, Vancouver)',
            '14',
            'images/uni.webp'
        )
    );

    gridContainer.appendChild(
        makeMenuCard(
            'Ikura',
            'Salmon roe. (Japan)',
            '12',
            'images/ikura.webp'
        )
    );

    gridContainer.appendChild(
        makeMenuCard(
            'Botan Ebi',
            'Botan shrimp. (Vancouver)',
            '12',
            'images/botan.webp'
        )
    );

    gridContainer.appendChild(
        makeMenuCard(
            'Unagi',
            'Fresh water eel. (Japan)',
            '12',
            'images/unagi.webp'
        )
    );
    
    menuContainer.appendChild(gridContainer);
    menuMain.appendChild(menuContainer);
    
    return menuMain;
}

function makeMenuCard(menu, description, price, source) {
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('card-description');
    cardDescription.innerHTML = `
    <div class="menu-name">${menu}</div>
    <div>${description}</div>
    <div class="price">$${price}</div>`

    const img = document.createElement('img');
    img.src = source;

    menuCard.append(cardDescription, img);
    return menuCard
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




function initialize() {
    const contentElement = document.getElementById('content');
    contentElement.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.makeHeader)());
    contentElement.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)());
    addTabEvent(contentElement);
}

function addTabEvent(contentElement) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            switch(e.target.innerText) {
                case "Home":
                    resetTab(contentElement);
                    contentElement.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)());
                    break;
                case "Menu":
                    resetTab(contentElement);
                    contentElement.append((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
                    break;
                case "Contact Us":
                    console.log(e.target.innerText);
                    resetTab(contentElement);
                    contentElement.append((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQzdEMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRvQzs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsS0FBSztBQUNsQyxXQUFXLFlBQVk7QUFDdkIsMEJBQTBCLE1BQU07O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxRQUFROzs7Ozs7VUNySXZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNkO0FBQ007O0FBRXZDO0FBQ0E7QUFDQSwwQkFBMEIsb0RBQVU7QUFDcEMsMEJBQTBCLGtEQUFRO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsa0RBQVE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLG9EQUFRO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHVEQUFXO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1hcC5zcmMgPSBcImltYWdlcy9tYXAucG5nXCI7XG4gICAgbWFwLmlkID0gJ21hcCc7XG4gICAgY29udGFjdC5hcHBlbmQobWFwKTtcblxuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvJyk7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEuaW5uZXJUZXh0ID0gJ0lucXVpcmllcyc7XG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzLmlubmVyVGV4dCA9ICcxNzYwIE1hcmluZSBEciAjMTEzJztcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwaG9uZS5pbm5lclRleHQgPSAnNjA0LTkyNi0wNzc3JztcblxuICAgIGNvbnRhY3RJbmZvLmFwcGVuZChoMSwgYWRkcmVzcywgcGhvbmUpO1xuICAgIGNvbnRhY3RJbmZvLmFwcGVuZChjcmVhdGVGb3JtKCkpO1xuICAgIGNvbnRhY3QuYXBwZW5kKGNvbnRhY3RJbmZvKTtcbiAgICBcbiAgICByZXR1cm4gY29udGFjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uaW5uZXJIVE1MID0gYFxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIiBcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCIgXCI+XG4gICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwicGhvbmVcIiBpZD1cInBob25lXCIgcGxhY2Vob2xkZXI9XCIgXCI+XG4gICAgICA8bGFiZWwgZm9yPVwicGhvbmVcIj5QaG9uZTwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic3ViamVjdFwiIHBsYWNlaG9sZGVyPVwiIFwiPlxuICAgICAgPGxhYmVsIGZvcj1cInN1YmplY3RcIj5TdWJqZWN0PC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHRleHRhcmVhIGlkPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiIFwiPjwvdGV4dGFyZWE+XG4gICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZVwiPlR5cGUgeW91ciBtZXNzYWdlIGhlcmUgLi4uIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidG4nKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcblxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcbiAgICBmb3JtLmFwcGVuZChidXR0b25Db250YWluZXIpO1xuICAgIHJldHVybiBmb3JtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIFxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi5pbm5lclRleHQgPSBcIkRlbGljaW91cyBKYXBhbmVzZSBDdWlzaW5lXCI7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmlubmVySFRNTCA9IFwiS2luIFN1c2hpJ3MgYm9sZCBhbmQgZGl2ZXJzZSBtZW51IGlzIGNhcmVmdWxseSBjdXJhdGVkIDxici8+IHRvIGJyaW5nIHlvdSBhbiBlbGV2YXRlZCBjdWxpbmFyeSBleHBlcmllbmNlIDxici8+IGF0IGV2ZXJ5IGJpdGVcIjtcbiAgICBjb25zdCBvcmRlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcmRlckxpbmsuY2xhc3NMaXN0LmFkZChcIm9yZGVyLWxpbmtcIik7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGEuaW5uZXJUZXh0ID0gXCJPcmRlciBOb3dcIjtcbiAgICBvcmRlckxpbmsuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgICB0aXRsZS5hcHBlbmQoaDIsIHAsIG9yZGVyTGluayk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gbWFrZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7ICAgIFxuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLmlubmVyVGV4dCA9IFwiS2luIFN1c2hpXCI7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvZ28uaWQgPSAnbG9nbyc7XG4gICAgbG9nby5zcmMgPSAnaW1hZ2VzL2xvZ29fc3VzaGkuanBlZyc7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQobG9nbywgaDEpO1xuXG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuXG4gICAgY29uc3QgbmF2QXJyID0gWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCBVcyddO1xuXG4gICAgZm9yIChjb25zdCB0YWIgb2YgbmF2QXJyKSB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gdGFiO1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cblxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgaGVhZGVyLmFwcGVuZChjb250YWluZXIsIG5hdik7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IHtcbiAgICBsb2FkSG9tZSxcbiAgICBtYWtlSGVhZGVyXG59OyIsImltcG9ydCB7IG1ha2VIZWFkZXIgfSBmcm9tIFwiLi9ob21lXCI7XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IG1lbnVNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudU1haW4uY2xhc3NMaXN0LmFkZCgnbWVudS1tYWluJyk7XG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLmlubmVyVGV4dCA9ICdOaWdpcmkgJiBTYXNoaW1pJztcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGgyKTtcblxuICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGFpbmVyJyk7XG5cbiAgICAvLyBhcHBlbmQgdGVuIG1lbnUgaXRlbXNcbiAgICBcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBtYWtlTWVudUNhcmQoXG4gICAgICAgICAgICAnSG9tLW1hZ3VybyBPLXRvcm8nLFxuICAgICAgICAgICAgJ0JlbGx5IHBhcnQuIE8tdG9ybyBpcyB0aGUgZmF0dGllc3QgcGFydCBvZiB0aGUgZmlzaC4gKEphcGFuKScsXG4gICAgICAgICAgICAnMTYnLFxuICAgICAgICAgICAgJ2ltYWdlcy9ob24tbWFndXJvLndlYnAnXG4gICAgICAgIClcbiAgICApO1xuICAgIFxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIG1ha2VNZW51Q2FyZChcbiAgICAgICAgICAgICdIb24tbWFndXJvIENodS10b3JvJyxcbiAgICAgICAgICAgICdNZWRpdW0gZmF0dHkgcGFydC4gKEphcGFuKScsXG4gICAgICAgICAgICAnMTQnLFxuICAgICAgICAgICAgJ2ltYWdlcy9jaHUtdG9yby53ZWJwJ1xuICAgICAgICApXG4gICAgKTtcblxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIG1ha2VNZW51Q2FyZChcbiAgICAgICAgICAgICdIb24tbWFndXJvIEFrYW1pJyxcbiAgICAgICAgICAgICdMZWFuZXIgcGFydC4gKEphcGFuKScsXG4gICAgICAgICAgICAnMTAnLFxuICAgICAgICAgICAgJ2ltYWdlcy9ha2FtaS53ZWJwJ1xuICAgICAgICApXG4gICAgKTtcblxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIG1ha2VNZW51Q2FyZChcbiAgICAgICAgICAgICdIYW1hY2hpJyxcbiAgICAgICAgICAgICdZZWxsb3d0YWlsLiAoSmFwYW4pJyxcbiAgICAgICAgICAgICcxMScsXG4gICAgICAgICAgICAnaW1hZ2VzL2hhbWFjaGkud2VicCdcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBtYWtlTWVudUNhcmQoXG4gICAgICAgICAgICAnU2FrZScsXG4gICAgICAgICAgICAnQXRsYW50aWMgU2FsbW9uLiAoSWNlbGFuZCknLFxuICAgICAgICAgICAgJzgnLFxuICAgICAgICAgICAgJ2ltYWdlcy9zYWtlLndlYnAnXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgbWFrZU1lbnVDYXJkKFxuICAgICAgICAgICAgJ0lrYScsXG4gICAgICAgICAgICAnU3F1aWQgKEphcGFuKScsXG4gICAgICAgICAgICAnOCcsXG4gICAgICAgICAgICAnaW1hZ2VzL2lrYS53ZWJwJ1xuICAgICAgICApXG4gICAgKTtcblxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIG1ha2VNZW51Q2FyZChcbiAgICAgICAgICAgICdVbmknLFxuICAgICAgICAgICAgJ1NlYSB1cmNoaW4uIChCb3N0b24sIFZhbmNvdXZlciknLFxuICAgICAgICAgICAgJzE0JyxcbiAgICAgICAgICAgICdpbWFnZXMvdW5pLndlYnAnXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgbWFrZU1lbnVDYXJkKFxuICAgICAgICAgICAgJ0lrdXJhJyxcbiAgICAgICAgICAgICdTYWxtb24gcm9lLiAoSmFwYW4pJyxcbiAgICAgICAgICAgICcxMicsXG4gICAgICAgICAgICAnaW1hZ2VzL2lrdXJhLndlYnAnXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgbWFrZU1lbnVDYXJkKFxuICAgICAgICAgICAgJ0JvdGFuIEViaScsXG4gICAgICAgICAgICAnQm90YW4gc2hyaW1wLiAoVmFuY291dmVyKScsXG4gICAgICAgICAgICAnMTInLFxuICAgICAgICAgICAgJ2ltYWdlcy9ib3Rhbi53ZWJwJ1xuICAgICAgICApXG4gICAgKTtcblxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIG1ha2VNZW51Q2FyZChcbiAgICAgICAgICAgICdVbmFnaScsXG4gICAgICAgICAgICAnRnJlc2ggd2F0ZXIgZWVsLiAoSmFwYW4pJyxcbiAgICAgICAgICAgICcxMicsXG4gICAgICAgICAgICAnaW1hZ2VzL3VuYWdpLndlYnAnXG4gICAgICAgIClcbiAgICApO1xuICAgIFxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZENvbnRhaW5lcik7XG4gICAgbWVudU1haW4uYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gICAgXG4gICAgcmV0dXJuIG1lbnVNYWluO1xufVxuXG5mdW5jdGlvbiBtYWtlTWVudUNhcmQobWVudSwgZGVzY3JpcHRpb24sIHByaWNlLCBzb3VyY2UpIHtcbiAgICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xuXG4gICAgY29uc3QgY2FyZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGVzY3JpcHRpb24nKTtcbiAgICBjYXJkRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJtZW51LW5hbWVcIj4ke21lbnV9PC9kaXY+XG4gICAgPGRpdj4ke2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcmljZVwiPiQke3ByaWNlfTwvZGl2PmBcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBzb3VyY2U7XG5cbiAgICBtZW51Q2FyZC5hcHBlbmQoY2FyZERlc2NyaXB0aW9uLCBpbWcpO1xuICAgIHJldHVybiBtZW51Q2FyZFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtsb2FkSG9tZSwgbWFrZUhlYWRlcn0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZChtYWtlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZChsb2FkSG9tZSgpKTtcbiAgICBhZGRUYWJFdmVudChjb250ZW50RWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhYkV2ZW50KGNvbnRlbnRFbGVtZW50KSB7XG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbiAgICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChlLnRhcmdldC5pbm5lclRleHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICAgICAgICAgICAgICByZXNldFRhYihjb250ZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZChsb2FkSG9tZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIk1lbnVcIjpcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRUYWIoY29udGVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50RWxlbWVudC5hcHBlbmQobG9hZE1lbnUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDb250YWN0IFVzXCI6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0VGFiKGNvbnRlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQuYXBwZW5kKGxvYWRDb250YWN0KCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVzZXRUYWIoY29udGVudEVsZW1lbnQpIHtcbiAgICBjb250ZW50RWxlbWVudC5yZW1vdmVDaGlsZChjb250ZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkKTtcbn1cblxuaW5pdGlhbGl6ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==