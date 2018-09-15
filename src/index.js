module.exports = function getZerosCount(number) {
 
  const five = 5;
  let summ = 0;
  let pair = five;

  while (number > pair) {
      summ += Math.floor(number / pair);
      pair *= five;
  }
  return summ;
}
