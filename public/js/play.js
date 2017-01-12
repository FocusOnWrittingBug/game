function play(){
	console.log('play');
	console.log(turn);
	var aLi=document.getElementsByTagName('li');
	var row=[];
	for (var i = 0; i < aLi.length; i++) {
		row[i]=aLi[i].getElementsByTagName('a');
	}
	console.log(row);
	//var turn=true;
	//for(var i=0;i<row.length;i++){
		for (let j = 0; j < row.length; j++) {
			
			for (let k = 0; k < row[j].length; k++) {
				//row[j][k].flag=true;
				row[j][k].onclick=function(){

					if (turn&&this.innerHTML=='') {
						console.log('click');
                        this.innerHTML=chess;
                        turn=false;
                        var msg={
                        	type:'play',
                        	position:{
                        		row:j,
                        		col:k
                        	},
                        	chess:chess
                        }
                        console.log(msg);
                        clientsocket.send(msg);
                        //this.flag=false;
                        //turn=!turn;
					}
					/*else if(this.flag){
						this.innerHTML='O';
						this.flag=false;
						//turn=!turn;
					}*/
					if(lr(row)||tb(row)||lb(row)||rb(row)){
						var msg={
							type:'gameover',
							chess:chess
						}
						clientsocket.send(msg);
						//if(turn){
							//alert('o is win');
							//newGame();
							//play();
							//var msg={}
						//}else{
							//alert('x is win');
							//newGame();
							//play();
						//}
					}	
				}
			}
		}
	//}

}
