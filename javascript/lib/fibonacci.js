const fibonacci = number => {
  switch (number) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      return fibonacci(number - 1) + fibonacci(number - 2);
  }
};

export default fibonacci;
