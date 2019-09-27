COINS = [100, 50, 20, 10, 5, 2, 1]

RESULTS = {}

def make_change(total)
  return RESULTS[total] if RESULTS.key?(total)

  result =
    if total.zero?
      []
    else
      COINS.select { |coin| coin <= total }.map do |coin|
        [coin] + make_change(total - coin)
      end.min_by(&:length)
    end

  RESULTS[total] = result
end
