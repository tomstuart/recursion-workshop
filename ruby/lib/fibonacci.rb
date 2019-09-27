def fibonacci(number)
  case number
  when 0
    0
  when 1
    1
  else
    fibonacci(number - 1) + fibonacci(number - 2)
  end
end
