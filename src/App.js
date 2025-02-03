import "./styles/main.css";
import Navelastic from "./components/navelastic/Navelastic";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navelastic />
      <div>
        <div className="base"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
