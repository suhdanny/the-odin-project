# Fashion E-Commerce Website

This single-page application was built with React, Tailwind + DaisyUI, and Firebase.

## Features

#### Frontend:

-   Navbar with icons where user can browse to different pages using react-router-dom library
-   Clean, beautiful home page where it displays best products and model photographs using react-slider library
-   Shopping page that displays all available products where user can add items to the cart as well as also favorite the items using the heart icon
-   Cart page where user can view all the items they have stored in their cart as well as checkout the items which empties their cart automatically
-   Login page and Sign up page where user can make new accounts or log-in with existing accounts

#### Backend:

-   Provides user authentication and data storage using Firebase
-   Users can log-in with their existing account to access stored items in their cart as well as their favorite items they have saved when they logged out last time

## [Demo](https://shopping-cart-e268f.web.app/)

## Challenges

1. I learned tailwind and DaisyUI from scratch using their documentation. The learning curve for these frameworks was really smooth because I had a solid foundation with vanilla CSS. Would love to explore other CSS frameworks in the future such as Bootstrap or MUI which are industry standards.

2. I learned how to use Firebase authentication and storage using from their documentation. Since Firebase has recently updated to v9 this year, there weren't a lot of resources I could look into on the internet. Overall documentation was the best source of information and was able to set up the backend in less than few hours. I utilized the Context API as well for backend and frontend to interact easily.

3. React router has recently also updated to v6, and was slightly different than what I've learned, such as deprecation of `useHistory` hook or `Switch` component. Eventually had to look up documentation for this one as well and figure out the changes myself.
