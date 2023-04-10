// The problem

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


// The solution

function digitize(n) {
    return String(n).split('').map(Number).reverse()
 }


//  NOTE **
// Return a string(n) that is to be turned into an array of individual
// characters by the split('') function. Then .map across the array to 
// indicate that they should be NUMBERS. Finally, reverse the array of numbers