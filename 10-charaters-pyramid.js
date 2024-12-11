/*
A
A B
A B C
A B C D
A B C D E
*/

export default function intermediatePatterns(n) {
  for (let i = 0; i < n; i++) {
    let currentChar = 65
    let line = ''
    for (let j = 0; j <= i; j++) {
      let character = String.fromCharCode(currentChar)
      line += `${character} `
      currentChar += 1
    }
    console.log(line)
  }
}
