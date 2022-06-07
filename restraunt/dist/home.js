export default function loadHome() {
    const home = document.createElement('div');
    home.id = 'home';
    
    const header = document.createElement('div').classList.add('header');
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')

    const navArr = ['Home', 'Menu', 'Contact Us'];
    for (const tab of navArr) {
        ul.append(document.createElement('li').innerHTML = tab);
    }

    nav.append(ul);
    header.append(nav);

    const main = document.createElement('div').classList.add('main');
    const title = document.createElement('div').classList.add('title');
    
    const h2 = document.createElement('h2');
    h2.innerText = "Delicious Japanese Cuisine right in the heart of West Vancouver";
    const p = document.createElement('p');
    p.innerText = "Kin Sushi's bold and diverse menu is carefully curated to bring you an elevated culinary experience at every bite";
    const a = document.createElement('a')
    a.innerText = "Order Now";

    title.append(h2, p, a);
    main.append(title);

    const info = document.createElement('div').classList.add('info');

    const location = document.createElement('div').classList.add('location');
    const icon = document.createElement('div').classList.add('icon');
    const address = document.createElement('div')
    address.innerText = "1760 Marine Dr #113, West Vancouver, BC V7V 1J1"

    location.append(icon, address);
    info.append(location);

    const hours = document.createElement('div').classList.add('hours');
    hours.append(icon);

    hours.append(createHourDiv('Mon', 'Closed'));
    hours.append(createHourDiv('Tues-Sat', '11:30am - 8:00pm'));
    hours.append(createHourDiv('Sun', '12:00pm - 8:00pm'));

    info.append(hours)
    main.append(info);

    home.append(header, main);
    return home;
}

function createHourDiv(date, description) {
    const hour = document.createElement('hour');
    hour.innerHTML = `<span>${date}: </span>${description}`;
    return hour;
}