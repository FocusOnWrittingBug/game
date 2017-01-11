var socketIo=require('socket.io');
var userssocket=[];
module.exports=function(httpserver){
	var socketserver=socketIo.listen(httpserver);
	socketserver.on('connect',function(socket){
		console.log('connect');
		socket.on('message',function(data){
			var type=data.type;
			switch(type){
				case 'login':
					if(userssocket.length=0){
						userssocket.push(socket);
						handleLogin(socket,'X',true);
					}else if(userssocket.length=1){
						userssocket.push(socket);
						handleLogin(socket,'O',false);
					}else{
						var msg={
							type:'login',
							flag:false
						}
						socket.send(msg);
					}
					break;
				case 'play':
					handlePlay(socket,data);
					break;
				case 'gameover':
					handleOver(socket,data);			
			}
		});
		socket.on('disconnect',function(){
			userssocket.splice(socket,1);
			if(userssocket.length==1){
				handleOut(socket);
			}
			
		})
	})
}
function handleLogin(socket,chess,turn){
	var msg={
		type:'login',
		flag:true,
		chess:chess,
		turn:turn,
		isFull:false
	}
	if(userssocket.length==2){
		msg.isFull=true;
	}
	socket.broadcast.send({isFull:true});
	socket.send(msg);
};
function handleOut(socket){
	var msg={
		type:'otherOut'
	}
	socket.broadcast.send(msg);
}
function handlePlay(socket,data){
	var msg={
		type:'selfPlay',
		position:data.position,
		chess:data.chess
	}
	socket.send(msg);
	msg.type='otherPlay';
	socket.broadcast.send(msg);
}
function handleOver(socket,data){
	var msg={
		type:'gameover',
		chess:data.chess
	}
	socket.send(msg);
	socket.broadcast.send(msg);
}