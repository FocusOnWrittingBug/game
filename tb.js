function tb(){
	/*for (var i = 0; i < aA[0].length; i++) {
		aA[0][i].tbx=0;
		aA[0][i].tbo=0;
	}*/
	for (var i = 0; i < aLi.length; i++) {
		var count=0;
		var flag='';
		for (var j = 0; j < aA.length; j++) {
			if(aA[j][i].innerHTML==='X'){
				//aA[0][i].tbx++;
				//aA[0][i].tbo=0;
				flag==''||flag=='x'?count++:count=0;
				flag='x';
			}else if(aA[j][i].innerHTML==='O'){
				//aA[0][i].tbo++;
				//aA[0][i].tbx=0;
				flag==''||flag=='o'?count++:count=0;
				flag='o';
			}else if(aA[j][i].innerHTML===''){
				//aA[0][i].tbo=0;
				//aA[0][i].tbx=0;
				count=0;
			}
			if(count==5){
				return true;
			}
		}
		
	}
}