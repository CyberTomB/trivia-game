import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "./AxiosService.js";

class QuestionsSerivce {
   // async getQuestion() {
   //    const res = await api.get()

   //    console.log('raw question: ', res.data.results)

   //    let questions = res.data.results.map(q => new Question(q))
   //    ProxyState.trivia = questions
   // }

   checkAnswer(answer) {
      let correct = `<div class="col-7 bg-success text-light text-center"><b>CORECT!!!</b></div>`
      let wrong = `<div class="col-7 bg-danger text-dark text-center"><b>WRONG!!!</b></div>`
      console.log(answer)
      if (answer) {
         document.getElementById('answer').innerHTML = correct
      } else {
         document.getElementById('answer').innerHTML = wrong
      }
   }
}

export const questionsService = new QuestionsSerivce()