# def sum_up_to(number)
#   result = 0

#   i = 0
#   while i <= number
#     result += i
#     i += 1
#   end

#   result
# end

def sum_up_to(number)
  if number.zero?
    0
  else
    number + sum_up_to(number.pred)
  end
end
