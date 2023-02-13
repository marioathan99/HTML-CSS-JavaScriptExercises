// A. Create a prompt for changing password: 1. it has to inlcude 6+ characters, 2. cannot include space
const password = prompt("Please enter a new password")
if (password.length >= 6) {
   if (password.indexOf(' ')=== -1) {
     console.log('Valid Password')
   } else {
     console.log('Password cannot contain spaces!')
   }
} else {
  console.log("Too short!Must be 6+ characters")
}
