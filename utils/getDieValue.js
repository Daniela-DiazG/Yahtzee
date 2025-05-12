const getDieValue = () => {
  const pseudorandomNumber = Math.random();
  switch (true) {
    case pseudorandomNumber < 1 / 6:
      return 1;
    case pseudorandomNumber > 1 / 6 && pseudorandomNumber < 2 / 6:
      return 2;
    case pseudorandomNumber > 2 / 6 && pseudorandomNumber < 3 / 6:
      return 3;
    case pseudorandomNumber > 3 / 6 && pseudorandomNumber < 4 / 6:
      return 4;
    case pseudorandomNumber > 4 / 6 && pseudorandomNumber < 5 / 6:
      return 5;
    default:
      return 6;
  }
};

export default getDieValue;