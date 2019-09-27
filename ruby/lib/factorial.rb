# def factorial(number)
#   result = 1

#   i = 1
#   while i <= number
#     result *= i
#     i += 1
#   end

#   result
# end

def factorial(number)
  if number.zero?
    1
  else
    number * factorial(number.pred)
  end
end
