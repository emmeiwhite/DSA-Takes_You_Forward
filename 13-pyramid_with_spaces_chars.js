/* ---
   A
  ABA
 ABCBA
ABCDCBA

- Clearly this pattern is like the patterns we have done earlier! 

[space  pattern   space]
[3         1          3]
[2         3          2]
[1         5          1]
[0         7          0]

--- */

export default function intermediatePatterns(n) {
  let currentChar = 65
  for (let i = 0; i < n; i++) {
    let line = ''

    //   First inner loop: For Spaces
    for (let j = 0; j < n - 1 - i; j++) {
      line += '- '
    }

    //   Second inner loop
    for (let j = 0; j < 2 * i + 1; j++) {
      let character = String.fromCharCode(currentChar)
      line += `${character} `
    }

    //   Third inner loop: For Spaces
    for (let j = 0; j < n - 1 - i; j++) {
      line += '- '
    }

    console.log(line)
  }
}
