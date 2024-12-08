/* ---
1
2  3
4  5  6
7  8  9  10
11 12 13 14 15
--- */

// For the first time defining an outer variable : The state for this program

for (let i = 0; i < 5; i++) {
  let line = ''
  for (let j = 0; j <= i; j++) {
    line += '* '
  }
  console.log(line)
}
