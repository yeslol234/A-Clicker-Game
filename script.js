// Main Variables
let bits = 0;
let bitspersecond = 0;
let bitsperclick = 1;
// Functions
function increment() {
 bits += bitsperclick
 update()
}
setInterval(function() {
 bits += bitspersecond
 update()
},1000)
/**
 * Updates The TotalBits Count
 */
function update() {
  document.getElementById("TotalBits").innerText = bits;
}
// Upgrades, Buildings, etc.
let MoreBitsPerClickCount = 0
let MoreBitsPerSecondCount = 0
let MoreBitsPerClickPrice = 25
let MoreBitsPerSecondPrice = 50
// Upgrade Functions
function BuyMoreBitsPerClick() {
 if (bits >= MoreBitsPerClickPrice || bits == MoreBitsPerClickPrice) {
   bits -= MoreBitsPerClickPrice
   update()
  
  MoreBitsPerClickCount++

  MoreBitsPerClickPrice *= 2

  bitsperclick += 1
 }
}
