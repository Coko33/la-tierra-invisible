import lineaPeluda from "./img/lineaPeluda.svg";
import lti from "./img/lti3-03.svg";
import "./App.css";
import Footer from "./components/Footer";
import Grilla from "./components/Grilla";
import Admin from "./components/Admin";

function App() {
  return (
    <>
      <Admin />
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">La Tierra Invisible</h1>
          <img src={lineaPeluda} className="App-lineaPeluda" alt="logo" />
        </header>
        <Grilla></Grilla>
        <Footer></Footer>
        <div className="App-guardaPampa">
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
        </div>
        <div className="App-guardaPampa izq">
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
          <img src={lti} className="App-lti" alt="logo" />
        </div>
      </div>
    </>
  );
}

export default App;
