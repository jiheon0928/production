while (true) {
  Array(6).fill((0).Map((x) => String(getRandum(1, 45))));

  const newlotto = lotto
    .reduce((a, b) => {
      if (a.includes(c)) return a;
      else return a + "," + b;
    })
    .split(",");
  if (newlotto.length == 6) return newlotto;
}

const gerlotto1 = () => {
  while (true) {
    const lotto = [
      ...new set(
        Array(6)
          .fill(1)
          .map((x) => String(getRandum(1, 45)))
      ),
    ];
    if (lotto.length == 6) return lotto;
  }
};
