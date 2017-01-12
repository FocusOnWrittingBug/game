function putChess(chess,position){
	console.log('put');
	var aLi=document.getElementsByTagName('li');
	var row=[];
	for (var i = 0; i < aLi.length; i++) {
		row[i]=aLi[i].getElementsByTagName('a');
	};

	row[position.row][position.col].innerHTML=chess;
}