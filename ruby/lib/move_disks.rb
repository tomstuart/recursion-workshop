def move_disks(tower, count, from, to)
  if count == 1
    tower.move(from, to)
  else
    stage = tower.bases.detect { |base| ![from, to].include?(base.id) }.id
    tower = move_disks(tower, count - 1, from, stage)
    tower = move_disks(tower, 1, from, to)
    tower = move_disks(tower, count - 1, stage, to)
    tower
  end
end
