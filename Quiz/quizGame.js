//Shelbie Peterson 10/19/2026
// Week 3 Homework; "Math Quiz"

"use strict";

//Initializes user score
let userScore = 0;
let userMisses = 0;

//Sets expected answers for each question
const quizAnswer1 = 8;
const quizAnswer2 = 6;
const quizAnswer3 = 12;
const quizAnswer4 = 4;
const quizAnswer5 = 623;

//Sets the query for each question for formatting purposes
const quizQuestion1 = "5 + 3";
const quizQuestion2 = "10 - 4";
const quizQuestion3 = "4 x 3";
const quizQuestion4 = "20 / 5";
const quizQuestion5 = "my favorite number";


//Question 1
const userAnswer1 = Number(prompt(`Question 1:
    What is ${quizQuestion1}?`));
if (userAnswer1 === quizAnswer1) {
    userScore++
    alert(`That is correct. ${quizQuestion1} is ${quizAnswer1}.`)
}
else {
    userMisses++
    alert(`That is incorrect. ${quizQuestion1} is ${quizAnswer1}. You entered ${userAnswer1}.`)
};

//Question 2
const userAnswer2 = Number(prompt(`Question 2:
    What is ${quizQuestion2}?`));
if (userAnswer2 === quizAnswer2) {
    userScore++
    alert(`That is correct. ${quizQuestion2} is ${quizAnswer2}.`)
}
else {
    userMisses++
    alert(`That is incorrect. ${quizQuestion2} is ${quizAnswer2}. You entered ${userAnswer2}.`)
};

//Question 3
const userAnswer3 = Number(prompt(`Question 3:
    What is ${quizQuestion3}?`));
if (userAnswer3 === quizAnswer3) {
    userScore++
    alert(`That is correct. ${quizQuestion3} is ${quizAnswer3}.`)
}
else {
    userMisses++
    alert(`That is incorrect. ${quizQuestion3} is ${quizAnswer3}. You entered ${userAnswer3}.`)
};

//Question 4
const userAnswer4 = Number(prompt(`Question 4:
    What is ${quizQuestion4}?`));
if (userAnswer4 === quizAnswer4) {
    userScore++;
    alert(`That is correct. ${quizQuestion4} is ${quizAnswer4}.`);
}
else {
    userMisses++;
    alert(`That is incorrect. ${quizQuestion4} is ${quizAnswer4}. You entered ${userAnswer4}.`);
};

//Question 5
const userAnswer5 = Number(prompt(`Final Question:
    What is ${quizQuestion5}? :)`));
if (userAnswer5 === quizAnswer5) {
    userScore++;
    alert(`That is correct. ${quizQuestion5} is ${quizAnswer5}.`);
}
else {
    userMisses++;
    alert(`That is incorrect. ${quizQuestion5} is ${quizAnswer5}. You entered ${userAnswer5}.`);
};


//Judges whether the user passed or not
let passingScore = (userScore >= 4) ? "Congratulations!" : "Try again.";

//Presents final score to the user, formatted slightly differently if the score is perfect
if (userMisses === 0) {
    alert(`You answered all ${userScore}/5 questions correctly, earning a score of ${userScore * 20}%.
    ${passingScore}`)
}
//displays a special message if the user scored 3/5
else if (userScore === 3) {
    alert("Something sinister awaits in the developer console.");
    console.log("Made you look :)");
}
else {
    alert(`You answered ${userScore}/5 questions correctly, missing ${userMisses} and earning a score of ${userScore * 20}%.
    ${passingScore}`)
};