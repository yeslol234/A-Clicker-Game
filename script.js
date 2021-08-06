// Main Variables
let bits = 0;
let bitspersecond = 0;
let bitsperclick = 1;
// Functions
function increment() {
 bits += bitsperclick
  document.getElementById("bitscount").innerText = bits;
}
setInterval(function() {
 bits += bitspersecond
 document.getElementById("bitscount").innerText = bits;
},1000)
// Upgrades, Buildings, etc.
let MoreBitsPerClickCount = 0
let MoreBitsPerSecondCount = 0
let MoreBitsPerClickPrice = 25
let MoreBitsPerSecondPrice 50
// other functions anauownouwnnn
function BuyMoreBitsPerClick() {
 
}
