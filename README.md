# vscode-kook
A VS Code colour theme designed for focus 🤓

## Focus on what matters
Kook uses different levels of emphasis to help you focus on the most important parts of your code, while not getting distracted by the stuff that doesn't matter.

Function definitions, class definitions, and flow control keywords are bolded to put emphasis on the most important parts of your code - abstractions and program logic. The less important stuff like punctuation and braces are lightened so they don't distract you from the rest of the content.

So there you go. The distraction-free feel of Python code, with the curly braces that you know and love.

In addition to this, the number of colours is minimised, and the editor has a clean feel with a single colour across the board and no borders.

## Customisation
This theme is mostly about emphasisising the important parts of your code, and less about the actual colours. Therefore a script is provided to customise the colours of the basic syntactic elements.

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
* It hasn't been published to the VS Code Marketplace yet, but if you want to try it out, you can clone this repository into your `~/.vscode/extensions` directory and it should appear in the list of available themes in VS Code.