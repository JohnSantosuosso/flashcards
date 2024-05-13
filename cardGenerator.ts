import * as fs from 'fs';
import Card from './card';

export default class CardGenerator {
  cards: Card[];

  constructor() {
    this.cards = this.generateCardsFromFile('questions.txt');
  }

  private generateCardsFromFile(filePath: string): Card[] {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    const cards: Card[] = [];

    for (let i = 0; i < lines.length; i += 2) {
      const question = lines[i].trim();
      const answer = lines[i + 1]?.trim() || '';

      if (question !== '') {
        const card = new Card(question, answer);
        cards.push(card);
      }
    }

    return cards;
  }
}