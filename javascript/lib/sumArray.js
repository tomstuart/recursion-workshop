// const sumArray = numbers => {
//   let result = 0;

//   numbers.forEach(number => {
//     result += number;
//   });

//   return result;
// };

const sumArray = numbers => {
  if (numbers.length === 0) {
    return 0;
  } else {
    const [first, ...rest] = numbers;
    return first + sumArray(rest);
  }
};

export default sumArray;
