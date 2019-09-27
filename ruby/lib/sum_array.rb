def sum_array(numbers)
  if numbers.empty?
    0
  else
    first, *rest = numbers
    first + sum_array(rest)
  end
end
