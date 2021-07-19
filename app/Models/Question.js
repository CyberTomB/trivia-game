export default class Question {
   constructor({ question, correct_answer, incorrect_answers, id }) {
      this.question = question
      this.correct = correct_answer
      this.answers = incorrect_answers

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
         console.log(a)
         template += `<button onclick="console.log('${a}')">${a}</button>`
      })
      return template
   }
}

