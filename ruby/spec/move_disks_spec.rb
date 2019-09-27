require_relative '../lib/hanoi'
require_relative '../lib/move_disks'

RSpec.describe 'move_disks' do
  let(:initial) { Hanoi::Tower.create(count) }
  let(:result) { move_disks(initial, count, initial.bases.first.id, initial.bases.last.id) }

  shared_examples 'it moves all the disks' do
    it 'empties the first base' do
      expect(result.bases.first).to be_empty
    end

    it 'fills the last base' do
      expect(result.bases.last.disks.length).to eq count
    end
  end

  context 'with 1 disk' do
    let(:count) { 1 }

    include_examples 'it moves all the disks'

    it 'solves it in 1 move' do
      expect(result.moves.length).to eq 1
    end
  end

  context 'with 2 disks' do
    let(:count) { 2 }

    include_examples 'it moves all the disks'

    it 'solves it in 3 moves' do
      expect(result.moves.length).to eq 3
    end
  end

  context 'with 3 disks' do
    let(:count) { 3 }

    include_examples 'it moves all the disks'

    it 'solves it in 7 moves' do
      expect(result.moves.length).to eq 7
    end
  end

  context 'with 10 disks' do
    let(:count) { 10 }

    include_examples 'it moves all the disks'

    it 'solves it in 1023 moves' do
      expect(result.moves.length).to eq 1023
    end
  end
end
