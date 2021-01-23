import "./App.css";
import Sidemenu from "./components/Sidemenu";
import Home from "./screens/homepage/Home";

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-5">
        <Sidemenu />
        <Home />
      </div>
    </div>
  );
}

export default App;
