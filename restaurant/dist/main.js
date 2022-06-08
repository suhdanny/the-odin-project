/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRG9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixLQUFLO0FBQ2xDLFdBQVcsWUFBWTtBQUN2QiwwQkFBMEIsTUFBTTs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLFFBQVE7Ozs7OztVQ3JJdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOK0M7QUFDZDs7QUFFakM7QUFDQTtBQUNBLDBCQUEwQixvREFBVTtBQUNwQywwQkFBMEIsa0RBQVE7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxrREFBUTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsb0RBQVE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLmlubmVyVGV4dCA9IFwiRGVsaWNpb3VzIEphcGFuZXNlIEN1aXNpbmVcIjtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJIVE1MID0gXCJLaW4gU3VzaGkncyBib2xkIGFuZCBkaXZlcnNlIG1lbnUgaXMgY2FyZWZ1bGx5IGN1cmF0ZWQgPGJyLz4gdG8gYnJpbmcgeW91IGFuIGVsZXZhdGVkIGN1bGluYXJ5IGV4cGVyaWVuY2UgPGJyLz4gYXQgZXZlcnkgYml0ZVwiO1xuICAgIGNvbnN0IG9yZGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9yZGVyTGluay5jbGFzc0xpc3QuYWRkKFwib3JkZXItbGlua1wiKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgYS5pbm5lclRleHQgPSBcIk9yZGVyIE5vd1wiO1xuICAgIG9yZGVyTGluay5hcHBlbmRDaGlsZChhKTtcblxuICAgIHRpdGxlLmFwcGVuZChoMiwgcCwgb3JkZXJMaW5rKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBtYWtlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTsgICAgXG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEuaW5uZXJUZXh0ID0gXCJLaW4gU3VzaGlcIjtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbG9nby5pZCA9ICdsb2dvJztcbiAgICBsb2dvLnNyYyA9ICdpbWFnZXMvbG9nb19zdXNoaS5qcGVnJztcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZChsb2dvLCBoMSk7XG5cblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG5cbiAgICBjb25zdCBuYXZBcnIgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0IFVzJ107XG5cbiAgICBmb3IgKGNvbnN0IHRhYiBvZiBuYXZBcnIpIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS5pbm5lckhUTUwgPSB0YWI7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfVxuXG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgICBoZWFkZXIuYXBwZW5kKGNvbnRhaW5lciwgbmF2KTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQge1xuICAgIGxvYWRIb21lLFxuICAgIG1ha2VIZWFkZXJcbn07IiwiaW1wb3J0IHsgbWFrZUhlYWRlciB9IGZyb20gXCIuL2hvbWVcIjtcblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgbWVudU1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51TWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51LW1haW4nKTtcblxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIuaW5uZXJUZXh0ID0gJ05pZ2lyaSAmIFNhc2hpbWknO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInKTtcblxuICAgIC8vIGFwcGVuZCB0ZW4gbWVudSBpdGVtc1xuICAgIFxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIG1ha2VNZW51Q2FyZChcbiAgICAgICAgICAgICdIb20tbWFndXJvIE8tdG9ybycsXG4gICAgICAgICAgICAnQmVsbHkgcGFydC4gTy10b3JvIGlzIHRoZSBmYXR0aWVzdCBwYXJ0IG9mIHRoZSBmaXNoLiAoSmFwYW4pJyxcbiAgICAgICAgICAgICcxNicsXG4gICAgICAgICAgICAnaW1hZ2VzL2hvbi1tYWd1cm8ud2VicCdcbiAgICAgICAgKVxuICAgICk7XG4gICAgXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgbWFrZU1lbnVDYXJkKFxuICAgICAgICAgICAgJ0hvbi1tYWd1cm8gQ2h1LXRvcm8nLFxuICAgICAgICAgICAgJ01lZGl1bSBmYXR0eSBwYXJ0LiAoSmFwYW4pJyxcbiAgICAgICAgICAgICcxNCcsXG4gICAgICAgICAgICAnaW1hZ2VzL2NodS10b3JvLndlYnAnXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgbWFrZU1lbnVDYXJkKFxuICAgICAgICAgICAgJ0hvbi1tYWd1cm8gQWthbWknLFxuICAgICAgICAgICAgJ0xlYW5lciBwYXJ0LiAoSmFwYW4pJyxcbiAgICAgICAgICAgICcxMCcsXG4gICAgICAgICAgICAnaW1hZ2VzL2FrYW1pLndlYnAnXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgbWFrZU1lbnVDYXJkKFxuICAgICAgICAgICAgJ0hhbWFjaGknLFxuICAgICAgICAgICAgJ1llbGxvd3RhaWwuIChKYXBhbiknLFxuICAgICAgICAgICAgJzExJyxcbiAgICAgICAgICAgICdpbWFnZXMvaGFtYWNoaS53ZWJwJ1xuICAgICAgICApXG4gICAgKTtcblxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIG1ha2VNZW51Q2FyZChcbiAgICAgICAgICAgICdTYWtlJyxcbiAgICAgICAgICAgICdBdGxhbnRpYyBTYWxtb24uIChJY2VsYW5kKScsXG4gICAgICAgICAgICAnOCcsXG4gICAgICAgICAgICAnaW1hZ2VzL3Nha2Uud2VicCdcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBtYWtlTWVudUNhcmQoXG4gICAgICAgICAgICAnSWthJyxcbiAgICAgICAgICAgICdTcXVpZCAoSmFwYW4pJyxcbiAgICAgICAgICAgICc4JyxcbiAgICAgICAgICAgICdpbWFnZXMvaWthLndlYnAnXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgbWFrZU1lbnVDYXJkKFxuICAgICAgICAgICAgJ1VuaScsXG4gICAgICAgICAgICAnU2VhIHVyY2hpbi4gKEJvc3RvbiwgVmFuY291dmVyKScsXG4gICAgICAgICAgICAnMTQnLFxuICAgICAgICAgICAgJ2ltYWdlcy91bmkud2VicCdcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBtYWtlTWVudUNhcmQoXG4gICAgICAgICAgICAnSWt1cmEnLFxuICAgICAgICAgICAgJ1NhbG1vbiByb2UuIChKYXBhbiknLFxuICAgICAgICAgICAgJzEyJyxcbiAgICAgICAgICAgICdpbWFnZXMvaWt1cmEud2VicCdcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBtYWtlTWVudUNhcmQoXG4gICAgICAgICAgICAnQm90YW4gRWJpJyxcbiAgICAgICAgICAgICdCb3RhbiBzaHJpbXAuIChWYW5jb3V2ZXIpJyxcbiAgICAgICAgICAgICcxMicsXG4gICAgICAgICAgICAnaW1hZ2VzL2JvdGFuLndlYnAnXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgbWFrZU1lbnVDYXJkKFxuICAgICAgICAgICAgJ1VuYWdpJyxcbiAgICAgICAgICAgICdGcmVzaCB3YXRlciBlZWwuIChKYXBhbiknLFxuICAgICAgICAgICAgJzEyJyxcbiAgICAgICAgICAgICdpbWFnZXMvdW5hZ2kud2VicCdcbiAgICAgICAgKVxuICAgICk7XG4gICAgXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkQ29udGFpbmVyKTtcbiAgICBtZW51TWFpbi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgICBcbiAgICByZXR1cm4gbWVudU1haW47XG59XG5cbmZ1bmN0aW9uIG1ha2VNZW51Q2FyZChtZW51LCBkZXNjcmlwdGlvbiwgcHJpY2UsIHNvdXJjZSkge1xuICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNhcmQuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkJyk7XG5cbiAgICBjb25zdCBjYXJkRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY2FyZC1kZXNjcmlwdGlvbicpO1xuICAgIGNhcmREZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtbmFtZVwiPiR7bWVudX08L2Rpdj5cbiAgICA8ZGl2PiR7ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInByaWNlXCI+JCR7cHJpY2V9PC9kaXY+YFxuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9IHNvdXJjZTtcblxuICAgIG1lbnVDYXJkLmFwcGVuZChjYXJkRGVzY3JpcHRpb24sIGltZyk7XG4gICAgcmV0dXJuIG1lbnVDYXJkXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2xvYWRIb21lLCBtYWtlSGVhZGVyfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudS5qcyc7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZChtYWtlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZChsb2FkSG9tZSgpKTtcbiAgICBhZGRUYWJFdmVudChjb250ZW50RWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhYkV2ZW50KGNvbnRlbnRFbGVtZW50KSB7XG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbiAgICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChlLnRhcmdldC5pbm5lclRleHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICAgICAgICAgICAgICByZXNldFRhYihjb250ZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZChsb2FkSG9tZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIk1lbnVcIjpcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRUYWIoY29udGVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50RWxlbWVudC5hcHBlbmQobG9hZE1lbnUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDb250YWN0IFVzXCI6XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0VGFiKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnRlbnRFbGVtZW50LmFwcGVuZChsb2FkQ29udGFjdCgpKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVzZXRUYWIoY29udGVudEVsZW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhjb250ZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkKTtcbiAgICBjb250ZW50RWxlbWVudC5yZW1vdmVDaGlsZChjb250ZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkKTtcbn1cblxuaW5pdGlhbGl6ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==