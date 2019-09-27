const inspect = Symbol.for('nodejs.util.inspect.custom');

export class Disk {
  constructor(size) {
    this.size = size;
  }

  toString() {
    return '**'.repeat(this.size);
  }
}

export class Base {
  constructor(id, disks) {
    this.id = id;
    this.disks = disks;
    this.checkDisks();
  }

  checkDisks() {
    for (let i = 0; i < this.disks.length - 1; i++) {
      const [a, b] = this.disks.slice(i, i + 2);
      if (a.size >= b.size) {
        throw `can’t put ${a} on top of ${b}`
      }
    }
  }

  isEmpty() {
    return this.disks.length === 0;
  }

  top() {
    if (this.isEmpty()) {
      throw `base ${this.id} is empty`;
    }

    return this.disks[0];
  }

  pop() {
    return new Base(this.id, this.disks.slice(1));
  }

  push(disk) {
    return new Base(this.id, [disk].concat(this.disks));
  }

  toString(
    width = Math.max(...this.disks.map(disk => disk.toString().length), 0),
    height = this.disks.length
  ) {
    return [
      ...new Array(height - this.disks.length).fill(' '.repeat(width)),
      ...this.disks
        .map(disk => disk.toString())
        .map(string => string.padStart((string.length + width) / 2).padEnd(width)),
      '-'.repeat(width),
      this.id.toString().padEnd(width)
    ].join('\n');
  }
}

Base.full = (id, height) => {
  const disks = [];
  for (let size = 1; size <= height; size++) {
    disks.push(new Disk(size));
  }

  return new Base(id, disks);
};

Base.empty = id => {
  return new Base(id, []);
};

export class Tower {
  constructor(bases, moves) {
    this.bases = bases;
    this.moves = moves;
  }

  move(from, to) {
    const disk = this.bases.find(base => base.id === from).top();
    const bases = this.bases.map(base => {
      let result = base;
      if (result.id === from) {
        result = result.pop();
      }
      if (result.id === to) {
        result = result.push(disk);
      }
      return result;
    });
    const moves = this.moves.concat({ from, to });

    return new Tower(bases, moves);
  }

  toString() {
    const width =
      Math.max(
        ...[].concat(...this.bases.map(base => base.disks))
          .map(disk => disk.toString().length),
        0
      );
    const height =
      this.bases
        .map(base => base.disks.length)
        .reduce((a, b) => a + b, 0);

    const strings =
      this.bases
        .map(base => base.toString(width, height))
        .map(string => string.split('\n'));

    return strings[0].map((_, index) => strings.map(row => row[index]))
      .map(strings => strings.join(' '))
      .join('\n');
  }

  [inspect]() {
    return this.toString();
  }
}

const PEG_COUNT = 3;
const ASCII_A = 97;

Tower.create = height => {
  let letters = [];
  for (let i = 0; i < PEG_COUNT; i++) {
    letters.push(String.fromCharCode(ASCII_A + i));
  }

  const [id, ...ids] = letters;
  const bases = [Base.full(id, height)].concat(ids.map(id => Base.empty(id)));

  return new Tower(bases, []);
};

const Hanoi = { Disk, Base, Tower };
export default Hanoi;
