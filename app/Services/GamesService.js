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
      ProxyState.questions = apiQ
      ProxyState.game = new Game({
         questions: apiQ
      })
      console.log('proxystate qs:', ProxyState.questions, 'proxystate game:', ProxyState.game)
   }

   nextQuestion() {
      let index = ProxyState.game.index
      console.log('index:', index, 'index length', ProxyState.questions.length)
      if (index < ProxyState.questions.length - 1) {
         ProxyState.game.index++
         ProxyState.game = ProxyState.game
         console.log(ProxyState.game.index)
      }
   }
}

export const gamesService = new GamesService()