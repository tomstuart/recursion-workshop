def anagrams_of(string)
  if string.length.zero?
    ['']
  else
    (0...string.length).flat_map do |i|
      letter = string[i]
      rest = string.slice(0, i) + string.slice(i + 1, string.length)
      anagrams_of(rest).map { |anagram| letter + anagram }
    end
  end
end
