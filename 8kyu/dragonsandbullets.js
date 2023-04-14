// The problem

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise.


// The Solution

function hero(bullets, dragons){
    return bullets >= dragons * 2;
}



// The Breakdown **
//  We know it takes 2 bullets to put down one dragon. We know he is going to fight 2 dragons just now, but  we have no idea how many 
// dragons he'll have to fight later.
// With this in mind, we should plan for him to carry a certain amount of bullets or greater assuming he finds out what he is up against later
// in the quest.
// Therefore - we return bullets, which are greater than OR equal to the amount of dragons the hero will face, multiplied by the number of
// bullets it should take to bring each one of them down.