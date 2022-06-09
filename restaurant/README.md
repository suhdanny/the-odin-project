# Restaurant Website

This website uses JavaScript alone to dynamically create the entire contents of the website. The website includes home, menu, and contact page.

## [Demo](https://restaurant-kinsushi.netlify.app/)

<img width="1425" alt="Screen Shot 2022-06-08 at 11 56 57 PM" src="https://user-images.githubusercontent.com/79773846/172760979-239b5e04-6733-4380-b718-2a1ec64e950b.png">

<img width="1415" alt="Screen Shot 2022-06-08 at 11 57 18 PM" src="https://user-images.githubusercontent.com/79773846/172761015-d1d6d214-6675-4890-9577-53d4fb675bc8.png">

<img width="1405" alt="Screen Shot 2022-06-08 at 11 57 29 PM" src="https://user-images.githubusercontent.com/79773846/172761039-1bc8dd3f-6e3b-4bbd-a61d-ff7132c18b62.png">

## Reflection

This was my first project to use webpack its corresponding file structure. I organized the files into `dist` and `src` folders. In the `src` folder, there are three modules `home.js`, `menu.js`, `contact.js` that export the functions which dynamically create the HTML contents for each page. In the `index.js` file, the header content is dynamically loaded by default, and the imported functions are called when the click event is triggered for each of the tabs in the header. I learned how to configure `webpack.config.js` file so that I can use `npm run build` command as well as `npm run watch` which automatically reloads the website whenever I save the file.
