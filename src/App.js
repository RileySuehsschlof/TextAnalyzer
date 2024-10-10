import "./App.css";
function SampleData() {
  document.getElementById("inputField").value =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}
function ClearData() {
  document.getElementById("inputField").value = "";
  document.getElementById("sentenceCount").innerHTML = "";
  document.getElementById("frequency").innerHTML = "";
  document.getElementById("frequency").style.visibility = "hidden";
}
function GetSentences() {
  var txt = document.getElementById("inputField").value;
  var sentenceArray = txt.split(".");
  return sentenceArray;
}
function GetWordFreq() {
  var txt = document.getElementById("inputField").value;
  var wordArray = txt.split(/[\s.]+/).filter((word) => word.length > 0);
  var freqArray = {};
  var parent = document.getElementById("frequency");
  parent.innerHTML = "";
  if (wordArray.length > 0) {
    document.getElementById("frequency").style.visibility = "visible";
  }

  for (let i = 0; i < wordArray.length; i++) {
    const word = wordArray[i].toLowerCase();
    freqArray[word] = (freqArray[word] || 0) + 1;
  }
  for (const word in freqArray) {
    const p = document.createElement("p");
    p.textContent = `${word} ${freqArray[word]}`;
    p.className = "word";
    parent.appendChild(p);
  }
}
function AnalyzeData() {
  var numSentences = GetSentences();
  document.getElementById("sentenceCount").innerHTML = numSentences.length - 1;
  GetWordFreq();
}

function App() {
  return (
    <>
      <div className="container">
        <div className="txtInput">
          <h1>Text Input</h1>
          <textarea
            id="inputField"
            className="inputField"
            placeholder="Enter text here"
          ></textarea>
          <div className="buttons">
            <button type="button" className="myBtn" onClick={SampleData}>
              Sample Data
            </button>
            <button type="button" className="myBtn" onClick={AnalyzeData}>
              Analyze
            </button>
            <button type="button" className="myBtn" onClick={ClearData}>
              Clear
            </button>
          </div>
        </div>

        <div className="results">
          <div className="numSentences">
            <h1># of Sentences:</h1>
            <p id="sentenceCount"></p>
          </div>

          <div className="frequency">
            <h1>Word Frequency</h1>
            <div id="frequency"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
