import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import registerServiceWorker from "./registerServiceWorker";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

let installButton;

window.addEventListener("beforeinstallprompt", function(e) {
  e.preventDefault(); // Prevents immediate prompt display

  // Shows prompt after a user clicks an "install" button
  installButton.addEventListener("click", function(e) {
    e.prompt();
  });

  installButton.hidden = false; // Make button operable
});

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Testing the magic of PWA {"\u2728"}</h2>
    <button
      ref={c => {
        installButton = c;
      }}
    >
      Install on home screen!
    </button>
  </div>
);

render(<App />, document.getElementById("root"));

registerServiceWorker();
