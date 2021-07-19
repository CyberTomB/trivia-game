import { generateId } from "../Utils/GenerateId.js";

export default class Game {

   constructor({ id = generateId(), questions, index = 0 }) {
      this.id = id
      this.questions = questions
      this.index = index
   }
}