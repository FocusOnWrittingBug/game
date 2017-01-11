function putChess(turn,position){
	var aLi=document.getElementsByTagName('li');
	var row=[];
	for (var i = 0; i < aLi.length; i++) {
		row[i]=aLi[i].getElementsByTagName('a');
	};
	for(var i=0;i<row.length;i++){
		for (var j = 0; j < row.length; j++) {
			for (var k = 0; k < row[j].length; k++) {
				row[j][k].flag=true;
				row[j][k].onclick=function(){
					if (turn&&this.flag) {
                        this.innerHTML='X';
                        this.flag=false;
                        turn=!turn;
					}else if(this.flag){
						this.innerHTML='O';
						this.flag=false;
						turn=!turn;
					}
					if(lr(row)||tb(row)||lb(row)||rb(row)){
						if(turn){
							alert('o is win');
							newGame();
							play();
						}else{
							alert('x is win');
							newGame();
							play();
						}
					}	
				}
			}
		}
	}
}