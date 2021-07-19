import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsSerivce.js";


function _draw() {
   let trivia = ProxyState.trivia
   let template = ''
   trivia.forEach(t => template += t.Template)
   document.getElementById('game').innerHTML = template
}
export default class QuestionsController {

   constructor() {
      ProxyState.on('trivia', _draw)
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