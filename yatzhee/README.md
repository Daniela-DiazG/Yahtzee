# Yatzhee

Yatzhee is a digital implementation of the classic dice game Yahtzee. This project allows players to roll dice, score points based on their rolls, and compete against each other in a fun and interactive way.

## Project Structure

The project consists of the following files:

- **app/page.js**: The main component of the application that manages the game state, including player data, dice information, and game logic. It exports the `Home` function, which renders the game interface and handles user interactions such as rolling dice and blocking dice.

- **app/page.module.css**: Contains the CSS styles for the application, defining the visual appearance of the components used in the game.

- **app/components/RollsInfo.js**: Exports the `RollsInfo` component, which displays the results of the dice rolls and player information. It receives props for the active player, dice results, and player data, allowing players to select their rolls.

- **utils/getDieValue.js**: A utility function that generates a random value for a die roll, simulating the rolling of a die.

- **utils/rollesPointsRules.js**: Contains the rules and logic for calculating points based on the rolled dice. This file may include functions or constants related to scoring in the game.

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies (if applicable).
4. Run the application using your preferred method (e.g., using a local server or development environment).

## Game Rules

- Each player takes turns rolling five dice.
- Players can roll the dice up to three times per turn.
- After rolling, players can choose to keep or block certain dice for scoring.
- Points are calculated based on the combinations of dice rolled according to the game's scoring rules.
- The game continues until all players have completed their turns, and the player with the highest score wins.

## Usage

To start playing, simply launch the application and follow the on-screen instructions. Players can take turns rolling the dice and selecting their scores based on the rolled values.

Enjoy the game!