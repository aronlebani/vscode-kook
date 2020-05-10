const fs = require('fs');
const kook, {
  grey,
  red,
  white,
  blue,
  yellow,
  lightYellow,
  purple,
  green,
  generate,
} = require('./kook');

(() => {
  const params = {
    comments: grey,
    flowControl: red,
    variableNames: white,
    languageConstants: blue,
    constants: lightYellow,
    htmlTags: purple,
    types: purple,
    variableDeclarators: blue,
    typeModifiers: blue,
    strings: lightYellow,
    functions: green,
    functionParameters: yellow,
    operators: blue,
  };

  generate(params);
})();