import defaultSchema from "../cards.json"

export enum CardAction {
    DrawTwo = 'DrawTwo',
    DrawFour = 'DrawFour',
    Wild = 'Wild',
    Reverse = 'Reverse',
    Skip = 'Skip',
}

export enum CardColor {
    Red = 'Red',
    Yellow = 'Yellow',
    Green = 'Green',
    Blue = 'Blue',
}

export interface WildCard {
    action: CardAction
}

export interface ColorCard {
    color: CardColor
    number?: number
    action?: CardAction
}

export class SchemaError extends Error {}

export default class Deck {

    public cards: Array<ColorCard | WildCard> = []

    constructor(schema?: Array<ColorCard | WildCard>) {
        this.cards = schema || defaultSchema as Array<ColorCard | WildCard>  
    }

    public shuffle(): void {
        let currentIndex = this.cards.length;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          const randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          const temporaryValue = this.cards[currentIndex];
          this.cards[currentIndex] = this.cards[randomIndex];
          this.cards[randomIndex] = temporaryValue;
        }
      }

}
