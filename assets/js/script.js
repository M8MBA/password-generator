// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const lowerCaseAZ = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
const upperCaseAZ = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["!", "#", "$", "%", "^", "&", "*", "(", ")"];

function generatePassword() {
  let characterTypes = [];

  var password = prompt("Please select password length between 8 & 128 characters")
  if (password < 8 || password > 128) {
    alert("Incorrect password length")
    generatePassword();
  } else if (password === '' || isNaN(password)) {
    alert("Please enter a password length between 8 & 128 characters")
    generatePassword();
  }

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var lowerCase = confirm("Would you like to include lowercase letters in your password?");
  var upperCase = confirm("Would you like to include uppercase letters in your password?");
  var numeric = confirm("Would you like to include numbers in your password?");
  var special = confirm("Would you like to include special characters in your password?"); 

  if (lowerCase == true) {
    characterTypes = characterTypes.concat(lowerCaseAZ);
  }
  if (upperCase == true) {
    characterTypes = characterTypes.concat(upperCaseAZ);
  }
  if (numeric == true) {
    characterTypes = characterTypes.concat(num);
  }
  if (special == true) {
    characterTypes = characterTypes.concat(symbols);
  }
  if (lowerCase == false && upperCase == false && special == false && numeric == false) {
    alert("Please select at least one option")
  }

  console.log(characterTypes);

  var genPassword = ""

  for (let i = 0, p = characterTypes.length; i < parseInt(password); i++) {
    genPassword += characterTypes[Math.floor(Math.random() * p)]
  }
  return genPassword;
};

// Write password to the #password input
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
