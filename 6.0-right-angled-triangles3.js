/**
 *    *
 *    * *
 *    * * *
 *    * * * *
 *    * * * * *
 *    * * * *
 *    * * *
 *    * *
 *    *
 *
 *   We may break the problem into 2 sub-problems:
 *   A) n upto 5 (i:0--->4)
 *    *
 *    * *
 *    * * *
 *    * * * *
 *    * * * * *
 *
 *   B) I need to decide (I can come up with 2 solutions)
 *    * * * *
 *    * * *
 *    * *
 *    *
 */

export default function intermediatePatterns(n) {
  for (let i = 0; i < n; i++) {
    let line = ''
    for (let j = 0; j <= i; j++) {
      line += '* '
    }
    console.log(line)
  }

  let m = n - 1 // = 4
  for (let i = m; i > 0; i--) {
    let line = ''
    for (let j = 0; j < i; j++) {
      line += '* '
    }
    console.log(line)
  }
}
