const anagramsOf = string => {
  if (string.length === 0) {
    return [''];
  } else {
    let results = [];
    for (let i = 0; i < string.length; ++i) {
      const letter = string[i];
      const rest = string.slice(0, i) + string.slice(i + 1, string.length);
      const anagrams = anagramsOf(rest).map(anagram => letter + anagram);
      results = results.concat(anagrams);
    }
    return results;
  }
}

export default anagramsOf;
