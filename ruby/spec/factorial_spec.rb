require_relative '../lib/factorial'

RSpec.describe 'factorial' do
  specify { expect(factorial(0)).to eq 1 }
  specify { expect(factorial(1)).to eq 1 }
  specify { expect(factorial(2)).to eq 2 }
  specify { expect(factorial(10)).to eq 3_628_800 }
  specify { expect(factorial(100)).to eq 93_326_215_443_944_152_681_699_238_856_266_700_490_715_968_264_381_621_468_592_963_895_217_599_993_229_915_608_941_463_976_156_518_286_253_697_920_827_223_758_251_185_210_916_864_000_000_000_000_000_000_000_000 }
end
