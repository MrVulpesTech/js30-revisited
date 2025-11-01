(
  function showStringsBasics() {
    const space = ' ';
    const firstName = 'Bohdan';
    const lastName = 'Mazur';
    const country = 'Ukraine';
    const age = 22;

    const fullName = firstName + space + lastName; // ES5 concat
    console.log(fullName);

    const info = `I am ${fullName}. I am ${age}. I live in ${country}.`;
    console.log(info);
  }
)();


