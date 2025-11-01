(function showStringMethods() {
  const string = '30 Days Of JavaScript';
  console.log(string.length);
  console.log(string.toUpperCase());
  console.log(string.toLowerCase());
  console.log(string.substr(4, 6));
  console.log(string.substring(0, 4));
  console.log(string.includes('Script'));
  console.log(string.split(' '));
  console.log('Ukraine, Sweden, Norway, Denmark, and Iceland'.split(', '));
  console.log(string.replace('JavaScript', 'Python'));
  console.log(string.charAt(0));
  const lastIndex = string.length - 1;
  console.log(string.charAt(lastIndex));
  console.log(string.indexOf('a'));
  console.log(string.lastIndexOf('a'));
  console.log(string.startsWith('30'));
  console.log(string.endsWith('JavaScript'));
  console.log(string.match(/a/gi));
  console.log('30'.concat('Days', 'Of', 'JavaScript'));
  console.log('30 Days Of JavaScript '.repeat(2));
})();


