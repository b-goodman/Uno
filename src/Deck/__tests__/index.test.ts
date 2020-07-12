import Deck from '..'

describe('Deck Class', () => {
    it('Generates a deck of 108 Uno cards', () => {
        const deck = new Deck()
        expect(deck.cards.length).toEqual(108)
    })

    it('Reorders deck', () => {
        const deck = new Deck()
        const initial = Object.assign({}, deck.cards)
        deck.shuffle()
        expect(initial).not.toMatchObject(deck.cards)
    })
})