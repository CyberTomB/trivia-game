import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "./AxiosService.js";

class QuestionsSerivce {
   async getQuestion() {
      const res = await api.get()

      console.log('raw question: ', res.data.results)

      let questions = res.data.results.map(q => new Question(q))
      ProxyState.trivia = questions
   }

   export const questionsService = new QuestionsSerivce()