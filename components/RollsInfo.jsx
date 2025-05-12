"use client";
import styles from "./RollsInfo.module.css";
import { useEffect, useState } from "react";
import {
  hasSmallStraight,
  hasFullHouse,
  hasLargeStraight,
  hasYahtzee,
  initialRolls,
} from "@/utils/rollesPointsRules";
import getRollToShow, { isDisabled } from "@/utils/rollsInfo/getRollToShow";

export default function RollsInfo({
  results,
  activePlayer,
  onClickSelectRoll,
  playersData,
  setPlayersData,
}) {
  const [rollsData, setRollsData] = useState(initialRolls);

  useEffect(() => {
    const totals = Array(6).fill(0);

    results.forEach((item) => {
      if (item.value >= 1 && item.value <= 6) {
        totals[item.value - 1] += 1;
      }
    });

    setRollsData((prevRolls) =>
      prevRolls.map((roll) => {
        switch (roll.name) {
          case "ones":
            roll.pointsToShow = roll.getPoints(totals[0]);
            break;
          case "twos":
            roll.pointsToShow = roll.getPoints(totals[1]);
            break;
          case "threes":
            roll.pointsToShow = roll.getPoints(totals[2]);
            break;
          case "fours":
            roll.pointsToShow = roll.getPoints(totals[3]);
            break;
          case "fives":
            roll.pointsToShow = roll.getPoints(totals[4]);
            break;
          case "sixes":
            roll.pointsToShow = roll.getPoints(totals[5]);
            break;
          case "three of a kind":
            if (totals.some((count) => count >= 3)) {
              roll.pointsToShow = roll.getPoints(totals);
            }
            break;
          case "four of a kind":
            if (totals.some((count) => count >= 4)) {
              roll.pointsToShow = roll.getPoints(totals);
            }
            break;
          case "full house":
            if (hasFullHouse(totals)) {
              roll.pointsToShow = roll.getPoints(totals);
            }
            break;
          case "small straight":
            if (hasSmallStraight(totals)) {
              roll.pointsToShow = roll.getPoints(totals);
            }
            break;
          case "large straight":
            if (hasLargeStraight(totals)) {
              roll.pointsToShow = roll.getPoints(totals);
            }
            break;
          case "chance":
            roll.pointsToShow = roll.getPoints(totals);
            break;
          case "yahtzee":
            if (hasYahtzee(totals)) {
              roll.pointsToShow = roll.getPoints(totals);
            }
            break;
          default:
            break;
        }
        return { ...roll };
      })
    );
  }, [results, activePlayer]);

  const selectRoll = ({ target }) => {
    if (
      playersData[activePlayer].movementsExecuted >= 3 ||
      playersData[activePlayer].points[target.id] !== undefined
    ) {
      return;
    }

    setPlayersData((prev) => {
      const newInfoPlayers = prev.map((player, index) => {
        if (index === activePlayer) {
          return {
            ...player,
            movementsExecuted: 0,
            totalMovements: player.totalMovements + 1,
            totalScore: player.totalScore + target.innerText,
            points: {
              ...player.points,
              [target.id]: target.innerText,
            },
          };
        }
        return player;
      });

      return newInfoPlayers;
    });

    setRollsData(initialRolls);

    onClickSelectRoll();
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Rolls</th>
          <th>Player one</th>
          <th>Player two</th>
        </tr>
      </thead>
      <tbody>
        {rollsData.map((roll, index) => (
          <tr key={index}>
            <td>{roll.name}</td>
            <td
              className={
                isDisabled(playersData, roll, 0) ? styles.disabled : ""
              }
              id={roll.name}
              onClick={
                activePlayer === 0 &&
                playersData[0].points[roll.name] === undefined
                  ? selectRoll
                  : null
              }
            >
              {getRollToShow({activePlayer,playersData, roll, playerNumber: 0})}
            </td>
            <td
              className={
                isDisabled(playersData, roll, 1) ? styles.disabled : ""
              }
              id={roll.name}
              onClick={
                activePlayer === 1 &&
                playersData[1].points[roll.name] === undefined
                  ? selectRoll
                  : null
              }
            >
              {getRollToShow({activePlayer,playersData, roll, playerNumber: 1})}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
