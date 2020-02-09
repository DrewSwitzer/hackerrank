# Array Manipulation Challenge

Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in your array.

For example, the length of your array of zeros n=10. Your list of queries is as follows:

    a b k<br />
    1 5 3<br />
    4 8 7<br />
    6 9 1<br />
    
Add the values of k between the indices a and b inclusive:

index->	 1 2 3  4  5 6 7 8 9 10<br />
	[0,0,0, 0, 0,0,0,0,0, 0]<br />
	[3,3,3, 3, 3,0,0,0,0, 0]<br />
	[3,3,3,10,10,7,7,7,0, 0]<br />
	[3,3,3,10,10,8,8,8,1, 0]<br />

The largest value is 10 after all operations are performed.

# Function Description

Complete the function arrayManipulation in the editor below. It must return an integer, the maximum value in the resulting array.

arrayManipulation has the following parameters:

n - the number of elements in your array
queries - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.

# Input Format

The first line contains two space-separated integers n and m, the size of the array and the number of operations.
Each of the next m lines contains three space-separated integers a, b and k, the left index, right index and summand.

# Output Format

Return the integer maximum value in the finished array.

# Sample Input

5 3<br />
1 2 100<br />
2 5 100<br />
3 4 100<br />

# Sample Output

200