
function average(numbers) {
  const newNumbers = numbers.filter(function (value){
    return !Number.isNan(value);
  });
  return newNumbers.reduce((p, c)=> p + c, 0) / newNumbers.length;
}

module.exports = {average};
