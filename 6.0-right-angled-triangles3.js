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

/* --- Solution 1 with two external loops while each having an internal loop
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
  --- */

/* n=5;
   m=2*n -1 = 9
   Outer Loop runs from 0--->8 let(i=0;i< m;i++), Until i=4 (First 5 lines, we have to show same number of stars as i, & after that we have to change the logic)
 *  0  *
 *  1  * *
 *  2  * * *
 *  3  * * * *
 *  4  * * * * *
 *  5  * * * *
 *  6  * * *
 *  7  * *
 *  8  *
 */
//   Solution-2: n=5, Total
export default function intermediatePatterns(n) {
  let m = 2 * n - 1 // = 9
  let midValue = parseInt(m / 2) // 9/2 = 4 (First loop will run from 0---->4)
  for (let i = 0; i < m; i++) {
    if (i <= midValue) {
      let line = ''
      for (let j = 0; j <= i; j++) {
        line += '* '
      }
      console.log(line)
    }

    if (i > midValue) {
      // As i starts from 5 upto 8 : i:(5---->8) included 5,6,7,8 for 4 lines | OuterLoop
      let line = ''
      for (let j = 0; j < m - i; j++) {
        line += '* '
      }
      console.log(line)
    }
  }
}
