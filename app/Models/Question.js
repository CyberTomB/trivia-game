import { generateId } from "../Utils/GenerateId.js"

export default class Question {
   constructor({ question, correct_answer, incorrect_answers, id = generateId() }) {
      this.question = question
      this.correct = correct_answer
      this.answers = incorrect_answers
      this.id = id

      let randIndex = Math.floor(Math.random() * (incorrect_answers.length + 1))
      this.answers.splice(randIndex, 0, correct_answer)
   }

   get Template() {
      return `
      <div class="col-6 card text-center">
         <div class="card-title">${this.question}</div>
            <div class="card-body">
               ${this.TemplateQs}
            </div>
      </div>
      `
   }

   get TemplateQs() {
      let template = ''
      this.answers.forEach(a => {

         template += `<button onclick="app.questionsController.checkAnswer(${a == this.correct ? true : false})">${a}</button>`
      })
      return template
   }
}

