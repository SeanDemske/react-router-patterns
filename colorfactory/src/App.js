import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Components/Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
