import { TicTacToe, playX, playO } from './tictactoe'


describe('TicTacToe', () => {
    let emptyGame
    let existingGame

    beforeAll(() => {
        emptyGame = new TicTacToe()
        existingGame = new TicTacToe([['x', '', ''], ['o', '', ''], ['', '', '']])
    })

    test('can be created', () => {
        expect(() => {
            const game = new TicTacToe()
        }).not.toThrow()
    })

    test('cannot be created without new keyowrd', () => {
        expect(() => {
            const game = TicTacToe()
        }).toThrow('Constructor must be called with new keywork')
    })

    test('returns am instance on creation', () => {
        const game = new TicTacToe()
        expect(game).toBeDefined()
    })

    test("isn't over when it starts", () => {
        const game = new TicTacToe()
        expect(game.isOver).toBeFalsy()
    })

    test("can be created from existing state", () => {
        const state = [
            ['', '', 'o'],
            ['', 'x', 'x'],
            ['o', '', ''],
        ]
        const game = new TicTacToe(state)
        expect(game.state).toEqual(state)
    })


    test('can play on blank space with X', () => {
        const game = playX([1, 1], emptyGame)
        expect(game.state).toEqual([['', '', ''], ['', 'x', ''], ['', '', '']])
    })

    test('can play on blank space with O', () => {
        const game = playO([1, 2], emptyGame)
        expect(game.state).toEqual([['', '', ''], ['', '', 'o'], ['', '', '']])
    })


    test('can\'t play on occupied space with X', () => {
        expect(() => {
            playX([0, 0], existingGame)
        }).toThrow("Can't play on this position")
    })

    test('can\'t play on occupied space with O', () => {
        expect(() => {
            playO([1, 0], existingGame)
        }).toThrow("Can't play on this position")
    })

    test('is over when a row is marked with X', () => {
        const initialGame = new TicTacToe([['x', '', 'x'], ['o', 'x', ''], ['o', '', 'o']])
        const game = playX([0, 1], initialGame)
        expect(game.isOver).toBeTruthy()
    })

    test('is over when a row is marked with O', () => {
        const initialGame = new TicTacToe([['o', '', ''], ['x', 'o', 'x'], ['o', '', 'x']])
        const game = playO([0, 2], initialGame)
        expect(game.isOver).toBeTruthy()
    })
})
