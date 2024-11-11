/** Pattern-1 (Idea is print spaces also now and then stars --- Find a relation b/w rows and columns)
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 *
 */

export default function intermediatePatterns(n) {
  for (let i = 0; i < n; i++) {
    /** a)---  Print Spaces --- */
    let row = ''
    for (let j = 0; j < n - i - 1; j++) {
      row += ' '
    }

    /** b)---  Print stars --- */
    for (let j = 0; j <= 2 * i; j++) {
      row += '*'
    }

    /** c)---  Print Spaces --- */
    for (let j = 0; j < n - i - 1; j++) {
      row += ' '
    }
    console.log(row)
  }
}
