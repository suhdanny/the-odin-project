function loadHome() {
    const home = document.createElement('div');
    home.id = 'home';
    
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

export default loadHome;