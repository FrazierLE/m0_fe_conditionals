// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0



console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);

console.log("is numberTeachers < numberStudents?", numberTeachers < numberStudents);

console.log("is numberTeachers strictly equal to stringTeachers?", numberTeachers === numberTeachers);

console.log("is numberTeachers not equal to numberStudents?", numberTeachers === numberStudents);

console.log("is numberStudents greater than or equal to 20?", numberStudents >= 20);

console.log("is numberStudents greater than or equal to 21?", numberStudents >= 21);

console.log("is numberStudents less than or equal to 20?", numberStudents <= 20);

console.log("is numberStudents less than or equal to 21?", numberStudents <= 21);

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!


console.log(4 < 9);
// logging to see if 4 is less than 9 and the statement will be true

var books = 3;
console.log(4 < books);
// logging to see if books is less than 4 and the statement will say true

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// logging to see if the friends value is greater than the siblings value and the statement will log true

var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// I believe it should say !== with an additional = but what it would've tried to log is to see if meals and attendees are not strictly equal


// #-------------------
// PART 3: Logical Operators
// #-------------------
var isHungry = true;
var finishedHomework = false;

console.log(isHungry && finishedHomework);

console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

console.log(lovesToPlay && lovesTreats);

console.log(lovesToPlay && lovesDogPark);

console.log(lovesToPlay || lovesDogPark);

console.log(lovesToPlay && 1 <= age);
//The statement was true because I said the age had to be less or equal to 1.
