function rb() {
	for(var i=0;i<aA.length;i++){
		var count=0;
		var flag='';
		for (var j = aA.length; j > 0; j--) {
			for (var k = 0; k < aA.length; k++) {

				if((i+k)<=aA.length-1&&(j-k)>=0&&(j-k)<=aA.length-1){
                    //console.log((i+k)+','+(j-k));
					if(aA[i+k][j-k].innerHTML==='X'){
						flag==''||flag=='x'?count++:count=0;
						flag='x';
					}else if(aA[i+k][j-k].innerHTML==='O'){
						flag==''||flag=='o'?count++:count=0;
						flag='o';
					}else if(aA[i+k][j-k].innerHTML===''){
						count=0;
					}
					if(count==5){
						return true;
					}
				}
				
			}
		}
	}
}