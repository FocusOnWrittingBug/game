function newGame() {
	var chessWrap=document.getElementById('chessWrap');
	chessWrap.innerHTML='';
	for (var i = 0; i < 20; i++) {
		var newChessRow=document.createElement('li');
		
		for (var j = 0; j < 20; j++) {
			var newChessCol=document.createElement('a');
			newChessRow.appendChild(newChessCol);
		}
		chessWrap.appendChild(newChessRow);
	}
	
	
}