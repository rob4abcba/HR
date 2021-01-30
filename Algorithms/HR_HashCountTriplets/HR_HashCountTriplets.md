You are given an array and you need to find number of tripets of indices  such that the elements at those indices are in geometric progression for a given common ratio  and .

For example, . If , we have  and  at indices  and .

Function Description

Complete the countTriplets function in the editor below. It should return the number of triplets forming a geometric progression for a given  as an integer.

countTriplets has the following parameter(s):

arr: an array of integers
r: an integer, the common ratio
Input Format

The first line contains two space-separated integers  and , the size of  and the common ratio.
The next line contains  space-seperated integers .

Constraints

Output Format

Return the count of triplets that form a geometric progression.

Sample Input 0

4 2
1 2 2 4
Sample Output 0

2
Explanation 0

There are  triplets in satisfying our criteria, whose indices are  and 

Sample Input 1

6 3
1 3 9 9 27 81
Sample Output 1

6
Explanation 1

The triplets satisfying are index , , , ,  and .

Sample Input 2

5 5
1 5 5 25 125
Sample Output 2

4
Explanation 2

The triplets satisfying are index , , , .

**

Couple of hints:

Can be done in O(n) -> single pass through data
No division necessary and single multiplications by R are all that's needed
Using map(C++) or dict(Java, Python) is a must -> can be unordered map (saves O(logN))
Try to think forward when reading a value -> will this value form part of a triplet later?
No need to consider (R == 1) as a corner case
Very interesting problem and it took a while to think it through properly. If anyone is desperate for the code, drop me a message.

225|Add CommentPermalink

seanpearl_rit 2 years ago
Thanks, I cleared all the test cases! Takeaways from my solution:

I used two maps, one to keep count and one to track the number of potential triplets.
Keeping track of the latter makes updating the result trivial.
Only a single pass of the array was needed.
No edge case condition when R is 1.
I highly recommend to anyone not quite understanding, think through the case

5 2
1 2 1 2 4
The expected answer is 3. I was getting 4 with my initial approach. Good luck!

102|Add CommentParentPermalink

Persistencia 2 years ago
Woo, managed to solved it!

Another tip, the order you increment is important!

8|Add CommentParentPermalink

mhelvens 11 months ago
Indeed! That's where r = 1 becomes an edge-case.