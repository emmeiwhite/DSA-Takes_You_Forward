/* --- Problem: Double Pyramid
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
---*/

// Let's break the problem into 2 sub-problems

/*
    *
   ***
  *****
 *******
*********

Details:
n=5 (which can be 10/2 considering 10 lines in total)

To find:

[space  star    space]
[4       1        4  ]
[3       3        3  ]
[2       5        2  ]
[1       7        1  ]
[0       9        0  ]

For stars: (we'll find iterations of j by somehow combining with i and n)

n=5, i starts with 0 upto 4
i          j
====      ====
0          1
1          3
2          5
3          7
4          9

IDEA: Iterate j as per the need of rendering stars and spaces because for each iteration of j we render only one character (be it space or a star) per line!

For Stars the formula looks like this:

2*i + 1
Let's verify:
2*0+1 = 1
2*1+1 = 3
2*2+1 = 5
2*3+1 = 7
2*4+1 = 9


Then for spaces, for i looping from 0-4, we have to find the following:

n=5, i starts with 0 upto 4
i          j
====      ====
0          4
1          3
2          2
3          1
4          0

Formula that I derived is: n-1-i
Let's verify

i       j=n-1-i = 4-i
0       4-0 = 4
1       4-1 = 3
2       4-2 = 2
3       4-3 = 1
4       4-4 = 0

*/

// let's implement
export default function intermediatePatterns(n) {
  console.log('hello')
}
