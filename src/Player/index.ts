import { ColorCard, WildCard, CardColor, Cards } from '../Deck'

export default class Player {

    public cards: Cards = []

    constructor() {

    }

    // Sorts cards array by color, with each sub-set tail number aiming to match the 
    //  next subset head by number if possible.
    public sortCards (cards: Cards): Cards {
        // group by color 
        const [red, green, yellow, blue]: [ColorCard[], ColorCard[], ColorCard[], ColorCard[]] = [[],[],[],[]]
        const rest: WildCard[] = []
        cards.forEach( card => {
            if ( card instanceof ColorCard ) {
                switch (card.color) {
                    case CardColor.Blue:
                        blue.push(card)
                        break;
                    case CardColor.Green:
                        green.push(card)
                        break
                    case CardColor.Red:
                        red.push(card)
                        break
                    case CardColor.Yellow:
                        yellow.push(card)
                        break
                    default:
                        throw new Error(`Unknown color - ${card.color}`)
                }
                // [CardColor[card.color]].push(card)
            } else {
                rest.push(card)
            }
        })
        const sorted = [
            ...red,
            ...green,
            ...yellow,
            ...blue,
            ...rest
        ]

        return sorted
    }
}