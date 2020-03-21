module.exports = function reverse(n) {
  let absInt = Math.abs(n).toString();
  return absInt.split('').reverse().join('');
}