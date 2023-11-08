import reactLogo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <div className="wizard-btn-container">
          <button className="btn wizard-btn">
            <img src={reactLogo} className="logo" alt="Copilot logo" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
