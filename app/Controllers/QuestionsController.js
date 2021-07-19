import { ProxyState } from "../AppState.js";
import { gamesService } from "../Services/GamesService.js";
import { questionsService } from "../Services/QuestionsSerivce.js";


export default class QuestionsController {

   async getQuestion() {
      try {
         await questionsService.getQuestion()
      } catch (error) {
         window.alert("Something went wrong: " + error)
      }
   }

   checkAnswer(answer) {
      questionsService.checkAnswer(answer)
      gamesService.nextQuestion()
   }
}