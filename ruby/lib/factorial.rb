def factorial(number)
  if number.zero?
    1
  else
    number * factorial(number.pred)
  end
end
