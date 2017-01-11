function lb(row) {
	for(var i=0;i<row.length;i++){
		
		for (var j = 0; j < row[i].length; j++) {
			var count=0;
			var flag='';
			for (var k = 0; k < row[i].length; k++) {
				
				if((j+k)<=row.length-1&&(i+k)<=row.length-1){
					if(row[j+k][i+k].innerHTML==='X'){
					flag==''||flag=='x'?count++:count=0;
					flag='x';
					}else if(row[j+k][i+k].innerHTML==='O'){
						flag==''||flag=='o'?count++:count=0;
						flag='o';
					}else if(row[j+k][i+k].innerHTML===''){
						count=0;
					};
					if(count>=5){
						return true;
					};
					
				}
				
			}
		}
	}
}