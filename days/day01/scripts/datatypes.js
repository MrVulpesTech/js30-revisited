(function checkDataTypes() {
  const sampleString = 'Bohdan';
  const sampleNumber = 5;
  const sampleBoolean = true;
  const sampleNull = null;
  let sampleUndefined; // intentionally left undefined
  const sampleSymbol = Symbol('id');

  console.log(typeof sampleString);   // string
  console.log(typeof sampleNumber);   // number
  console.log(typeof sampleBoolean);  // boolean
  console.log(typeof sampleNull);     // object (quirk in JS)
  console.log(typeof sampleUndefined);// undefined
  console.log(typeof sampleSymbol);   // symbol
})();


