import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Switch } from "react-router-dom";
import Homepage from '../src/pages/Homepage';
import Movies from '../src/pages/Movies';
import TvSeries from '../src/pages/TvSeries';
import Bookmarks from '../src/pages/Bookmarks';
import Login from '../src/pages/Login';


function App() {
  return (
    <div className="App">
                  <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              /> 
        <Switch>
          <Route path="/" exact>
            <Homepage></Homepage>
          </Route>
          <Route path="/movies">
            <Movies></Movies>
          </Route>
          <Route path="/tv-series">
            <TvSeries></TvSeries>
          </Route>
          <Route path="/bookmarks">
            <Bookmarks></Bookmarks>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
