const sumUpTo = number => {
  if (number === 0) {
    return 0;
  } else {
    return number + sumUpTo(number - 1);
  }
};

export default sumUpTo;
