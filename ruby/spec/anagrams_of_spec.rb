require_relative '../lib/anagrams_of'

RSpec.describe 'anagrams_of' do
  specify { expect(anagrams_of('')).to contain_exactly '' }
  specify { expect(anagrams_of('a')).to contain_exactly 'a' }
  specify { expect(anagrams_of('ab')).to contain_exactly 'ab', 'ba' }
  specify { expect(anagrams_of('dogs')).to contain_exactly 'dgos', 'dgso', 'dogs', 'dosg', 'dsgo', 'dsog', 'gdos', 'gdso', 'gods', 'gosd', 'gsdo', 'gsod', 'odgs', 'odsg', 'ogds', 'ogsd', 'osdg', 'osgd', 'sdgo', 'sdog', 'sgdo', 'sgod', 'sodg', 'sogd' }
end
