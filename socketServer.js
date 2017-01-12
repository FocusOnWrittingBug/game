var socketIo=require('socket.io');
var userssocket={};
var users=[];
module.exports=function(httpserver){
	var socketserver=socketIo.listen(httpserver);
	socketserver.on('connect',function(socket){
		
        var id=socket.id;
        console.log(id);

		socket.on('message',function(data){
            console.log('mes');
			var type=data.type;
			switch(type){
				case 'login':
					if(users.length==0){

						users.push(id);
                        userssocket[id]=socket;
						handleLogin(socket,'X',true);
						console.log(users);
					}else if(users.length==1){
                        users.push(id);
                        userssocket[id]=socket;
						handleLogin(socket,'O',false);
						console.log(users);
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
			console.log('disconnect');
			users.splice(id,1);
            delete userssocket[id];
			if(users.length==1){
				handleOut(socket);
			}
			console.log(users);
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
	if(users.length==2){
		msg.isFull=true;
        socket.broadcast.send({type:'isFull'});
        console.log('full');
	}

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