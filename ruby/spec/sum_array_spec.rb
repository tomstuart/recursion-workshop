require_relative '../lib/sum_array'

RSpec.describe 'sum_array' do
  specify { expect(sum_array([])).to eq 0 }
  specify { expect(sum_array([4])).to eq 4 }
  specify { expect(sum_array([4, 8, 15, 16, 23, 42])).to eq 108 }
end
