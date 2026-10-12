let welcomeAlert = alert(`Welcome to the Adventure Realm! Let's create your hero!`);

const characterName = prompt(`What is your character's name?`);
const pet = prompt(`What kind of pet does ${characterName} have? (dragon, wolf, robot, unicorn, phoenix, etc.)`, "dragon");
const superpower = prompt(`What is ${characterName}'s special superpower?`);
const likesFighting = confirm(`Does ${characterName} like fighting monsters? 
Click OK for YES
Click Cancel for NO`);

let finalizationAlert = alert(`Gathering magic for ${characterName}... almost ready!`);


let characterSummary = alert
(`
SUMMARY
=============
Name: ${characterName}
Pet: ${pet}
Superpower: ${superpower}
Monster Fighter: ${likesFighting}. Yes.
=============`);


let characterStory = alert
(`
===================
In a faraway land, ${characterName} travels, aided by the companionship of a brave ${pet}.
Will their power of ${superpower} be used to rid the land of its nasty monsters? That would seem to be ${likesFighting}.
===================`);