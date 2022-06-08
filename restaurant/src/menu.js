import { makeHeader } from "./home";

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


export default loadMenu;