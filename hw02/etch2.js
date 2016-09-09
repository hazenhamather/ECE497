var prompt = require('prompt');
var board = [];
prompt.start();

prompt.get(['rows','columns'], function (err, size) {
	console.log(size.rows);
	console.log(size.columns);
	printBoard(board, size.columns, size.rows);
});

function printBoard(board, cols, rows) {
	console.log("I am being called");
	var s = "";
	for (k = 0;cols;k++) {
		s += " " + k;
	}
	console.log(s);
};
