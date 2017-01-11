var socketIo=require('socket.io');
var userssocket=[];
module.exports=function(httpserver){
	var socketserver=socketIo.listen(httpserver);
	socketserver.on('connect',function(data){
		socket.on('message',function(data){
			var type=data.type;
			switch(type){
				case 'login':
					if(userssocket.length<=1){
						userssocket.push(socket);
						handleLogin(socket);
					}else{
						var msg={
							type:'login',
							flag:false,
							isFull:true
						}
						if(userssocket.length<2){
							msg.isFull=false;
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
		})
	})
}
function handleLogin(socket,data){
	var msg={
		type:'login',
		flag:true
	}
	socket.send(msg);
};
function handlePlay(socket,data){
	var msg={
		type:'selfPlay',
		position:data.position;
		turn:data.turn
	}
	socket.send(msg);
	msg.type='othersPlay';
	socket.broadcast.send(msg);
}
function handleOver(socket,data){
	var msg={
		type:'gameover',
		turn:data.turn
	}
	socket.send(msg);
	socket.broadcast.send(msg);
}