// var userText = document.getElementById('userInput').value;

function printResults() {
  var userText = document.getElementById('userInput').value;
  // document.getElementById("result").innerHTML = userText;
  // ^blocked out temporarily
  var newWords = 0;
  for var i=0; i<userText.lenth; i++){
    if (userText[i] === "a"){
      // I may have to change i to 1 to account for not having a space after the last word.
      newWords++;
    }
  }
  document.getElementById("result").innerHTML = "Total words = " + newWords;
}


// var newWords = document.getElementById('id')
