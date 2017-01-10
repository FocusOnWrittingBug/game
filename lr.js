function lr(){
	/*for (var i = 0; i < aLi.length; i++) {
		aA[i].countx=0;
		aA[i].counto=0;
	}*/

	for (var i = 0; i < aA.length; i++) {
		var count=0;
		var flag='';
		for (var j = 0; j < aA[i].length; j++) {
			if(aA[i][j].innerHTML==='X'){
				//aA[i].countx++;
				//aA[i].counto=0;
				
				flag==''||flag=='x'?count++:count=0;
				flag='x';
			}else if(aA[i][j].innerHTML==='O'){
				//aA[i].counto++;
				//aA[i].countx=0;
				
				flag==''||flag=='o'?count++:count=0;
				flag='o';
			}else if(aA[i][j].innerHTML===''){
				//aA[i].counto=0;
				//aA[i].countx=0;
				count=0;
			}
			if(count==5){
				return true;
			}
		}
	}
}