import { ProxyState } from "../AppState.js";
import { gamesService } from "../Services/GamesService.js";

function _draw() {
   console.log('game object:', ProxyState.game)
   let currentQ = ProxyState.questions[ProxyState.game.index]
   let template = currentQ.Template
   document.getElementById('game').innerHTML = template
}

export default class GamesController {

   constructor() {
      ProxyState.on('game', _draw)
   }
   async startGame() {
      try {
         await gamesService.startGame()
      } catch (error) {
         window.alert("Something went wrong: " + error)
      }
   }

   logGame() {
      console.log(ProxyState.game)
   }
}