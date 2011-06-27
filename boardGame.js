function testBoard (board) {
	var solvable = false;
	var idx = board.length - 2;
	var newIdx = board.length - 1;
	for(idx; idx >= 0; idx--) {
		if(idx + board[idx] >= newIdx) {
			newIdx = idx;
		}
	}
	if(newIdx == 0) {
		solvable = true;
	}
	return solvable;
};

