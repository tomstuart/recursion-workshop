// const sumUpTo = number => {
//   let result = 0;

//   let i = 1;
//   while (i <= number) {
//     result += i;
//     i++;
//   }

//   return result;
// };

const sumUpTo = number => {
  if (number === 0) {
    return 0;
  } else {
    return number + sumUpTo(number - 1);
  }
};

export default sumUpTo;
