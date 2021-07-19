import GamesController from "./Controllers/GamesController.js";
import QuestionsController from "./Controllers/QuestionsController.js";


class App {
  questionsController = new QuestionsController

  gamesController = new GamesController
}

window["app"] = new App();
