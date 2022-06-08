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
    const home = document.createElement('div');
    home.id = 'home';
    
    const header = makeHeader();

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

    home.append(header, main);
    return home;
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


function loadHome() {
    const menu = document.createElement('div');
    menu.id = 'menu';

    const header = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeHeader)();

    const menuMain = document.createElement('div');
    menuMain.classList.add('menu-main');

    const h1 = document.createElement('h1');
    h1.innerText = 'All Day Menus';
    menuMain.append(h1);

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');

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
            'Yellowtail (Japan)',
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
    
    menu.append(header, gridContainer);

    return menu;
}

function makeMenuCard(menu, description, price, source) {
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('card-description');
    cardDescription.innerHTML = `
    <div>${menu}</div>
    <div>${description}</div>
    <div>$${price}</div>`

    const img = document.createElement('img');
    img.src = source;

    menuCard.append(cardDescription, img);
    return menuCard
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

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



// document.body.append(loadHome());
document.body.append((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RG9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlEQUFVOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsWUFBWTtBQUN2QixZQUFZLE1BQU07O0FBRWxCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxRQUFROzs7Ozs7VUN0SXZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ2Q7O0FBRWpDO0FBQ0EscUJBQXFCLG9EQUFRLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLmlkID0gJ2hvbWUnO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlciA9IG1ha2VIZWFkZXIoKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLmlubmVyVGV4dCA9IFwiRGVsaWNpb3VzIEphcGFuZXNlIEN1aXNpbmVcIjtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJIVE1MID0gXCJLaW4gU3VzaGkncyBib2xkIGFuZCBkaXZlcnNlIG1lbnUgaXMgY2FyZWZ1bGx5IGN1cmF0ZWQgPGJyLz4gdG8gYnJpbmcgeW91IGFuIGVsZXZhdGVkIGN1bGluYXJ5IGV4cGVyaWVuY2UgPGJyLz4gYXQgZXZlcnkgYml0ZVwiO1xuICAgIGNvbnN0IG9yZGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9yZGVyTGluay5jbGFzc0xpc3QuYWRkKFwib3JkZXItbGlua1wiKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgYS5pbm5lclRleHQgPSBcIk9yZGVyIE5vd1wiO1xuICAgIG9yZGVyTGluay5hcHBlbmRDaGlsZChhKTtcblxuICAgIHRpdGxlLmFwcGVuZChoMiwgcCwgb3JkZXJMaW5rKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGhvbWUuYXBwZW5kKGhlYWRlciwgbWFpbik7XG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIG1ha2VIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpOyAgICBcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS5pbm5lclRleHQgPSBcIktpbiBTdXNoaVwiO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2dvLmlkID0gJ2xvZ28nO1xuICAgIGxvZ28uc3JjID0gJ2ltYWdlcy9sb2dvX3N1c2hpLmpwZWcnO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGxvZ28sIGgxKTtcblxuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcblxuICAgIGNvbnN0IG5hdkFyciA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QgVXMnXTtcblxuICAgIGZvciAoY29uc3QgdGFiIG9mIG5hdkFycikge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLmlubmVySFRNTCA9IHRhYjtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cblxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgaGVhZGVyLmFwcGVuZChjb250YWluZXIsIG5hdik7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IHtcbiAgICBsb2FkSG9tZSxcbiAgICBtYWtlSGVhZGVyXG59OyIsImltcG9ydCB7IG1ha2VIZWFkZXIgfSBmcm9tIFwiLi9ob21lXCI7XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmlkID0gJ21lbnUnO1xuXG4gICAgY29uc3QgaGVhZGVyID0gbWFrZUhlYWRlcigpO1xuXG4gICAgY29uc3QgbWVudU1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51TWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51LW1haW4nKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS5pbm5lclRleHQgPSAnQWxsIERheSBNZW51cyc7XG4gICAgbWVudU1haW4uYXBwZW5kKGgxKTtcblxuICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY29udGFpbmVyJyk7XG5cbiAgICAvLyBhcHBlbmQgdGVuIG1lbnUgaXRlbXNcbiAgICBcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBtYWtlTWVudUNhcmQoXG4gICAgICAgICAgICAnSG9tLW1hZ3VybyBPLXRvcm8nLFxuICAgICAgICAgICAgJ0JlbGx5IHBhcnQuIE8tdG9ybyBpcyB0aGUgZmF0dGllc3QgcGFydCBvZiB0aGUgZmlzaC4gKEphcGFuKScsXG4gICAgICAgICAgICAnMTYnLFxuICAgICAgICAgICAgJ2ltYWdlcy9ob24tbWFndXJvLndlYnAnXG4gICAgICAgIClcbiAgICApO1xuICAgIFxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIG1ha2VNZW51Q2FyZChcbiAgICAgICAgICAgICdIb24tbWFndXJvIENodS10b3JvJyxcbiAgICAgICAgICAgICdNZWRpdW0gZmF0dHkgcGFydC4gKEphcGFuKScsXG4gICAgICAgICAgICAnMTQnLFxuICAgICAgICAgICAgJ2ltYWdlcy9jaHUtdG9yby53ZWJwJ1xuICAgICAgICApXG4gICAgKTtcblxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIG1ha2VNZW51Q2FyZChcbiAgICAgICAgICAgICdIb24tbWFndXJvIEFrYW1pJyxcbiAgICAgICAgICAgICdMZWFuZXIgcGFydC4gKEphcGFuKScsXG4gICAgICAgICAgICAnMTAnLFxuICAgICAgICAgICAgJ2ltYWdlcy9ha2FtaS53ZWJwJ1xuICAgICAgICApXG4gICAgKTtcblxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIG1ha2VNZW51Q2FyZChcbiAgICAgICAgICAgICdIYW1hY2hpJyxcbiAgICAgICAgICAgICdZZWxsb3d0YWlsIChKYXBhbiknLFxuICAgICAgICAgICAgJzExJyxcbiAgICAgICAgICAgICdpbWFnZXMvaGFtYWNoaS53ZWJwJ1xuICAgICAgICApXG4gICAgKTtcblxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIG1ha2VNZW51Q2FyZChcbiAgICAgICAgICAgICdTYWtlJyxcbiAgICAgICAgICAgICdBdGxhbnRpYyBTYWxtb24uIChJY2VsYW5kKScsXG4gICAgICAgICAgICAnOCcsXG4gICAgICAgICAgICAnaW1hZ2VzL3Nha2Uud2VicCdcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBtYWtlTWVudUNhcmQoXG4gICAgICAgICAgICAnSWthJyxcbiAgICAgICAgICAgICdTcXVpZCAoSmFwYW4pJyxcbiAgICAgICAgICAgICc4JyxcbiAgICAgICAgICAgICdpbWFnZXMvaWthLndlYnAnXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgbWFrZU1lbnVDYXJkKFxuICAgICAgICAgICAgJ1VuaScsXG4gICAgICAgICAgICAnU2VhIHVyY2hpbi4gKEJvc3RvbiwgVmFuY291dmVyKScsXG4gICAgICAgICAgICAnMTQnLFxuICAgICAgICAgICAgJ2ltYWdlcy91bmkud2VicCdcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBtYWtlTWVudUNhcmQoXG4gICAgICAgICAgICAnSWt1cmEnLFxuICAgICAgICAgICAgJ1NhbG1vbiByb2UuIChKYXBhbiknLFxuICAgICAgICAgICAgJzEyJyxcbiAgICAgICAgICAgICdpbWFnZXMvaWt1cmEud2VicCdcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBtYWtlTWVudUNhcmQoXG4gICAgICAgICAgICAnQm90YW4gRWJpJyxcbiAgICAgICAgICAgICdCb3RhbiBzaHJpbXAuIChWYW5jb3V2ZXIpJyxcbiAgICAgICAgICAgICcxMicsXG4gICAgICAgICAgICAnaW1hZ2VzL2JvdGFuLndlYnAnXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgbWFrZU1lbnVDYXJkKFxuICAgICAgICAgICAgJ1VuYWdpJyxcbiAgICAgICAgICAgICdGcmVzaCB3YXRlciBlZWwuIChKYXBhbiknLFxuICAgICAgICAgICAgJzEyJyxcbiAgICAgICAgICAgICdpbWFnZXMvdW5hZ2kud2VicCdcbiAgICAgICAgKVxuICAgICk7XG4gICAgXG4gICAgbWVudS5hcHBlbmQoaGVhZGVyLCBncmlkQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBtYWtlTWVudUNhcmQobWVudSwgZGVzY3JpcHRpb24sIHByaWNlLCBzb3VyY2UpIHtcbiAgICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xuXG4gICAgY29uc3QgY2FyZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGVzY3JpcHRpb24nKTtcbiAgICBjYXJkRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYFxuICAgIDxkaXY+JHttZW51fTwvZGl2PlxuICAgIDxkaXY+JHtkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICA8ZGl2PiQke3ByaWNlfTwvZGl2PmBcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBzb3VyY2U7XG5cbiAgICBtZW51Q2FyZC5hcHBlbmQoY2FyZERlc2NyaXB0aW9uLCBpbWcpO1xuICAgIHJldHVybiBtZW51Q2FyZFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtsb2FkSG9tZSwgbWFrZUhlYWRlcn0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUuanMnO1xuXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZChsb2FkSG9tZSgpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGxvYWRNZW51KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==