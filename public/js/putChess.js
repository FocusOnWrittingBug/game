function putChess(turn,position){
	var aLi=document.getElementsByTagName('li');
	var row=[];
	for (var i = 0; i < aLi.length; i++) {
		row[i]=aLi[i].getElementsByTagName('a');
	};
	if(turn){
		row[position.row][position.col].innerHTML='X';
	}else{
		row[position.row][position.col].innerHTML='O';
	}
	
}