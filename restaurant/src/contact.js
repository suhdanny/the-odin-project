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

export default loadContact;