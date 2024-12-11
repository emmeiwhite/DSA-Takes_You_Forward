/* ---
A
B B
C C C
D D D D
E E E E E
--- */

export default function intermediatePatterns(n) {
  let currentChar = 65
  for (let i = 0; i < n; i++) {
    let line = ''
    for (let j = 0; j <= i; j++) {
      let character = String.fromCharCode(currentChar)
      line += `${character} `
    }
    console.log(line)

    currentChar += 1
  }
}
