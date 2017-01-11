function lr(row){
	for (var i = 0; i < row.length; i++) {
		var count=0;
		var flag='';
		for (var j = 0; j < row[i].length; j++) {
			if(row[i][j].innerHTML==='X'){
				flag==''||flag=='x'?count++:count=0;
				flag='x';
			}else if(row[i][j].innerHTML==='O'){
				flag==''||flag=='o'?count++:count=0;
				flag='o';
			}else if(row[i][j].innerHTML===''){
				count=0;
			}
			//console.log('lr'+count);
			if(count>=5){
				return true;
			}
		}
	}
}