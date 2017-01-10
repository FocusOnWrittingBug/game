function play(aLi,aA){
	var turn=true;
	for(var i=0;i<aLi.length;i++){
		for (var j = 0; j < aA.length; j++) {
			for (var k = 0; k < aA[j].length; k++) {
				aA[j][k].flag=true;
				aA[j][k].onclick=function(){
					if (turn&&this.flag) {
                        this.innerHTML='X';
                        this.flag=false;
                        turn=!turn;
					}else if(this.flag){
						this.innerHTML='O';
						this.flag=false;
						turn=!turn;
					}
					if(lr()||tb()||lb()||rb()){
						if(turn){
							alert('o is win');
						}else{
							alert('x is win');
						}
					}	
				}
			}
		}
	}

}
