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

#### Home Page
<img width="1226" alt="Screen Shot 2022-07-15 at 12 55 30 AM" src="https://user-images.githubusercontent.com/79773846/179153744-486e3098-1a08-4f59-a1ad-9a7fdeee681e.png">
<img width="1218" alt="Screen Shot 2022-07-15 at 12 55 41 AM" src="https://user-images.githubusercontent.com/79773846/179153762-19448380-0b77-4917-a81a-77a55e6632f1.png">

#### Shop Page

<img width="1288" alt="Screen Shot 2022-07-15 at 12 56 00 AM" src="https://user-images.githubusercontent.com/79773846/179153814-6aeb3699-a901-45f6-a931-032822cc5b4f.png">


#### Cart Page

<img width="1253" alt="Screen Shot 2022-07-15 at 12 56 22 AM" src="https://user-images.githubusercontent.com/79773846/179153852-9fc3bff9-2937-4e1f-a6f0-0abc314ab60d.png">

#### Sign Up & Log In Page

<img width="1259" alt="Screen Shot 2022-07-15 at 12 56 45 AM" src="https://user-images.githubusercontent.com/79773846/179153904-90d7ea92-c3ab-46d7-936f-1b12a83ea83d.png">
<img width="1224" alt="Screen Shot 2022-07-15 at 12 56 58 AM" src="https://user-images.githubusercontent.com/79773846/179153916-9e4dc23e-3f11-4c33-ba84-b20a4e8bf711.png">


## Challenges

1. I learned tailwind and DaisyUI from scratch using their documentation. The learning curve for these frameworks was really smooth because I had a solid foundation with vanilla CSS. Would love to explore other CSS frameworks in the future such as Bootstrap or MUI which are industry standards.

2. I learned how to use Firebase authentication and storage using from their documentation. Since Firebase has recently updated to v9 this year, there weren't a lot of resources I could look into on the internet. Overall documentation was the best source of information and was able to set up the backend in less than few hours. I utilized the Context API as well for backend and frontend to interact easily.

3. React router has recently also updated to v6, and was slightly different than what I've learned, such as deprecation of `useHistory` hook or `Switch` component. Eventually had to look up documentation for this one as well and figure out the changes myself.
