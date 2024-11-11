/** Patter-1
 *  * * * * *
 *  * * * * *
 *  * * * * *
 *  * * * * *
 */
/**  Solution-1
export default function pattern(n) {
  for (let i = 0; i < n; i++) {
    let starsInLine = ''
    for (let j = 0; j < 5; j++) {
      starsInLine += '* '
    }
    console.log(`${starsInLine}`)
    console.log(`\n`)
  }
}
  */

/** Patter-2
 *  *
 *  * *
 *  * * *
 *  * * * *
 *  * * * * *
 */

/** Solution 2
export default function pattern(n) {
  for (let i = 0; i < n; i++) {
    let starsInLine = ''
    for (let j = 0; j < i; j++) {
      starsInLine += '* '
    }
    console.log(`${starsInLine}`)
  }
}
 */

/** Patter-3
 *  1
 *  1 2
 *  1 2 3
 *  1 2 3 4
 *  1 2 3 4 5
 */

/** --- Solution-3
export default function pattern(n) {
  for (let i = 0; i < n; i++) {
    let numbersLine = ''
    for (let j = 0; j <= i; j++) {
      numbersLine += `${j + 1} `
    }
    console.log(`${numbersLine}`)
  }
}
--- */

/** Patter-4
 *  1
 *  2 2
 *  3 3 3
 *  4 4 4 4
 *  5 5 5 5 5
 */

/** Solution-4
export default function pattern(n) {
  for (let i = 0; i < n; i++) {
    let numbersLine = ''
    for (let j = i; j <= i; j++) {
      numbersLine += `${j + 1} `
    }
    console.log(`${numbersLine}`)
  }
}
--- */
