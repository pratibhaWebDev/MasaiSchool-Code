function generatePassword(length, includeNumber, includeSpecial) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?";


  let chars = lowercaseChars; 

  if (uppercaseChars) {
    chars += uppercaseChars;
  }

  if (includeNumber) {
    chars += numberChars;
  }

  if (includeSpecial) {
    chars += specialChars;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }

  return password;
}
let password=generatePassword(10, true, true)
console.log(password)
