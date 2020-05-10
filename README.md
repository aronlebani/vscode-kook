# vscode-kook
A VS Code colour theme designed for focus 🤓

## Focus on what matters
Kook uses different levels of emphasis to help you focus on the most important parts of your code, while not getting distracted by the stuff that doesn't matter. The number of colours are also kept to a minimum to prevent distractions.
1. Function definitions, class definitions, and flow control keywords are bolded to put emphasis on the most important part of your code - abstractions and program logic.
2. The actual content of your code (variable declarations, function calls, etc.) uses a regular text weight.
3. Punctuation and braces are lightened so that they don't distract you from the content.

So there you go. The distraction-free feel of Python code, with the curly braces that you know and love.

## Customisation
The point of this theme is to help you focus on your code, not to offer opinions on colour (although the default colours do look pretty rad 😏). Therefore a script is provided to customise the colours of the basic syntactic elements.

Simply edit the colours of the syntax elements in the `params` variable in `generator.js` to your hearts content, then run

```
node generator.js
```

and you're done! You can even use this theme while customising it. How meta. Just hit `Cmd-Shift-P` and run `Reload window` to test.

The elements that can be customised are:
* Comments
* Flow control keywords
* Variable names
* Variable declarators
* Function names
* Function parameters
* Literal constants (strings, floats, ints, etc.)
* Language constants (booleans, null, etc.)
* Types
* Type modifiers (static, etc.)
* Operators
* HTML and React tags

## Notes
* This is still early days, and so far it has only been tested with ES6, TypeScript and React.
* Customisation with `generator.js` doesn't actually work yet, I got a little ahead of myself with the README.
* It hasn't been published to the VS Code Marketplace yet, but if you want to try it out, you can clone this repository into your `~/.vscode/extensions` directory and it should appear in the list of available themes in VS Code.