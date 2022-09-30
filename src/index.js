import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
window.dbVer = "1";
window.dbnewName = "safeNotes";

function getImpDetails() {
  const dbName = window.dbnewName;
  const dbVersion = window.dbVer;
  const request = indexedDB.open(dbName, dbVersion);
  //On Upgrade Needed
  request.onupgradeneeded = (e) => {
    const tempdb = e.target.result;

    tempdb.createObjectStore("passkey", {
      keyPath: "id",
    });
    tempdb.createObjectStore("notes", { keyPath: "id", autoIncrement: true });

    tempdb.createObjectStore("links", { keyPath: "id", autoIncrement: true });

    tempdb.createObjectStore("passwords", {
      keyPath: "id",
      autoIncrement: true,
    });
  };
  //On Success (Every time called if any success)
  request.onsuccess = (e) => {
    const tempdb = e.target.result;
    window.data_base = tempdb;
  };
  //On Error
  request.onerror = (e) => {
    console.log(`error: ${e.target.error} was found `);
  };
}
getImpDetails();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
serviceWorkerRegistration.register();
