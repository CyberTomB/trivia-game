import { ProxyState } from "../AppState.js";
import { gamesService } from "../Services/GamesService.js";

function _drawQuestion() {
   console.log('game object:', ProxyState.game)
   let currentQ = ProxyState.questions[ProxyState.game.index]
   let template = currentQ.Template
   document.getElementById('game').innerHTML = template
}

export default class GamesController {

   async startGame() {
      try {
         await gamesService.startGame()
         _drawQuestion()
      } catch (error) {
         window.alert("Something went wrong: " + error)
      }
   }

   logGame() {
      console.log(ProxyState.game)
   }
}