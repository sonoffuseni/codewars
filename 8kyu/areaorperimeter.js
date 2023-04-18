// The problem

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9

// The Solution

const areaOrPerimeter = function(l , w) {
 return l === w ? l * w : 2*(l + w);
};

// since we are assuming it is a square, the question a the beginning of the code, is asking if the length is 
// the same as the width. We then say, if the lenght and the width are the same, then give us the area of the 
// square which is w * l else, do what is on the  right and give us the perimeter which is 2 *(l + w)