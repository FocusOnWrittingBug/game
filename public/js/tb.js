function tb(row){
	for (var i = 0; i < row.length; i++) {
		var count=0;
		var flag='';
		for (var j = 0; j < row.length; j++) {
			if(row[j][i].innerHTML==='X'){
				flag==''||flag=='x'?count++:count=0;
				flag='x';
			}else if(row[j][i].innerHTML==='O'){
				flag==''||flag=='o'?count++:count=0;
				flag='o';
			}else if(row[j][i].innerHTML===''){
				count=0;
			}
			console.log('tb'+count);
			if(count>=5){
				return true;
			}
		}
		
	}
}