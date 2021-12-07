function average(numbers) {
  const arrayWithoutNaN = numbers.filter( (value) => !Number.isNaN(value) );
  if (!arrayWithoutNaN.length) return NaN;

  const meanWithOutliers = arrayWithoutNaN
      .reduce((p, c)=> p + c, 0) / arrayWithoutNaN.length;

  const diffArray = arrayWithoutNaN.map((k)=>{
    return (k - meanWithOutliers) ** 2;
  });

  const sum = diffArray.reduce((acc, curr)=> acc + curr, 0);

  const dev = Math.sqrt(sum / diffArray.length);

  // eslint-disable-next-line max-len
  const arrayWithoutOutliers = arrayWithoutNaN
      .filter((n) => n>=(meanWithOutliers-2*dev) && n<=(meanWithOutliers+2*dev),
      );
  const meanWithoutOutliers=arrayWithoutOutliers
      .reduce((p, c) => p+c, 0,
      ) / arrayWithoutOutliers.length;
  return meanWithoutOutliers;
}

module.exports = {average};
