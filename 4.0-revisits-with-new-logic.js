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

   NOTE: dot(.) in the pattern signifies no space and dash(-) signifies one space
*/
