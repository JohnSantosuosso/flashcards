import Card from './card';
import CardGenerator from './cardGenerator';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(card: Card): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    rl.question(`Question ${card.question}\nYour Answer: `, (userAnswer) => {
      if (userAnswer.trim().toLowerCase() === card.answer.toLowerCase()) {
      console.log('Correct');
      resolve(true);
      } else {
        console.log('Incorrect');
        resolve(false);
      }
    });
  });
}

async function playGame() {
  const generator = new CardGenerator();
  const cards: Card[] = generator.cards;

  for (const card of cards) {
    const isCorrect = await askQuestion(card);
    if (isCorrect) {
      console.log('Congratulations');
    } else {
      console.log('Please try again');
    }
  }

  rl.close();
}

playGame();