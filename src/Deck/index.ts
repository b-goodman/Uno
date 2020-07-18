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

interface ColorCardSchema {
    color: CardColor
    number?: number
    action?: CardAction
}

interface WildCardSchema {
    action: CardAction
}

export class WildCard {
    public action: CardAction

    constructor(opts: WildCardSchema) {
        this.action = opts.action
    }
}

export class ColorCard {
    public color: CardColor
    public number?: number
    public action?: CardAction

    constructor(opts: ColorCardSchema) {
        this.color = opts.color
        this.number = opts.number
        this.action = opts.action
    }
}

export class SchemaError extends Error {}

export type Cards = Array<ColorCard | WildCard>

export default class Deck {

    public cards: Cards = []

    constructor(schema?: Array<ColorCardSchema | WildCardSchema>) {
        this.cards = (schema || defaultSchema as Array<ColorCardSchema | WildCardSchema>).map( cardSchema => {
            if ((cardSchema as ColorCard).color) {
                return new ColorCard(cardSchema as ColorCardSchema)
            } else {
                return new WildCard(cardSchema as WildCardSchema)
            }
        })
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
