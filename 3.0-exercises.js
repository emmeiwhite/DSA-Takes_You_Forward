/* --- CHESS BOARD

'X Y X Y X Y X Y'
'Y X Y X Y X Y X'
'X Y X Y X Y X Y'
'Y X Y X Y X Y X'
'X Y X Y X Y X Y'
'Y X Y X Y X Y X'
'X Y X Y X Y X Y'
'Y X Y X Y X Y X'

---*/

for (let i = 0; i < 8; i++) {
  let output = ''
  if (i % 2 === 0) {
    output += 'X'
  } else {
    output += 'Y'
  }

  for (let j = 0; j < 7; j++) {
    output = output === 'X' ? 'Y' : 'X'
  }

  console.log(output)
}
