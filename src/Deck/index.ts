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

}
