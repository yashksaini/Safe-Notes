import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let db = window.data_base;
  const [input, setInput] = useState("");
  const [showAddPassword, setShowAddPassword] = useState("hide");
  const [showSelectOptions, setShowSelectOptions] = useState("hide");
  const [showsetPassword, setShowsetPassword] = useState("hide");
  const [valid, setValid] = useState(true);
  const [ifPasskey, setIfPasskey] = useState(false);

  const characters1 =
    "T7P36LlcJK9jRkmrn5yFpMbGa1SWidswzOhVI0DZt NxCHoYBQ8uUAv4eg2EXfq";
  const characters2 =
    "AL9n2TS57RaIJgx8uqdXvYezMCpU1syH0wcKGNWE ikQO4Zlhbm3jD6tPVFrofB";
  function generateString(length) {
    let result = "";
    const charactersLength = characters1.length;
    for (let i = 0; i < length; i++) {
      result += characters1.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    return result;
  }
  const onInputChange = (ev) => {
    setInput(ev.target.value);
    if (ev.target.value < 10000 && ev.target.value > 999) {
      setValid(false);
    } else {
      setValid(true);
    }
  };
  const checkPasskey = () => {
    if (db) {
      const tx = db.transaction("passkey", "readonly");
      const passKey = tx.objectStore("passkey");

      let countRequest = passKey.count();
      countRequest.onsuccess = function () {
        if (countRequest.result === 0) {
          setShowAddPassword("add_passkey");
        } else {
          setShowAddPassword("hide");

          const localValue = dcrypt(
            localStorage.getItem("Safe-notes"),
            characters2
          );

          var request = passKey.openCursor();
          let storedValue = null;
          request.onsuccess = (e) => {
            var result = e.target.result;
            if (!!result === false) {
              return;
            }
            storedValue = dcrypt(result.value.text, characters1);

            if (storedValue.join("") === localValue.join("")) {
              setShowSelectOptions("");
              setShowsetPassword("hide");
            } else {
              setShowsetPassword("add_passkey");
            }
          };
        }
      };
    }
  };
  const encrypt = (array, characters) => {
    let a = array;
    let b = [];
    for (let i = 0; i < a.length; i++) {
      if (i % 2 === 0) {
        let x = characters.indexOf(a[i]);
        if (x === -1) {
          b.push(a[i]);
        } else {
          b.push(characters[(x + i) % characters.length]);
        }
      }
    }
    for (let i = 0; i < a.length; i++) {
      if (i % 2 !== 0) {
        let x = characters.indexOf(a[i]);
        if (x === -1) {
          b.push(a[i]);
        } else {
          b.push(characters[(x + i) % characters.length]);
        }
      }
    }
    return b;
  };
  const dcrypt = (array, characters) => {
    let b = array;
    let c = [];
    let temp = [];
    let y = parseInt(b.length / 2 + 0.6);
    let count = b.length;
    y--;
    for (let i = 0; i <= y; i++) {
      if (count > 0) {
        temp.push(b[i]);
        count--;
      }
      if (count > 0) {
        temp.push(b[parseInt(y) + parseInt(i) + parseInt(1)]);
        count--;
      }
    }
    for (let k = 0; k < temp.length; k++) {
      let x = characters.indexOf(temp[k]);
      if (x === -1) {
        c.push(temp[k]);
      } else {
        c.push(
          characters[
            (characters.length + x - (k % characters.length)) %
              characters.length
          ]
        );
      }
    }
    return c;
  };

  useEffect(() => {
    const dbName = window.dbnewName;
    const dbVersion = window.dbVer;
    const request = indexedDB.open(dbName, dbVersion);
    //On Success (Every time called if any success)
    request.onsuccess = (e) => {
      const tempdb = e.target.result;
      db = tempdb;
      checkPasskey();
    };
  }, []);
  return (
    <div>
      <div className={showAddPassword}>
        <div className="add_note">
          <h4>Add Passkey</h4>
          <input
            type="number"
            onChange={onInputChange}
            min="1000"
            max="9999"
            placeholder="Enter passkey... (4 digit)"
          />
          <button
            disabled={valid}
            onClick={() => {
              const tx = db.transaction("passkey", "readwrite");
              const randomString = generateString(10);
              let newdata = encrypt(input, characters1);
              const newValue = {
                id: randomString,
                text: newdata.join(""),
              };
              let newdata1 = encrypt(input, characters2);
              localStorage.setItem("Safe-notes", newdata1.join(""));
              const localValue = localStorage.getItem("Safe-notes");
              const newPasskey = tx.objectStore("passkey");
              newPasskey.add(newValue);
              checkPasskey(db);
              window.location.reload();
            }}
          >
            Next
          </button>
        </div>
        <div className="add_note">
          <h4>Safe Note</h4>
          <br />
          <p>
            <i className="fas fa-check"></i> Set 4 digit passkey and remember
            it.
          </p>
          <br />
          <p>
            <i className="fas fa-check"></i> Enter passkey to secure your notes.
          </p>
          <br />
          <p>
            <i className="fas fa-check"></i> Use passkey to view notes when
            locked.
          </p>
          <br />
          <p>
            <i className="fas fa-check"></i> All data is stored in local Storage
            and in encrypted form.
          </p>
        </div>
      </div>
      <div className={showsetPassword}>
        <div className="add_note">
          <h4>Enter Passkey</h4>
          <input
            type="number"
            onChange={onInputChange}
            min="1000"
            max="9999"
            placeholder="Enter passkey... (4 digit)"
          />
          <button
            disabled={valid}
            onClick={() => {
              let olddata = encrypt(input, characters2);
              localStorage.setItem("Safe-notes", olddata.join(""));
              window.location.reload();
            }}
          >
            Next
          </button>
        </div>
      </div>
      <div className={showSelectOptions}>
        <div className="select_box">
          <Link to="/checklist">Links</Link>
          <Link to="/notes">Notes</Link>
          <Link to="/passwords">Passwords</Link>
          <a
            href="#"
            onClick={() => {
              localStorage.setItem("Safe-notes", 0);
              window.location.reload();
            }}
          >
            Lock &nbsp;&nbsp;
            <i className="fas fa-lock"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
