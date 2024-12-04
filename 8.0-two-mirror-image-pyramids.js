/* Step-by-Step we grow:
This is the pattern
1             1
1 2         2 1
1 2 3     3 2 1
1 2 3 4 4 3 2 1

Here is the approach

n=4,i:0--->3 (Outer loop goes from 0--->3)

    [print space print]
i=0 [1      6        1]
i=1 [2      4        2]
i=2 [3      2        3]
i=4 [4      0        4]

j has to printed wisely as per the requirement by somehow connecting it with i

j will always be 8 columns
j will iterate as many times as we want to print either the numeric output or the space

Three sub loops will be used:
--- */

export default function intermediatePatterns(n) {
  for (let i = 0; i < n; i++) {
    let line = ''
    let col = 2 * n

    //   1) First we print number as per the requirement
    for (let j = 0; j <= i; j++) {
      line += j + 1
    }

    //   2) Now we print spaces with a combination required
    // console.log(col - 2 * (i + 1))
    for (let j = 0; j < col - 2 * (i + 1); j++) {
      line += '-'
    }

    //   3) Lastly we print number as per the requirement
    // for (let j = 0; j <= ; j++) {
    //   line += j + ' '
    // }

    // for (let j = 0; j <= i; j++) {
    //   line += j + 1 + ' '
    // }
    console.log(line)
  }
}
