require_relative '../lib/reverse_string'

RSpec.describe 'reverse_string' do
  specify { expect(reverse_string('')).to eq '' }
  specify { expect(reverse_string('a')).to eq 'a' }
  specify { expect(reverse_string('ab')).to eq 'ba' }
  specify { expect(reverse_string('The future is now')).to eq 'won si erutuf ehT' }
end

