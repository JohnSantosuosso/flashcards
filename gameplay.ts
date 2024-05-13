import Card from './card';
import CardGenerator from './cardGenerator';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question: string): Promise<void> {
  return new Promise<void>((resolve) => {
    rl.question(question, () => {
      resolve();
    });
  });
}

async function playGame() {
  const generator = new CardGenerator();
  const cards: Card[] = generator.cards;

  for (const card of cards) {
    await askQuestion(`Question: ${card.question}\nPress Enter to reveal the answer.\n`);
    console.log(`Answer: ${card.answer}\n`);
  }

  rl.close();
}

playGame();