import "./App.css";
import "./index.css";

import { ThemeProvider } from "styled-components";

import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}

export default App;
