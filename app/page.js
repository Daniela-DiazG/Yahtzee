"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import getDieValue from "@/utils/getDieValue";
import RollsInfo from "@/components/RollsInfo";
import { initialDiceInformation } from "@/utils/rollesPointsRules";

export default function Home() {
  const [diceInformation, setDiceInformation] = useState(
    initialDiceInformation
  );

  const [playersData, setPlayersData] = useState([
    {
      name: "Player One",
      movementsExecuted: 0,
      totalMovements: 0,
      totalScore: 0,
      points: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        sum: undefined,
        bonus: undefined,
        threeOfAKind: undefined,
        fourOfAKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        chance: undefined,
        yahtzee: undefined,
      },
    },
    {
      name: "Player Two",
      movementsExecuted: 0,
      totalMovements: 0,
      totalScore: 0,
      points: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        sum: undefined,
        bonus: undefined,
        threeOfAKind: undefined,
        fourOfAKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        chance: undefined,
        yahtzee: undefined,
      },
    },
  ]);

  const [activePlayer, setActivePlayer] = useState(0);

  const handleRollDice = () => {
    if (playersData[activePlayer].movementsExecuted === 3) return;

    setPlayersData((prev) => {
      const newInfoPlayers = prev.map((player, index) => {
        if (index === activePlayer) {
          return {
            ...player,
            movementsExecuted: player.movementsExecuted + 1,
          };
        }
        return player;
      });

      return newInfoPlayers;
    });

    setDiceInformation((prev) =>
      prev.map(({ value, id, isBlocked }) => {
        if (!isBlocked) {
          const newValue = getDieValue();
          return { value: newValue, id, isBlocked };
        }
        return { value, id, isBlocked };
      })
    );
  };

  const handleBlock = (position) => {
    setDiceInformation((prev) =>
      prev.map(({ id, value, isBlocked }) => {
        if (id === position) {
          return { value, id, isBlocked: !isBlocked };
        }
        return { value, id, isBlocked };
      })
    );
  };

  const getSum = ({ playersData, playerPosition }) => {
    return (
      playersData[playerPosition].points.ones +
      playersData[playerPosition].points.twos +
      playersData[playerPosition].points.threes +
      playersData[playerPosition].points.fours +
      playersData[playerPosition].points.fives +
      playersData[playerPosition].points.sixes
    );
  };

  const getTotalScore = ({ playersData, playerPosition, sum,bonus }) => {
    return (
      sum +bonus+
      playersData[playerPosition].points.threeOfAKind +
      playersData[playerPosition].points.fourOfAKind +
      playersData[playerPosition].points.fullHouse +
      playersData[playerPosition].points.smallStraight +
      playersData[playerPosition].points.largeStraight +
      playersData[playerPosition].points.chance +
      playersData[playerPosition].points.yahtzee)
  };

  useEffect(() => {
    if (
      playersData[0].movementsExecuted === 13 &&
      playersData[1].movementsExecuted === 13
    ) {
      const sumPlayerOne = getSum({
        playersData,
        playerPosition: 0,
      });
      const sumPlayerTwo = getSum({
        playersData,
        playerPosition: 2,
      });

      setPlayersData((prev) => [
        {
          ...prev[0],
          points: {
            ...prev[0].points,
            sum: sumPlayerOne,
            bonus: sumPlayerOne > 63 ? 35 : 0,
          },
          totalScore: getTotalScore({
            playersData: prev,
            playerPosition: 0,
            sum: sumPlayerOne,
            bonus: sumPlayerOne > 63 ? 35 : 0,
          }),
        },
        {
          ...prev[1],
          points: {
            ...prev[1].points,
            sum: sumPlayerTwo,
            bonus: sumPlayerTwo > 63 ? 35 : 0,
          },
          totalScore: getTotalScore({
            playersData: prev,
            playerPosition: 1,
            sum: sumPlayerTwo,
            bonus: sumPlayerTwo > 63 ? 35 : 0,
          }),
        },
      ]);

      // sum: undefined,
      // bonus: undefined,
    }
    console.log("game finished");
  }, [playersData]);

  return (
    <div className={styles.page}>
      <section className={styles.diceContainer}>
        {diceInformation.map(({ id, value, isBlocked }) => (
          <button
            key={id}
            className={isBlocked ? styles.dieBlock : styles.dieUnblock}
            onClick={() => handleBlock(id)}
          >
            {value}
          </button>
        ))}
      </section>
      <section className={styles.actions}>
        <p>{playersData[activePlayer].name}:</p>
        <button onClick={handleRollDice}>Lanzar</button>
      </section>
      <section className={styles.players}>
        <RollsInfo
          results={diceInformation}
          activePlayer={activePlayer}
          playersData={playersData}
          setPlayersData={setPlayersData}
          setActivePlayer={setActivePlayer}
          onClickSelectRoll={() => {
            setActivePlayer((prev) => (prev === 0 ? 1 : 0));
            setDiceInformation(initialDiceInformation);
          }}
        />
      </section>
    </div>
  );
}
