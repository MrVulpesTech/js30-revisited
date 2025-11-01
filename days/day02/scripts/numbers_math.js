(function showNumbersAndMath() {
  const age = 35;
  const gravity = 9.81; // m/s^2
  const mass = 72;
  const PI = 3.14;
  const boilingPoint = 100;
  const bodyTemp = 37;
  console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);

  // Math basics
  const pi = Math.PI;
  console.log(pi);
  console.log(Math.round(pi));
  console.log(Math.round(9.81));
  console.log(Math.floor(pi));
  console.log(Math.ceil(pi));
  console.log(Math.min(-5, 3, 20, 4, 5, 10));
  console.log(Math.max(-5, 3, 20, 4, 5, 10));

  // Random numbers
  console.log(Math.random()); // 0..0.999...
  console.log(Math.floor(Math.random() * 11)); // 0..10

  // Misc
  console.log(Math.abs(-10));
  console.log(Math.sqrt(100));
  console.log(Math.sqrt(2));
  console.log(Math.pow(3, 2));
  console.log(Math.E);
  console.log(Math.log(2));
  console.log(Math.log(10));
  console.log(Math.LN2);
  console.log(Math.LN10);
})();


