import { gamesService } from "../Services/GamesService.js";

export default class GamesController {


   async startGame() {
      try {
         await gamesService.startGame()
      } catch (error) {
         window.alert("Something went wrong: " + error)
      }
   }
}