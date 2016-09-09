#!/usr/bin/env node
var b = require('bonescript');
var c = 0;
var y = 0;

var button1 = 'P9_11';
var button2 = 'P9_13';
var button3 = 'P9_22';
var button4 = 'P9_17';

b.pinMode(button1, b.INPUT ,7, 'pulldown');
b.pinMode(button2, b.INPUT, 7, 'pulldown');
b.pinMode(button3, b.INPUT, 7, 'pulldown');
b.pinMode(button4, b.INPUT, 7, 'pulldown');

b.attachInterrupt(button1, true, b.FALLING, moveUp);
b.attachInterrupt(button2, true, b.FALLING, moveDown);
b.attachInterrupt(button3, true, b.FALLING, moveRight);
b.attachInterrupt(button4, true, b.FALLING, moveLeft);

var rows = 10;
var cols = rows;
var board = new Array(rows);

for (i = 0; i < rows; i++) {
    board[i] = new Array(cols);
    for (j = 0; j < cols;j++) {
        board[i][j] = " ";
    }
};
board[y][c] = "X";

printBoard(board,cols,rows);

function printBoard(board,cols,rows) {
    label = "";
    for (k = 0; k < cols;k++) {
        if (k === 0) {
            label += "   " + k + " ";
        }else if (k === cols-1) {
            label+=k;
        }else {
            label+= k+" ";
        }
    }
    console.log(label);
    for (i=0; i < cols; i++) {
        var line = "";
        line+= i + ": ";
        for (j = 0;j < rows; j++) {
            line += board[i][j] + " ";
        }
        console.log(line);
    }
};

function moveUp(x) {
    if (y-1 >= 0) {
        y--;
        board[y][c] = "X";
        printBoard(board, cols, rows);
    }
};

function moveDown(x) {
    if (y+1 < rows) {
        y++;
        board[y][c] = "X";
        printBoard(board, cols, rows);
    }
};

function moveRight(x) {
    if (c+1 < cols) {
        c++;
        board[y][c] = "X";
        printBoard(board, cols, rows);
    }
};

function moveLeft(x) {
    if (c-1 >= 0) {
        c--;
        board[y][c] = "X";
        printBoard(board, cols, rows);
    }
};

function checkBoard(board,rows,cols) {
    var empties = board.indexOf(" ");
    if (empties === -1) {
        clearBoard(board,cols,rows);
    } else {
        printBoard(board, cols, rows);
    }
};

function clearBoard(board, cols, rows) {
    for (i = 0; i < rows; i++) {
        board[i] = new Array(cols);
        for (j = 0; j < cols;j++) {
            board[i][j] = " ";
        }
    }
board[y][c] = "X";
printBoard(board,cols,rows);
};