(function showNonPrimitives() {
  // Arrays are mutable and compared by reference
  const nums = [1, 2, 3];
  nums[0] = 10;
  console.log(nums); // [10, 2, 3]

  const a = [1, 2, 3];
  const b = [1, 2, 3];
  console.log(a == b); // false (different references)

  const c = a;
  console.log(a == c); // true (same reference)

  // Objects are also compared by reference
  const userOne = { name: 'Bohdan', role: 'teaching', country: 'Ukraine' };
  const userTwo = { name: 'Bohdan', role: 'teaching', country: 'Ukraine' };
  console.log(userOne == userTwo); // false

  const userThree = userOne;
  console.log(userOne == userThree); // true
})();


