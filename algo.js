// 36. Valid Sudoku



// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.






/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    let row = new Array(9).fill(null).map(() => new Map())
    let col = new Array(9).fill(null).map(() => new Map())
    let box = new Array(9).fill(null).map(() => new Map())

    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){

            let num = board[r][c]

            if(num !== '.'){

                let boxIndex = Math.floor(r/3) * 3 + Math.floor(c/3)

                if(row[r].has(num) || col[c].has(num) || box[boxIndex].has(num)){
                    return false
                }

                row[r].set(num)
                col[c].set(num)
                box[boxIndex].set(num)
            }
        }
    }

    return true
};