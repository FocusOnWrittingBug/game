
clientsocket.on('message',function(data){
	var type=data.type;
	switch(type){
		case 'login':
			handleLogin(data);
			break;
		case 'isFull':
			handleFull(data);	
		case 'otherOut':
			handleOut(data);
			break;	
		case 'selfPlay':
			handleSelfPlay(data);
			break;
		case 'otherPlay':
			handleOtherPlay(data);
			break;
		case 'gameover':
			handleGameOver(data);	
	}
})
function handleLogin(data){
	if(data.flag){
		alert('加入成功');
		isLogin=true;
		turn=data.turn;
		chess=data.chess;
		if(data.isFull){
			isFull=true;
			newGame();
			play();
		}else{
			isFull=false;
		}
	}else{
		alert('啊哦，人满了');
		isLogin=false;
	}
}
function handleFull(data){
	isFull=true;
	newGame();
	play();
}
function handleOut(data){
	chess='X';
	turn=true;
}
function handleSelfPlay(data){

}
function handleOtherPlay(data){
	putChess(data.chess,data.position);
	turn=true;
}
function handleGameOver(data){
	alert(data.chess+'赢了');
	newGame();
	play();
}