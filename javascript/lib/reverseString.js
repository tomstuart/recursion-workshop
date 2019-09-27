const reverseString = string => {
  if (string.length === 0) {
    return '';
  } else {
    return string.slice(string.length - 1) +
      reverseString(string.slice(0, string.length - 1));
  }
};

export default reverseString;
