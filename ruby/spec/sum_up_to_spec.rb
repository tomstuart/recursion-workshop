require_relative '../lib/sum_up_to'

RSpec.describe 'sum_up_to' do
  specify { expect(sum_up_to(0)).to eq 0 }
  specify { expect(sum_up_to(1)).to eq 1 }
  specify { expect(sum_up_to(2)).to eq 3 }
  specify { expect(sum_up_to(10)).to eq 55 }
  specify { expect(sum_up_to(100)).to eq 5050 }
end
