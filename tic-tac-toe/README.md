# Tic Tac Toe

This project aimed to build a tic tac toe game you can play on your browser. Built mainly with JavaScript.

## [Demo](https://tictactoe-donghyunsuh.netlify.app/)

![Screen Shot 2022-06-05 at 6 53 21 PM](https://user-images.githubusercontent.com/79773846/172073945-c5acee23-41b6-4aa3-bada-49a269fd11d9.png)

## Reflection

I created a gameBoard object using the module pattern. Added functions inside the object and returned only the necessary functions, thus hiding the private functions. The goal was to have as little global code as possible. One major issue after completing the code was that the `removeEventListener` function was having issues when invoking `handleClick` function as an argument. I fixed it by wrapping the handler into an anonymous event listener function, and naming that handler function when calling `removeEventListener`. This resolved the issue where some cells had two click events when restart button was clicked.
