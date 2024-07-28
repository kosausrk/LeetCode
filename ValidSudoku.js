let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

//console.log(board[0])

//Hashmap for Cols and rows

//Key (R/3, C/3)



let isValidSudoku = function(board) {
        const cols = {};
        const rows = {};
        const squares = {};

        for (let r = 0; r < 9; r++) {
            rows[r] = {}; //empty rows object for row (store all times numbers appear here)
            for (let c = 0; c < 9; c++) {
                if (!cols[c]) cols[c] = {}; 

                const squareIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3); 
                if (!squares[squareIndex]) squares[squareIndex] = {};

                const value = board[r][c];
                if (value === '.') continue;

                if (rows[r][value] || cols[c][value] || squares[squareIndex][value]) {
                    return false;
                }

                rows[r][value] = true;
                cols[c][value] = true;
                squares[squareIndex][value] = true;
            }
        }
        return true;
    }


isValidSudoku(board)