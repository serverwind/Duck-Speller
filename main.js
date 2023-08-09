const SUBMIT = document.getElementById("submit");

SUBMIT.addEventListener("click", fetching);

function fetching() {
  let text = document.getElementById("text").value;
  let wordsArr = text.split(" ");
  const URL = `https://speller.yandex.net/services/spellservice.json/checkTexts?text=${text}`;
  const PROMISE = fetch(URL);
  PROMISE.then((response) => response.json()).then((data) => {
    for (let i = 0; i < data[0].length; i++) {
      console.log(data);
      let word = data[0][i].word;
      for (let z = 0; z < wordsArr.length; z++) {
        if (word == wordsArr[z]) {
          wordsArr[z] = data[0][i].s[0];
        }
      }
    }
    console.log(wordsArr);
    writeText(wordsArr);
  });
}

function writeText(wordsArr) {
  let spelledText = document.getElementById("spelled-text");
  let str = wordsArr.join(" ");
  spelledText.innerHTML = str;
}
