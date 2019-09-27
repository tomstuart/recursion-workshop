# def sum_array(numbers)
#   result = 0

#   numbers.each do |number|
#     result += number
#   end

#   result
# end

def sum_array(numbers)
  if numbers.empty?
    0
  else
    first, *rest = numbers
    first + sum_array(rest)
  end
end
