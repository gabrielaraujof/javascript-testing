const EMPTY_STATE = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

function markedRow([a, b, c]) {
    return a !== '' && a === b && b === c
}

function checkGameOver(state) {
    const [a, b, c] = state
    return state.some(markedRow)
        || markedRow([a[0], b[0], c[0]])
        || markedRow([a[1], b[1], c[1]])
        || markedRow([a[2], b[2], c[2]])
        || markedRow([a[0], b[1], c[2]])
        || markedRow([a[2], b[1], c[0]])

}

function play(mark, [x, y], { state }) {
    if (state[x][y]) {
        throw new Error('Can\'t play on this position')
    }

    const [a, b, c] = state
    const newState = [ [...a], [...b], [...c] ]
    newState[x][y] = mark

    return new TicTacToe(newState)
}

export function TicTacToe(state = EMPTY_STATE) {
    if (!new.target) {
        throw new Error('Constructor must be called with new keywork')
    }

    return {
        state,
        isOver: checkGameOver(state)
    }
}

export const playX = (position, game) => play('x', position, game)
export const playO = (position, game) => play('o', position, game)
