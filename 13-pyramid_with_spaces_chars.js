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
  for (let i = 0; i < n; i++) {
    let line = ''
    let currentChar = 65
    //   First inner loop: For Spaces
    for (let j = 0; j < n - 1 - i; j++) {
      line += '- '
    }

    //   Second inner loop
    for (let j = 0; j < 2 * i + 1; j++) {
      let character = String.fromCharCode(currentChar)

      line += `${character} `
      //   Let's use j's mid-point to handle rendering: j have to be used wisely

      // This is the real logic: I am so glad about this problem, Finished within one pomodoro!
      if (j < i) {
        currentChar += 1
      }

      if (j >= i) {
        currentChar -= 1
      }
    }

    //   Third inner loop: For Spaces
    for (let j = 0; j < n - 1 - i; j++) {
      line += '- '
    }

    console.log(line)
  }
}
