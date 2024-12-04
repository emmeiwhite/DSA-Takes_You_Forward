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

/**  ---
export default function intermediatePatterns(n) {
  for (let i = 0; i < n; i++) {
    let line = ''

    // Just a one liner optimal solution but it needs mind twisting and thinking to improve logic
    for (let j = 0; j <= i; j++) {
      line += (i + j) % 2 === 0 ? ' 1 ' : ' 0 '
    }
    console.log(line)
  }
}

--- */

/** SOLUTION-3 with Maths trick since 1-1=0 & this is very helpful in our pattern  */

export default function intermediatePatterns(n) {
  let start
  for (let i = 0; i < n; i++) {
    let line = ''

    // We know all the even lines start with 1
    if (i % 2 === 0) start = 1

    for (let j = 0; j <= i; j++) {
      line += String(start)
      start = 1 - start
    }
    console.log(line)
  }
}
