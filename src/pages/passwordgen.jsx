import React, { useState } from "react";
import "./passgen/generatorstyle.css";

const PasswordGenerator = () => {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const uppercaseChars = "ABCDEFGHJKLMNPQRTUVWXYZ";
  const lowercaseChars = "abcdefghijkmnopqrstuvwxyz";
  const numbersChars = "2346789";
  const symbolsChars = "!@#$%&";

  const generatePassword = () => {
    let characters = "";
    if (uppercase) characters += uppercaseChars;
    if (lowercase) characters += lowercaseChars;
    if (numbers) characters += numbersChars;
    if (symbols) characters += symbolsChars;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  const toggleSettings = () => {
    const settings = document.getElementById("settings");
    settings.style.display =
      settings.style.display === "none" ? "block" : "none";
  };

  return (
    <div className="pageContainer">
      <div id="contentGen">
        <div className="window" id="menu">
          <h1 id="headerTextGen">Password Generator</h1>
          <label>Password Length: </label>
          <input
            className="textBox"
            type="text"
            id="passLength"
            value={length}
            readOnly
          />
          <input
            type="range"
            id="lengthslider"
            name="lengthslider"
            min="8"
            max="32"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <button
            className="button"
            id="generateButton"
            onClick={generatePassword}
          >
            Generate
          </button>
          <br />
          <br />
          <p>Generated Password:</p>
          <input
            className="textBox"
            id="output"
            type="text"
            name="result"
            value={password}
            readOnly
          />
          <button className="button" id="copyButton" onClick={copyToClipboard}>
            Copy
          </button>
          <br />
          <br />
          <button
            className="material-symbols-outlined"
            id="settingsButton"
            onClick={toggleSettings}
          >
            settings
          </button>
        </div>
        <div className="window" id="settings" style={{ display: "none" }}>
          <h1>Advanced Settings</h1>
          <div id="checkBoxes">
            <span className="checkBox" id="numbers">
              0-9
              <input
                type="checkbox"
                id="numberBox"
                checked={numbers}
                onChange={() => setNumbers(!numbers)}
              />
            </span>
            <span className="checkBox" id="lowercase">
              a-z
              <input
                type="checkbox"
                id="lowercaseBox"
                checked={lowercase}
                onChange={() => setLowercase(!lowercase)}
              />
            </span>
            <span className="checkBox" id="uppercase">
              A-Z
              <input
                type="checkbox"
                id="upperCaseBox"
                checked={uppercase}
                onChange={() => setUppercase(!uppercase)}
              />
            </span>
            <span className="checkBox" id="symbols">
              !@#$%&
              <input
                type="checkbox"
                id="symbolsBox"
                checked={symbols}
                onChange={() => setSymbols(!symbols)}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
