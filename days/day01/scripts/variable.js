(function runVariablesExercises() {

  /*
    comments can make code readable,
    easy to reuse and informative
  */

  // Declare variables and assign string, boolean, undefined and null data types
  const courseTitle = '30DaysOfJavaScript'; // string
  const isChallenging = true; // boolean
  let nextUnknownValue; // undefined
  const emptyPlaceholder = null; // null

  // Declare four variables without assigning values
  let unassignedOne;
  let unassignedTwo;
  let unassignedThree;
  let unassignedFour;

  // Declare four variables with assigned values
  const assignedOne = 1;
  const assignedTwo = 'two';
  const assignedThree = false;
  const assignedFour = 4.0;

  // Declare variables for personal info (multiple lines)
  const firstName = 'Asabeneh';
  const lastName = 'Yetayeh';
  const maritalStatus = 'married';
  const country = 'Finland';
  const age = 100;

  // Same variables in a single line
  const firstNameOneLine = 'Asabeneh', lastNameOneLine = 'Yetayeh', maritalStatusOneLine = 'married', countryOneLine = 'Finland', ageOneLine = 100;

  // Declare myAge and yourAge and log to the browser console
  const myAge = 25;
  const yourAge = 30;
  console.log(`I am ${myAge} years old.`);
  console.log(`You are ${yourAge} years old.`);

  // Prevent unused variable warnings in some setups
  void courseTitle; void isChallenging; void nextUnknownValue; void emptyPlaceholder;
  void unassignedOne; void unassignedTwo; void unassignedThree; void unassignedFour;
  void assignedOne; void assignedTwo; void assignedThree; void assignedFour;
  void firstName; void lastName; void maritalStatus; void country; void age;
  void firstNameOneLine; void lastNameOneLine; void maritalStatusOneLine; void countryOneLine; void ageOneLine;
})();


