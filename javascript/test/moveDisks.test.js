import Hanoi from '../lib/hanoi';
import moveDisks from '../lib/moveDisks';

describe('moveDisks', () => {
  let count;
  let initial;
  let result;

  let setupWithCount = number => {
    count = number;
    initial = Hanoi.Tower.create(count);
    const firstBase = initial.bases[0];
    const lastBase = initial.bases[initial.bases.length - 1];
    result = moveDisks(initial, count, firstBase.id, lastBase.id);
  };

  let itMovesAllTheDisks = () => {
    it('empties the first base', () => {
      const firstBase = result.bases[0];
      expect(firstBase.isEmpty()).toBe(true);
    });

    it('fills the last base', () => {
      const lastBase = result.bases[result.bases.length - 1];
      expect(lastBase.disks.length).toBe(count);
    });
  };

  describe('with 1 disk', () => {
    beforeEach(() => {
      setupWithCount(1);
    });

    itMovesAllTheDisks();

    it('solves it in 1 move', () => {
      expect(result.moves.length).toBe(1);
    });
  });

  describe('with 2 disks', () => {
    beforeEach(() => {
      setupWithCount(2);
    });

    itMovesAllTheDisks();

    it('solves it in 3 moves', () => {
      expect(result.moves.length).toBe(3);
    });
  });

  describe('with 3 disks', () => {
    beforeEach(() => {
      setupWithCount(3);
    });

    itMovesAllTheDisks();

    it('solves it in 7 moves', () => {
      expect(result.moves.length).toBe(7);
    });
  });

  describe('with 10 disks', () => {
    beforeEach(() => {
      setupWithCount(10);
    });

    itMovesAllTheDisks();

    it('solves it in 1023 moves', () => {
      expect(result.moves.length).toBe(1023);
    });
  });
});
