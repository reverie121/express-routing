// Converts a comma-separated string to an array of numbers (removes all NaN).
function convertInput(string) {
    return string.split(',').map(n => parseInt(n)).filter(n => !Number.isNaN(n));
}

function mean(numbers) {
    const sum = numbers.reduce((prev, curr) => {
      return (Number(prev) || 0) + (Number(curr) || 0);
    });
    const result = sum / numbers.length;
    return result;
}

function median(numbers) {
    const mid = Math.floor(numbers.length / 2);
    const n = [...numbers].sort((a, b) => a - b);
    const result =  numbers.length % 2 !== 0 ? n[mid] : (n[mid - 1] + n[mid]) / 2;
    return result;
}

function mode(numbers) {
    const mode = {};
    let max = 0;
    let count = 0;

    for(let i = 0; i < numbers.length; i++) {
      const item = numbers[i];
      if(mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }
      
      if(count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }
    return max;
  }

  module.exports = {
    convertInput: convertInput,
    mean: mean,
    median: median,
    mode: mode
  }