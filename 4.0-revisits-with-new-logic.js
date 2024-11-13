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

   🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
   So, here we go for the First and Third Right Angled triangle, Again remember Imran, We have to render j number of spaces, and we must spend energy on this only.
  
   Starting with i=0;
   let row = '';
   for(let j=0; j<i;j++){
      row+='-'
   }
   
   j will run 0 times

   Then when i becomes 1, i=1;
   j runs 1 times (for j=0, condition satisfies) so with print one space

   Then when i becomes 2, i=2;
    j runs 2 times (for j=0,1 condition satisfies) so with print two spaces

   Then when i becomes 3, i=3;
    j runs 3 times (for j=0,1,2 condition satisfies) so with print three spaces

   The when i becomes 4, i=4;
    j runs 4 times (for j=0,1,2,4 condition satisfies) so with print four spaces
   ----------------------------------(()) --------------------------------


   🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Time to think about Second Right Angel Triangle 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀


 i=0; *********  9 Stars
 i=1;  *******   7 Stars
 i=2;   *****    5 Stars
 i=3;    ***     3 Stars
 i=4;     *      1 Star

 And n=5;
 At least we must check formulate which fulfills i=0, i=1 to get started.


 A) Initially it feels like it is straight forward; j must run exactly 2*n - 1 time.
 
   Lets Analyze the formula:
   For i=0; j will run 0 to 2*5 - 1 times, which is 9 times (excluding 9) 
   I see this as follows:

   j = [0  1  2   3   4   5  6  7  8]
       [*  *  *   *   *   *  *  *  *]
       So as j moves from 0th iteration to 8th iteration, for each iteration we render one star! 
       (In JavaScript, we concat * to the previous row="" at each iteration)


 B) When i=1; 2*n-1 gives, 2*5 - 1 which is again 9, so it doesn't work.

 Then we thought of introducing 'i' in the formula & came up with 2*n-1-i

 For i=0, j will run upto 2*5 -1 -0 = 9 (Iteration-1 is correct)
 For i=1; j will run upto 2*5 -1 -1 = 8 (Which should be 7) [0 1 2 3 4 5 6] (since we need to print 7 stars)

 So, this formulate again isn't working! 

 C) We need find a formulate which matches our need. 9, 7, 5, 3, 1 for n = 5 & for i 0-4 [0 1 2 3 4]

 I came up with 2(n-i) - 1 on notebook
 Let's analyze;

 For i=0; j runs upto 2*(5-0) - 1 = 9 times i-e.,  j = [0  1  2   3   4   5  6  7  8]
 For i=1; j runs upto 2*(5-1) - 1 = 2*(4) - 1 which is 7 times i-e.,  j = [0  1  2   3   4   5  6 ]
 For i=2; j runs upto 2*(5-2) - 1 = 2*(3) - 1 which is 5 times i-e.,  j = [0  1  2   3   4 ]
 For i=3; j runs upto 2*(5-3) - 1 = 2*(2) - 1 which is 3 times i-e.,  j = [0  1  2  ]
 For i=4; j runs upto 2*(5-4) - 1 = 2*(1) - 1 which is 1 time i-e.,  j = [0] (so j loop runs only once and we print one star for that)

 That's it! That's how we step by step reach to the desired output.
*/
