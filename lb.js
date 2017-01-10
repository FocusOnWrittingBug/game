function lb() {
	for(var i=0;i<aA.length;i++){
		var count=0;
		var flag='';
		for (var j = 0; j < aA.length; j++) {

			for (var k = 0; k < aA.length; k++) {
				
				if((j+k)<=aA.length-1&&(i+k)<=aA.length-1){
                    //console.log((i+k)+','+(j+k));

					if(aA[j+k][i+k].innerHTML=='X'){
                        console.log(flag);
                        flag==''||flag=='x'?count++:count=0;
                        flag='x';

					}else if(aA[j+k][i+k].innerHTML=='O'){
						flag==''||flag=='o'?count++:count=0;
						flag='o';
					}else if(aA[j+k][i+k].innerHTML==''){
						count=0;
					};
                    console.log(count);
					if(count==5){
						return true;
					};
					
				}
				
			}
		}
	}
}