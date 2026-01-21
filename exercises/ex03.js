/*
A murder mystery is a game typically played at parties wherein one of the partygoers is secretly, and unknowingly, playing a murderer, and the other attendees must determine who among them is the criminal. It's a classic case of whodunnit.

Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier. 
Here's what we know! In this murder mystery there are:

Four rooms: 
- ballroom
- gallery
- billiards room
- dining room

Four weapons: 
- poison
- trophy
- pool stick
- knife

Four suspects: 
- Mr. Kalehoff
- Ms. Van Cleve
- Mrs. Sparr
- Mr. Parkes

We also know that each weapon corresponds to a particular room:
- the poison belongs to the ballroom,
- the trophy belongs to the gallery,
- the pool stick belongs to the billiards room,
- and the knife belongs to the dining room.

We also know that each suspect was located in a specific room at the time of the murder:
- Mr. Kalehoff was located in the ballroom.
- Ms. Van Cleve was located in the gallery.
- Mrs. Sparr was located in the billiards room.
- Mr. Parkes was located in the dining room.

To help solve this mystery, write a combination of conditional statements that:

- sets the value of weapon based on the room and
- sets the value of solved to true if the value of room matches the suspect's room 

Afterwards, use this template to print a message to the console if the mystery was solved:

__________ did it in the __________ with the __________!

What goes into the three blank spaces? You can fill in the blanks with the name of the suspect, the room, and the weapon! For example, an output string may look like:

Mr. Parkes did it in the dining room with the knife!
*/

// Inputs
const room = "ballroom"
const weapon = "poison"
const suspect = "Mr. Kalehoff"

// Solved?
let solved = false


// Case 01
if (room == "ballroom" && weapon == "poison" && suspect == "Mr. Kalehoff") { solved = true}

// Case 02
if (room == "gallery" && weapon == "trophy" && suspect == "Ms. Van Cleve") { solved = true}

// Case 03
if (room == "billiards room" && weapon == "pool stick" && suspect == "Mrs. Sparr") { solved = true}

// Case 04
if (room == "dining room" && weapon == "knife" && suspect == "Mr. Parkes") { solved = true}


if (solved) {
    console.log(suspect, "did it in the", room, "with the", weapon, "!")
} else {
    console.log("We don't have a conclusion")
}