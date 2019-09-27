// const factorial = number => {
//   let result = 1;

//   let i = 1;
//   while (i <= number) {
//     result *= i;
//     i++;
//   }

//   return result
// };

const factorial = number => {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

export default factorial;
