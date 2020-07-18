import Player from '..'
import { WildCard, ColorCard, CardColor, CardAction } from '../../Deck'

describe('Player', () => {
    it('Sorts cards', () => {
        const sortedHand = [
            new ColorCard({color: CardColor.Red, number: 0}),
            new ColorCard({color: CardColor.Green, number: 2}),
            new ColorCard({color: CardColor.Yellow, number: 8}),
            new ColorCard({color: CardColor.Blue, number: 5}),
            new ColorCard({color: CardColor.Blue, number: 8}),
            new WildCard({action: CardAction.DrawFour}),
        ]

        const unsortedHand = [
            new ColorCard({color: CardColor.Blue, number: 5}),
            new WildCard({action: CardAction.DrawFour}),
            new ColorCard({color: CardColor.Yellow, number: 8}),
            new ColorCard({color: CardColor.Blue, number: 8}),
            new ColorCard({color: CardColor.Green, number: 2}),
            new ColorCard({color: CardColor.Red, number: 0}),
        ]

        const player = new Player()
        const sortedCards = player.sortCards(unsortedHand)
        expect(sortedCards).toMatchObject(sortedHand)

        console.log(sortedCards)


    })
})