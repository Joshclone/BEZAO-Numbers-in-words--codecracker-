
//Create an encryption program that will encrypt 
//any message you give it using the key
const NodeRSA = require('node-rsa');
const key = new NodeRSA({ b: 1024 });
 
//create a secret text that will be encrypted
let secret = "abcdefghijklmnopqrstuvwxyz"

const encryptedString = key.encrypt(secret, 'base64');

//outputs the encrypted string
console.log(encryptedString);


//let's decrypt the alphabets with the given decryption keys 
// £*%&><!)"(@abcdefghijklmno

// private_key = '£*%-&><!)"(-@-abcd-efgh-ijkl-mno';


// let key_private = new NodeRSA(private_key);

//let's decrypt the alphabets with the given decryption key 
const decryptedString = key.decrypt(encryptedString, 'utf8');
 console.log(decryptedString);
