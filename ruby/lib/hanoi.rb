module Hanoi
  Disk = Struct.new(:size) do
    def to_s
      '**' * size
    end
  end

  Base = Struct.new(:id, :disks) do
    def self.full(id, height)
      new(id, 1.upto(height).map { |size| Disk.new(size) })
    end

    def self.empty(id)
      new(id, [])
    end

    def initialize(*)
      super
      check_disks
    end

    def empty?
      disks.empty?
    end

    def top
      raise "base #{id} is empty" if empty?
      disks.first
    end

    def pop
      self.class.new(id, disks.drop(1))
    end

    def push(disk)
      self.class.new(id, [disk] + disks)
    end

    def to_s(width = disks.map(&:to_s).map(&:length).max || 0, height = disks.length)
      (
        [' ' * width] * (height - disks.length) +
        disks.map { |disk| disk.to_s.center(width) } +
        [
          '-' * width,
          id.inspect.ljust(width)
        ]
      ).join("\n")
    end

    private

    def check_disks
      disks.each_cons(2) do |a, b|
        unless a.size < b.size
          raise "can’t put #{a} on top of #{b}"
        end
      end
    end
  end

  Tower = Struct.new(:bases, :moves) do
    PEG_COUNT = 3

    def self.create(height)
      id, *ids = (:a..).take(PEG_COUNT)
      bases = [Base.full(id, height)] + ids.map { |id| Base.empty(id) }
      new(bases, [])
    end

    def move(from, to)
      disk = bases.detect { |base| base.id == from }.top
      self.class.new(
        bases.map { |base|
          base = base.pop if base.id == from
          base = base.push(disk) if base.id == to
          base
        },
        moves + [{ from: from, to: to }]
      )
    end

    def inspect
      width = bases.flat_map(&:disks).map(&:to_s).map(&:length).max || 0
      height = bases.map(&:disks).map(&:length).sum

      "\n" +
        bases.
          map { |base| base.to_s(width, height) }.
          map { |string| string.split("\n") }.
          transpose.
          map { |strings| strings.join(' ') }.
          join("\n")
    end
  end
end
