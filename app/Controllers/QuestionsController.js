import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsSerivce.js";


function _drawQuestion() {
   let trivia = ProxyState.trivia
   let template = trivia[0].Template
   document.getElementById('game').innerHTML = template
}
export default class QuestionsController {

   constructor() {
      ProxyState.on('trivia', _drawQuestion)
   }
   async getQuestion() {
      try {
         await questionsService.getQuestion()
      } catch (error) {
         window.alert("Something went wrong: " + error)
      }
   }

   logTrivia() {
      console.log(ProxyState.trivia)
   }

   checkAnswer(answer) {
      questionsService.checkAnswer(answer)
   }
}