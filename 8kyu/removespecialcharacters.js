// The problem

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


// The solution
function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }

//  To remove all special characters from a string, call the replace() method on the string,
//  passing a whitelisting regex and an empty string as arguments, i.e., str. replace(/^a-zA-Z0-9 ]/g, '') .
//  The replace() method will return a new string that doesn't contain any special characters.