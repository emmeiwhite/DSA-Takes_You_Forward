/** Pattern-1 (Idea is print spaces also now and then stars --- Find a relation b/w rows and columns)
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 *
 */

/*
export default function intermediatePatterns(n) {
  for (let i = 0; i < n; i++) {
    let row = ''

     // Print Spaces 
    for (let j = 0; j < n - i - 1; j++) {
      row += ' '
    }

   // Print stars 
    for (let j = 0; j <= 2 * i; j++) {
      row += '*'
    }

    //  Print Spaces 
    for (let j = 0; j < n - i - 1; j++) {
      row += ' '
    }
    console.log(row)
  }
}
*/

/** Pattern-2
 * *********
 *  *******
 *   *****
 *    ***
 *     *
 */

export default function intermediatePatterns(n) {
  for (let i = 0; i < n; i++) {
    // Print Spaces
    let row = ''
    for (let j = 0; j < i; j++) {
      row += ' '
    }

    // Print stars
    for (let j = i; j < 2 * n - i - 1; j++) {
      // Here we start j from i for each i
      row += '*'
    }

    //  Print Spaces This is not required
    //     for (let j = 0; j < i; j++) {
    //       row += ' '
    //     }
    console.log(row)
  }
}
