import { ProxyState } from "../AppState.js"
import Game from "../Models/Game.js"
import Question from "../Models/Question.js"
import { api } from "./AxiosService.js"

class GamesService {

   async startGame() {
      const res = await api.get()

      console.log('raw game: ', res.data.results)

      let apiQ = res.data.results.map(q => new Question(q))
      console.log('questions: ', apiQ)
      const game = new Game({
         questions: apiQ
      })
      console.log(game)
      ProxyState.game = game
   }
}

export const gamesService = new GamesService()