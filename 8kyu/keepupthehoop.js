// The problem

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".


// The Solution

function hoopCount (n) {
    return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
  }

//   Check to see if the hoops Alex got was less than 10, if he got less than 10, execute the string on the left. If he got 
// 10 or more hoops, execute what is on the right side.