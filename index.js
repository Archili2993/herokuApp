// Import stylesheets
import './style.css';

const inputs = document.getElementById('inputs');
const checkBtn = document.getElementById('checkBtn');

/* Creating function display with the fetched data from the API. */
const word = [
  'ჭკვიანი',
  'სულელი',
  'მარილი',
  'შაქარი',
  'გონება',
  'კეპი',
  'სუპი',
  'ლიმონი',
  'სკამი',
  'მაგიდა',
  'პიანინო',
  'სპილო',
  'წყალი',
  'კიბე',
  'ტორტი',
];
let words = word[Math.floor(Math.random() * word.length)];
console.log(words);

/* looping through the given data from the API and displaying inputs of the length of the word. */

for (let i = 0; i < words.length; i++) {
  const input = document.createElement('input');
  input.maxLength = 1;
  input.type = 'text';
  input.className = 'inputs';
  input.setAttribute('count', i);
  input.id = 'inputType' + i;
  inputs.appendChild(input);
}

// for (let i = 0; i < words.length; i++) {
//   inputs.innerHTML += `
//     <input maxlength="1" type="text" id="inputType"  />
//     `;
// }
// const input = document.getElementById('inputType');
// input.addEventListener('keyup', (e) => {
//   console.log(e.target.id);

//   if (e.target.value.length >= 1) {
//     document.getElementById(e.target.id).focus();
//   }
// });

// function ValidatePassKey(tb) {
//   if (tb.length >= 1) document.getElementById(tb.id + 1).focus();
// }

let wordArr = [];
const pTag = document.getElementById('winOrLose');
let allInputs = document.querySelectorAll('.inputs');

/* making the placeholders of the first and the last inputs equal to the words' first and the last symbols */
// allInputs[0].placeholder = words[0][0];
allInputs[words.length - 1].placeholder = words[words.length - 1];
const a = allInputs[Math.floor(Math.random() * allInputs.length)];
console.log(a);
let cnt = 0;
allInputs.forEach((element) => {
  element.onclick = () => {
    cnt = element.getAttribute('count');
  };
  element.onkeyup = function () {
    if (element.value.length >= element.maxLength) {
      cnt++;

      if (cnt == words.length) {
        cnt = -1;
      } else {
        document.getElementById(element.id.slice(0, -1) + cnt).focus();
      }
    }
  };
});

/* after clicking the "CHECK!" button, it will loop through the options and will push the values of inputs to the array 'wordArr' */
const hint = document.getElementById('hint');
checkBtn.addEventListener('click', () => {
  hint.style.display = 'none';
  for (let i = 0; i < allInputs.length; i++) {
    const value = allInputs[i].value;
    wordArr.push(value);
  }
  //set the array's length to 0

  /* if the given word from the API is equal to the word taken from the input, it'll display 'YOU WON!!!', if NOT it'll display 'WTF MAN.. WRONG.'*/

  const nextButton = document.getElementById('NextBtn');

  if (words === wordArr.join('')) {
    pTag.innerHTML = 'გამოიცანი!!!';
    wordArr = [];
    nextButton.style.display = 'block';
  } else {
    pTag.innerHTML = 'თავიდან სცადე';
    wordArr = [];
  }
});
// console.log(wordArr.join(''));
