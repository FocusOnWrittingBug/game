function rb(row) {
	for(var i=0;i<row.length;i++){
		
		for (var j = row[i].length; j > 0; j--) {
			var count=0;
			var flag='';
			for (var k = 0; k < row[i].length; k++) {
				if((i+k)<=row.length-1&&(j-k)>=0&&(j-k)<=row.length-1){
					if(row[i+k][j-k].innerHTML==='X'){
						flag==''||flag=='x'?count++:count=0;
						flag='x';
					}else if(row[i+k][j-k].innerHTML==='O'){
						flag==''||flag=='o'?count++:count=0;
						flag='o';
					}else if(row[i+k][j-k].innerHTML===''){
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