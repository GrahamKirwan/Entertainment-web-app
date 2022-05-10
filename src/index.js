import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "../src/components/store/auth-context";
import { BookmarkContextProvider } from "../src/components/store/bookmark-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BookmarkContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BookmarkContextProvider>
  </AuthContextProvider>
);
