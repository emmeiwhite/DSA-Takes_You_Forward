/* ---

1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

--- */

/* ---

export default function intermediatePatterns(n) {
  for (let i = 0; i < n; i++) {
    let line = ''
    if (i === 0) {
      line = '1'
      console.log(line)
      continue
    }

    // From i=1; we are setting up the first element
    if (i % 2 === 0) {
      line = '1'
    } else {
      line = '0'
    }

    for (let j = 0; j < i; j++) {
      if (line.slice(-1) === '1') {
        // each time comparing the last letter of the string
        line += '0'
      } else {
        line += '1'
      }
    }
    console.log(line)
  }
}

--- */
