var aLi=document.getElementsByTagName('li');
var aA=[];
for (var i = 0; i < aLi.length; i++) {
	var n=i;
	aA[n]=aLi[i].getElementsByTagName('a');
}


play(aLi,aA);