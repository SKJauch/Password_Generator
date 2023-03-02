// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


const passwordChar = {
  number: "1234567890",
  specialChar: "!@#$%^&*()}]{[~`;:',<.>/?",
  letter: "qwertyuiopasdfghjklzxcvbnm",
  letterUp: "QWERTYUIOPASDFGHJKLZXCVBNM",

}

// write functions
function generatePassword () {
  let passwordInfo = ""
  var charLength = prompt ("How many characters should the password be?")
  if (charLength < 8 || charLength >128 || isNaN(charLength) ==true) {
    alert ("Incorrect password length")
    return generatePassword
  }

  var number = confirm ("Do you want to use NUMBERS?");
  if (number==true) {
    passwordInfo = passwordInfo + passwordChar.number;
  }

  var specialChar = confirm ("Do you want to use SPECIAL CHARACTERS?");
  if (specialChar==true) {
    passwordInfo = passwordInfo + passwordChar.specialChar;
  }

  var letter = confirm ("Do you want to use LOWER CASE LETTERS?");
  if (letter==true) {
    passwordInfo = passwordInfo + passwordChar.letter;
  }

  var letterUp = confirm ("Do you want to use UPPER CASE LETTERS?");
  if (letterUp==true) {
    passwordInfo = passwordInfo + passwordChar.letterUp
  }

  console.log(passwordInfo)
  let randomPassword = "";
  for (let i = 0; i < charLength; i++) {randomPassword += passwordInfo[Math.floor(Math.random() * passwordInfo.length)];
  };
  return randomPassword

};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
