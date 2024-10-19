/* Pattern-1
 ****
 ****
 ****
 ****
 */

for (let i = 0; i < 4; i++) {
  let row = ''
  for (let j = 0; j < 4; j++) {
    row += '*'
  }
  console.log(row)
}

/* Pattern-2
 *
 **
 ***
 ****
 */

for (let i = 0; i < 4; i++) {
  let row = ''
  for (let j = 0; j <= i; j++) {
    row += '*'
  }
  console.log(row)
}

/* Pattern-3 
1
12
123
1234
*/

// For each row, print column row number of times starting from 1

for (let row = 1; row <= 4; row++) {
  // rows
  let output = ''
  for (let col = 1; col <= row; col++) {
    output += col
  }
  console.log(output)
}

/* Pattern-4 
1
22
333
4444
55555
*/

for (let row = 1; row <= 5; row++) {
  // rows
  let output = ''
  for (let col = 1; col <= row; col++) {
    output += row
  }
  console.log(output)
}

/* --- Pattern-5
*****
****
***
**
*
--- */

for (let row = 5; row >= 1; row--) {
  // rows
  let output = ''
  for (let col = 1; col <= row; col++) {
    output += '*'
  }
  console.log(output)
}
