var clientsocket=io();
var isLogin=false;
var isFull=false;
var turn=false;
var chess='';
var selfPlay=true;
//if(isLogin&&isFull){
	//newGame();
	//play();
//}
var joinBtn=document.getElementById('join');
joinBtn.onclick=function () {
	if(!isLogin){
		clientsocket.send({type:'login'});
	}
	
}
