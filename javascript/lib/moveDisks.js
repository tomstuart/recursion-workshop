const moveDisks = (tower, count, from, to) => {
  if (count === 1) {
    return tower.move(from, to);
  } else {
    const stage = tower.bases.find(base => ![from, to].includes(base.id)).id;

    let result = tower;
    result = moveDisks(result, count - 1, from, stage);
    result = moveDisks(result, 1, from, to);
    result = moveDisks(result, count - 1, stage, to);
    return result;
  }
};

export default moveDisks;
