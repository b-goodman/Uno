import Deck, { SchemaError } from '..'

describe('Deck Class', () => {
    it('Generates a deck of 108 Uno cards', () => {
        const deck = new Deck()
        expect(deck.cards.length).toEqual(108)
    })
})