/* //Add a question with multiple correct answers 
prompt("What city would I like to visit?");


//create an array
let citiesToVisit = ['New Orleans', 'St. Louis', 'San Diego', 'San Francisco'];


 */
let userPoints = 0;
alert('Welcome to my third guessing game ' + userName + "!");

let answerto = prompt('Is my number one place to visit New Orleans?', 'Type yes or no').toLowerCase();
console.log(answer);

let placesToGo = ['New Orleans', 'St. Louis', 'San Diego', 'San Francisco'];

for (let i = 0; i < placesToGo.length; i++) {
  console.log(placesToGo[i]);
}
if (answer === 'yes' || answer === 'y') {
 
  userPoints++;
} else {
  alert('Wrong! try again');
}
alert('You could have guessed either one of these: New Orleans, St.Louis, San Diego, or San Francisco');
alert('you have ' + userPoints + ' points.');