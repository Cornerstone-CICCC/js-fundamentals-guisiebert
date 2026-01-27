/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
  name: "Gui Siebert",
  friends: 100,
  messages: ["Hello world", "I'm Gui"],
  postMessage: function(msg) {
    this.messages.push(msg)
  },
  addFriend: function() {
      this.friends = this.friends + 1
  },
  removeFriend: function() {
    this.friends--
  }
}

// test posting a message
console.log(facebookProfile.messages)
facebookProfile.postMessage("I hate social media")
facebookProfile.postMessage("This is my last post. Goodbye world.")
console.log(facebookProfile.messages)

// test adding/removing friends
console.log(facebookProfile.friends)
facebookProfile.addFriend()
console.log(facebookProfile.friends)
facebookProfile.removeFriend()
console.log(facebookProfile.friends)