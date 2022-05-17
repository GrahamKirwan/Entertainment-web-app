# Frontend Mentor - Entertainment web app solution

This is a solution to the [Entertainment app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Navigate between Home, Movies, TV Series, Login and Bookmarked Shows pages
- Add/Remove bookmarks from all movies and TV series
- Search for relevant shows on all pages
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Bonus: Build this project as a full-stack application
- Bonus: If you're building a full-stack app, we provide authentication screen (sign-up/login) - designs if you'd like to create an auth flow

### Screenshot

![](./preview.png)

### Links

- Solution URL: [https://github.com/GrahamKirwan/Entertainment-web-app](https://github.com/GrahamKirwan/Entertainment-web-app)
- Live Site URL: [https://entertainment-web-app-one.vercel.app/](https://entertainment-web-app-one.vercel.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- Hooks, Context, Router
- Local storage
- Firebase authentication
- Toastify library for notifications
- [Styled Components](https://styled-components.com/) - For styles
- Flexbox & CSS Grid
- Figma for design
- Vercel for deployment


### App logic

The goal here was to make a fully responsive and intuitive application with emphasis placed on UX and UI design. 
- Users can only access the bookmarks url if they are logged in with a token id from firebase.
- Users cannot click the bookmark widget unless logged in.
- Login token is stored in local storage if a user leaves the page and revisits.
- Users bookmarks are stored in local storage. This could also have been integreated into a database for the user but for this usecase that would be overkill.
- Users get notified for succesful and failed login attempts.



### Notes & Continued development

Not ideal to ship a react app with an API key even if it was hidden in an environment variable, this key is accessible through developer tools since react is a client side app.


## Author

- Website - [https://grahamkirwan.github.io/](https://grahamkirwan.github.io/)
