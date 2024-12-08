/* ---
1
2  3
4  5  6
7  8  9  10
11 12 13 14 15
--- */

// For the first time defining an outer variable : The state for this program

export default function intermediatePatterns(n) {
  let currentState = 0
  for (let i = 0; i < n; i++) {
    let line = ''
    for (let j = 0; j <= i; j++) {
      currentState += 1
      line += `${currentState} `
    }
    console.log(line)
  }
}
