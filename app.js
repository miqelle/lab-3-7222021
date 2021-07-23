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

let userAnswer = prompt("What city would I like to visit?");
//create an array
let citiesToVisit = ['New Orleans', 'St. Louis', 'San Diego', 'San Francisco'];

{
/* for ( i = 0; i < citiesToVisit.length; i++)
{
    console.log(citiesToVisit[i]);
} */
if ( userAnswer === citiesToVisit[0])
{
    alert("That's the number one city I want to visit! 😊");
}
else {
    for ( i = 0; i < 7; i++)//this for loop asks the user the question 6 times, and then tells them all possible answer
    {
        prompt("What's the number one city I want to visit?");
    }
    alert("All possible answers: New Orleans, St. Louis, San Diego, San Francisco");
}
