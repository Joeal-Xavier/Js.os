import "./App.css";
import React from "react";
import Desktop from "./components/ui/Desktop/Desktop";

class App extends React.Component {
  render() {
    console.log(this.props.activeApps);
    return (
      <div className="App">
        <Desktop />
      </div>
    );
  }
}

export default App;
