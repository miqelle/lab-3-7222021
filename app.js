//give the user four try's
for (let tries = 1; tries < 5; tries++)
{
    let userAnswer = prompt("Guess a number between 1 and 5")//take in a numeric input by prompting the user to guess a number
    if(userAnswer > 4)
    {
        alert("That's too high!");//Use alert if userAnswer is too high 
    }
    if(userAnswer < 4)//use alert if userAnser is too low
    {
        alert("That's too low!");
    }
}
alert("The answer is 4!");//after all try's used alert("The answer is 4");


//variable to hold game point
let gamePoint = 0
//give the user 6 attempts to guess the correct answer
for (let guesses = 1; guesses < 7; guesses++)
{
//Add a question with multiple correct answers 
 let userAnswer = prompt("What city would I like to visit?");
//create an array
let citiesToVisit = ['New Orleans', 'St. Louis', 'San Diego', 'San Francisco'];
for ( i = 0; i < citiesToVisit.length; i++)//this goes through the length of the array
{
  console.log(citiesToVisit[i]);
/*   if (userAnswer === citiesToVisit[i])
  {
     document.Write(gamePoint++);
  }
}
 */

/* //guesses end once correct answer guessed
if (userAnswer === citiesToVisit[0])


//display all possible correct answers to the user
alert("These are the cities I want to visit: New Orleans, St. Louis, San Diego, San Francisco")

//keep track of total number of correct answer
if ( userAnswer === citiesToVisit[0]) 
{
  alert(gamePoint++);
}
else
{
  alert(gamePoint);
} 
*/
}
 











/* let userPoints = 0;
alert('Welcome to my third guessing game ' + userName + "!");

let answerto = prompt('Is my number one place to visit New Orleans?', 'Type yes or no').toLowerCase();
console.log(answer);

let placesToGo = ['New Orleans', 'St. Louis', 'San Diego', 'San Francisco'];

for (let i = 0; i < placesToGo.length; i++) {
  console.log(placesToGo[i]);
if (answer === 'yes' || answer === 'y') {
  userPoints++;
}
alert('You could have guessed either one of these: New Orleans, St.Louis, San Diego, or San Francisco');
alert('you have ' + userPoints + ' points.') */