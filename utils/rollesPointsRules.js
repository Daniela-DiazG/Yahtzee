export const hasSmallStraight = (totals) => {
  let consecutiveCount = 0;

  for (let i = 0; i < totals.length; i++) {
    if (totals[i] > 0) {
      consecutiveCount++;
      if (consecutiveCount >= 4) {
        return true;
      }
    } else {
      consecutiveCount = 0;
    }
  }
  return false;
};

export const hasFullHouse = (totals) =>
  totals.find((count) => count === 3) && totals.find((count) => count === 2);

export const hasLargeStraight = (totals) => {
  let consecutiveCount = 0;

  for (let i = 0; i < totals.length; i++) {
    if (totals[i] > 0) {
      consecutiveCount++;
      if (consecutiveCount >= 5) {
        return true;
      }
    } else {
      consecutiveCount = 0;
    }
  }
  return false;
};

export const hasYahtzee = (totals) => totals.some((count) => count === 5);

export const getSumatory = (totals) => {
  let sum = 0;
  for (let i = 0; i < totals.length; i++) {
    sum += totals[i] * (i + 1);
  }
  return sum;
};

export const initialRolls = [
  {
    name: "ones",
    getPoints: (count) => count * 1,
    pointsToShow: 0,
  },
  {
    name: "twos",
    getPoints: (count) => count * 2,
    pointsToShow: 0,
  },
  {
    name: "threes",
    getPoints: (count) => count * 3,
    pointsToShow: 0,
  },
  {
    name: "fours",
    getPoints: (count) => count * 4,
    pointsToShow: 0,
  },
  {
    name: "fives",
    getPoints: (count) => count * 5,
    pointsToShow: 0,
  },
  {
    name: "sixes",
    getPoints: (count) => count * 6,
    pointsToShow: 0,
  },

  {
    name: "sum",
    // getPoints: (totalUppers) => (totalUppers > 63 ? 35 : 0),    pointsToShow: 0,
  },
  {
    name: "bonus",
    // getPoints: (totalUppers) => (totalUppers > 63 ? 35 : 0),    pointsToShow: 0,
  },

  {
    name: "three of a kind",
    getPoints: (results) => getSumatory(results),
    pointsToShow: 0,
  },
  {
    name: "four of a kind",
    getPoints: (results) => getSumatory(results),
    pointsToShow: 0,
  },
  {
    name: "full house",
    getPoints: () => 25,
    pointsToShow: 0,
  },
  {
    name: "small straight",
    getPoints: () => 30,
    pointsToShow: 0,
  },
  {
    name: "large straight",
    getPoints: () => 40,
    pointsToShow: 0,
  },
  {
    name: "chance",
    getPoints: (results) => getSumatory(results),
    pointsToShow: 0,
  },
  {
    name: "yahtzee",
    getPoints: () => 50,
    pointsToShow: 0,
  },
  { name: "total score", pointsPlayerOne: "", pointsPlayerTwo: "" },
];

export const initialDiceInformation = [
  {
    id: 1,
    value: 0,
    isBlocked: false,
  },
  {
    id: 2,
    value: 0,
    isBlocked: false,
  },
  {
    id: 3,
    value: 0,
    isBlocked: false,
  },
  {
    id: 4,
    value: 0,
    isBlocked: false,
  },
  {
    id: 5,
    value: 0,
    isBlocked: false,
  },
];
