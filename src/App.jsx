import "./App.css";

// Data
import { upperCaseLetters, lowerCaseLetters, numbers, special } from "./data";


function App() {
  return (
    <div className="App">
      {/* Modal */}
      <div className="backdrop"></div>
      <div className="modal">
        <h2>Success</h2>
        <p>Password successfully copied to clipboard</p>
        <button>Okay</button>
      </div>
      {/* Modal */}
      <div className="generator">
        <form className="generator__form">
          <div className="generator__form-controls">
            <div className="generator__form-control">
              <label htmlFor="uppercase">Uppercase</label>
              <input type="checkbox" id="uppercase" name="uppercase" />
            </div>
            <div className="generator__form-control">
              <label htmlFor="lowercase">Lowercase</label>
              <input type="checkbox" id="lowercase" name="lowercase" />
            </div>
            <div className="generator__form-control">
              <label htmlFor="numbers">Numbers</label>
              <input type="checkbox" id="numbers" name="numbers" />
            </div>
            <div className="generator__form-control">
              <label htmlFor="symbols">Symbols</label>
              <input type="checkbox" id="symbols" name="symbols" />
            </div>
            <div className="generator__length">
              <h4 className="generator__length-title">Password Length</h4>
              <div className="generator__length-counter">
                <button>-</button>
                <span>0</span>
                <button>+</button>
              </div>
            </div>

            <div className="generator__form-actions">
              <button className="btn generate-btn">Generate Password</button>
              <button className="btn copy-btn">Copy Password</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
