# Restaurant Website

This website uses JavaScript alone to dynamically create the entire contents of the website. The website includes home, menu, and contact page.

## [Demo](https://restaurant-kinsushi.netlify.app/)

## Reflection

This was my first project to use webpack its corresponding file structure. I organized the files into `dist` and `src` folders. In the `src` folder, there are three modules `home.js`, `menu.js`, `contact.js` that export the functions which dynamically create the HTML contents for each page. In the `index.js` file, the header content is dynamically loaded by default, and the imported functions are called when the click event is triggered for each of the tabs in the header. I learned how to configure `webpack.config.js` file so that I can use `npm run build` command as well as `npm run watch` which automatically reloads the website whenever I save the file.