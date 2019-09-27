def reverse_string(string)
  if string.empty?
    ''
  else
    string.slice(string.length - 1) +
      reverse_string(string.slice(0, string.length - 1))
  end
end
