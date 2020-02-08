# Hour Glass Challenge

Given a 6x6 2D Array, arr:

1 1 1 0 0 0<br />
0 1 0 0 0 0<br />
1 1 1 0 0 0<br />
0 0 0 0 0 0<br />
0 0 0 0 0 0<br />
0 0 0 0 0 0<br />

We define an hourglass in A to be a subset of values with indices falling in this pattern in arr's graphical representation:

a b c<br />
  d<br />
e f g<br />

There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.

For example, given the 2D array:

-9 -9 -9  1 1 1 <br />
 0 -9  0  4 3 2<br />
-9 -9 -9  1 2 3<br />
 0  0  8  6 6 0<br />
 0  0  0 -2 0 0<br />
 0  0  1  2 4 0<br />

We calculate the following 16 hourglass values:

-63, -34, -9, 12, <br />
-10, 0, 28, 23, <br />
-27, -11, -2, 10, <br />
9, 17, 25, 18<br />

Our highest hourglass value is 28 from the hourglass:

0 4 3<br />
  1<br />
8 6 6<br />

Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

# Function Description

Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.

hourglassSum has the following parameter(s):

arr: an array of integers

# Input Format

Each of the 6 lines of inputs arr[i] contains 6 space-separated integers arr[i][j].

# Output Format

Print the largest (maximum) hourglass sum found in arr.

# Sample Input

1 1 1 0 0 0<br />
0 1 0 0 0 0<br />
1 1 1 0 0 0<br />
0 0 2 4 4 0<br />
0 0 0 2 0 0<br />
0 0 1 2 4 0<br />

# Sample Output

19