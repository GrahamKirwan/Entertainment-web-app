# Tools to build this app

React
Styled Components
Context API
TMDB API / Data.js?
Auth
Firebase
Framer Motion
Notifications - toast? (When bookmark)
Local Storage
Form Vaildation?

Logic - Must be logged in to bookmark or view bookmarks page. When logged in, bookmarks are saved in local storage. 

Not ideal to ship a react app with an API key even if it was hidden in an environment variable, this key is accessible through developer tools since react is a client side app.

Users can only access the bookmarks url if they are logged in with a token id from firebase.
Users cannot click the bookmark widget unless logged in.
Login token is stored in local storage if a user leaves the page and revisits.
Users bookmarks are stored in local storage. This could also have been integreated into a database for the user but for this usecase that would be overkill.
Users get notified for succesful and failed login attempts.
Fully responsive.