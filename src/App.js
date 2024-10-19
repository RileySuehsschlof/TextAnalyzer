import "./App.css";



//Sets the text in input field to Lorem ipsum when called for display
function SampleData() {
  //sets the value of input field
  document.getElementById("inputField").value =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}


//clears all the input fields for display
function ClearData() {
  document.getElementById("inputField").value = "";
  document.getElementById("sentenceCount").innerHTML = "";
  document.getElementById("frequency").innerHTML = "";
  document.getElementById("frequency").style.visibility = "hidden";// makes the frequency field hidden
}

//gets the sentences in input field and returns an array of sentences
function GetSentences() {
  var txt = document.getElementById("inputField").value;
  var sentenceArray = txt.split(".");
  return sentenceArray;
}

//gets the frequency of the words in the input text
function GetWordFreq() {
  //gets the values inside of inputField and sets it to a variable
  var txt = document.getElementById("inputField").value;

  // splits the text into words, removes empty strings and converts all words to lower case then returns the modified array
  var wordArray = txt.split(/[\s.]+/).filter((word) => word.length > 0);
  var freqArray = {};
  var parent = document.getElementById("frequency");

  // clears any old data
  parent.innerHTML = "";

  // checks to see if word array is empty
  if (wordArray.length > 0) {
    document.getElementById("frequency").style.visibility = "visible";// sets frequency to be visible
  }

  // counts how often the word is found in the array
  for (let i = 0; i < wordArray.length; i++) {
    // converts the word into lowercase and the stores it into word.
    const word = wordArray[i].toLowerCase();

    // if the word is already in the frequency array, increment the count, otherwise add it to the array with a count of 1.
    freqArray[word] = (freqArray[word] || 0) + 1;
  }

  //displays the words and their count
  for (const word in freqArray) {
    //creates a <p> element to store the values
    const p = document.createElement("p");
    //displays the word and count by using the key value pair using string literals
    p.textContent = `${word} ${freqArray[word]}`;
    //adds the class word to the <p> element
    p.className = "word";
    //adds it to the parent which is frequency <div>
    parent.appendChild(p);
  }
}

//calls the functions to analyze the text
function AnalyzeData() {
  var numSentences = GetSentences();
  document.getElementById("sentenceCount").innerHTML = numSentences.length - 1;//displays the number of sentences
  GetWordFreq();
}




function App() {
  return (
    <>
      <div className="container">


        <div className="txtInput">
          <h1>Text Input</h1>

          {/* where we input text */}
          <textarea
            id="inputField"
            className="inputField"
            placeholder="Enter text here"
          ></textarea>

          {/* buttons to call functions */}
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


        {/* where we dislplay the results */}
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
