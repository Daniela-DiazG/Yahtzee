const getRollToShow = ({activePlayer,playersData, roll, playerNumber}) => {
  if (playersData[playerNumber].points[roll.name] !== undefined) {
    return playersData[playerNumber].points[roll.name];
  } else if (
    activePlayer === playerNumber &&
    playersData[playerNumber].movementsExecuted > 0
  ) {
    return roll.pointsToShow;
  }
  return "";
};

export default getRollToShow;

export const isDisabled = (playersData, roll, playerNumber) => {
  if (playersData[playerNumber].points[roll.name] !== undefined) {
    return true;
  }
};
