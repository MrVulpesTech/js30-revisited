(function showPrimitives() {
  // Examples of primitive values and typeof results
  const sampleNumber = 42;
  const sampleString = 'JavaScript';
  const sampleBoolean = false;
  const sampleNull = null;
  let sampleUndefined;
  const sampleSymbol = Symbol('id');

  console.log(typeof sampleNumber);     // number
  console.log(typeof sampleString);     // string
  console.log(typeof sampleBoolean);    // boolean
  console.log(typeof sampleNull);       // object (historical quirk)
  console.log(typeof sampleUndefined);  // undefined
  console.log(typeof sampleSymbol);     // symbol

  // Immutability demo for strings
  const word = 'JavaScript';
  // Attempting to mutate a character does nothing
  // word[0] = 'Y';
  console.log(word); // 'JavaScript'
})();


