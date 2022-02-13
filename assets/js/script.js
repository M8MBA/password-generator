// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const UNIlower = [97, 122];
const UNIupper = [65, 90];
const UNInumber = [48, 57];
const UNIsymbols = [33,47];

// Write password to the #password input
function writePassword() {

  var password = prompt("Please select password length")
  if (password < 8 || password > 128) {
    alert("Incorrect password length")
    generatePassword()
  } else if (password === '' || isNaN(password)) {
    alert("Please enter a password length between 8 & 128")
    generatePassword()
  }

  var lowercase = confirm("Would you like")


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
