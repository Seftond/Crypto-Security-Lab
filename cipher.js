// Cipher:
// The elements of the password go into an array. The fourth element of the array 
// corresponds to the last element of the given password. Then the next character indicates
// where the next password character will go. The amount of spaces to the next password character 
// are determined by the index of the random character that foolows the password
// character in a string of all characters.  A string made up of all of the 
// characters of the alphabet (capital and lowercase), numbers 0-9, and special characters 
// corresponding to the numbers on a keyboard in the following way:

// randomString = "#qZT*wNA@eHr(QtY!yMu)XJi&SoU^pKW%zIC$xcLDOv3bP4nE5mV1as2Fd9fg8Rh7Bj6kG0l"

// The characters in between password characters are determined at random.

//Code:

let password = "Ilovecryptogrophy";
let passwordArr = password.split('');
// ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*;
randomString = "#qZT*wNA@eHrQtY!yMuXJi&SoU^pKW%zIC$xcLDOv3bP4nE5mV1as2Fd9fg8Rh7Bj6kG0l";
let cipheredArray = [];

for(let i = 0; i < 4 ; i++){
    cipheredArray.push(randomString.charAt(Math.floor(Math.random() * randomString.length)));
}


for(let i = passwordArr.length - 1; i >= 0; i--){
    cipheredArray.push(passwordArr[i]);

    let nextMove = (Math.floor(Math.random() * randomString.length))/12;
    console.log(nextMove)
    cipheredArray.push(randomString.charAt(nextMove));

    for(let y = 0; y < nextMove; y++){
        cipheredArray.push(randomString.charAt(Math.floor(Math.random() * randomString.length))); 
    }
}
console.log(cipheredArray);

