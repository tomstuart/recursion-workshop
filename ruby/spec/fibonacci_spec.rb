require_relative '../lib/fibonacci'

RSpec.describe 'fibonacci' do
  specify { expect(fibonacci(0)).to eq 0 }
  specify { expect(fibonacci(1)).to eq 1 }
  specify { expect(fibonacci(2)).to eq 1 }
  specify { expect(fibonacci(3)).to eq 2 }
  specify { expect(fibonacci(4)).to eq 3 }
  specify { expect(fibonacci(5)).to eq 5 }
  specify { expect(fibonacci(6)).to eq 8 }
  specify { expect(fibonacci(7)).to eq 13 }
  specify { expect(fibonacci(38)).to eq 39_088_169 }
end
