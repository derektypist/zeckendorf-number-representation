# Zeckendorf Number Representation

Just as numbers can be represented in a positional notation as sums of multiples of the powers of ten (decimal) or two (binary), all the positive integers can be represented as the sum of one or zero times the distinct members of the Fibonacci Series.

Recall that the first six distinct Fibonacci numbers are 1,2,3,5,8 and 13.

The decimal number `11` can be written as `0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1` or `010100` in positional notation where the columns represent multiplication by a particular member of the sequence.  Leading zeros are dropped so that `11` decimal becomes `10100`.

`10100` is not the only way to make `11` from the Fibonacci Numbers however `0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1` would also represent decimal number `11`.  For a true Zeckendorf Number there is the added restriction that *no two consecutive Fibonacci Numbers can be used* which leads to the former unique soluton.

The aim is to implement this using HTML Forms and JavaScript.

## UX

**Getting Started**

Enter a whole number between 0 and 1000 (e.g. 18) in the input field.  Then click on the Submit Button.  You will get the number you have entered as well as the Zeckendorf Number Representation of that number.  If you enter anything other than a whole number between 0 and 1000 or if you do not enter anything on the input field, you will get the Invalid Input error message instead.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, if I enter text (e.g. bus), a number that is not an integer, a number less than 0, a number greater than 1000 or I do not enter anything in the input field, I expect to get an error message.

As a user, assuming that my input is valid, I should get something like:

    You have entered the number 11.
    Zeckendorf Number Representation of 11 is 10100.

As a user, I can clear the information or start again by clicking on the Reset Button.

**Information Architecture**

The number entered is an integer between 0 and 1000.  The function `zeckendorf(n)` returns an array or string if n is 0.

## Features

Allows the user to enter the number as well as seeing the Zeckendorf Number Representation of that number.  Performs checks to ensure that the input is valid.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.1.3 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/zeckendorf-number-representation) at the main branch.

## Credits

### Content

Code in `script.js` for the function `zeckendorf(n)` taken from Rosetta Code (Python, Shorter Version), which as accessed in February 2022.

### Acknowledgements

- [Rosetta Code](https://www.rosettacode.org)
- [FreeCodeCamp](https://www.freecodecamp.org)