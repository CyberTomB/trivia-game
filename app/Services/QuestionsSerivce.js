import { api } from "./AxiosService.js";

class QuestionsSerivce {
   async getQuestion() {
      const res = await api.get()

      console.log(res.data)
   }
}

export const questionsService = new QuestionsSerivce()