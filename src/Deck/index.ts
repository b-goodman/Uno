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

export interface ActionCard {
    action: CardAction,
    color?: CardColor,
}

export interface ColorCard {
    color: CardColor
    number?: number
    action?: CardAction
}

export default class Deck {

    public cards: Array<ColorCard | ActionCard> = []

    constructor() {
        const generateNumberedCards = (color: CardColor): Array<ColorCard> => {
            return [
                0,
                ...Array(10).keys(),
                ...Array(10).keys()
            ].map(number => {
                return {
                    number: number + 1,
                    color,
                }
            })
        }

        const generateColorActionCards = (color: CardColor): Array<ColorCard> => {
            return [
                CardAction.DrawTwo,
                CardAction.DrawTwo,
                CardAction.Reverse,
                CardAction.Reverse,
                CardAction.Skip,
                CardAction.Skip,
            ].map( action => {
                return {
                    color,
                    action
                }
            })
        }

        const wildActionCards = [
            ...new Array<ActionCard>(4).fill({action: CardAction.DrawFour}),
            ...new Array<ActionCard>(4).fill({action: CardAction.Wild}),
        ]

        const colorCards: Array<ColorCard> = [
            ...Object.keys(CardColor).map(color => 
                [
                    ...generateNumberedCards(CardColor[color as keyof typeof CardColor]),
                    ...generateColorActionCards(CardColor[color as keyof typeof CardColor])
                ]
            ),
        ].flat()
        

        this.cards = [
            ...wildActionCards,
            ...colorCards,
        ]
        
    }

}
