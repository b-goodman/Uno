import Deck from '..'

describe('Deck Class', () => {
    it('Generates a standrd deck of Uno cards', () => {
        const deck = new Deck()
        console.log(JSON.stringify(deck, null, 2))
    })
})