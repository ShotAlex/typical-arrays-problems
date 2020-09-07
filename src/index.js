
exports.min = function min (array = []) {
  if (array.length < 1) return 0;
  return Math.min(...array);
}

exports.max = function max(array = []) {
    if (array.length < 1) return 0;
    return Math.max(...array);
}

exports.avg = function avg(array = []) {
    if (array.length < 1) return 0;

    let len = array.length;
    let total = array.reduce((acc, item) => {
      return acc + item;
  })

  return total / len;
}
