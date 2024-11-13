/** Make this Pattern
 * *********
 *  *******
 *   *****
 *    ***
 *     *
 */

/** ---
 * To key ideas that my brain is telling me is:
 * 1) Run outer loop simply total number of lines time (5 lines means outer loop runs from [0,4] which we usually name as "i" so i goes from 0->1->2->3->4)
 *
 * 2) Now is the time to think about our inner loop or loops depending on the pattern being asked.
 *    We know that j is responsible to render either the spaces or the stars.
 *
 *    IMPORTANT: An extremely important idea here is that, for each j we either print space or we print star! So, j has to run exactly the same number of times that we are printing either of these.
 *
 *   2a) We have to first subdivide the problem into possible simpler patterns to think of how many times the inner loops will run and how many inner loops we need
 * --- */

/** The Currently given Pattern is a combination of 3 patterns.
 * *********        .          *********            .
 *  *******   =     -      +    *******    +        -
 *   *****          - -          *****            - -
 *    ***           - - -         ***           - - -
 *     *            - - - -        *          - - - -

   NOTE: dot(.) in the pattern signifies no space and dash(-) signifies one space.
   So we can see we have to somehow make 3 patters, within outer loop, w.r.t (i outer variable), total number of lines (n=5) and set j's conditions accordingly to run j exactly as many times as is required in the pattern. So, the condition for j will be set accordingly [This is an important point to note], our j decides what to render, & how many times to render! 


   space,  stars,   space
i=0 [0,       9 ,      0]
i=1 [1,       7 ,      1]
i=2 [2,       5 ,      2]
i=3 [3,       7 ,      3]
i=4 [4,       1 ,      4]

n=5 

So, we need to now connect i & n somehow to make conditions for j

For First & Third Right Angled Triangle, i is directly connected to j,
   i=0 .          (When i=0, we have 0 space, so j must run 0 time here)
   i=1 -          (When i=1, we have 1 space, so j must run 1 times here, j=0),
   i=2 - -        (When i=2, we have 2 spaces, so j must run 2 times from j=0,1),
   i=3 - - -      (When i=3, we have 3 spaces, so j must run 3 times from j=0,1,2),
   i=4 - - - -    (When i=4, we have 4 spaces, so j must run 4 times from j=0,1,2,3),

   So if we note, we are matching number of spaces directly with the j! 
   This is the idea to keep in mind and spend logical energy into.

   Outer loop is not to be considered in rendering logic, just for formula purpose

*/
