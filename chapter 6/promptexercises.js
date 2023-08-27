// array of descriptive words
let words = ['happy', 'sad', 'angry', 'awkward', 'awesome'];
// declare function
function describe() {
  // declare variable to hold prompt value
  let name = prompt('what is your name? ');
  // declare variable to randomly choose a word from the
  let randomValue = Math.floor(Math.random() * words.length);

  console.log(`${name}, ${words[randomValue]}`);
}
describe();
