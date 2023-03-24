import logo from "./logo.svg";
import "./App.scss";
/**
 * components:
 *  class component
 *  function
 *    function: "function App ()"
 *    arrow: "const App = () =>"
 */
import React from "react";
class ComponentTest extends React.Component {
  render() {
    return (
      <div>
        <h3>Test component</h3>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ComponentTest />
      </header>
    </div>
  );
}

export default App;
