var clientsocket=io();
clientsocket.on('message',function(data){
	var type=data.type;
	switch(type){
		case 'login':
			handleLogin(data);
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
	}else{
		alert('啊哦，人满了');
		isLogin=false;
	}
}
function handleSelfPlay(data){
	
}