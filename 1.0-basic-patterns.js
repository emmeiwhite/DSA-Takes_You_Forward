/** Patter-1
 *  * * * * *
 *  * * * * *
 *  * * * * *
 *  * * * * *
 */
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
