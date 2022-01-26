function search() {
  var inputText = document.getElementById(`input-text`).value;
  var textCollection = document.getElementsByClassName(`text`);
  for (var i = 0; i < textCollection.length; i++) {
    var oldText = textCollection[i].innerText;
    var newText = oldText.replaceAll(
      inputText,
      `<span style="background-color:yellow">${inputText}</span>`
    );
    textCollection[i].innerHTML = newText;
  }
}

function replace() {
  var inputText = document.getElementById(`input-text`).value;
  var replaceText = document.getElementById(`replace-text`).value;
  var textCollection = document.getElementsByClassName(`text`);
  for (var i = 0; i < textCollection.length; i++) {
    var oldText = textCollection[i].innerText;
    var newText = oldText.replaceAll(
      inputText,
      `<span style="background-color:yellow">${replaceText}</span>`
    );
    textCollection[i].innerHTML = newText;
  }
}

var btnReplace = document.getElementById("btnReplace");
btnReplace.addEventListener(`click`, replace);