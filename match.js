import {Board} from "./board.js";
import {Player} from "./player.js";

/**
 * Play game with a board by player 1 and player 2
 * This is the final step.
 * @param {Board} pos Place position (0-8)
 * @param {firstPlayer} player
 * @param {secondPlayer} player
 * @returns {boolean} returns true if successful
 */

export 
const startGame = async(board, firstPlayer, secondPlayer) => {
	// Initializing Player and Board
	firstPlayer = new Player(1)
	await firstPlayer.init()
	secondPlayer = new Player(2)
	await secondPlayer.init()
	board = new Board()

	// For recording the turn
	let turn = 0

	for (let i = 0; i < 9; i++) {
		const inTurnPlayer = (turn % 2 + 1 === 1) ? firstPlayer : secondPlayer
		await board.place(inTurnPlayer)
		board.print()

		// Check for the winner
		if (board.checkIsWin(inTurnPlayer)) {
			console.log(`${inTurnPlayer.name} won!`)
			return
		}
		turn++
	}
	console.log('Draw!')
}
