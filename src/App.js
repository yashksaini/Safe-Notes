import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checklist from "./pages/Checklist";
import Notes from "./pages/Notes";
import Passwords from "./pages/Passwords";
import { useState, useEffect } from "react";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="App">
      <div className="head_name">
        <p>
          <a href="/">
            <i className="fas fa-home"></i>
          </a>
        </p>
        <p>Safe Notes</p>
      </div>
      <div className="all_components">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/checklist" element={<Checklist />}></Route>
            <Route path="/notes" element={<Notes />}></Route>
            <Route path="/passwords" element={<Passwords />}></Route>
            {/*
            <ProtectedRoute
              isAuth={isAuth}
              exact
              path="/checklist"
              component={<Home />}
            ></ProtectedRoute>
            
            <ProtectedRoute
              isAuth={isAuth}
              exact
              path="/notes"
              component={<Notes />}
            ></ProtectedRoute>
            <ProtectedRoute
              isAuth={isAuth}
              exact
              path="/passwords"
              component={<Passwords />}
            ></ProtectedRoute> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
